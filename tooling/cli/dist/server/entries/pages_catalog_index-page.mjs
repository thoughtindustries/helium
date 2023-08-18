import { u as useCatalog, a as useLanguagesQueryQuery, C as CatalogProvider, b as CatalogResults, N as NavBar, F as Footer } from "../chunks/chunk-8fc8ac1e.js";
import { B as Banner } from "../chunks/chunk-ed176d5e.js";
import { useState, useMemo } from "react";
import { j as jsx, F as Fragment, a as jsxs } from "../chunks/chunk-7df435e3.js";
import clsx from "clsx";
import "dayjs";
import { u as usePageContext } from "../chunks/chunk-ab44b266.js";
import "../chunks/chunk-a091ce35.js";
import "react/jsx-runtime";
import "@apollo/client";
import "dayjs/plugin/advancedFormat.js";
import "dayjs/plugin/utc.js";
import "dayjs/plugin/timezone.js";
import "react-i18next";
import "use-debounce";
const ArrowDownIcon = () => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: "w-full h-full",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /* @__PURE__ */ jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  })
});
const ArrowRightIcon = () => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  className: "w-full h-full",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  children: /* @__PURE__ */ jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 5l7 7-7 7"
  })
});
const AggregationBucket = ({
  href,
  value,
  count
}) => /* @__PURE__ */ jsx("li", {
  className: "rounded-lg pt-2",
  children: /* @__PURE__ */ jsxs("a", {
    href,
    className: "flex justify-between pt-2 pl-2 hover:bg-blue-500 hover:text-white rounded",
    children: [/* @__PURE__ */ jsx("div", {
      className: "text-sm font-semibold",
      children: value
    }), /* @__PURE__ */ jsx("div", {
      className: "mt-0",
      children: count && /* @__PURE__ */ jsx("button", {
        className: "px-4 py-0.5 mb-2 mr-2 bg-gray-300 text-sm font-medium rounded-full",
        children: count
      })
    })]
  })
});
const Aggregation = ({
  index,
  label,
  defaultIsExpanded,
  aggregationBuckets
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultIsExpanded);
  const handleToggle = () => {
    setIsExpanded((prevIsExpanded) => !prevIsExpanded);
  };
  const buttonLinkClassnames = "w-full leading-normal text-left transition-colors ease-in-out duration-200 bg-none text-accent flex items-center gap-4";
  const ariaId = `catalog-aggregation-dropdown-${index}`;
  return /* @__PURE__ */ jsx("div", {
    className: "bg-white p-6 rounded",
    children: /* @__PURE__ */ jsxs("div", {
      className: clsx("py-4 px-3 rounded", isExpanded && "border-b mb-4 bg-gray-100"),
      children: [/* @__PURE__ */ jsxs("button", {
        className: `${buttonLinkClassnames}`,
        onClick: handleToggle,
        "aria-expanded": isExpanded,
        "aria-labelledby": ariaId,
        children: [/* @__PURE__ */ jsxs("span", {
          className: "text-xl inline-block leading-4 text-center w-5 h-5",
          children: [isExpanded && /* @__PURE__ */ jsx(ArrowDownIcon, {}), !isExpanded && /* @__PURE__ */ jsx(ArrowRightIcon, {})]
        }), /* @__PURE__ */ jsx("span", {
          className: "font-semibold",
          children: label
        })]
      }), /* @__PURE__ */ jsx("ul", {
        "aria-hidden": !isExpanded,
        id: ariaId,
        className: clsx("pl-6 text-sm", {
          hidden: !isExpanded
        }),
        children: aggregationBuckets
      })]
    })
  });
};
const CatalogAggregations = () => {
  const {
    params,
    urlManager
  } = useCatalog();
  const {
    aggregations,
    aggregationFilters,
    isCurated,
    token,
    tokenLabel
  } = params;
  const {
    data
  } = useLanguagesQueryQuery();
  const firstAggregationFilterLabel = aggregationFilters.length ? aggregationFilters[0].label : void 0;
  const languages = data ? data.Languages : [];
  const contents = aggregations.map(({
    label = "",
    buckets = []
  }, index) => {
    const isAggregationLabel = label === firstAggregationFilterLabel;
    const isTokenLabel = tokenLabel && label === tokenLabel;
    const isCurrentLabel = isAggregationLabel || isTokenLabel;
    const shouldExpandFirst = !isCurated && !token;
    const isExpanded = isCurrentLabel || shouldExpandFirst && index === 0;
    const aggregationBuckets = buckets.map(({
      value = "",
      count,
      query
    }, bucketIndex) => {
      var _a;
      const filter = {
        label,
        value
      };
      const isLanguageLabel = query == null ? void 0 : query.includes("language");
      const languageLabel = ((_a = languages.find(({
        code
      }) => code === value)) == null ? void 0 : _a.label) || value;
      const displayLabel = isLanguageLabel ? languageLabel : value;
      const props2 = {
        href: urlManager.composeURLForAddAggregationFilter(filter),
        value: displayLabel,
        count
      };
      return /* @__PURE__ */ jsx(AggregationBucket, {
        ...props2
      }, `catalog-aggregation-bucket-${bucketIndex}`);
    });
    const props = {
      index,
      defaultIsExpanded: isExpanded,
      label,
      aggregationBuckets
    };
    return /* @__PURE__ */ jsx(Aggregation, {
      ...props
    }, `catalog-aggregation-${index}`);
  });
  return /* @__PURE__ */ jsx(Fragment, {
    children: contents
  });
};
CatalogAggregations.displayName = "CatalogAggregations";
const CatalogError = ({
  children
}) => {
  const {
    params
  } = useCatalog();
  const {
    error
  } = params;
  if (error) {
    return /* @__PURE__ */ jsx(Fragment, {
      children: error
    });
  }
  return children;
};
CatalogError.displayName = "CatalogError";
const CatalogAndAggregation = ({
  ...restResultsProps
}) => {
  const pageContext = usePageContext();
  const {
    urlParsed: {
      pathname,
      searchOriginal: searchString
    }
  } = pageContext;
  const config = useMemo(() => ({
    parsedUrl: {
      pathname,
      searchString
    }
  }), [pathname, searchString]);
  return /* @__PURE__ */ jsx("div", {
    className: "grid md:grid-cols-3 grid-cols-1 py-24 px-12 md:px-20 bg-slate-100",
    children: /* @__PURE__ */ jsx("div", {
      className: "col-span-3",
      children: /* @__PURE__ */ jsx(CatalogProvider, {
        config,
        children: /* @__PURE__ */ jsx("div", {
          className: "w-full pt-6",
          children: /* @__PURE__ */ jsx("div", {
            className: "w-full",
            children: /* @__PURE__ */ jsx(CatalogError, {
              children: /* @__PURE__ */ jsxs("div", {
                className: "grid grid-cols-3 gap-4 pt-11",
                children: [/* @__PURE__ */ jsx("div", {
                  className: "col-span-full md:col-span-1",
                  children: /* @__PURE__ */ jsx(CatalogAggregations, {})
                }), /* @__PURE__ */ jsx("div", {
                  className: "col-span-full md:col-span-2 ",
                  children: /* @__PURE__ */ jsx(CatalogResults, {
                    ...restResultsProps
                  })
                })]
              })
            })
          })
        })
      })
    })
  });
};
const documentProps = {
  title: "Catalog Page",
  description: "The catalog page"
};
function Page() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "font-primary",
      children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx(Banner, {
        heading: "Full Learning Catalog",
        subtext: "Browse the full list of courses and learning paths."
      }), /* @__PURE__ */ jsx(CatalogAndAggregation, {
        onAddedToQueue: function(item) {
          throw new Error("Function not implemented.");
        }
      }), /* @__PURE__ */ jsx(Footer, {})]
    })
  });
}
export {
  Page,
  documentProps
};
