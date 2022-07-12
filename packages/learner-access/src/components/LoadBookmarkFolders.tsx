import React, { useState, useRef, useEffect } from 'react';
import {
  useUserBookmarksQuery,
  useUserBookmarksByFolderQuery,
  useUpdateBookmarkFolderMutation,
  useDestroyBookmarkFolderMutation,
  useUpdateBookmarkMutation,
  useDestroyBookmarkMutation,
  LoadingDots
} from '@thoughtindustries/content';
import { GrabIcon, RightArrowIcon, DownArrowIcon, EditIcon, TrashIcon } from '../Assets/Icons';

const LoadBookmarks = (): JSX.Element => {
  const [selected, setSelected] = useState<number>(0);
  const { data, loading, error }: any = useUserBookmarksQuery({
    variables: {}
  });

  const { data: bookmarksFolderData }: any = useUserBookmarksByFolderQuery({
    variables: { id: data?.UserBookmarks.id || '' }
  });

  const [destroyBookmarkFolderMutation] = useDestroyBookmarkFolderMutation({
    variables: {
      id: data?.UserBookmarks[selected].id || ''
    }
  });

  const [bookmarkList, setBookmarkList] = useState<any>();
  const [tryingToDelete, setTryingToDelete] = useState<boolean>(false);

  const [dragging, setDragging] = useState<boolean>(false);

  const draggedItem: any = useRef();
  const draggNode: any = useRef();

  useEffect(() => {
    if (data) setBookmarkList(JSON.parse(JSON.stringify(data?.UserBookmarks)));
  }, [data]);

  const [editFolderName, setEditFolderName] = useState<boolean>(false);
  const [folderName, setFolderName] = useState<string>(data?.UserBookmarks[selected].name);

  const [updateBookmarkFolderMutation] = useUpdateBookmarkFolderMutation({
    variables: {
      id: data?.UserBookmarks[selected].id || '',
      name: folderName || ''
    }
  });

  const handleDragStart = (event: any, index: number) => {
    draggedItem.current = index;
    draggNode.current = event.target;
    draggNode.current.addEventListener('dragend', handleDragEnd);
    draggedItem.current = index;
    setDragging(true);
  };

  const handleDragEnter = (event: any, index: number) => {
    const current = draggedItem.current;
    if (draggNode.current !== event.target) {
      setBookmarkList((oldList: any) => {
        const newList = JSON.parse(JSON.stringify(oldList));
        newList.splice(index, 0, newList.splice(current, 1)[0]);
        draggedItem.current = index;
        localStorage.setItem('List', JSON.stringify(newList));
        return newList;
      });
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    draggedItem.current = null;
    draggNode.current = null;
    draggNode.removeEventListener('dragend', handleDragEnd);
  };

  const getDraggedStyle = (index: number) =>
    draggedItem.current == index ? ' bg-active-blueTinted' : null;

  const [resetFolderName, setResetFolderName] = useState<string>(
    data?.UserBookmarks[selected].name
  );

  const BookmarkItemsUi = (item: any) => {
    item = item.item;
    const [destroyBookmarkMutation] = useDestroyBookmarkMutation({
      variables: {
        id: item.id
      }
    });
    const [editNotes, setEditNotes] = useState<boolean>(false);
    const [showContent, setShowContent] = useState<boolean>(false);
    const [notes, setNotes] = useState<string>(item.note);

    const [updateBookmarkMutation] = useUpdateBookmarkMutation({
      variables: {
        id: item.id || '',
        note: notes,
        bookmarkFolder: item.course.courseGroup.id || ''
      }
    });
    return (
      <div
        key={item.id}
        className="dashboard-access-list-item odd:bg-white text-black-light py-3 px-4 bg-white-mid border-gray-light border-b last:border-b-0"
      >
        <div className="row grid items-center grid-cols-12 gap-4">
          <div className="medium-7 columns col-span-6">
            <button onClick={() => setShowContent(!showContent)} className="inline-block">
              {showContent ? <DownArrowIcon /> : <RightArrowIcon />}
              <span className="dashboard-access-list-item-expander__title ">
                {item.course.title}
              </span>
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
                  src={item.course.courseGroup.asset}
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
                      <button
                        onClick={() => {
                          updateBookmarkMutation();
                          setEditNotes(false);
                        }}
                        className="text-white transition ease-in-out duration-200 border-gray-light border-solid border cursor-pointer inline-block font-normal text-sm mt-0 mr-0 mb-4 -ml-px pt-1.5 pb-2 px-4  relative text-center no-underline rounded-r-lg bg-[#405667] border-[#405667] hover:border-[#2c3c48] hover:bg-[#2c3c48] leading-3"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditNotes(false);
                          setNotes(item.note);
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
                      {notes + ' '}
                      <button
                        onClick={() => setEditNotes(true)}
                        className="btn btn--link btn--inherit-font btn--no-margin hover:text-hover"
                      >
                        <span>(Edit)</span>
                      </button>
                    </p>
                  )}
                  <div>
                    <button
                      onClick={() => {
                        if (confirm('Are you sure?')) {
                          destroyBookmarkMutation();
                          console.log('list data ', bookmarkList, data?.UserBookmarks);
                        }
                      }}
                      className="bg-none rounded-none h-auto p-0 shadow-none text-black hover:text-hover"
                    >
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

  const getCurrentActiveFolder = (index: number, currentBookmarkFolser: any) => {
    const active = index === currentBookmarkFolser ? true : false;
    return active;
  };

  console.log('data from child', data?.UserBookmarks, bookmarkList);
  if (error) return error;
  return (
    <>
      {loading ? (
        <LoadingDots />
      ) : (
        <div className="mx-0 my-4 relative">
          <div className="row-span-2">
            <div className="float-left px-4 relative">
              <ul className="w-[max-content] list-none m-0 p-0 dnd-drop grid h-full relative gap-2">
                {bookmarkList?.map((item: any, index: number) => {
                  const activeBookmark = getCurrentActiveFolder(index, selected)
                    ? 'text-active-blue'
                    : 'text-black-light';
                  return (
                    <li
                      key={item.id}
                      draggable={true}
                      onDragStart={event => handleDragStart(event, index)}
                      onDragEnter={e => dragging && handleDragEnter(e, index)}
                      onClick={() => {
                        setSelected(index);
                        console.log('selected', selected);
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
                          className={
                            'font-normal text-base pr-4 not-italic truncate ' + activeBookmark
                          }
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
                    onClick={() => {
                      setEditFolderName(!editFolderName);
                      setFolderName(folderName);
                      setResetFolderName(folderName);
                      updateBookmarkFolderMutation();
                    }}
                    className="bg-active-blue text-white rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-10 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
                  >
                    <span>Save</span>
                  </button>
                  <button
                    onClick={() => {
                      setEditFolderName(!editFolderName);
                      setFolderName(resetFolderName);
                    }}
                    className="hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline"
                  >
                    <span>Cancel</span>
                  </button>
                </div>
              ) : (
                <div className="bookmark-folder pb-5">
                  <span className="bookmark-folder-name pr-7 text-gray-mid text-base">
                    {folderName || data.UserBookmarks[selected].name}
                  </span>
                  <span>
                    <button
                      onClick={() => {
                        setEditFolderName(!editFolderName);
                        setFolderName(folderName || data.UserBookmarks[selected].name);
                      }}
                      className="btn btn--link btn--inherit-font btn--no-margin"
                    >
                      {' '}
                      <EditIcon />
                    </button>
                    <div
                      onClick={() => setTryingToDelete(!tryingToDelete)}
                      className="inline-block "
                    >
                      {!tryingToDelete ? (
                        <button className="btn btn--bare-icon btn--small">
                          {selected === 0 && <TrashIcon />}
                        </button>
                      ) : (
                        <span className="confirm-action__confirm">
                          Are you sure🍇
                          <button
                            className="hover:text-hover"
                            onClick={() => {
                              setTryingToDelete(false);
                            }}
                          >
                            <span>No</span>
                          </button>
                          /
                          <button
                            className="hover:text-hover"
                            onClick={() => {
                              setTryingToDelete(false);
                              if (
                                confirm(
                                  'This action cannot be undone and all bookmarks in this folder will be deleted.'
                                )
                              ) {
                                destroyBookmarkFolderMutation();
                              }
                            }}
                          >
                            <span>Yes</span>
                          </button>
                        </span>
                      )}
                    </div>
                  </span>
                </div>
              )}
              {bookmarksFolderData &&
                bookmarksFolderData.UserBookmarksByFolder.map((item: any) => {
                  return <BookmarkItemsUi item={item} />;
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default LoadBookmarks;
