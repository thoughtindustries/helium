import React, { useRef, useState, DragEvent } from 'react';
import dropDownClosed from '../Assets/dropDownClosed';
import dropDownOpen from '../Assets/dropDownOpen';
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
import { EditIcon, TrashIcon } from './Assets/Icons';
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
    onCompleted: data => {
      if (data.UserBookmarks?.length && !selectedFolderId) {
        setSelectedFolderId(data.UserBookmarks[0].id);
      }
    }
  });
  const [selectedFolderId, setSelectedFolderId] = useState<string | undefined>(undefined);
  const [bookmarkList, setBookmarkList] = useState<UserBookmarksQuery['UserBookmarks'] | undefined>(
    bookmarkFolders?.UserBookmarks
  );

  if (bookmarkList != bookmarkFolders?.UserBookmarks) {
    setBookmarkList(bookmarkFolders?.UserBookmarks);
  }

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
          <div className="bookmark-folder bg-slate-100 pb-4">
            {/* bookmarks title */}
            <span className="bookmark-folder-name text-gray-mid text-base px-3">{folderName}</span>
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
      variables: { id: folderId },
      fetchPolicy: 'network-only'
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
    const [listViewDropDown, setListViewDropDown] = useState<boolean>(false);
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

    const kind = bookmark?.course?.courseGroup?.kind;
    let path = '';
    if (kind != undefined) {
      if (['courseGroup', 'microCourse', 'webinarCourse', 'inPersonEventCourse'].includes(kind)) {
        path = `/learn/topic/${bookmark.topicId}/redirect`;
      } else {
        path = `/learn/${kind.toLowerCase()}/${'bookmark.course.slug'}`;
      }
    }

    return (
      <div
        key={bookmark.id}
        className={`odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded  ${
          listViewDropDown ? 'border-l-4 border-blue-700 pb-4' : ''
        }`}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
            <div className="flex flex-row basis-4/12">
              {/* course title */}
              <div className="flex items-center p-6 text-sm font-semibold font-primary">
                {bookmark.course.title}
              </div>
            </div>
            <div className="flex flex-row basis-8/12 justify-between">
              {/* view button */}

              <div className="flex items-center text-sm px-2 w-48">{bookmark.note}</div>
              <a href={path} className="flex items-center text-sm font-semibold text-blue-700">
                <div className="">{t('bookmark.view')}</div>
              </a>
              <button
                className="flex items-center pr-6"
                onClick={() => setListViewDropDown(!listViewDropDown)}
              >
                {listViewDropDown ? (
                  <div className="h-2">{dropDownOpen}</div>
                ) : (
                  <div className="h-2">{dropDownClosed}</div>
                )}
              </button>
            </div>
          </div>
        </div>
        {listViewDropDown && (
          <div className="flex flex-row justify-between">
            {editNotes && (
              <div className="flex items-center p-6 text-sm font-semibold font-primary">
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
              <p className="flex items-center px-6 text-sm font-primary leading-6 mb-2">
                {bookmark.note + ' '}
                <button
                  onClick={() => setEditNotes(true)}
                  className="px-2 btn btn--link btn--inherit-font btn--no-margin hover:text-hover"
                >
                  <EditIcon />
                </button>
              </p>
            )}
            <div className="pr-2">
              <button
                onClick={() => {
                  if (confirm(t('bookmark.delete-confirmation'))) {
                    handleDelete();
                  }
                }}
                className="text-white text-xs shadow-none hover:text-hover bg-black px-4 py-2 rounded"
              >
                <span>{t('bookmark.remove')}</span>
              </button>
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
