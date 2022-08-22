import React, { useRef, useState, DragEvent, useEffect } from 'react';
import {
  useUserBookmarksQuery,
  useUserBookmarksByFolderQuery,
  useUpdateBookmarkFolderMutation,
  useDestroyBookmarkFolderMutation,
  useUpdateBookmarkMutation,
  useDestroyBookmarkMutation,
  LoadingDots,
  UserBookmarksQuery,
  UserBookmarksQueryResult,
  UserBookmarksByFolderQueryResult,
  UserBookmarksByFolderQuery
} from '@thoughtindustries/content';
import {
  GrabIcon,
  RightArrowIcon,
  DownArrowIcon,
  EditIcon,
  TrashIcon
} from './LearnerAccessPackages/learner-access/src/Assets/Icons';
import useLearnerAccess from './LearnerAccessPackages/learner-access/src/use-context';
import { useTranslation } from 'react-i18next';

const LoadBookmarks = (): JSX.Element => {
  const { t } = useTranslation();

  const {
    data: bookmarkFolders,
    loading,
    error,
    refetch: refetchBookmarkFolders
  } = useUserBookmarksQuery({
    variables: {},
    fetchPolicy: 'network-only',
    ssr: false,
    onCompleted: data => {
      if (data.UserBookmarks?.length && !selectedFolderId) {
        setSelectedFolderId(data.UserBookmarks[0].id);
      }
    }
  });
  const [selectedFolderId, setSelectedFolderId] = useState<string | undefined>(undefined);
  const [dragging, setDragging] = useState<boolean>(false);
  const [bookmarkList, setBookmarkList] = useState<UserBookmarksQuery['UserBookmarks'] | undefined>(
    bookmarkFolders?.UserBookmarks
  );

  // useEffect(() => {
  //   if (bookmarkFolders) setBookmarkList(bookmarkFolders?.UserBookmarks);
  // }, [bookmarkFolders]);

  if (bookmarkList != bookmarkFolders?.UserBookmarks) {
    setBookmarkList(bookmarkFolders?.UserBookmarks);
  }

  const draggedItem: any = useRef();
  const draggNode: any = useRef();

  const handleDragStart = (event: DragEvent<HTMLLIElement>, index: number) => {
    draggedItem.current = index;
    draggNode.current = event.target;
    draggNode.current.addEventListener('dragend', handleDragEnd);
    draggedItem.current = index;
    setDragging(true);
  };

  const handleDragEnter = (event: DragEvent<HTMLLIElement>, index: number) => {
    const current = draggedItem.current;
    console.log('dragged node', draggNode.current);
    console.log('target', event.target);
    if (draggNode.current !== event.target) {
      setBookmarkList((oldList: any) => {
        const newList = JSON.parse(JSON.stringify(oldList));
        newList.splice(index, 0, newList.splice(current, 1)[0]);
        draggedItem.current = index;
        console.log('newlist', newList);
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    draggNode.current.removeEventListener('dragend', handleDragEnd);
    draggedItem.current = null;
    draggNode.current = null;
  };

  const getDraggedStyle = (index: number) =>
    draggedItem.current == index ? ' bg-active-blueTinted' : null;

  type RequiredUserBookmarksQuery = Required<UserBookmarksQuery>;
  interface BookmarkFolderNameProps {
    folder: RequiredUserBookmarksQuery['UserBookmarks'][0];
    refetchBookmarkFolders: UserBookmarksQueryResult['refetch'];
  }

  const BookmarkFolderName = ({ folder, refetchBookmarkFolders }: BookmarkFolderNameProps) => {
    const [editFolderName, setEditFolderName] = useState<boolean>(false);
    const [folderName, setFolderName] = useState<string>(folder.name);
    const [tryingToDelete, setTryingToDelete] = useState<boolean>(false);
    const [updateBookmarkFolder] = useUpdateBookmarkFolderMutation();
    const [destroyBookmarkFolder] = useDestroyBookmarkFolderMutation();

    const handleDelete = () => {
      destroyBookmarkFolder({
        variables: {
          id: folder.id
        }
      }).then(() => {
        refetchBookmarkFolders();
        setEditFolderName(!editFolderName);
      });
    };

    const handleSave = () => {
      updateBookmarkFolder({
        variables: {
          id: folder.id,
          name: folderName
        }
      }).then(() => {
        refetchBookmarkFolders();
        setEditFolderName(!editFolderName);
      });
    };

    return (
      <>
        {editFolderName && (
          <div className="bookmark-folder__edit-name flex">
            <div className="ember-view input--large">
              <div className="ember-view new-form-label">
                <script type="text/x-placeholder"></script>
                <label className="form__label" data-bindattr-4061="4061">
                  <div className="form__label__container" data-bindattr-4062="4062"></div>

                  <div className="form__input__container" data-bindattr-4065="4065">
                    <input
                      onChange={e => setFolderName(e.target.value)}
                      className="h-10 leading-5 text-sm w-full focus:outline-none py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black transition shadow-sm border-gray-light"
                      type="text"
                      value={folderName}
                    />
                  </div>
                </label>
              </div>
            </div>
            <button
              onClick={handleSave}
              className="bg-active-blue text-accent-contrast rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-10 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
            >
              <span>{t('dashboard.bookmark-save')}</span>
            </button>
            <button
              onClick={() => {
                setEditFolderName(!editFolderName);
                setFolderName(folder.name);
              }}
              className="hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline"
            >
              <span>{t('bookmark.cancel')}</span>
            </button>
          </div>
        )}
        {!editFolderName && (
          <div className="bookmark-folder pb-5">
            <span className="bookmark-folder-name pr-7 text-gray-mid text-base">{folderName}</span>
            <span>
              <button
                onClick={() => setEditFolderName(!editFolderName)}
                className="btn btn--link btn--inherit-font btn--no-margin"
              >
                {' '}
                <EditIcon />
              </button>
              <div onClick={() => setTryingToDelete(!tryingToDelete)} className="inline-block ">
                {!tryingToDelete && (
                  <button className="btn btn--bare-icon btn--small">
                    <TrashIcon />
                  </button>
                )}
                {tryingToDelete && (
                  <span className="confirm-action__confirm">
                    {t('bookmark.delete-confirmation')}
                    <button
                      className="hover:text-hover"
                      onClick={() => {
                        setTryingToDelete(false);
                      }}
                    >
                      <span>{t('no')}</span>
                    </button>
                    /
                    <button
                      className="hover:text-hover"
                      onClick={() => {
                        setTryingToDelete(false);
                        if (confirm(t('bookmark.delete-folder-confirmation'))) {
                          handleDelete();
                        }
                      }}
                    >
                      <span>{t('yes')}</span>
                    </button>
                  </span>
                )}
              </div>
            </span>
          </div>
        )}
      </>
    );
  };

  interface BookmarkItemsProps {
    folderId: string;
  }
  const BookmarkItems = ({ folderId }: BookmarkItemsProps): JSX.Element | null => {
    const { data: bookmarks, refetch: refetchBookmark } = useUserBookmarksByFolderQuery({
      variables: { id: folderId }
    });

    if (!bookmarks || !bookmarks.UserBookmarksByFolder) return null;
    return (
      <>
        {bookmarks.UserBookmarksByFolder.map(item => (
          <BookmarkItem
            key={item.id}
            bookmark={item}
            folderId={folderId}
            refetchBookmark={refetchBookmark}
          />
        ))}
      </>
    );
  };

  type RequiredUserBookmarksByFolderQuery = Required<UserBookmarksByFolderQuery>;
  interface BookmarkItemProps {
    bookmark: RequiredUserBookmarksByFolderQuery['UserBookmarksByFolder'][0];
    folderId: string;
    refetchBookmark: UserBookmarksByFolderQueryResult['refetch'];
  }
  const BookmarkItem = ({ bookmark, folderId, refetchBookmark }: BookmarkItemProps) => {
    const [showContent, setShowContent] = useState<boolean>(false);
    const [editNotes, setEditNotes] = useState<boolean>(false);
    const [notes, setNotes] = useState<string>(bookmark.note || '');
    const [updateBookmarkNote] = useUpdateBookmarkMutation();
    const [destroyBookmark] = useDestroyBookmarkMutation();

    const handleDelete = () => {
      destroyBookmark({
        variables: {
          id: bookmark.id
        }
      }).then(() => {
        refetchBookmark();
      });
    };

    const handleSave = () => {
      updateBookmarkNote({
        variables: {
          id: bookmark.id,
          note: notes,
          bookmarkFolder: folderId
        }
      }).then(() => {
        refetchBookmark();
        setEditNotes(!editNotes);
      });
    };

    return (
      <div
        key={bookmark.id}
        className="dashboard-access-list-item odd:bg-white text-black-light py-3 px-4 bg-white-mid border-gray-light border-b last:border-b-0"
      >
        <div className="row grid items-center grid-cols-12 gap-4">
          <div className="medium-7 columns col-span-6">
            <button onClick={() => setShowContent(!showContent)} className="inline-block">
              {showContent ? <DownArrowIcon /> : <RightArrowIcon />}
              <span className="dashboard-access-list-item-expander__title ">
                {bookmark.course.title}
              </span>
            </button>
            {!showContent && (
              <div className="dashboard-access-list-item__description">
                <p className="bookmark-note pt-2 pl-8 truncate w-full">{bookmark.note}</p>
              </div>
            )}
          </div>
          <div className="medium-3 columns col-span-3">
            <div className="catalog-list-item__info">
              <strong>{bookmark.course.courseGroup?.contentType?.label}</strong>
            </div>
          </div>
          <div className="medium-2 columns col-span-2 flex justify-end">
            <a
              href={'/learn/topic/' + bookmark.course.id}
              className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
            >
              <span id="i18n-164">{t('bookmark.view')}</span>
            </a>
          </div>
        </div>
        {showContent && (
          <div className="mx-0 my-6 relative">
            <div className="flex">
              <div className="float-left relative w-1/3 px-4">
                <img
                  className="h-auto max-w-full"
                  src={bookmark.course.courseGroup?.asset}
                  alt={bookmark.course.title}
                />
              </div>
              <div className="float-left relative px-4">
                <div className="dashboard-access-list-item__description">
                  {editNotes && (
                    <div className="">
                      <input
                        className="h-7 focus:outline-none text-xs py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black w-auto transition shadow-sm border-gray-light"
                        type="text"
                        onChange={e => setNotes(e.target.value)}
                        value={notes}
                      />
                      <button
                        onClick={handleSave}
                        className="text-white transition ease-in-out duration-200 border-gray-light border-solid border cursor-pointer inline-block font-normal text-sm mt-0 mr-0 mb-4 -ml-px pt-1.5 pb-2 px-4 relative text-center no-underline rounded-r-lg bg-[#405667] border-[#405667] hover:border-[#2c3c48] hover:bg-[#2c3c48] leading-3"
                      >
                        {t('dashboard.bookmark-save')}
                      </button>
                      <button
                        onClick={() => {
                          setEditNotes(false);
                          setNotes(bookmark.note || '');
                        }}
                        className="btn btn--bare btn--small"
                      >
                        <span className="hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline">
                          {t('bookmark.cancel')}
                        </span>
                      </button>
                      <p></p>
                    </div>
                  )}
                  {!editNotes && (
                    <p className="leading-6 font-normal mb-2">
                      {bookmark.note + ' '}
                      <button
                        onClick={() => setEditNotes(true)}
                        className="btn btn--link btn--inherit-font btn--no-margin hover:text-hover"
                      >
                        <span>({t('bookmark.edit')})</span>
                      </button>
                    </p>
                  )}
                  <div>
                    <button
                      onClick={() => {
                        if (confirm(t('bookmark.delete-confirmation'))) {
                          handleDelete();
                        }
                      }}
                      className="bg-none rounded-none h-auto p-0 shadow-none text-black hover:text-hover"
                    >
                      <span>{t('bookmark.remove')}</span>
                    </button>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  if (loading) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (!bookmarkFolders || !bookmarkFolders.UserBookmarks) return <></>;
  return (
    <div className="mx-0 my-4 relative">
      <div className="row-span-2">
        <div className="float-left px-4 relative">
          <ul className="w-[max-content] list-none m-0 p-0 dnd-drop grid h-full relative gap-2">
            {bookmarkList?.map((item, index) => {
              const activeBookmark =
                item.id === selectedFolderId ? 'text-active-blue' : 'text-black-light';
              return (
                <li
                  key={item.id}
                  draggable={true}
                  onDragStart={event => handleDragStart(event, index)}
                  onDragEnter={e => dragging && handleDragEnter(e, index)}
                  onClick={() => {
                    if (selectedFolderId === item.id) {
                      return;
                    }
                    setSelectedFolderId(item.id);
                    console.log('selected', selectedFolderId);
                  }}
                  className={
                    'border-gray-light border-solid border-b flex m-0 max-w-none w-auto dnd-item rounded items-center justify-center hover:bg-active-blueTinted' +
                    (dragging ? getDraggedStyle(index) : ' bg-white')
                  }
                >
                  <div className="w-1/12 float-left mr-0 px-2 pt-3 relative">
                    <GrabIcon />
                  </div>
                  <button
                    className="w-full flex border-gray-mid leading-5 max-w-7xl grow-[2] ease-in-out transition font-sans duration-200 rounded-sm cursor-pointer items-center justify-between float-left font-normal text-sm mx-0 mt-0 py-2 px-5 relative text-center no-underline"
                    title="My Bookmarks"
                  >
                    <span
                      className={'font-normal text-base pr-4 not-italic truncate ' + activeBookmark}
                    >
                      {item.name}
                    </span>
                    <span
                      className={
                        'rounded-[200px] bg-white border-gray-light border-solid border font-semi bold leading-5 px-1 text-center ' +
                        activeBookmark
                      }
                    >
                      {item.bookmarkCount}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col pl-4">
          {selectedFolderId &&
            bookmarkList
              ?.filter(item => item.id === selectedFolderId)
              .map(folder => (
                <section key={folder.id}>
                  <BookmarkFolderName
                    folder={folder}
                    refetchBookmarkFolders={refetchBookmarkFolders}
                  />
                  <BookmarkItems folderId={folder.id} />
                </section>
              ))}
        </div>
      </div>
    </div>
  );
};
export default LoadBookmarks;
