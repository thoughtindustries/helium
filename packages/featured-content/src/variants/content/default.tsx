import React, { 
    createContext, 
    useCallback,
    useContext, 
    useMemo, 
    useState, 
    SyntheticEvent
} from "react";
import { format, parseISO } from "date-fns";
import { Header } from "@thoughtindustries/header";
import { 
    FeaturedContentContentProps,
    FeaturedContentContentItemProps,
    FeaturedContentContentItem,
    FeaturedContentContentDefaultContextType,
    FeaturedContentContentItemRibbon
} from "../../types";

const ContentDefaultContext = createContext<FeaturedContentContentDefaultContextType | undefined>(undefined);

function useContentDefaultContext() {
    const context = useContext(ContentDefaultContext);
    if (!context) {
        throw new Error("No context found for ContentDefault");
    }
    return context;
}

const ContentDefault = ({
    headerOptions = {},
    desktopColumnCount,
    children,
    onAddedToQueue,
}: FeaturedContentContentProps): JSX.Element => {
    const { title, ...restHeaderProps } = headerOptions;
    const value = useMemo(() => ({
        desktopColumnCount,
        onAddedToQueue
    }), [desktopColumnCount, onAddedToQueue]);

    return (
        <ContentDefaultContext.Provider value={value}>
            {title && <Header title={title} {...restHeaderProps} alternateTitleDisplay />}
            <ul className={`grid grid-cols-1 md:grid-cols-${desktopColumnCount} gap-5`}>
                {children}
            </ul>
        </ContentDefaultContext.Provider>
    );
}

const ItemCompletedBlock = () => (
    <div className="block absolute h-full left-0 top-0 w-full text-center bg-white bg-opacity-80 z-1">
        <div className="absolute w-full top-1/2 transform -translate-y-1/2">
            <div>
                <i className="bg-white text-3xl inline-block p-4 rounded-full border-4 border-solid border-white border-opacity-50 my-0 mx-auto bg-clip-padding" aria-label="Completed">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#5bb65c"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                </i>
            </div>
            <p className="mt-1 text-base">Completed!</p>
        </div>
    </div>
)

const ItemAssetBlock = ({ asset }: { asset?: string }) => (
    <img className="max-w-full h-auto" src={asset || "https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/v1440546308/qj7eo4nseeiigiec5huh.png"} />
)

const ItemTitleBlock = ({ 
    title, 
    courseStartDate
}: { 
    title: string, 
    courseStartDate?: string
}) => (
    <p className="mb-1">
        {title}
        {courseStartDate && (
            <>
                <br />
                <span className="text-xs text-gray-700">
                    {format(parseISO(courseStartDate), "MM/dd/yyyy")}
                </span>
            </>
        )}
    </p>
)

const ItemSourceBlock = ({
    contentTypeLabel,
    source
}: {
    contentTypeLabel?: string,
    source?: string
}) => (
    <div className="text-xs text-gray-700">
        {contentTypeLabel && (<strong>{contentTypeLabel}</strong>)}
        {contentTypeLabel && source && (
            <>
                |
                {source}
            </>
        )}
        {!contentTypeLabel && source && (<strong>{source}</strong>)}
    </div>
)

// TODO: might consider extracting as common component
const Star = ({ marked }: { marked: boolean }) => (
    <span className="text-accent">
        {marked ? '\u2605' : '\u2606'}
    </span>
)
const Stars = ({ gradePercentage }: { gradePercentage: number }) => {
    let stars;
    let remainder;

    stars = gradePercentage * 0.05;
    remainder = stars % 0.5;

    if (remainder > 0) {
      stars = stars - remainder + 0.5;
    }

    const starCount = parseInt(stars.toString().replace('.', ''));

    return (
        <div>
            {Array.from({ length: 5 }, (v, i) => (
                <Star key={`star-${i}`} marked={starCount > i} />
            ))}
        </div>
    )
}

// TODO: might consider extracting as common component
const ItemQueueButton = ({ 
    item,
    onClickAsync
}: { 
    item: FeaturedContentContentItem,
    onClickAsync: (item: FeaturedContentContentItem) => Promise<void>
}) => {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const [ wasAddedToQueue, setWasAddedToQueue ] = useState<boolean>(false);
    const handleClick = useCallback(async (evt: SyntheticEvent) => {
        evt.preventDefault();
        evt.stopPropagation();
    
        if (!!wasAddedToQueue || isLoading) {
          return;
        }
        
        setIsLoading(true);

        try {
            await onClickAsync(item);
            setWasAddedToQueue(true);
        } catch (e: unknown) {
            // handle error
        } finally {
            setIsLoading(false);
        }
    }, [wasAddedToQueue, isLoading]);

    return (
        <button onClick={handleClick} className={`inline-block pl-0 mb-1 text-xs border-none rounded-sm cursor-pointer inline-block font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 hover:text-blue-700 ${wasAddedToQueue ? "cursor-default" : ""}`}>
            {wasAddedToQueue && (<span className="inline-block align-top"><i className="-top-px pr-0 relative text-xs not-italic before:content-['\2705']" aria-label="check"></i> Added to Queue</span>)}
            {!wasAddedToQueue && (<span className="inline-block align-top"><i className="-top-px pr-0 relative text-xs not-italic before:content-['\002B']" aria-label="plus"></i> Add to Queue</span>)}
        </button>
    )
}

// TODO: might consider extracting as common component
const ItemRibbon = ({
    ribbon,
    attached
}: {
    ribbon: FeaturedContentContentItemRibbon,
    attached: boolean
}) => {
    const { 
        contrastColor,
        bgColor,
        darkerColor,
        label
     } = ribbon;
    const wrapperStyles = {
        color: contrastColor,
        backgroundColor: bgColor
    };
    const wrapperClassnames = `text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 -top-1 whitespace-no-wrap ${attached ? "-right-2" : ""}`;
    const cornerStyles = {
        borderTopColor: darkerColor,
        borderLeftColor: darkerColor
    }
    return (
        <div className={wrapperClassnames} style={wrapperStyles}>
            {attached && (<div className="right-0 block border-4 border-solid h-0 w-0 absolute border-transparent top-full" style={cornerStyles}></div>)}
            {label}
        </div>
    )
}

const ItemCtaBlock = ({ isActive, callToAction }: { isActive?: boolean, callToAction?: string }) => {
    if (isActive) {
        return <span className="border-none rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 text-accent float-right text-left h-auto hover:text-accent">{callToAction}</span>
    }
     

    return <span className="text-xs">{callToAction}</span>
}

const ItemPriceBlock = ({
    priceInCents,
    hasAvailability,
    suggestedRetailPriceInCents
}: {
    priceInCents?: number,
    hasAvailability?: boolean,
    suggestedRetailPriceInCents?: number
}) => {
    if (hasAvailability) {
        return null;
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const priceFormat = (priceInCents: number) => formatter.format(priceInCents / 100);

    return (
        <>
            <span>{priceFormat(priceInCents as number)}</span>
            {suggestedRetailPriceInCents && (<span className="line-through text-gray-700 text-xs">{priceFormat(suggestedRetailPriceInCents as number)}</span>)}
        </>
    )
}

const Item = ({
    key,
    item
}: FeaturedContentContentItemProps): JSX.Element => {
    const {
        linkOpenInNewTab,
        linkUrl,
        ribbon,
        isCompleted,
        asset,
        title,
        courseStartDate,
        contentTypeLabel,
        source,
        authors,
        shortDescription,
        rating,
        canAddToQueue,
        isActive,
        callToAction,
        priceInCents,
        hasAvailability,
        suggestedRetailPriceInCents
    } = item;
    const { onAddedToQueue, desktopColumnCount } = useContentDefaultContext();
    const itemIsActiveOrWebinarOrEvent = !!isActive;
    const linkProps: { className: string, href?: string, target?: string } = {
        href: linkUrl,
        className: `block text-gray-800 ${!itemIsActiveOrWebinarOrEvent ? "cursor-default" : ""}`
    };
    if (linkOpenInNewTab) {
        linkProps.target = "_blank";
    }

    const columnCountIsOneOrTwo = desktopColumnCount === 1 || desktopColumnCount === 2;
    const gridItemDesktopClassnames = columnCountIsOneOrTwo ? 
        " md:grid-cols-2 md:gap-x-2" : "";
    const assetWrapperDesktopClassnames = columnCountIsOneOrTwo ?
        " md:p-2" : "";
    

    return (
        <li key={key}>
            <a {...linkProps}>
                <div className={`grid grid-cols-1${gridItemDesktopClassnames} border border-solid border-gray-300 relative`}>
                    {ribbon && <ItemRibbon ribbon={ribbon} attached />}
                    <div className={`relative${assetWrapperDesktopClassnames}`}>
                        {isCompleted && (<ItemCompletedBlock />)}
                        <ItemAssetBlock asset={asset} />
                    </div>
                    <div className="p-2.5">
                        {title && (<ItemTitleBlock title={title} courseStartDate={courseStartDate} />)}
                        <ItemSourceBlock contentTypeLabel={contentTypeLabel} source={source} />
                        {authors && (
                            <p className="text-xs mb-1 text-gray-700">
                                {authors}
                            </p>
                        )}
                        {shortDescription && (
                            <p className="text-xs text-gray-700 pt-1 mb-0 overflow-hidden">
                                {shortDescription}
                            </p>
                        )}
                        {rating && (<Stars gradePercentage={rating} />)}
                        <hr className="my-3" />
                        <div className="text-base leading-none">
                            {canAddToQueue && (
                                <div className="flex flex-wrap-reverse justify-between items-end">
                                    <span>
                                        <ItemQueueButton item={item} onClickAsync={onAddedToQueue} />
                                    </span>
                                    <span>
                                        <ItemCtaBlock isActive={isActive} callToAction={callToAction} />
                                    </span>
                                </div>
                            )}
                            {!canAddToQueue && priceInCents && (
                                <>
                                    <ItemPriceBlock priceInCents={priceInCents} hasAvailability={hasAvailability} suggestedRetailPriceInCents={suggestedRetailPriceInCents} />
                                    <ItemCtaBlock isActive callToAction={callToAction} />
                                </>
                            )}
                            {!canAddToQueue && !priceInCents && (<ItemCtaBlock isActive={isActive} callToAction={callToAction} />)}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    )
};

ContentDefault.displayName = "ContentDefault";
ContentDefault.Item = Item;

export default ContentDefault;
