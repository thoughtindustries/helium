import React, { useState } from 'react';
// import { DragDropContext } from 'react-beautiful-dnd';
import {
  useUserBookmarksQuery,
  useUserBookmarksByFolderQuery,
  LoadingDots,
  UserBookmarksQuery,
  UserBookmarksQueryResult,
  UserBookmarksByFolderQuery,
  useUpdateBookmarkFolderMutation
} from '@thoughtindustries/content';
import { MoveIcon, RightArrowtIcon, DownArrowIcon, EditIcon } from '../Assets/Icons';
import useLearnerAccess from '../use-context';

type RequiredUserBookmarksQuery = Required<UserBookmarksQuery>;
interface BookmarkFolderNameProps {
  folder: RequiredUserBookmarksQuery['UserBookmarks'][0];
  refetchBookmarkFolders: UserBookmarksQueryResult['refetch'];
}
const BookmarkFolderName = ({ folder, refetchBookmarkFolders }: BookmarkFolderNameProps) => {
  const [editFolderName, setEditFolderName] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>(folder.name);
  const { refetchContentGroups } = useLearnerAccess();
  const [updateBookmarkFolder] = useUpdateBookmarkFolderMutation();
  const handleSave = () => {
    updateBookmarkFolder({
      variables: {
        id: folder.id,
        name: folderName
      }
    }).then(() => {
      refetchContentGroups();
      refetchBookmarkFolders();
      setEditFolderName(!editFolderName);
    });
  };

  return (
    <>
      {editFolderName ? (
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
            className="bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-10 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
          >
            <span>Save</span>
          </button>
          <button
            onClick={() => {
              setEditFolderName(!editFolderName);
              setFolderName(folder.name);
            }}
            className="hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline"
          >
            <span>Cancel</span>
          </button>
        </div>
      ) : (
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
  const { data: bookmarks } = useUserBookmarksByFolderQuery({
    variables: { id: folderId }
  });

  if (!bookmarks || !bookmarks.UserBookmarksByFolder) return null;
  return (
    <>
      {bookmarks.UserBookmarksByFolder.map(item => (
        <BookmarkItem key={item.id} item={item} />
      ))}
    </>
  );
};

type RequiredUserBookmarksByFolderQuery = Required<UserBookmarksByFolderQuery>;
interface BookmarkItemProps {
  item: RequiredUserBookmarksByFolderQuery['UserBookmarksByFolder'][0];
}
const BookmarkItem = ({ item }: BookmarkItemProps) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const [editNotes, setEditNotes] = useState<boolean>(false);
  const [notes, setNotes] = useState<string>(item.note || '');

  return (
    <div
      key={item.id}
      className="dashboard-access-list-item odd:bg-white text-black-light py-3 px-4 bg-white-mid border-gray-light border-b last:border-b-0"
    >
      <div className="row grid items-center grid-cols-12 gap-4">
        <div className="medium-7 columns col-span-6">
          <button onClick={() => setShowContent(!showContent)} className="inline-block">
            {showContent ? <DownArrowIcon /> : <RightArrowtIcon />}
            <span className="dashboard-access-list-item-expander__title ">{item.course.title}</span>
          </button>
          {!showContent ? (
            <div className="dashboard-access-list-item__description">
              <p className="bookmark-note pt-2 pl-8 truncate w-full">{item.note}</p>
            </div>
          ) : (
            ''
          )}
        </div>
        <div className="medium-3 columns col-span-3">
          <div className="catalog-list-item__info">
            <strong>Course</strong>
          </div>
        </div>
        <div className="medium-2 columns col-span-2 flex justify-end">
          <a
            href="/learn/topic/61285240-b509-422c-a4b2-f4400250922a/redirect"
            className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
          >
            <span id="i18n-164">View</span>
          </a>
        </div>
      </div>
      {showContent ? (
        <div className="mx-0 my-6 relative">
          <div className="flex">
            <div className="float-left relative w-1/3 px-4">
              <img
                className="h-auto max-w-full"
                src={item.course.courseGroup?.asset}
                alt={item.course.title}
              />
            </div>
            <div className="float-left relative px-4">
              <div className="dashboard-access-list-item__description">
                {editNotes ? (
                  <div className="">
                    <input
                      className="h-7 focus:outline-none text-xs py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black w-auto transition shadow-sm border-gray-light"
                      type="text"
                      onChange={e => setNotes(e.target.value)}
                      value={notes}
                    />
                    <button className="text-white transition ease-in-out duration-200 border-gray-light border-solid border cursor-pointer inline-block font-normal text-sm mt-0 mr-0 mb-4 -ml-px pt-1.5 pb-2 px-4  relative text-center no-underline rounded-r-lg bg-[#405667] border-[#405667] hover:border-[#2c3c48] hover:bg-[#2c3c48] leading-3">
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditNotes(!editNotes);
                        setNotes(item.note || '');
                      }}
                      className="btn btn--bare btn--small"
                    >
                      <span className="hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline">
                        Cancel
                      </span>
                    </button>
                    <p></p>
                  </div>
                ) : (
                  <p className="leading-6 font-normal mb-2">
                    {item.note + ' '}
                    <button
                      onClick={() => setEditNotes(!editNotes)}
                      className="btn btn--link btn--inherit-font btn--no-margin hover:text-hover"
                    >
                      <span>(Edit)</span>
                    </button>
                  </p>
                )}
                <div>
                  <button className="bg-none rounded-none h-auto p-0 shadow-none text-black hover:text-hover">
                    <span>Remove Bookmark</span>
                  </button>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const LoadBookmarks = (): JSX.Element => {
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
        setSelectedFolder(data.UserBookmarks[0].id);
      }
    }
  });
  const [selectedFolderId, setSelectedFolder] = useState<string | undefined>(undefined);

  console.log('data from child', bookmarkFolders);
  if (loading) return <LoadingDots />;
  if (error) return <>{error.message}</>;
  if (!bookmarkFolders || !bookmarkFolders.UserBookmarks) return <></>;
  return (
    <div className="mx-0 my-4 relative">
      <div className="row-span-2">
        <div className="float-left px-4 relative">
          <ul className="w-[max-content] list-none m-0 p-0">
            {bookmarkFolders.UserBookmarks.map(item => (
              <li
                key={item.id}
                onClick={() => {
                  if (selectedFolderId === item.id) {
                    return;
                  }
                  setSelectedFolder(item.id);
                }}
                className="border-gray-light border-solid border-b flex m-0 max-w-none w-auto"
              >
                <div className="w-1/12 float-left mr-0 px-2 pt-3 relative">
                  <MoveIcon />
                </div>
                <button
                  className="w-full flex border-gray-mid leading-5 max-w-7xl grow-[2] ease-in-out transition font-sans duration-200 rounded-sm cursor-pointer items-center justify-between float-left font-normal text-sm mx-0 mt-0 py-2 px-5 relative text-center no-underline"
                  title="My Bookmarks"
                >
                  <span className="font-normal text-base pr-4 not-italic truncate text-active-blue">
                    {item.name}
                  </span>
                  <span className="text-white bg-active-blue rounded-[200px] border-gray-light border-solid border font-semibold leading-5 px-1 text-center">
                    {item.bookmarkCount}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col pl-4">
          {selectedFolderId &&
            bookmarkFolders.UserBookmarks.filter(item => item.id === selectedFolderId).map(
              folder => (
                <section key={folder.id}>
                  <BookmarkFolderName
                    folder={folder}
                    refetchBookmarkFolders={refetchBookmarkFolders}
                  />
                  <BookmarkItems folderId={folder.id} />
                </section>
              )
            )}
        </div>
      </div>
    </div>
  );
};
export default LoadBookmarks;
