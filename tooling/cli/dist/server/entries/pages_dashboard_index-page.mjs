import { c as useUserWaitlistQuery, d as useUnenrollFromWaitlistMutation, L as LoadingDots, e as useReinstateUserCourseMutation, f as useReinstateUserLearningPathMutation, g as useUserArchivesQuery, h as formatTime, i as useUserBookmarksQuery, j as useUpdateBookmarkFolderMutation, k as useDestroyBookmarkFolderMutation, l as useUserBookmarksByFolderQuery, m as useUpdateBookmarkMutation, n as useDestroyBookmarkMutation, D as DropDownOpen, o as DropDownClosed, p as useUserCourseCompletionProgressQuery, q as useUserContentItemsQuery, r as hydrateContentItem, s as useUserCertificatesQuery, t as useUserCertificateFieldsQuery, v as useCreateCertificateFromUploadMutation, w as useContentGroupsQuery, x as ContentKind, S as SortColumn, N as NavBar, F as Footer } from "../chunks/chunk-8fc8ac1e.js";
import { B as Banner } from "../chunks/chunk-ed176d5e.js";
import { createContext, useContext, useCallback, useState, useEffect } from "react";
import { NetworkStatus } from "@apollo/client";
import { j as jsx, F as Fragment, a as jsxs } from "../chunks/chunk-7df435e3.js";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import { l as logoImage } from "../chunks/chunk-a091ce35.js";
import { u as usePageContext } from "../chunks/chunk-ab44b266.js";
import clsx from "clsx";
import { F as FeaturedContentComp } from "../chunks/chunk-c926fd57.js";
import "react/jsx-runtime";
import "dayjs";
import "dayjs/plugin/advancedFormat.js";
import "dayjs/plugin/utc.js";
import "dayjs/plugin/timezone.js";
import "use-debounce";
var TabKey = /* @__PURE__ */ ((TabKey2) => {
  TabKey2["Current"] = "current";
  TabKey2["Events"] = "events";
  TabKey2["LearningPath"] = "learningPath";
  TabKey2["Completed"] = "completed";
  TabKey2["Archived"] = "archived";
  TabKey2["Bookmark"] = "bookmark";
  TabKey2["Certificate"] = "certificate";
  TabKey2["Waitlist"] = "waitlist";
  return TabKey2;
})(TabKey || {});
const LearnerAccessContext = createContext(void 0);
function useLearnerAccess() {
  const context = useContext(LearnerAccessContext);
  if (!context) {
    throw new Error("No context found for LearnerAccess");
  }
  return context;
}
const LoadWaitlist = () => {
  useTranslation();
  const {
    data,
    loading,
    error,
    refetch: refetchWaitlist,
    networkStatus
  } = useUserWaitlistQuery({
    variables: {},
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  });
  const [unenrollFromWaitlistMutation] = useUnenrollFromWaitlistMutation();
  const {
    refetchContentGroups,
    resetActiveTab
  } = useLearnerAccess();
  const handleUnenroll = useCallback(async (id) => {
    var _a;
    await unenrollFromWaitlistMutation({
      variables: {
        id
      }
    });
    const {
      data: refetchData
    } = await refetchWaitlist();
    if (refetchData && !((_a = refetchData.UserWaitlist) == null ? void 0 : _a.length)) {
      resetActiveTab();
    }
    await refetchContentGroups();
  }, [refetchContentGroups, refetchWaitlist, resetActiveTab]);
  const isRefetching = networkStatus === NetworkStatus.refetch;
  if (loading || isRefetching)
    return /* @__PURE__ */ jsx(LoadingDots, {});
  if (error)
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  if (!data || !data.UserWaitlist)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx("div", {
    className: "py-5",
    children: data.UserWaitlist.map((item) => {
      return /* @__PURE__ */ jsx("div", {
        className: "odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded",
        children: /* @__PURE__ */ jsx("div", {
          className: "flex flex-col w-full",
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex flex-row basis-4/12",
              children: /* @__PURE__ */ jsx("div", {
                className: "flex items-center p-6 text-sm font-semibold font-primary",
                children: item.title
              })
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex flex-row basis-8/12 justify-between",
              children: [/* @__PURE__ */ jsx("div", {
                className: "flex items-center text-sm font-semibold",
                children: item.contentTypeLabel
              }), /* @__PURE__ */ jsx("div", {
                className: "flex items-center",
                children: /* @__PURE__ */ jsx("button", {
                  onClick: () => handleUnenroll(item.id),
                  className: "bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5",
                  children: t("dashboard.unenroll-waitlist")
                })
              })]
            })]
          })
        })
      }, item.id);
    })
  });
};
const uploadStyle = {
  position: "absolute",
  top: "-30px",
  right: "-19px",
  width: "30px",
  height: "30px"
};
const UploadIcon = () => /* @__PURE__ */ jsx("i", {
  className: "icon-upload",
  style: {
    display: "inline-block",
    position: "relative"
  },
  children: /* @__PURE__ */ jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-10 -20 150 50",
    style: uploadStyle,
    children: [/* @__PURE__ */ jsx("path", {
      style: {
        fill: "#311ac9",
        fillOpacity: 1,
        stroke: "none"
      },
      d: "M 20.832031 70.351562 L 20.832031 55.765625 C 20.832031 53.464844 18.964844 51.601562 16.667969 51.601562 C 14.367188 51.601562 12.5 53.464844 12.5 55.765625 L 12.5 70.351562 C 12.5 74.953125 16.230469 78.683594 20.832031 78.683594 L 79.167969 78.683594 C 83.769531 78.683594 87.5 74.953125 87.5 70.351562 L 87.5 55.765625 C 87.5 53.464844 85.632812 51.601562 83.332031 51.601562 C 81.035156 51.601562 79.167969 53.464844 79.167969 55.765625 L 79.167969 70.351562 Z M 20.832031 70.351562 "
    }), /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "evenodd",
        fill: "#fff",
        fillOpacity: 1
      },
      d: "M20.832 70.352V55.766a4.166 4.166 0 0 0-8.332 0v14.586a8.332 8.332 0 0 0 8.332 8.332h58.336a8.332 8.332 0 0 0 8.332-8.332V55.766a4.166 4.166 0 0 0-8.332 0v14.586ZM61.277 34.07l-8.332-8.332a4.168 4.168 0 0 0-5.89 0l-8.332 8.332a4.168 4.168 0 0 0 0 5.89 4.161 4.161 0 0 0 5.89 0L50 34.575l5.387 5.387a4.161 4.161 0 0 0 5.89 0 4.168 4.168 0 0 0 0-5.89Zm0 0"
    }), /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "evenodd",
        fill: "#fff",
        fillOpacity: 1
      },
      d: "M45.832 30.766v29.168A4.17 4.17 0 0 0 50 64.102a4.17 4.17 0 0 0 4.168-4.168V30.766c0-2.301-1.867-4.164-4.168-4.164a4.166 4.166 0 0 0-4.168 4.164Zm0 0"
    })]
  })
});
const AlertIcon = () => /* @__PURE__ */ jsx("i", {
  className: "icon-alert",
  "aria-label": "alert",
  style: {
    display: "inline-block",
    position: "relative"
  },
  children: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "30 -15 5 90",
    width: 45,
    height: 45,
    children: /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "#311ac9",
        fillOpacity: 1
      },
      d: "m32 6.438-1.75 3L6.25 51l-1.688 3h54.876l-1.688-3-24-41.563Zm0 8L52.5 50h-41ZM30 28v12h4V28Zm0 14v4h4v-4Zm0 0"
    })
  })
});
const EditIcon = () => /* @__PURE__ */ jsx("i", {
  className: "icon-edit",
  style: {
    display: "inline-block",
    position: "relative",
    top: "2px"
  },
  children: /* @__PURE__ */ jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 26 26",
    width: 16,
    height: 16,
    children: /* @__PURE__ */ jsx("path", {
      d: "M20.094.25a2.247 2.247 0 0 0-1.625.656l-1 1.031 6.593 6.625 1-1.03a2.32 2.32 0 0 0 0-3.282L21.75.937A2.364 2.364 0 0 0 20.094.25Zm-3.75 2.594-1.563 1.5 6.875 6.875L23.25 9.75ZM13.78 5.438 2.97 16.155a.979.979 0 0 0-.5.625L.156 24.625a.98.98 0 0 0 .242.977.98.98 0 0 0 .977.242l7.844-2.313a.979.979 0 0 0 .781-.656l10.656-10.563-1.468-1.468L8.25 21.813l-4.406 1.28-.938-.937 1.344-4.593L15.094 6.75Zm2.375 2.406-10.968 11 1.593.343.219 1.47 11-10.97Z"
    })
  })
});
const TrashIcon = () => /* @__PURE__ */ jsx("i", {
  className: "trash-file",
  style: {
    display: "inline-block",
    position: "relative",
    top: "4px"
  },
  children: /* @__PURE__ */ jsx("svg", {
    viewBox: "1 -15 20 46",
    xmlns: "http://www.w3.org/2000/svg",
    width: 32,
    height: 32,
    children: /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "#cbcbcb",
        fillOpacity: 1
      },
      d: "M12.992 2A3.008 3.008 0 0 0 10 4.992V6H4v2h2v17c0 1.648 1.352 3 3 3h12c1.648 0 3-1.352 3-3V8h2V6h-6V4.992A3.008 3.008 0 0 0 17.008 2Zm0 2h4.016c.562 0 .992.43.992.992V6h-6V4.992c0-.562.43-.992.992-.992ZM8 8h14v17c0 .563-.438 1-1 1H9c-.563 0-1-.438-1-1Zm2 2v14h2V10Zm4 0v14h2V10Zm4 0v14h2V10Zm0 0"
    })
  })
});
const RepeatIcon = () => /* @__PURE__ */ jsx("i", {
  className: "trash-repeat",
  style: {
    display: "inline-block",
    position: "relative"
  },
  children: /* @__PURE__ */ jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 34,
    height: 34,
    viewBox: "-11 0 70 80",
    children: [/* @__PURE__ */ jsx("path", {
      style: {
        fill: "#405667",
        fillOpacity: 1,
        stroke: "none"
      },
      d: "M0 0h64v64H0z"
    }), /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1
      },
      d: "M8.145 19.715a13.326 13.326 0 0 0-4.243 2.86 13.276 13.276 0 0 0-2.855 4.238A13.25 13.25 0 0 0 0 32c0 1.797.352 3.543 1.047 5.188a13.276 13.276 0 0 0 2.855 4.238 13.352 13.352 0 0 0 4.239 2.86c.171.07.347.105.52.105.519 0 1.015-.305 1.226-.817a1.334 1.334 0 0 0-.707-1.746 10.657 10.657 0 0 1-3.395-2.285 10.749 10.749 0 0 1-2.285-3.39A10.623 10.623 0 0 1 2.668 32a10.59 10.59 0 0 1 3.121-7.543c.984-.98 2.125-1.75 3.39-2.285a10.575 10.575 0 0 1 4.153-.84h32.781l-5.722 5.723c-.52.52-.52 1.367 0 1.886a1.34 1.34 0 0 0 1.887.004l7.995-8a1.329 1.329 0 0 0 .293-1.453 1.27 1.27 0 0 0-.293-.433l-7.996-7.997a1.332 1.332 0 1 0-1.887 1.883l5.723 5.723H13.332c-1.797 0-3.547.352-5.187 1.047Zm0 0"
    }), /* @__PURE__ */ jsx("path", {
      style: {
        stroke: "none",
        fillRule: "nonzero",
        fill: "#fff",
        fillOpacity: 1
      },
      d: "M60.098 22.574a13.352 13.352 0 0 0-4.239-2.86 1.33 1.33 0 0 0-1.746.712c-.285.68.032 1.46.707 1.746 1.27.535 2.41 1.305 3.395 2.285.976.98 1.746 2.121 2.285 3.39.555 1.317.832 2.712.832 4.153 0 1.441-.277 2.836-.836 4.152a10.683 10.683 0 0 1-2.285 3.391c-.98.98-2.121 1.75-3.39 2.285-1.317.559-2.716.84-4.153.84H17.887l5.722-5.723c.52-.52.52-1.367 0-1.886a1.337 1.337 0 0 0-1.886 0l-7.996 7.996a1.388 1.388 0 0 0-.293.437 1.309 1.309 0 0 0 0 1.016c.066.168.168.312.293.437l7.996 7.996a1.337 1.337 0 0 0 1.887.004c.519-.52.519-1.367 0-1.886l-5.723-5.727h32.781c1.797 0 3.547-.352 5.187-1.047a13.31 13.31 0 0 0 4.239-2.86 13.233 13.233 0 0 0 2.855-4.237C63.65 35.542 64 33.797 64 32a13.283 13.283 0 0 0-3.902-9.426Zm0 0"
    })]
  })
});
const WarningMessageToolTip = ({
  mutationCallback,
  setShowPopup,
  text,
  customPosition
}) => {
  const containerClass = customPosition + "next-topic-tooltip absolute bg-white rounded text-sm p-4 shadow-sm w-[400px] z-[99999] text-black-light";
  return /* @__PURE__ */ jsx("div", {
    className: containerClass,
    children: /* @__PURE__ */ jsxs("div", {
      className: "m-0 max-w-none w-auto flex",
      children: [/* @__PURE__ */ jsx("div", {
        className: "float-left px-0 relative",
        children: /* @__PURE__ */ jsx(AlertIcon, {})
      }), /* @__PURE__ */ jsxs("div", {
        className: "float-right px-0 relative",
        children: [/* @__PURE__ */ jsx("p", {
          className: "gray-mid leading-8 mb-4",
          children: /* @__PURE__ */ jsx("span", {
            className: "text-active-blue inline-block text-center w-full text-2xl",
            children: text
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "m-0 max-w-none w-auto flex justify-evenly",
          children: [/* @__PURE__ */ jsx("button", {
            onClick: () => setShowPopup(false),
            className: "bg-white-mid h-8 border-solid border rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-gray-light font-sans transition duration-200 leading-5",
            "data-ember-action": "8974",
            children: /* @__PURE__ */ jsx("span", {
              children: "Cancel"
            })
          }), /* @__PURE__ */ jsx("button", {
            onClick: () => {
              mutationCallback();
              setShowPopup(false);
            },
            className: "bg-active-blue text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-8 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5",
            "data-ember-action": "8975",
            children: /* @__PURE__ */ jsx("span", {
              children: "Continue"
            })
          })]
        })]
      })]
    })
  });
};
const ReinstateButton = ({
  item,
  onReinstateSuccessAsync
}) => {
  const [showPopup, setShowPopup] = useState(false);
  const text = t("dashboard.archive-warning");
  const customPosition = "right-2 top-[120%]";
  const [reinstateUserCourseMutation] = useReinstateUserCourseMutation({
    variables: {
      id: item.resource
    }
  });
  const [reinstateUserLearningPathMutaion] = useReinstateUserLearningPathMutation({
    variables: {
      id: item.resource
    }
  });
  const handleMutation = async () => {
    let neededMutation;
    if (item.resourceType === "learningPath") {
      neededMutation = reinstateUserLearningPathMutaion;
    } else {
      neededMutation = reinstateUserCourseMutation;
    }
    return neededMutation().then(onReinstateSuccessAsync);
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("button", {
      onClick: () => setShowPopup(true),
      className: "bg-active-blue relative text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs mb-4 py-[0.15rem] px-4 text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5",
      children: t("archive.reinstate")
    }), showPopup && /* @__PURE__ */ jsx(WarningMessageToolTip, {
      mutationCallback: handleMutation,
      setShowPopup,
      text,
      customPosition
    })]
  });
};
const LoadArchivedContent = () => {
  const {
    data,
    loading,
    error,
    refetch: refetchArchives,
    networkStatus
  } = useUserArchivesQuery({
    variables: {},
    fetchPolicy: "network-only",
    notifyOnNetworkStatusChange: true
  });
  const isRefetching = networkStatus === NetworkStatus.refetch;
  const {
    refetchContentGroups,
    resetActiveTab
  } = useLearnerAccess();
  const onReinstateSuccessAsync = useCallback(async () => {
    var _a;
    const {
      data: refetchData
    } = await refetchArchives();
    if (refetchData && !((_a = refetchData.UserArchives) == null ? void 0 : _a.length)) {
      resetActiveTab();
    }
    await refetchContentGroups();
  }, [refetchContentGroups, refetchArchives, resetActiveTab]);
  if (loading || isRefetching)
    return /* @__PURE__ */ jsx(LoadingDots, {});
  if (error)
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  if (!data || !data.UserArchives)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsxs("div", {
    className: "py-6",
    children: [data.UserArchives.map((item) => /* @__PURE__ */ jsx("div", {
      className: "odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded border-blue-700",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-col w-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex flex-row basis-4/12",
            children: /* @__PURE__ */ jsx("div", {
              className: "flex items-center p-6 text-sm font-semibold font-primary",
              children: item.name
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row basis-8/12 justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex items-center text-sm font-semibold",
              children: item.resourceType
            }), /* @__PURE__ */ jsxs("div", {
              className: "col-start-12 col-span-2 text-center my-1.5 relative",
              children: [item.reinstatable && /* @__PURE__ */ jsx(ReinstateButton, {
                item,
                onReinstateSuccessAsync
              }), /* @__PURE__ */ jsxs("small", {
                className: "block text-gray-mid text-xs z-[-1] relative",
                children: [t("dashboard.archived"), " ", item.archivedAt && formatTime(item.archivedAt, void 0, "MMM D, YYYY")]
              })]
            })]
          })]
        })
      })
    }, item.id)), /* @__PURE__ */ jsx("hr", {})]
  });
};
const LoadBookmarks = () => {
  const {
    t: t2
  } = useTranslation();
  const {
    data: bookmarkFolders,
    loading,
    error,
    refetch: refetchBookmarkFolders
  } = useUserBookmarksQuery({
    variables: {},
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      var _a;
      if (((_a = data.UserBookmarks) == null ? void 0 : _a.length) && !selectedFolderId) {
        setSelectedFolderId(data.UserBookmarks[0].id);
      }
    }
  });
  const [selectedFolderId, setSelectedFolderId] = useState(void 0);
  const [bookmarkList, setBookmarkList] = useState(bookmarkFolders == null ? void 0 : bookmarkFolders.UserBookmarks);
  if (bookmarkList != (bookmarkFolders == null ? void 0 : bookmarkFolders.UserBookmarks)) {
    setBookmarkList(bookmarkFolders == null ? void 0 : bookmarkFolders.UserBookmarks);
  }
  const BookmarkFolderName = ({
    folder,
    refetchBookmarkFolders: refetchBookmarkFolders2
  }) => {
    const [editFolderName, setEditFolderName] = useState(false);
    const [folderName, setFolderName] = useState(folder.name);
    const [tryingToDelete, setTryingToDelete] = useState(false);
    const [updateBookmarkFolder] = useUpdateBookmarkFolderMutation();
    const [destroyBookmarkFolder] = useDestroyBookmarkFolderMutation();
    const handleDelete = () => {
      destroyBookmarkFolder({
        variables: {
          id: folder.id
        }
      }).then(() => {
        refetchBookmarkFolders2();
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
        refetchBookmarkFolders2();
        setEditFolderName(!editFolderName);
      });
    };
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [editFolderName && /* @__PURE__ */ jsxs("div", {
        className: "bookmark-folder__edit-name flex",
        children: [/* @__PURE__ */ jsx("div", {
          className: "ember-view input--large",
          children: /* @__PURE__ */ jsxs("div", {
            className: "ember-view new-form-label",
            children: [/* @__PURE__ */ jsx("script", {
              type: "text/x-placeholder"
            }), /* @__PURE__ */ jsxs("label", {
              className: "form__label",
              "data-bindattr-4061": "4061",
              children: [/* @__PURE__ */ jsx("div", {
                className: "form__label__container",
                "data-bindattr-4062": "4062"
              }), /* @__PURE__ */ jsx("div", {
                className: "form__input__container",
                "data-bindattr-4065": "4065",
                children: /* @__PURE__ */ jsx("input", {
                  onChange: (e) => setFolderName(e.target.value),
                  className: "h-10 leading-5 text-sm w-full focus:outline-none py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black transition shadow-sm border-gray-light",
                  type: "text",
                  value: folderName
                })
              })]
            })]
          })
        }), /* @__PURE__ */ jsx("button", {
          onClick: handleSave,
          className: "bg-active-blue text-accent-contrast rounded-sm cursor-pointer inline-block font-normal text-xs ml-2 h-10 mb-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5",
          children: /* @__PURE__ */ jsx("span", {
            children: t2("dashboard.bookmark-save")
          })
        }), /* @__PURE__ */ jsx("button", {
          onClick: () => {
            setEditFolderName(!editFolderName);
            setFolderName(folder.name);
          },
          className: "hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline",
          children: /* @__PURE__ */ jsx("span", {
            children: t2("bookmark.cancel")
          })
        })]
      }), !editFolderName && /* @__PURE__ */ jsxs("div", {
        className: "bookmark-folder bg-slate-100 pb-4",
        children: [/* @__PURE__ */ jsx("span", {
          className: "bookmark-folder-name text-gray-mid text-base px-3",
          children: folderName
        }), /* @__PURE__ */ jsxs("span", {
          children: [/* @__PURE__ */ jsxs("button", {
            onClick: () => setEditFolderName(!editFolderName),
            className: "btn btn--link btn--inherit-font btn--no-margin",
            children: [" ", /* @__PURE__ */ jsx(EditIcon, {})]
          }), /* @__PURE__ */ jsxs("div", {
            onClick: () => setTryingToDelete(!tryingToDelete),
            className: "inline-block ",
            children: [!tryingToDelete && /* @__PURE__ */ jsx("button", {
              className: "btn btn--bare-icon btn--small",
              children: /* @__PURE__ */ jsx(TrashIcon, {})
            }), tryingToDelete && /* @__PURE__ */ jsxs("span", {
              className: "confirm-action__confirm",
              children: [t2("bookmark.delete-confirmation"), /* @__PURE__ */ jsx("button", {
                className: "hover:text-hover",
                onClick: () => {
                  setTryingToDelete(false);
                },
                children: /* @__PURE__ */ jsx("span", {
                  children: t2("no")
                })
              }), "/", /* @__PURE__ */ jsx("button", {
                className: "hover:text-hover",
                onClick: () => {
                  setTryingToDelete(false);
                  if (confirm(t2("bookmark.delete-folder-confirmation"))) {
                    handleDelete();
                  }
                },
                children: /* @__PURE__ */ jsx("span", {
                  children: t2("yes")
                })
              })]
            })]
          })]
        })]
      })]
    });
  };
  const BookmarkItems = ({
    folderId
  }) => {
    const {
      data: bookmarks,
      refetch: refetchBookmark
    } = useUserBookmarksByFolderQuery({
      variables: {
        id: folderId
      },
      fetchPolicy: "network-only"
    });
    if (!bookmarks || !bookmarks.UserBookmarksByFolder)
      return null;
    return /* @__PURE__ */ jsx(Fragment, {
      children: bookmarks.UserBookmarksByFolder.map((item) => /* @__PURE__ */ jsx(BookmarkItem, {
        bookmark: item,
        folderId,
        refetchBookmark
      }, item.id))
    });
  };
  const BookmarkItem = ({
    bookmark,
    folderId,
    refetchBookmark
  }) => {
    var _a, _b;
    const [listViewDropDown, setListViewDropDown] = useState(false);
    const [editNotes, setEditNotes] = useState(false);
    const [notes, setNotes] = useState(bookmark.note || "");
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
    const kind = (_b = (_a = bookmark == null ? void 0 : bookmark.course) == null ? void 0 : _a.courseGroup) == null ? void 0 : _b.kind;
    let path = "";
    if (kind != void 0) {
      if (["courseGroup", "microCourse", "webinarCourse", "inPersonEventCourse"].includes(kind)) {
        path = `/learn/topic/${bookmark.topicId}/redirect`;
      } else {
        path = `/learn/${kind.toLowerCase()}/${"bookmark.course.slug"}`;
      }
    }
    return /* @__PURE__ */ jsxs("div", {
      className: `odd:bg-slate-100 text-black-light py-3 px-4 bg-white-mid rounded  ${listViewDropDown ? "border-l-4 border-blue-700 pb-4" : ""}`,
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex flex-col w-full",
        children: /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex flex-row basis-4/12",
            children: /* @__PURE__ */ jsx("div", {
              className: "flex items-center p-6 text-sm font-semibold font-primary",
              children: bookmark.course.title
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row basis-8/12 justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex items-center text-sm px-2 w-48",
              children: bookmark.note
            }), /* @__PURE__ */ jsx("a", {
              href: path,
              className: "flex items-center text-sm font-semibold text-blue-700",
              children: /* @__PURE__ */ jsx("div", {
                className: "",
                children: t2("bookmark.view")
              })
            }), /* @__PURE__ */ jsx("button", {
              className: "flex items-center pr-6",
              onClick: () => setListViewDropDown(!listViewDropDown),
              children: listViewDropDown ? /* @__PURE__ */ jsx("div", {
                className: "h-2",
                children: DropDownOpen
              }) : /* @__PURE__ */ jsx("div", {
                className: "h-2",
                children: DropDownClosed
              })
            })]
          })]
        })
      }), listViewDropDown && /* @__PURE__ */ jsxs("div", {
        className: "flex flex-row justify-between",
        children: [editNotes && /* @__PURE__ */ jsxs("div", {
          className: "flex items-center p-6 text-sm font-semibold font-primary",
          children: [/* @__PURE__ */ jsx("input", {
            className: "h-7 focus:outline-none text-xs py-1 px-2 bg-white rounded-none border-solid border box-border inline-block mx-0 mt-0 mb-4 p-2 text-black w-auto transition shadow-sm border-gray-light",
            type: "text",
            onChange: (e) => setNotes(e.target.value),
            value: notes
          }), /* @__PURE__ */ jsx("button", {
            onClick: handleSave,
            className: "text-white transition ease-in-out duration-200 border-gray-light border-solid border cursor-pointer inline-block font-normal text-sm mt-0 mr-0 mb-4 -ml-px pt-1.5 pb-2 px-4 relative text-center no-underline rounded-r-lg bg-[#405667] border-[#405667] hover:border-[#2c3c48] hover:bg-[#2c3c48] leading-3",
            children: t2("dashboard.bookmark-save")
          }), /* @__PURE__ */ jsx("button", {
            onClick: () => {
              setEditNotes(false);
              setNotes(bookmark.note || "");
            },
            className: "btn btn--bare btn--small",
            children: /* @__PURE__ */ jsx("span", {
              className: "hover:text-hover bg-transparent rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-4 relative shadow-none text-center no-underline",
              children: t2("bookmark.cancel")
            })
          }), /* @__PURE__ */ jsx("p", {})]
        }), !editNotes && /* @__PURE__ */ jsxs("p", {
          className: "flex items-center px-6 text-sm font-primary leading-6 mb-2",
          children: [bookmark.note + " ", /* @__PURE__ */ jsx("button", {
            onClick: () => setEditNotes(true),
            className: "px-2 btn btn--link btn--inherit-font btn--no-margin hover:text-hover",
            children: /* @__PURE__ */ jsx(EditIcon, {})
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "pr-2",
          children: /* @__PURE__ */ jsx("button", {
            onClick: () => {
              if (confirm(t2("bookmark.delete-confirmation"))) {
                handleDelete();
              }
            },
            className: "text-white text-xs shadow-none hover:text-hover bg-black px-4 py-2 rounded",
            children: /* @__PURE__ */ jsx("span", {
              children: t2("bookmark.remove")
            })
          })
        })]
      })]
    }, bookmark.id);
  };
  if (loading)
    return /* @__PURE__ */ jsx(LoadingDots, {});
  if (error)
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  if (!bookmarkFolders || !bookmarkFolders.UserBookmarks)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsx("div", {
    className: "mx-0 my-4 relative",
    children: /* @__PURE__ */ jsx("div", {
      className: "row-span-2",
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-col pl-4",
        children: selectedFolderId && (bookmarkList == null ? void 0 : bookmarkList.filter((item) => item.id === selectedFolderId).map((folder) => /* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx(BookmarkFolderName, {
            folder,
            refetchBookmarkFolders
          }), /* @__PURE__ */ jsx(BookmarkItems, {
            folderId: folder.id
          })]
        }, folder.id)))
      })
    })
  });
};
const ListViewSelector = /* @__PURE__ */ jsx("svg", {
  width: "18",
  height: "14",
  viewBox: "0 0 18 14",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /* @__PURE__ */ jsx("path", {
    d: "M1 13H17M1 1H17H1ZM1 7H17H1Z",
    stroke: "#6B7280",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })
});
const gridSelector = /* @__PURE__ */ jsxs("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/* @__PURE__ */ jsx("path", {
    d: "M1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V5C1 5.53043 1.21071 6.03914 1.58579 6.41421C1.96086 6.78929 2.46957 7 3 7H5C5.53043 7 6.03914 6.78929 6.41421 6.41421C6.78929 6.03914 7 5.53043 7 5V3C7 2.46957 6.78929 1.96086 6.41421 1.58579C6.03914 1.21071 5.53043 1 5 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579Z",
    stroke: "#6B7280",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ jsx("path", {
    d: "M11.5858 1.58579C11.2107 1.96086 11 2.46957 11 3V5C11 5.53043 11.2107 6.03914 11.5858 6.41421C11.9609 6.78929 12.4696 7 13 7H15C15.5304 7 16.0391 6.78929 16.4142 6.41421C16.7893 6.03914 17 5.53043 17 5V3C17 2.46957 16.7893 1.96086 16.4142 1.58579C16.0391 1.21071 15.5304 1 15 1H13C12.4696 1 11.9609 1.21071 11.5858 1.58579Z",
    stroke: "#6B7280",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ jsx("path", {
    d: "M1.58579 11.5858C1.21071 11.9609 1 12.4696 1 13V15C1 15.5304 1.21071 16.0391 1.58579 16.4142C1.96086 16.7893 2.46957 17 3 17H5C5.53043 17 6.03914 16.7893 6.41421 16.4142C6.78929 16.0391 7 15.5304 7 15V13C7 12.4696 6.78929 11.9609 6.41421 11.5858C6.03914 11.2107 5.53043 11 5 11H3C2.46957 11 1.96086 11.2107 1.58579 11.5858Z",
    stroke: "#6B7280",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /* @__PURE__ */ jsx("path", {
    d: "M11.5858 11.5858C11.2107 11.9609 11 12.4696 11 13V15C11 15.5304 11.2107 16.0391 11.5858 16.4142C11.9609 16.7893 12.4696 17 13 17H15C15.5304 17 16.0391 16.7893 16.4142 16.4142C16.7893 16.0391 17 15.5304 17 15V13C17 12.4696 16.7893 11.9609 16.4142 11.5858C16.0391 11.2107 15.5304 11 15 11H13C12.4696 11 11.9609 11.2107 11.5858 11.5858Z",
    stroke: "#6B7280",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })]
});
const LearnerAccessGridView = ({
  item
}) => {
  const {
    appearance
  } = usePageContext();
  const companyLogo = (appearance == null ? void 0 : appearance.logoAsset) ? appearance == null ? void 0 : appearance.logoAsset : logoImage;
  return /* @__PURE__ */ jsxs("div", {
    className: "m-8",
    children: [/* @__PURE__ */ jsx("div", {
      className: "flex justify-center border rounded-t-md",
      children: /* @__PURE__ */ jsx("div", {
        children: /* @__PURE__ */ jsx("img", {
          src: companyLogo,
          className: "p-12 max-w-12"
        })
      })
    }), /* @__PURE__ */ jsxs("div", {
      className: "p-8 border rounded-b-md space-y-4",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-lg font-semibold",
        children: item.title
      }), /* @__PURE__ */ jsx("div", {
        className: "text-gray-500 text-sm font-semibold",
        children: item.displayDate ? /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row",
          children: [/* @__PURE__ */ jsx("div", {
            children: item.contentTypeLabel
          }), /* @__PURE__ */ jsx("div", {
            children: "|"
          }), /* @__PURE__ */ jsx("div", {
            children: item.displayDate
          })]
        }) : /* @__PURE__ */ jsx("div", {
          children: item.contentTypeLabel
        })
      }), /* @__PURE__ */ jsx("div", {
        className: item.description ? "py-4" : "",
        children: item.description
      }), /* @__PURE__ */ jsx("hr", {
        className: ""
      }), /* @__PURE__ */ jsx("a", {
        href: item.href,
        className: "flex justify-end text-blue-700",
        children: /* @__PURE__ */ jsx("div", {
          className: "",
          children: item.callToAction
        })
      })]
    })]
  });
};
const LearnerAccessListDisplayDropDown = ({
  item
}) => {
  var _a;
  const {
    data
  } = useUserCourseCompletionProgressQuery({
    variables: {
      id: item.id
    },
    fetchPolicy: "network-only"
  });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("hr", {
      className: "bg-gray-500"
    }), /* @__PURE__ */ jsxs("div", {
      className: clsx("flex flex-col bg-slate-50 space-y-6 border-l-4 border-blue-700", item.description ? "p-6" : "px-6 pt-6"),
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex flex-row",
        children: /* @__PURE__ */ jsx("div", {
          className: "py-1 px-3 rounded-full bg-green-200",
          children: /* @__PURE__ */ jsx("div", {
            className: "text-sm font-semibold",
            children: item.contentTypeLabel
          })
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "flex flex-row justify-between gap-4",
        children: (_a = data == null ? void 0 : data.UserCourseCompletionProgress) == null ? void 0 : _a.map((item2) => {
          var _a2, _b, _c;
          return (item2 == null ? void 0 : item2.type) !== "coursePercentViewed" && /* @__PURE__ */ jsx("div", {
            className: "flex flex-grow pl-6 py-6 bg-white rounded-md",
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex flex-col",
              children: [/* @__PURE__ */ jsx("div", {
                className: "text-sm text-gray-500",
                children: (_a2 = item2 == null ? void 0 : item2.type) == null ? void 0 : _a2.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1")
              }), /* @__PURE__ */ jsx("div", {
                className: "text-3xl font-bold pt-2",
                children: item2.required && item2.completed ? /* @__PURE__ */ jsxs(Fragment, {
                  children: [(_b = item2.completed) == null ? void 0 : _b.length, "/", (_c = item2.required) == null ? void 0 : _c.length]
                }) : "N/A"
              })]
            })
          });
        })
      }), item.description && /* @__PURE__ */ jsx("div", {
        className: "text-sm font-semibold",
        children: item.description
      })]
    })]
  });
};
const LearnerAccessDisplayListView = ({
  item
}) => {
  var _a;
  const [listViewDropDown, setListViewDropDown] = useState(false);
  const {
    appearance
  } = usePageContext();
  const companyLogo = (appearance == null ? void 0 : appearance.logoAsset) ? appearance == null ? void 0 : appearance.logoAsset : logoImage;
  const {
    data
  } = useUserCourseCompletionProgressQuery({
    variables: {
      id: item.id
    },
    fetchPolicy: "network-only"
  });
  const courseAsset = item.asset ? item.asset : companyLogo;
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: clsx("flex flex-col w-full", listViewDropDown && "border-1-4 border-blue-700"),
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex flex-row basis-8/12",
        children: [/* @__PURE__ */ jsxs("div", {
          className: "flex flex-row basis-8/12",
          children: [/* @__PURE__ */ jsx("div", {
            className: "py-4 pl-6 basis-4/12",
            children: /* @__PURE__ */ jsx("div", {
              className: "flex justify-center",
              children: /* @__PURE__ */ jsx("img", {
                src: courseAsset,
                className: clsx("rounded-md", !item.asset && "md:h-20 lg:h-32 py-4")
              })
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "flex items-center px-6 text-sm font-semibold font-primary",
            children: item.title
          })]
        }), /* @__PURE__ */ jsxs("div", {
          className: "flex flex-row basis-4/12 justify-between",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex items-center pr-6 text-sm font-semibold font-primary text-gray-500",
            children: (_a = data == null ? void 0 : data.UserCourseCompletionProgress) == null ? void 0 : _a.map((item2, i) => /* @__PURE__ */ jsx("div", {
              children: item2.type === "coursePercentViewed" && item2.percent + "% Completed"
            }, i))
          }), /* @__PURE__ */ jsx("a", {
            href: item.href,
            className: "flex items-center text-sm font-semibold text-blue-700",
            children: /* @__PURE__ */ jsx("div", {
              className: "",
              children: item.callToAction
            })
          }), /* @__PURE__ */ jsx("button", {
            className: "flex items-center pr-6",
            onClick: () => setListViewDropDown(!listViewDropDown),
            children: listViewDropDown ? /* @__PURE__ */ jsx("div", {
              className: "h-2",
              children: DropDownOpen
            }) : /* @__PURE__ */ jsx("div", {
              className: "h-2",
              children: DropDownClosed
            })
          })]
        })]
      })
    }), listViewDropDown && /* @__PURE__ */ jsx(LearnerAccessListDisplayDropDown, {
      item
    })]
  });
};
const LoadUserLearning = ({
  query,
  kind,
  sortColumn,
  sortDirection
}) => {
  const [gridViewActive, setGridActive] = useState(true);
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setGridActive(true);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const {
    data,
    loading,
    error
  } = useUserContentItemsQuery({
    variables: {
      query,
      kind,
      sortColumn,
      sortDirection
    },
    fetchPolicy: "network-only"
  });
  const {
    i18n
  } = useTranslation();
  const DisplayListView = ({
    item
  }) => {
    return /* @__PURE__ */ jsx(LearnerAccessDisplayListView, {
      item
    });
  };
  const DisplayGridView = ({
    item
  }) => {
    return /* @__PURE__ */ jsx(LearnerAccessGridView, {
      item
    });
  };
  if (loading)
    return /* @__PURE__ */ jsx(LoadingDots, {});
  if (error)
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  if (!data || !data.UserContentItems)
    return /* @__PURE__ */ jsx(Fragment, {});
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs("div", {
      className: "hidden sm:flex justify-end p-3",
      children: [/* @__PURE__ */ jsx("button", {
        className: clsx("flex border rounded-l-md w-9 h-9 place-content-center items-center", !gridViewActive && "bg-blue-600"),
        onClick: () => setGridActive(false),
        children: /* @__PURE__ */ jsx("div", {
          children: ListViewSelector
        })
      }), /* @__PURE__ */ jsx("button", {
        className: clsx("flex border rounded-r-md w-9 h-9 place-content-center items-center", gridViewActive && "bg-blue-600"),
        onClick: () => setGridActive(true),
        children: /* @__PURE__ */ jsx("div", {
          children: gridSelector
        })
      })]
    }), /* @__PURE__ */ jsxs("div", {
      className: clsx(gridViewActive ? "grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "sm:flex flex-col w-full hidden"),
      children: [!gridViewActive && /* @__PURE__ */ jsxs("div", {
        className: "flex flex-row bg-slate-50 px-6 py-3 rounded-t-md",
        children: [/* @__PURE__ */ jsx("div", {
          className: "text-sm font-semibold basis-8/12",
          children: "Title"
        }), /* @__PURE__ */ jsx("div", {
          className: "text-sm font-semibold basis-4/12",
          children: "Progress"
        })]
      }), data.UserContentItems.map((item) => {
        const hydratedItem = hydrateContentItem(i18n, item);
        if (hydratedItem.isCompleted) {
          return null;
        }
        return /* @__PURE__ */ jsx(Fragment, {
          children: gridViewActive ? /* @__PURE__ */ jsx(DisplayGridView, {
            item: hydratedItem
          }, item.id) : /* @__PURE__ */ jsx("div", {
            className: "odd:bg-slate-50 even:bg-white",
            children: /* @__PURE__ */ jsx(DisplayListView, {
              item: hydratedItem
            }, item.id)
          }, item.id)
        });
      })]
    })]
  });
};
const Certificate = ({
  item
}) => {
  const {
    i18n
  } = useTranslation();
  const contentItem = item.contentItem;
  const hydratedContentItem = hydrateContentItem(i18n, contentItem);
  return /* @__PURE__ */ jsx(LearnerAccessGridView, {
    item: hydratedContentItem
  });
};
const CertificateUploader = ({
  setShowForm
}) => {
  return /* @__PURE__ */ jsx("div", {
    className: "my-0 mx-auto max-w-full w-full",
    children: /* @__PURE__ */ jsx("div", {
      className: "px-4",
      children: /* @__PURE__ */ jsxs("button", {
        onClick: () => setShowForm((prev) => !prev),
        className: "rounded-sm cursor-pointer inline-block font-normal text-sm mx-0 mt-0 mb-4 py-2 px-5 relative text-center no-underline bg-grey-light duration-200 transition ease-in-out bg-active-blue border-active-blue text-accent-contrast leading-5",
        children: [/* @__PURE__ */ jsx(UploadIcon, {}), /* @__PURE__ */ jsx("span", {
          className: "ml-4",
          children: t("external-certificate.upload")
        })]
      })
    })
  });
};
const CertificateUploadForm = ({
  setShowForm
}) => {
  var _a;
  const [showFileImage, setShowFileImage] = useState(false);
  const [imageFromUpload, setImageFromUpload] = useState("");
  const {
    data: certificateUploadFields
  } = useUserCertificateFieldsQuery({
    variables: {}
  });
  const uploadFields = (_a = certificateUploadFields == null ? void 0 : certificateUploadFields.UserCertificateFields) == null ? void 0 : _a.map((certificateField) => ({
    certificateFieldId: certificateField.id,
    ...certificateField
  }));
  const [createCertificateFromUploadMutation] = useCreateCertificateFromUploadMutation({
    variables: {
      asset: imageFromUpload,
      certificateUploadFields: uploadFields
    }
  });
  const handleFileChange = (e) => {
    var _a2;
    const files = e.target.files[0];
    const reader = new FileReader();
    setShowFileImage(true);
    if (files)
      reader.readAsDataURL(files);
    const url = (_a2 = reader == null ? void 0 : reader.result) == null ? void 0 : _a2.toString();
    reader.onload = () => {
      setImageFromUpload(url || "");
    };
  };
  return /* @__PURE__ */ jsx("div", {
    className: "border-solid p-4 text-black-light border-gray-light border-b last:border-b-0",
    children: /* @__PURE__ */ jsxs("form", {
      className: "",
      children: [/* @__PURE__ */ jsx("p", {
        className: "font-normal mb-4 leading-[1.45rem]",
        children: !showFileImage && /* @__PURE__ */ jsx("span", {
          id: "i18n-323",
          children: t("external-certificate.instructions")
        })
      }), /* @__PURE__ */ jsxs("div", {
        className: "flex justify-evenly",
        children: [/* @__PURE__ */ jsx("div", {
          className: "w-full",
          children: /* @__PURE__ */ jsx("div", {
            className: "row",
            children: /* @__PURE__ */ jsx("div", {
              className: "float-left px-4 relative",
              children: /* @__PURE__ */ jsx("div", {
                className: "ember-view input__container",
                children: !showFileImage ? /* @__PURE__ */ jsx("input", {
                  className: "border-none btn btn--expand btn--bare rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 w-full",
                  type: "file",
                  name: "file",
                  "aria-label": "file",
                  onChange: (e) => {
                    handleFileChange(e);
                  }
                }) : /* @__PURE__ */ jsxs(Fragment, {
                  children: [/* @__PURE__ */ jsx("img", {
                    className: "ember-view",
                    src: imageFromUpload,
                    alt: "External Certificate"
                  }), /* @__PURE__ */ jsxs("button", {
                    onClick: () => setShowFileImage(false),
                    className: "flex items-center justify-end h-auto border-[#405667] text-[#405667] text-right bg-none rounded-none border-solid border-t-4 clear-both font-bold p-0 shadow-none w-full",
                    children: [t("remove") + " " + t("wysiwyg.image"), /* @__PURE__ */ jsx(RepeatIcon, {})]
                  })]
                })
              })
            })
          })
        }), /* @__PURE__ */ jsxs("div", {
          className: "w-full flex flex-col text-base py-3 px-4 text-gray-mid",
          children: [/* @__PURE__ */ jsx("div", {
            className: "row",
            children: /* @__PURE__ */ jsxs("div", {
              className: "float-left px-4 relative w-full",
              children: [/* @__PURE__ */ jsxs("div", {
                className: "ember-view",
                children: [/* @__PURE__ */ jsx("label", {
                  children: t("certificate.issued-date")
                }), /* @__PURE__ */ jsx("div", {
                  className: "ember-view input__wrapper input__wrapper--clear",
                  children: /* @__PURE__ */ jsx("input", {
                    className: "focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer",
                    type: "text",
                    onBlur: (e) => e.target.type = "text",
                    onFocus: (e) => e.target.type = "date"
                  })
                })]
              }), /* @__PURE__ */ jsxs("div", {
                className: "ember-view",
                children: [/* @__PURE__ */ jsx("label", {
                  children: t("certificate.expiration-date")
                }), /* @__PURE__ */ jsx("div", {
                  className: "mb-4",
                  children: /* @__PURE__ */ jsx("input", {
                    className: "focus:outline-none h-10 mb-4 text-base py-2 px-4 w-full bg-white rounded-none border-solid border box-border block mx-0 mt-0 p-2 text-black cursor-pointer",
                    type: "text",
                    onBlur: (e) => e.target.type = "text",
                    onFocus: (e) => e.target.type = "date"
                  })
                })]
              })]
            })
          }), /* @__PURE__ */ jsx("div", {
            className: "flex justify-end px-4",
            children: /* @__PURE__ */ jsxs("div", {
              className: "flex",
              children: [/* @__PURE__ */ jsx("button", {
                onClick: () => {
                  setShowForm((showForm) => !showForm);
                  setShowFileImage(false);
                },
                "data-ember-action": "28579",
                className: "bg-white text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-black w-full",
                children: t("external-certificate.cancel")
              }), /* @__PURE__ */ jsx("button", {
                onClick: () => createCertificateFromUploadMutation(),
                className: "bg-active-blue rounded-sm text-xs box-border cursor-pointer block h-10 mx-0 mt-0 mb-4 py-1 px-4 text-white w-full",
                children: t("external-certificate.submit")
              })]
            })
          })]
        })]
      })]
    })
  });
};
const LoadCertificates = ({
  query,
  displayExpiredCertificateInformation
}) => {
  var _a;
  const [showForm, setShowForm] = useState(false);
  const {
    data,
    loading,
    error
  } = useUserCertificatesQuery({
    variables: {
      query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    },
    fetchPolicy: "network-only"
  });
  const {
    companyEnableExternalCertificateUploads
  } = useLearnerAccess();
  if (loading)
    return /* @__PURE__ */ jsx(LoadingDots, {});
  if (error)
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  if (showForm)
    return /* @__PURE__ */ jsx(CertificateUploadForm, {
      setShowForm
    });
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      className: "grid gap-5 self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      children: (_a = data == null ? void 0 : data.UserCertificates) == null ? void 0 : _a.map((item) => /* @__PURE__ */ jsx(Certificate, {
        item
      }, item.id))
    }), !!companyEnableExternalCertificateUploads && /* @__PURE__ */ jsx(CertificateUploader, {
      setShowForm
    })]
  });
};
const getAvailableTabs = (contentGroups, userHasManagerInterfaceAccess, companyEnableExternalCertificateUploads, companyHasWaitlistingFeature) => {
  const tabs = [];
  const contentGroupList = contentGroups.reduce((list, { kind, count }) => {
    list[kind] = count;
    return list;
  }, {});
  if (contentGroupList.contentItems || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.Current,
      count: contentGroupList.contentItems || 0
    });
  }
  if (contentGroupList.eventItems || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.Events,
      count: contentGroupList.eventItems || 0
    });
  }
  if (contentGroupList.learningPaths || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.LearningPath,
      count: contentGroupList.learningPaths || 0
    });
  }
  if (contentGroupList.completedItems || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.Completed,
      count: contentGroupList.completedItems || 0
    });
  }
  if (contentGroupList.archivedContentItems || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.Archived,
      count: contentGroupList.archivedContentItems || 0
    });
  }
  if (contentGroupList.bookmarkFolders) {
    tabs.push({
      key: TabKey.Bookmark,
      count: contentGroupList.bookmarkFolders
    });
  }
  if (contentGroupList.certificates || companyEnableExternalCertificateUploads || userHasManagerInterfaceAccess) {
    tabs.push({
      key: TabKey.Certificate,
      count: contentGroupList.certificates || 0
    });
  }
  if (companyHasWaitlistingFeature && contentGroupList.waitlistedCourses) {
    tabs.push({
      key: TabKey.Waitlist,
      count: contentGroupList.waitlistedCourses
    });
  }
  return tabs;
};
const localizedTabLabelMapping = {
  [TabKey.Current]: "dashboard.current",
  [TabKey.Events]: "dashboard.events",
  [TabKey.LearningPath]: "learning-path",
  [TabKey.Completed]: "dashboard.completed",
  [TabKey.Archived]: "dashboard.archived",
  [TabKey.Bookmark]: "dashboard.bookmark",
  [TabKey.Certificate]: "dashboard.certificates",
  [TabKey.Waitlist]: "dashboard.waitlisted"
};
const LearnerAccess = ({
  displayExpiredCertificateInformation,
  query,
  userHasManagerInterfaceAccess,
  companyEnableExternalCertificateUploads,
  companyHasWaitlistingFeature
}) => {
  const [activeTabKey, setActiveTabKey] = useState(void 0);
  const [availableTabs, setAvailableTabs] = useState([]);
  const [button, setButton] = useState(false);
  const [dropDownActive, setDropDownActive] = useState(false);
  const {
    loading,
    error,
    refetch: refetchContentGroups
  } = useContentGroupsQuery({
    variables: {
      query,
      includeExpiredCertificates: displayExpiredCertificateInformation
    },
    onCompleted: (data) => {
      const newAvailableTabs = getAvailableTabs(data.UserContentGroups || [], userHasManagerInterfaceAccess, companyEnableExternalCertificateUploads, companyHasWaitlistingFeature);
      if (activeTabKey && !newAvailableTabs.find(({
        key
      }) => key === activeTabKey)) {
        setActiveTabKey(void 0);
      } else if (!activeTabKey && newAvailableTabs.length) {
        setActiveTabKey(newAvailableTabs[0].key);
      }
      setAvailableTabs(newAvailableTabs);
    }
  });
  const handleResize = () => {
    setButton(window.innerWidth < 640);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const {
    t: t2
  } = useTranslation();
  const resetActiveTab = useCallback(() => setActiveTabKey(availableTabs.length ? availableTabs[0].key : void 0), [availableTabs]);
  if (loading) {
    return /* @__PURE__ */ jsx(LoadingDots, {});
  }
  if (error) {
    return /* @__PURE__ */ jsx(Fragment, {
      children: error.message
    });
  }
  const handleTabSelection = (currentTabKey) => {
    setActiveTabKey(currentTabKey);
  };
  const TabButton = () => {
    return /* @__PURE__ */ jsxs(Fragment, {
      children: [/* @__PURE__ */ jsxs("button", {
        className: "flex justify-between rounded-md py-3 pl-4 pr-3 border w-full text-md font-medium",
        onClick: () => setDropDownActive(!dropDownActive),
        children: [activeTabKey, dropDownActive ? /* @__PURE__ */ jsx("div", {
          className: "pt-2",
          children: DropDownOpen
        }) : /* @__PURE__ */ jsx("div", {
          className: "pt-2",
          children: DropDownClosed
        })]
      }), dropDownActive && /* @__PURE__ */ jsx("div", {
        className: "border mt-2 rounded-md",
        children: availableTabs.map(({
          key
        }, index) => {
          const activeTabClassName = key === activeTabKey ? "font-bold underline" : "";
          return /* @__PURE__ */ jsx(Fragment, {
            children: /* @__PURE__ */ jsx("div", {
              className: "flex my-auto space-x-6 mx-auto md:block",
              children: /* @__PURE__ */ jsx("ul", {
                className: "items-center justify-between p-5 space-y-3 md:space-y-0 md:flex md:space-x-6 w-full",
                children: /* @__PURE__ */ jsx("li", {
                  children: /* @__PURE__ */ jsx("button", {
                    onClick: () => {
                      handleTabSelection(key);
                    },
                    className: activeTabClassName,
                    children: /* @__PURE__ */ jsx("span", {
                      children: t2(localizedTabLabelMapping[key])
                    })
                  })
                }, index)
              })
            })
          });
        })
      })]
    });
  };
  const dashboardAccessTabs = /* @__PURE__ */ jsx(Fragment, {
    children: button ? /* @__PURE__ */ jsx(TabButton, {}) : /* @__PURE__ */ jsx("ul", {
      className: "items-center pt-4 md:space-y-0 sm:flex sm:space-x-6 w-full",
      role: "tablist",
      children: availableTabs.map(({
        key
      }, index) => {
        const activeTabClassName = key === activeTabKey ? "py-3 font-semibold border-b border-blue-500" : "";
        return /* @__PURE__ */ jsx(Fragment, {
          children: /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("button", {
              onClick: () => {
                handleTabSelection(key);
              },
              className: activeTabClassName,
              children: /* @__PURE__ */ jsx("span", {
                children: t2(localizedTabLabelMapping[key])
              })
            })
          }, index)
        });
      })
    })
  });
  const tabContent = () => {
    switch (activeTabKey) {
      case TabKey.Current:
        return /* @__PURE__ */ jsx(LoadUserLearning, {
          query,
          kind: (ContentKind.CourseGroup, ContentKind.Article, ContentKind.Video, ContentKind.ShareableContentObject, ContentKind.XApiObject)
        });
      case TabKey.Events:
        return /* @__PURE__ */ jsx(LoadUserLearning, {
          query,
          kind: (ContentKind.Webinar, ContentKind.Webinar, ContentKind.InPersonEvent, ContentKind.InPersonEventCourse),
          sortColumn: SortColumn.DisplayDate
        });
      case TabKey.LearningPath:
        return /* @__PURE__ */ jsx(LoadUserLearning, {
          query,
          kind: ContentKind.LearningPath
        });
      case TabKey.Completed:
        return /* @__PURE__ */ jsx(LoadUserLearning, {
          query,
          kind: (ContentKind.LearningPath, ContentKind.CourseGroup, ContentKind.Article, ContentKind.Video, ContentKind.ShareableContentObject, ContentKind.XApiObject, ContentKind.Webinar, ContentKind.Webinar, ContentKind.InPersonEvent, ContentKind.InPersonEventCourse)
        });
      case TabKey.Archived:
        return /* @__PURE__ */ jsx(LoadArchivedContent, {});
      case TabKey.Bookmark:
        return /* @__PURE__ */ jsx(LoadBookmarks, {});
      case TabKey.Waitlist:
        return /* @__PURE__ */ jsx(LoadWaitlist, {});
      case TabKey.Certificate:
        return /* @__PURE__ */ jsx(LoadCertificates, {
          query,
          displayExpiredCertificateInformation
        });
      default:
        return /* @__PURE__ */ jsx(Fragment, {});
    }
  };
  return /* @__PURE__ */ jsx(LearnerAccessContext.Provider, {
    value: {
      refetchContentGroups,
      resetActiveTab,
      companyEnableExternalCertificateUploads
    },
    children: /* @__PURE__ */ jsxs("div", {
      className: "pt-16 px-10 pb-20",
      children: [/* @__PURE__ */ jsx("div", {
        className: "text-2xl font-bold font-header",
        children: "Activity"
      }), /* @__PURE__ */ jsx("div", {
        className: "max-w-none w-auto text-slate-700 text-black-light text-sm",
        children: /* @__PURE__ */ jsxs("div", {
          className: "",
          children: [dashboardAccessTabs, !button && /* @__PURE__ */ jsx("hr", {
            className: ""
          }), tabContent()]
        })
      })]
    })
  });
};
LearnerAccess.displayName = "LearnerAccessWidget";
const documentProps = {
  title: "Dashboard Page",
  description: "The dashboard page"
};
function Page() {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs("div", {
      className: "font-primary",
      children: [/* @__PURE__ */ jsx(NavBar, {}), /* @__PURE__ */ jsx(Banner, {
        heading: "My Dashboard",
        subtext: "Your Dashboard is your game-changing collaborative space where you can view all your learning in one place."
      }), /* @__PURE__ */ jsx(LearnerAccess, {
        companyHasWaitlistingFeature: true
      }), /* @__PURE__ */ jsx(FeaturedContentComp, {
        onAddedToQueue: function(item) {
          throw new Error("Function not implemented.");
        },
        numberOfContentItems: 3
      }), /* @__PURE__ */ jsx(Footer, {})]
    })
  });
}
export {
  Page,
  documentProps
};
