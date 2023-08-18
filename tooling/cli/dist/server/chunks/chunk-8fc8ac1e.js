var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
  return value;
};
import { L as Logo } from './chunk-a091ce35.js';
import { j as jsx, F as Fragment, a as jsxs } from './chunk-7df435e3.js';
import { u as usePageContext } from './chunk-ab44b266.js';
import React, { useState, createContext, useRef, useEffect, useCallback } from 'react';
import 'react/jsx-runtime';
import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import { useTranslation } from 'react-i18next';
import { useDebouncedCallback } from 'use-debounce';
import clsx from 'clsx';
const Footer = () => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsxs('div', {
      className: 'pt-2 pb-6',
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'flex justify-center',
          children: /* @__PURE__ */ jsx('div', {
            className: 'flex m-5 mx-auto',
            children: /* @__PURE__ */ jsx(Logo, {
              size: 'small'
            })
          })
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'flex text-slate-500 space-x-6 justify-center font-semibold',
          children: [
            /* @__PURE__ */ jsx('a', {
              href: '/',
              children: 'Home'
            }),
            /* @__PURE__ */ jsx('a', {
              href: '/catalog',
              children: 'Catalog'
            }),
            /* @__PURE__ */ jsx('a', {
              href: '#',
              children: 'Help'
            })
          ]
        }),
        /* @__PURE__ */ jsx('hr', {
          className: 'my-5'
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'flex justify-center text-slate-500 font-normal',
          children: '\xA9 2022, Astro Theme Powered by Thought Industries'
        })
      ]
    })
  });
};
const Xicon = /* @__PURE__ */ jsx('svg', {
  width: '22',
  height: '22',
  viewBox: '0 0 22 22',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  children: /* @__PURE__ */ jsx('path', {
    d: 'M1 1L21 21M1 21L21 1L1 21Z',
    stroke: '#6B7280',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
});
const Avatar = props => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;
  let avatarSize;
  if (props.size === 'large') {
    avatarSize = avatarSize = 'h-13 w-13';
  } else if (props.size === 'small') {
    avatarSize = avatarSize = 'h-9 w-9';
  } else {
    avatarSize = 'h-11 w-11';
  }
  let snippet;
  if (currentUser == null ? void 0 : currentUser.asset) {
    snippet = /* @__PURE__ */ jsx('img', {
      src: currentUser == null ? void 0 : currentUser.asset,
      className: `${avatarSize} rounded-full`
    });
  } else {
    try {
      if (
        (currentUser == null ? void 0 : currentUser.firstName) &&
        (currentUser == null ? void 0 : currentUser.lastName)
      ) {
        const userInitials =
          (currentUser == null ? void 0 : currentUser.firstName.split('')[0]) +
          (currentUser == null ? void 0 : currentUser.lastName.split('')[0]);
        snippet = /* @__PURE__ */ jsx('div', {
          className: `${avatarSize} bg-slate-50 rounded-full font-bold`,
          children: /* @__PURE__ */ jsx('div', {
            className: 'p-2.5',
            children: userInitials
          })
        });
      }
    } catch (err) {
      snippet = err;
    }
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: snippet
  });
};
function CurrentUserSmallScreenNavBar() {
  const [navbar, setNavbar] = useState(false);
  return /* @__PURE__ */ jsx('nav', {
    className: 'w-full bg-white shadow py-4',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'justify-between px-4 md:items-center md:flex',
      children: [
        /* @__PURE__ */ jsx('div', {
          children: /* @__PURE__ */ jsxs('div', {
            className: 'flex items-center justify-between md:block',
            children: [
              /* @__PURE__ */ jsx('div', {
                className: '',
                children: /* @__PURE__ */ jsx(Logo, {
                  size: ''
                })
              }),
              /* @__PURE__ */ jsx('div', {
                className: 'md:hidden',
                children: /* @__PURE__ */ jsx('div', {
                  className:
                    'p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border',
                  onClick: () => setNavbar(!navbar),
                  children: navbar
                    ? /* @__PURE__ */ jsx('button', {
                        id: 'icon',
                        type: 'submit',
                        className: 'block h-9 w-9 md:hidden',
                        onClick: () => setNavbar(!navbar),
                        children: /* @__PURE__ */ jsx('div', {
                          children: Xicon
                        })
                      })
                    : /* @__PURE__ */ jsx('button', {
                        id: 'icon',
                        type: 'submit',
                        className: 'block md:hidden',
                        onClick: () => setNavbar(!navbar),
                        children: /* @__PURE__ */ jsx(Avatar, {
                          size: ''
                        })
                      })
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: `flex my-auto space-x-6 mx-auto md:block ${navbar ? 'block' : 'hidden'}`,
          children: /* @__PURE__ */ jsxs('ul', {
            className:
              'items-center justify-between space-y-3 pt-4 md:space-y-0 md:flex md:space-x-6 w-full',
            children: [
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/',
                  children: 'Home'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/catalog',
                  children: 'Catalog'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/support',
                  children: 'Help'
                })
              }),
              /* @__PURE__ */ jsx('hr', {}),
              /* @__PURE__ */ jsxs('div', {
                className: 'flex',
                children: [
                  /* @__PURE__ */ jsx(Avatar, {
                    size: ''
                  }),
                  /* @__PURE__ */ jsx('div', {
                    className: 'mx-3 my-auto',
                    children: /* @__PURE__ */ jsx('button', {
                      className: 'hover:text-blue-700',
                      children: /* @__PURE__ */ jsx('a', {
                        href: 'learn/account?tab=dashboard.account_profile',
                        children: 'My Profile'
                      })
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsx('hr', {}),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                children: /* @__PURE__ */ jsx('a', {
                  href: 'learn/account?tab=dashboard.account',
                  children: 'Account'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: /* @__PURE__ */ jsx('a', {
                  href: 'learn/transcript',
                  children: 'Transcript'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/support',
                  children: 'Support'
                })
              }),
              /* @__PURE__ */ jsx('hr', {}),
              /* @__PURE__ */ jsx('a', {
                href: '/learn/sign_out',
                children: /* @__PURE__ */ jsx('div', {
                  className: 'text-center pt-5 text-sm text-blue-900 hover:text-blue-700',
                  children: 'Sign out'
                })
              }),
              /* @__PURE__ */ jsx('hr', {})
            ]
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'hidden md:block',
          children: /* @__PURE__ */ jsx('button', {
            className:
              'hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:block',
            children: 'Sign in'
          })
        })
      ]
    })
  });
}
const DropDownClosed = /* @__PURE__ */ jsx('svg', {
  width: '14',
  height: '8',
  viewBox: '0 0 14 8',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  children: /* @__PURE__ */ jsx('path', {
    d: 'M12.8333 1L6.99996 6.83333L1.16663 1',
    stroke: '#6B7280',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
});
const DropDownOpen = /* @__PURE__ */ jsx('svg', {
  width: '14',
  height: '8',
  viewBox: '0 0 14 8',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  children: /* @__PURE__ */ jsx('path', {
    d: 'M1.16666 7L6.99999 1.16667L12.8333 7',
    stroke: '#6B7280',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
});
function CurrentUserNavBar() {
  const [navbar, setNavbar] = useState(false);
  return /* @__PURE__ */ jsx('nav', {
    className: 'w-full bg-white shadow py-4',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'flex flex-row',
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'basis-1/4',
          children: /* @__PURE__ */ jsx('div', {
            className: 'pl-2',
            children: /* @__PURE__ */ jsx(Logo, {
              size: ''
            })
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: `flex basis-1/2 md:block ${navbar ? 'block' : 'hidden'}`,
          children: /* @__PURE__ */ jsxs('ul', {
            className: 'flex justify-center items-center md:flex',
            children: [
              /* @__PURE__ */ jsx('li', {
                className:
                  'flex justify-start md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/dashboard',
                  children: 'Dashboard'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className:
                  'flex justify-center md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/catalog',
                  children: 'Catalog'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/support',
                  children: 'Help'
                })
              }),
              /* @__PURE__ */ jsx('hr', {})
            ]
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'flex basis-1/4 justify-end',
          children: /* @__PURE__ */ jsx('div', {
            className: '',
            children: /* @__PURE__ */ jsx('button', {
              id: 'icon',
              type: 'submit',
              className: '',
              onClick: () => setNavbar(!navbar),
              children: /* @__PURE__ */ jsxs('div', {
                className: 'flex items-center space-x-3 mr-3',
                children: [
                  /* @__PURE__ */ jsx(Avatar, {
                    size: ''
                  }),
                  navbar
                    ? /* @__PURE__ */ jsxs('div', {
                        children: [DropDownOpen, ' ']
                      })
                    : /* @__PURE__ */ jsx('div', {
                        children: DropDownClosed
                      })
                ]
              })
            })
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: `${
            navbar ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white`,
          children: /* @__PURE__ */ jsx('div', {
            className: '',
            children: /* @__PURE__ */ jsxs('ul', {
              className: 'space-y-2',
              children: [
                /* @__PURE__ */ jsxs('div', {
                  className: 'flex py-5',
                  children: [
                    /* @__PURE__ */ jsx(Avatar, {
                      size: 'small'
                    }),
                    /* @__PURE__ */ jsx('div', {
                      className: 'mx-3 my-auto',
                      children: /* @__PURE__ */ jsx('button', {
                        className: 'hover:text-blue-700',
                        children: /* @__PURE__ */ jsx('a', {
                          href: '/learn/account?tab=dashboard.account_profile',
                          children: 'My Profile'
                        })
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ jsx('hr', {}),
                /* @__PURE__ */ jsx('a', {
                  href: '/learn/account?tab=dashboard.account',
                  children: /* @__PURE__ */ jsx('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-4 pb-2',
                    children: 'My Account'
                  })
                }),
                /* @__PURE__ */ jsx('a', {
                  href: 'learn/transcript',
                  children: /* @__PURE__ */ jsx('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                    children: 'Transcript'
                  })
                }),
                /* @__PURE__ */ jsx('a', {
                  href: '/support',
                  children: /* @__PURE__ */ jsx('li', {
                    className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 pt-2 pb-4',
                    children: 'Support'
                  })
                }),
                /* @__PURE__ */ jsx('hr', {}),
                /* @__PURE__ */ jsx('a', {
                  href: '/learn/sign_out',
                  children: /* @__PURE__ */ jsx('div', {
                    className: 'text-center pt-5 text-sm text-blue-900 hover:text-blue-700',
                    children: 'Sign out'
                  })
                })
              ]
            })
          })
        })
      ]
    })
  });
}
const Hamburger = /* @__PURE__ */ jsx('svg', {
  width: '18',
  height: '14',
  viewBox: '0 0 18 14',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  children: /* @__PURE__ */ jsx('path', {
    d: 'M1 13H17M1 1H17H1ZM1 7H17H1Z',
    stroke: '#6B7280',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  })
});
function UserLoginNavBar() {
  const [navbar, setNavbar] = useState(false);
  return /* @__PURE__ */ jsx('nav', {
    className: 'w-full bg-white shadow py-4',
    children: /* @__PURE__ */ jsxs('div', {
      className: 'flex flex-row',
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'basis-1/4',
          children: /* @__PURE__ */ jsx('div', {
            className: 'pl-2',
            children: /* @__PURE__ */ jsx(Logo, {
              size: ''
            })
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: `hidden my-auto md:block basis-1/2 ${navbar ? 'block' : 'hidden'}`,
          children: /* @__PURE__ */ jsxs('ul', {
            className: 'items-center justify-center space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex',
            children: [
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-1.5 pr-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/',
                  children: 'Home'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 px-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/catalog',
                  children: 'Catalog'
                })
              }),
              /* @__PURE__ */ jsx('li', {
                className: 'md:hover:bg-white hover:bg-slate-100 rounded py-2 pl-4',
                children: /* @__PURE__ */ jsx('a', {
                  href: '/support',
                  children: 'Help'
                })
              }),
              /* @__PURE__ */ jsx('hr', {})
            ]
          })
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'basis-1/2 md:hidden'
        }),
        /* @__PURE__ */ jsxs('div', {
          className: 'flex basis-1/4 justify-end pr-3',
          children: [
            /* @__PURE__ */ jsx('button', {
              className:
                'hidden md:flex justify-center w-24 my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              children: /* @__PURE__ */ jsx('div', {
                children: 'Sign in'
              })
            }),
            /* @__PURE__ */ jsx('div', {
              className:
                'text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border md:hidden flex items-center space-x-3',
              onClick: () => setNavbar(!navbar),
              children: /* @__PURE__ */ jsx('button', {
                type: 'submit',
                className: '',
                onClick: () => setNavbar(!navbar),
                children: navbar
                  ? /* @__PURE__ */ jsx('div', {
                      children: Xicon
                    })
                  : /* @__PURE__ */ jsx('div', {
                      children: Hamburger
                    })
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx('div', {
          className: `${
            navbar ? 'block' : 'hidden'
          } z-10 absolute right-0 p-5 mt-16 w-96 rounded-md shadow-lg bg-white md:hidden`,
          children: /* @__PURE__ */ jsx('div', {
            className: `flex my-auto space-x-6 mx-auto md:block ${navbar ? 'block' : 'hidden'}`,
            children: /* @__PURE__ */ jsxs('ul', {
              className:
                'items-center justify-between space-y-3 pt-4 md:pt-0 md:space-y-0 md:flex md:space-x-6 w-full',
              children: [
                /* @__PURE__ */ jsx('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-1.5',
                  children: /* @__PURE__ */ jsx('a', {
                    href: '/',
                    children: 'Home'
                  })
                }),
                /* @__PURE__ */ jsx('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                  children: /* @__PURE__ */ jsx('a', {
                    href: '/catalog',
                    children: 'Catalog'
                  })
                }),
                /* @__PURE__ */ jsx('li', {
                  className: 'md:hover:bg-white hover:bg-slate-100 rounded pl-2 py-2',
                  children: /* @__PURE__ */ jsx('a', {
                    href: '/support',
                    children: 'Help'
                  })
                }),
                /* @__PURE__ */ jsx('hr', {}),
                /* @__PURE__ */ jsx('button', {
                  className:
                    'md:hidden my-auto items-center bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded',
                  children: 'Sign in'
                })
              ]
            })
          })
        })
      ]
    })
  });
}
const NavBar = () => {
  const pageContext = usePageContext();
  const { currentUser } = pageContext;
  let navbar;
  if (currentUser) {
    navbar = /* @__PURE__ */ jsxs(Fragment, {
      children: [
        /* @__PURE__ */ jsx('div', {
          className: 'block md:hidden',
          children: /* @__PURE__ */ jsx(CurrentUserSmallScreenNavBar, {})
        }),
        /* @__PURE__ */ jsx('div', {
          className: 'hidden md:block',
          children: /* @__PURE__ */ jsx(CurrentUserNavBar, {})
        })
      ]
    });
  } else {
    navbar = /* @__PURE__ */ jsx(UserLoginNavBar, {});
  }
  return navbar;
};
const LoadingDots = () => {
  const firstDotStyles = {
    animationDelay: '-0.32s'
  };
  const secondDotStyles = {
    animationDelay: '-0.16s'
  };
  return /* @__PURE__ */ jsxs('div', {
    className: 'flex items-center justify-center space-x-10',
    children: [
      /* @__PURE__ */ jsx('div', {
        className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full',
        style: firstDotStyles
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full',
        style: secondDotStyles
      }),
      /* @__PURE__ */ jsx('div', {
        className: 'animate-ping w-5 h-5 bg-gray-700 rounded-full'
      })
    ]
  });
};
LoadingDots.displayName = 'LoadingDots';
const ContentFragmentFragmentDoc = gql`
  fragment ContentFragment on Content {
    alternativePricingType
    asset
    altDescriptionBody
    alternativePricingRef
    alternativePricingType
    authors
    authorsAndInstructors
    availabilityStatus
    bulkPurchasingEnabled
    canAddToQueue
    contentTypeAssetAspectRatio
    contentTypeLabel
    courseEndDate
    courseGracePeriodEnded
    courseGroup
    coursePresold
    courseStartDate
    createdAt
    currentUserMayReschedule
    currentUserUnmetCoursePrerequisites
    currentUserUnmetLearningPathPrerequisites
    customFields
    description
    displayCourse
    displayCourseSlug
    displayDate
    embeddedEnabled
    enrollmentCount
    expiresAt
    kind
    hasChildren
    hideCourseDescription
    id
    isActive
    language
    location {
      id
      name
      room
      address1
      address2
      city
      state
      zipCode
      country
      timeZone
    }
    meetingStartDate
    metaDescription
    metaTitle
    priceInCents
    publishDate
    rating
    ribbon {
      color
      contrastColor
      darkerColor
      label
      slug
    }
    seatsLimit
    sessionTitle
    status
    sku
    slug
    source
    suggestedRetailPriceInCents
    timeZone
    title
    updatedAt
    waitlistCount
    waitlistingEnabled
    waitlistingTriggered
  }
`;
const LocationFragmentFragmentDoc = gql`
  fragment LocationFragment on Location {
    id
    name
    room
    address1
    address2
    city
    state
    zipCode
    country
    timeZone
  }
`;
const CatalogMetaFragmentFragmentDoc = gql`
  fragment CatalogMetaFragment on CatalogMeta {
    aggregations {
      key
      label
      buckets {
        query
        value
        label
        description
        count
      }
    }
    contentTypeFilterEnabled
    contentTypes
    displayAuthorsEnabled
    displayBundle {
      id
      name
      slug
      priceInCents
      annualPriceInCents
    }
    displayStartDateEnabled
    displayDescriptionOnCalendar
    displayTypeCalendarEnabled
    displayTypeGridEnabled
    displayTypeListEnabled
    hasMore
    isCurated
    queryCustomFields
    resultsDisplayType
    selectedSortColumn
    selectedSortDirection
    sortCourseStartDateEnabled
    sortCreatedAtEnabled
    sortPublishDateEnabled
    sortRelevanceEnabled
    sortTitleEnabled
    sortUpdatedAtEnabled
    tokenLabel
    total
  }
`;
const defaultOptions$i = {};
const CatalogContentDocument = gql`
  query CatalogContent(
    $sortColumn: SortColumn
    $sortDirection: SortDirection
    $resultsDisplayType: ContentItemDisplayType
    $page: Int!
    $token: String
    $labels: [String!]
    $values: [String!]
    $contentTypes: [String!]
    $query: String
  ) {
    CatalogContent(
      sortColumn: $sortColumn
      sortDirection: $sortDirection
      resultsDisplayType: $resultsDisplayType
      page: $page
      token: $token
      labels: $labels
      values: $values
      contentTypes: $contentTypes
      query: $query
    ) {
      contentItems {
        ...ContentFragment
        location {
          ...LocationFragment
        }
      }
      meta {
        ...CatalogMetaFragment
      }
    }
  }
  ${ContentFragmentFragmentDoc}
  ${LocationFragmentFragmentDoc}
  ${CatalogMetaFragmentFragmentDoc}
`;
function useCatalogContentQuery(baseOptions) {
  const options = {
    ...defaultOptions$i,
    ...baseOptions
  };
  return Apollo.useQuery(CatalogContentDocument, options);
}
gql`
  query Catalog($query: String, $querySignature: String, $querySort: String) {
    CatalogQuery(query: $query, querySignature: $querySignature, querySort: $querySort) {
      contentItems {
        ...ContentFragment
      }
    }
  }
  ${ContentFragmentFragmentDoc}
`;
gql`
  query CourseGroupBySlug($slug: Slug!) {
    CourseGroupBySlug(slug: $slug) {
      asset
      description
      title
      rating
      ratingsCount
    }
  }
`;
gql`
  query LearningPathBySlug($slug: Slug!) {
    LearningPathBySlug(slug: $slug) {
      name
      shortDescription
      asset
    }
  }
`;
const defaultOptions$h = {};
const LanguagesQueryDocument = gql`
  query LanguagesQuery {
    Languages {
      id
      label
      code
      isCustom
      selectorLabel
    }
  }
`;
function useLanguagesQueryQuery(baseOptions) {
  const options = {
    ...defaultOptions$h,
    ...baseOptions
  };
  return Apollo.useQuery(LanguagesQueryDocument, options);
}
gql`
  query Contents($ids: [ID!]!) {
    QueryContents(ids: $ids) {
      ...ContentFragment
    }
  }
  ${ContentFragmentFragmentDoc}
`;
gql`
  query RssItems($feedUrl: String!) {
    RssItems(feedUrl: $feedUrl) {
      title
      link
    }
  }
`;
gql`
  query UserRecentContent($limit: Int) {
    UserRecentContent(limit: $limit) {
      ...ContentFragment
    }
  }
  ${ContentFragmentFragmentDoc}
`;
const defaultOptions$g = {};
const UserContentItemsDocument = gql`
  query UserContentItems(
    $query: String
    $kind: [ContentKind!]
    $sortColumn: SortColumn
    $sortDirection: SortDirection
  ) {
    UserContentItems(
      query: $query
      kind: $kind
      sortColumn: $sortColumn
      sortDirection: $sortDirection
    ) {
      asset
      title
      sessionTitle
      kind
      id
      slug
      meetingStartDate
      contentTypeLabel
      availabilityStatus
      courseStartDate
      courseEndDate
      coursePresold
      description
      displayCourse
      displayCourseSlug
      displayDate
      courseGracePeriodEnded
      authors
      publishDate
      source
      expiresAt
      currentUserMayReschedule
      timeZone
      embeddedEnabled
      currentUserUnmetCoursePrerequisites
      currentUserUnmetLearningPathPrerequisites
      hasChildren
      hideCourseDescription
      isActive
      waitlistingEnabled
      waitlistingTriggered
    }
  }
`;
function useUserContentItemsQuery(baseOptions) {
  const options = {
    ...defaultOptions$g,
    ...baseOptions
  };
  return Apollo.useQuery(UserContentItemsDocument, options);
}
const defaultOptions$f = {};
const UserArchivesDocument = gql`
  query UserArchives {
    UserArchives {
      id
      user
      resource
      resourceType
      status
      archivedAt
      name
      reinstatable
      waitlistActive
    }
  }
`;
function useUserArchivesQuery(baseOptions) {
  const options = {
    ...defaultOptions$f,
    ...baseOptions
  };
  return Apollo.useQuery(UserArchivesDocument, options);
}
const defaultOptions$e = {};
const UserWaitlistDocument = gql`
  query UserWaitlist {
    UserWaitlist {
      id
      contentTypeLabel
      title
      kind
      slug
      displayCourse
      displayCourseSlug
    }
  }
`;
function useUserWaitlistQuery(baseOptions) {
  const options = {
    ...defaultOptions$e,
    ...baseOptions
  };
  return Apollo.useQuery(UserWaitlistDocument, options);
}
const defaultOptions$d = {};
const UserBookmarksDocument = gql`
  query UserBookmarks {
    UserBookmarks {
      id
      name
      defaultFolder
      bookmarkCount
    }
  }
`;
function useUserBookmarksQuery(baseOptions) {
  const options = {
    ...defaultOptions$d,
    ...baseOptions
  };
  return Apollo.useQuery(UserBookmarksDocument, options);
}
const defaultOptions$c = {};
const UserCertificatesDocument = gql`
  query UserCertificates($query: String, $includeExpiredCertificates: Boolean) {
    UserCertificates(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      id
      resourceId
      expirationDate
      isExpired
      externalResourceTitle
      url
      source
      contentItem {
        id
        asset
        courseEndDate
        courseStartDate
        coursePresold
        description
        kind
        slug
        availabilityStatus
        contentTypeLabel
        title
        timeZone
      }
    }
  }
`;
function useUserCertificatesQuery(baseOptions) {
  const options = {
    ...defaultOptions$c,
    ...baseOptions
  };
  return Apollo.useQuery(UserCertificatesDocument, options);
}
const defaultOptions$b = {};
const ContentGroupsDocument = gql`
  query ContentGroups($query: String, $includeExpiredCertificates: Boolean) {
    UserContentGroups(query: $query, includeExpiredCertificates: $includeExpiredCertificates) {
      kind
      count
    }
  }
`;
function useContentGroupsQuery(baseOptions) {
  const options = {
    ...defaultOptions$b,
    ...baseOptions
  };
  return Apollo.useQuery(ContentGroupsDocument, options);
}
const defaultOptions$a = {};
const UserBookmarksByFolderDocument = gql`
  query UserBookmarksByFolder($id: ID!) {
    UserBookmarksByFolder(id: $id) {
      id
      course {
        id
        title
        slug
        status
        courseGroup {
          id
          authors
          source
          asset
          kind
          contentType {
            label
          }
        }
      }
      topicId
      note
      createdAt
    }
  }
`;
function useUserBookmarksByFolderQuery(baseOptions) {
  const options = {
    ...defaultOptions$a,
    ...baseOptions
  };
  return Apollo.useQuery(UserBookmarksByFolderDocument, options);
}
const defaultOptions$9 = {};
const UserCourseCompletionProgressDocument = gql`
  query UserCourseCompletionProgress($id: ID!) {
    UserCourseCompletionProgress(id: $id) {
      type
      required
      completed
      percent
    }
  }
`;
function useUserCourseCompletionProgressQuery(baseOptions) {
  const options = {
    ...defaultOptions$9,
    ...baseOptions
  };
  return Apollo.useQuery(UserCourseCompletionProgressDocument, options);
}
gql`
  query UserCourseProgress($id: ID!) {
    UserCourseProgress(id: $id) {
      totalViews
      totalTime
      percentComplete
    }
  }
`;
gql`
  query UserCourseAwardCounts($courseId: ID!) {
    UserCourseAwardCounts(courseId: $courseId) {
      id
      label
      icon
      count
    }
  }
`;
gql`
  query UserCourseCollaborations($courseId: ID!) {
    UserCourseCollaborations(courseId: $courseId)
  }
`;
const defaultOptions$8 = {};
const UserCertificateFieldsDocument = gql`
  query UserCertificateFields {
    UserCertificateFields {
      id
      type
      label
      awardTypeId
      awardType {
        id
        pluralLabel
      }
    }
  }
`;
function useUserCertificateFieldsQuery(baseOptions) {
  const options = {
    ...defaultOptions$8,
    ...baseOptions
  };
  return Apollo.useQuery(UserCertificateFieldsDocument, options);
}
var AlternativePricingType = /* @__PURE__ */ (AlternativePricingType2 => {
  AlternativePricingType2['Membership'] = 'membership';
  return AlternativePricingType2;
})(AlternativePricingType || {});
var ContentItemDisplayType = /* @__PURE__ */ (ContentItemDisplayType2 => {
  ContentItemDisplayType2['Calendar'] = 'calendar';
  ContentItemDisplayType2['Grid'] = 'grid';
  ContentItemDisplayType2['List'] = 'list';
  return ContentItemDisplayType2;
})(ContentItemDisplayType || {});
var ContentKind = /* @__PURE__ */ (ContentKind2 => {
  ContentKind2['Article'] = 'article';
  ContentKind2['Bundle'] = 'bundle';
  ContentKind2['Course'] = 'course';
  ContentKind2['CourseGroup'] = 'courseGroup';
  ContentKind2['DiscountGroup'] = 'discountGroup';
  ContentKind2['InPersonEvent'] = 'inPersonEvent';
  ContentKind2['InPersonEventCourse'] = 'inPersonEventCourse';
  ContentKind2['LearningPath'] = 'learningPath';
  ContentKind2['MicroCourse'] = 'microCourse';
  ContentKind2['PickableGroup'] = 'pickableGroup';
  ContentKind2['Product'] = 'product';
  ContentKind2['Sellable'] = 'sellable';
  ContentKind2['ShareableContentObject'] = 'shareableContentObject';
  ContentKind2['Video'] = 'video';
  ContentKind2['Webinar'] = 'webinar';
  ContentKind2['WebinarCourse'] = 'webinarCourse';
  ContentKind2['XApiObject'] = 'xApiObject';
  return ContentKind2;
})(ContentKind || {});
var SortColumn = /* @__PURE__ */ (SortColumn2 => {
  SortColumn2['CourseStartDate'] = 'courseStartDate';
  SortColumn2['CreatedAt'] = 'createdAt';
  SortColumn2['DisplayDate'] = 'displayDate';
  SortColumn2['Label'] = 'label';
  SortColumn2['LastActiveAt'] = 'lastActiveAt';
  SortColumn2['Name'] = 'name';
  SortColumn2['ParentName'] = 'parentName';
  SortColumn2['PublishDate'] = 'publishDate';
  SortColumn2['Relevance'] = 'relevance';
  SortColumn2['Title'] = 'title';
  SortColumn2['UpdatedAt'] = 'updatedAt';
  return SortColumn2;
})(SortColumn || {});
var SortDirection = /* @__PURE__ */ (SortDirection2 => {
  SortDirection2['Asc'] = 'asc';
  SortDirection2['Desc'] = 'desc';
  return SortDirection2;
})(SortDirection || {});
gql`
  mutation AddResourceToQueue($resourceType: ContentKind, $resourceId: ID!) {
    AddResourceToQueue(resourceType: $resourceType, resourceId: $resourceId)
  }
`;
gql`
  mutation ArchiveUserCourse($id: ID!) {
    ArchiveUserCourse(id: $id)
  }
`;
gql`
  mutation ArchiveUserLearningPath($id: ID!) {
    ArchiveUserLearningPath(id: $id)
  }
`;
const defaultOptions$7 = {};
const ReinstateUserLearningPathDocument = gql`
  mutation ReinstateUserLearningPath($id: ID!) {
    ReinstateUserLearningPath(id: $id)
  }
`;
function useReinstateUserLearningPathMutation(baseOptions) {
  const options = {
    ...defaultOptions$7,
    ...baseOptions
  };
  return Apollo.useMutation(ReinstateUserLearningPathDocument, options);
}
const defaultOptions$6 = {};
const ReinstateUserCourseDocument = gql`
  mutation ReinstateUserCourse($id: ID!) {
    ReinstateUserCourse(id: $id)
  }
`;
function useReinstateUserCourseMutation(baseOptions) {
  const options = {
    ...defaultOptions$6,
    ...baseOptions
  };
  return Apollo.useMutation(ReinstateUserCourseDocument, options);
}
const defaultOptions$5 = {};
const UnenrollFromWaitlistDocument = gql`
  mutation UnenrollFromWaitlist($id: ID!) {
    UnenrollFromWaitlist(id: $id)
  }
`;
function useUnenrollFromWaitlistMutation(baseOptions) {
  const options = {
    ...defaultOptions$5,
    ...baseOptions
  };
  return Apollo.useMutation(UnenrollFromWaitlistDocument, options);
}
const defaultOptions$4 = {};
const UpdateBookmarkFolderDocument = gql`
  mutation UpdateBookmarkFolder($id: ID!, $name: String!) {
    UpdateBookmarkFolder(id: $id, name: $name) {
      id
      name
    }
  }
`;
function useUpdateBookmarkFolderMutation(baseOptions) {
  const options = {
    ...defaultOptions$4,
    ...baseOptions
  };
  return Apollo.useMutation(UpdateBookmarkFolderDocument, options);
}
const defaultOptions$3 = {};
const DestroyBookmarkFolderDocument = gql`
  mutation DestroyBookmarkFolder($id: ID!) {
    DestroyBookmarkFolder(id: $id)
  }
`;
function useDestroyBookmarkFolderMutation(baseOptions) {
  const options = {
    ...defaultOptions$3,
    ...baseOptions
  };
  return Apollo.useMutation(DestroyBookmarkFolderDocument, options);
}
const defaultOptions$2 = {};
const CreateCertificateFromUploadDocument = gql`
  mutation CreateCertificateFromUpload(
    $asset: URL!
    $certificateUploadFields: [CertificateUploadField!]
  ) {
    CreateCertificateFromUpload(asset: $asset, certificateUploadFields: $certificateUploadFields) {
      __typename
      id
      externalResourceTitle
    }
  }
`;
function useCreateCertificateFromUploadMutation(baseOptions) {
  const options = {
    ...defaultOptions$2,
    ...baseOptions
  };
  return Apollo.useMutation(CreateCertificateFromUploadDocument, options);
}
const defaultOptions$1 = {};
const UpdateBookmarkDocument = gql`
  mutation UpdateBookmark($id: ID!, $note: String, $bookmarkFolder: ID!) {
    UpdateBookmark(id: $id, note: $note, bookmarkFolder: $bookmarkFolder) {
      id
    }
  }
`;
function useUpdateBookmarkMutation(baseOptions) {
  const options = {
    ...defaultOptions$1,
    ...baseOptions
  };
  return Apollo.useMutation(UpdateBookmarkDocument, options);
}
const defaultOptions = {};
const DestroyBookmarkDocument = gql`
  mutation DestroyBookmark($id: ID!) {
    DestroyBookmark(id: $id)
  }
`;
function useDestroyBookmarkMutation(baseOptions) {
  const options = {
    ...defaultOptions,
    ...baseOptions
  };
  return Apollo.useMutation(DestroyBookmarkDocument, options);
}
const DEFAULT_TIMEZONE = 'America/New_York';
dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
const formatTime = (date, timeZone, format) => {
  const timeZoneOrDefault = timeZone != null ? timeZone : DEFAULT_TIMEZONE;
  return dayjs(date).tz(timeZoneOrDefault).format(format);
};
var AvailabilityStatus = /* @__PURE__ */ (AvailabilityStatus2 => {
  AvailabilityStatus2['Completed'] = 'completed';
  AvailabilityStatus2['Available'] = 'available';
  AvailabilityStatus2['Started'] = 'started';
  AvailabilityStatus2['NotStarted'] = 'not-started';
  AvailabilityStatus2['NotCompleted'] = 'not-completed';
  return AvailabilityStatus2;
})(AvailabilityStatus || {});
const VILT_KINDS = [ContentKind.Webinar, ContentKind.WebinarCourse];
const ILT_KINDS = [ContentKind.InPersonEvent, ContentKind.InPersonEventCourse];
function courseRunsPhrase(kind, startDate, endDate, timeZone) {
  if (kind && (ILT_KINDS.includes(kind) || VILT_KINDS.includes(kind))) {
    if (endDate) {
      const isSameDay = dayjs(startDate).isSame(dayjs(endDate), 'day');
      if (isSameDay) {
        return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a')} \u2013 ${formatTime(
          endDate,
          timeZone,
          'hh:mm a z'
        )}`;
      }
      return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a')} \u2013 ${formatTime(
        endDate,
        timeZone,
        'ddd, MMM Do YYYY hh:mm a z'
      )}`;
    }
    return `${formatTime(startDate, timeZone, 'ddd, MMM Do YYYY hh:mm a z')}`;
  }
  if (endDate) {
    return `${formatTime(startDate, timeZone, 'MMM Do YYYY')} \u2013 ${formatTime(
      endDate,
      timeZone,
      'MMM Do YYYY'
    )}`;
  }
  return formatTime(startDate, timeZone, 'MMM Do YYYY');
}
const hydrateContentItem = (i18n, contentItem, companyTimeZone = void 0, customFields = {}) => {
  const hasUnmetPrerequisites =
    (contentItem.currentUserUnmetCoursePrerequisites || []).length > 0 ||
    (contentItem.currentUserUnmetLearningPathPrerequisites || []).length > 0;
  const isActive =
    !contentItem.coursePresold && !contentItem.courseGracePeriodEnded && !hasUnmetPrerequisites;
  const timeZone = companyTimeZone != null ? companyTimeZone : contentItem.timeZone;
  const hasAvailability = !!contentItem.availabilityStatus;
  const isCompleted = contentItem.availabilityStatus === AvailabilityStatus.Completed;
  const isAvailable = contentItem.availabilityStatus === AvailabilityStatus.Available;
  const isStarted = contentItem.availabilityStatus === AvailabilityStatus.Started;
  const isNotStarted = contentItem.availabilityStatus === AvailabilityStatus.NotStarted;
  const isNotCompleted = contentItem.availabilityStatus === AvailabilityStatus.NotCompleted;
  const kindIsScormOrXApi =
    contentItem.kind === ContentKind.ShareableContentObject ||
    contentItem.kind === ContentKind.XApiObject;
  const locationIsOnline =
    contentItem.kind === ContentKind.Webinar || contentItem.kind === ContentKind.WebinarCourse;
  const locationIsInPerson =
    contentItem.kind === ContentKind.InPersonEvent ||
    contentItem.kind === ContentKind.InPersonEventCourse;
  const usesContentAccessText =
    contentItem.kind === ContentKind.WebinarCourse ||
    contentItem.kind === ContentKind.InPersonEventCourse;
  const partialHydratedContentItem = {
    ...contentItem,
    hasUnmetPrerequisites,
    isActive,
    timeZone,
    hasAvailability,
    isCompleted,
    isAvailable,
    isStarted,
    isNotStarted,
    isNotCompleted,
    kindIsScormOrXApi,
    locationIsOnline,
    locationIsInPerson,
    usesContentAccessText
  };
  const callToAction = getCallToAction(i18n, partialHydratedContentItem);
  let href = getHref(partialHydratedContentItem);
  try {
    const parsedCustomFields = JSON.parse(customFields);
    if (Object.keys(parsedCustomFields).length && href.length > 1) {
      const urlParams = `sessionFields=${encodeURIComponent(
        JSON.stringify(Object.entries(parsedCustomFields))
      )}`;
      href = `${href}?${urlParams}`;
    }
  } catch (e) {}
  let { priceInCents, suggestedRetailPriceInCents } = contentItem;
  if (contentItem.alternativePricingType === AlternativePricingType.Membership) {
    const origPriceInCents = priceInCents;
    priceInCents = suggestedRetailPriceInCents;
    suggestedRetailPriceInCents = origPriceInCents;
  }
  return {
    ...partialHydratedContentItem,
    callToAction,
    href,
    priceInCents,
    suggestedRetailPriceInCents
  };
};
const getCallToAction = (i18n, partialHydratedContentItem) => {
  if (
    partialHydratedContentItem.hasAvailability &&
    !partialHydratedContentItem.waitlistingTriggered
  ) {
    if (partialHydratedContentItem.coursePresold && partialHydratedContentItem.courseStartDate) {
      const runs = courseRunsPhrase(
        partialHydratedContentItem.kind,
        partialHydratedContentItem.courseStartDate,
        partialHydratedContentItem.courseEndDate,
        partialHydratedContentItem.timeZone
      );
      const runStringPrefix = partialHydratedContentItem.usesContentAccessText
        ? i18n.t('content-access')
        : `${partialHydratedContentItem.contentTypeLabel} ${i18n.t('runs')}`;
      return `${runStringPrefix} ${runs}`;
    } else if (
      partialHydratedContentItem.courseGracePeriodEnded &&
      partialHydratedContentItem.courseEndDate
    ) {
      return `${i18n.t('course-ended')} ${formatTime(
        partialHydratedContentItem.courseEndDate,
        partialHydratedContentItem.timeZone,
        'MMM Do YYYY'
      )}`;
    } else if (partialHydratedContentItem.hasUnmetPrerequisites) {
      return i18n.t('course.prerequisites');
    } else if (partialHydratedContentItem.bulkPurchasingEnabled) {
      return i18n.t('course-view-details');
    } else if (partialHydratedContentItem.isCompleted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.view');
      }
      return i18n.t('view-course', {
        contentType: partialHydratedContentItem.contentTypeLabel
      });
    } else if (partialHydratedContentItem.isStarted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.continue');
      }
      return i18n.t('continue-course');
    } else if (partialHydratedContentItem.isNotStarted) {
      if (partialHydratedContentItem.kind === ContentKind.LearningPath) {
        return i18n.t('learning-path.start');
      }
      return i18n.t('start-course', {
        contentType: partialHydratedContentItem.contentTypeLabel
      });
    } else if (partialHydratedContentItem.isNotCompleted) {
      return i18n.t('not-completed-course');
    }
    return i18n.t('course-view-details');
  } else if (
    partialHydratedContentItem.waitlistingTriggered &&
    partialHydratedContentItem.waitlistingEnabled
  ) {
    return i18n.t('join-waitlist');
  }
  return i18n.t('course-view-details');
};
const getHref = partialHydratedContentItem => {
  const itemKind = partialHydratedContentItem.kind;
  const itemSlug = partialHydratedContentItem.slug;
  if (itemKind === ContentKind.Product) {
    return `/products/${itemSlug}`;
  } else if (itemKind === ContentKind.Bundle) {
    return `/bundles/${itemSlug}`;
  } else if (itemKind === ContentKind.PickableGroup) {
    return `/cart-collections/${itemSlug}`;
  } else if (itemKind === ContentKind.DiscountGroup) {
    return `/collections/${itemSlug}`;
  } else if (itemKind === ContentKind.LearningPath && partialHydratedContentItem.isActive) {
    if (
      partialHydratedContentItem.hasAvailability &&
      !partialHydratedContentItem.bulkPurchasingEnabled
    ) {
      return `/learn/learning-path/${itemSlug}`;
    }
    return `/learning-paths/${itemSlug}`;
  }
  if (partialHydratedContentItem.isActive) {
    if (partialHydratedContentItem.hasAvailability) {
      if (itemKind === ContentKind.ShareableContentObject || itemKind === ContentKind.XApiObject) {
        if (partialHydratedContentItem.isAvailable) {
          return `/courses/${itemSlug}`;
        }
        return '#';
      } else if (
        (partialHydratedContentItem.isCompleted || partialHydratedContentItem.isStarted) &&
        !partialHydratedContentItem.bulkPurchasingEnabled
      ) {
        if (itemKind === ContentKind.Webinar) {
          return `/learn/webinars/${partialHydratedContentItem.displayCourse}/redirect`;
        } else if (itemKind === ContentKind.Article) {
          return `/learn/article/${partialHydratedContentItem.displayCourseSlug}`;
        } else if (itemKind === ContentKind.InPersonEvent) {
          return `/learn/event/${partialHydratedContentItem.displayCourseSlug}`;
        } else if (itemKind === ContentKind.Video) {
          return `/learn/video/${partialHydratedContentItem.displayCourseSlug}`;
        }
        return `/learn/course/${partialHydratedContentItem.displayCourseSlug}`;
      } else if (partialHydratedContentItem.isNotStarted) {
        return `/learn/enroll/${partialHydratedContentItem.displayCourse}`;
      }
      return `/courses/${itemSlug}`;
    }
    return `/courses/${itemSlug}`;
  } else if (itemKind === ContentKind.Webinar || itemKind === ContentKind.InPersonEvent) {
    return `/courses/${itemSlug}`;
  }
  return '#';
};
const parseAggregationFilters = filters => {
  return filters.reduce(
    (acc, { label, value }) => {
      acc.labels.push(label);
      acc.values.push(value);
      return acc;
    },
    { labels: [], values: [] }
  );
};
const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 48;
const SORT_DELIMITER = ':';
const DEFAULT_PARAMS = {
  page: DEFAULT_PAGE,
  aggregationFilters: [],
  contentTypes: [],
  results: [],
  aggregations: [],
  hasMore: false,
  isCurated: false,
  enabledSorts: [],
  enabledDisplayTypes: [],
  resultContentTypes: [],
  contentTypeFilterEnabled: false,
  displayStartDateEnabled: false,
  displayAuthorsEnabled: false,
  displayDescriptionOnCalendar: false,
  isLoading: false,
  pageSize: DEFAULT_PAGE_SIZE
};
const parseQueryVariables = params => {
  const {
    page = DEFAULT_PAGE,
    token,
    sort,
    displayType,
    resultsDisplayType,
    aggregationFilters,
    searchTerm,
    contentTypes
  } = params;
  const sortColumn = sort == null ? void 0 : sort.field;
  const sortDirection = sort == null ? void 0 : sort.direction;
  const displayTypeParam = displayType || resultsDisplayType;
  const transformedFilters = parseAggregationFilters(aggregationFilters);
  return {
    page,
    sortColumn,
    sortDirection,
    resultsDisplayType: displayTypeParam,
    token,
    contentTypes,
    query: searchTerm,
    labels: transformedFilters.labels,
    values: transformedFilters.values
  };
};
const parseSort = sort => {
  if (!sort) {
    return;
  }
  const splitSort = sort.split(SORT_DELIMITER);
  if (!splitSort.length) {
    return;
  }
  const field = splitSort[0];
  if (!field) {
    return;
  }
  const direction = splitSort.length > 1 ? splitSort[1] : void 0;
  return {
    field,
    direction
  };
};
const toEnabledSorts = ({
  sortUpdatedAtEnabled,
  sortCreatedAtEnabled,
  sortTitleEnabled,
  sortPublishDateEnabled,
  sortCourseStartDateEnabled,
  sortRelevanceEnabled
}) => {
  const sorts = [];
  if (sortUpdatedAtEnabled) {
    sorts.push({
      field: SortColumn.UpdatedAt,
      direction: SortDirection.Desc
    });
  }
  if (sortCreatedAtEnabled) {
    sorts.push({
      field: SortColumn.CreatedAt,
      direction: SortDirection.Desc
    });
  }
  if (sortTitleEnabled) {
    sorts.push({ field: SortColumn.Title, direction: SortDirection.Asc });
  }
  if (sortPublishDateEnabled) {
    sorts.push({
      field: SortColumn.PublishDate,
      direction: SortDirection.Desc
    });
  }
  if (sortCourseStartDateEnabled) {
    sorts.push({
      field: SortColumn.CourseStartDate,
      direction: SortDirection.Asc
    });
  }
  if (sortRelevanceEnabled) {
    sorts.push({ field: SortColumn.Relevance });
  }
  return sorts;
};
const toEnabledDisplayTypes = ({
  displayTypeListEnabled,
  displayTypeGridEnabled,
  displayTypeCalendarEnabled
}) => {
  const displayTypes = [];
  if (displayTypeListEnabled) {
    displayTypes.push(ContentItemDisplayType.List);
  }
  if (displayTypeGridEnabled) {
    displayTypes.push(ContentItemDisplayType.Grid);
  }
  if (displayTypeCalendarEnabled) {
    displayTypes.push(ContentItemDisplayType.Calendar);
  }
  return displayTypes;
};
const parseResponseData = (data, error) => {
  if (error || !data) {
    return {
      error: `An unexpected error occurred: ${error ? error.message : 'empty data'}`
    };
  }
  const {
    meta: {
      displayBundle,
      tokenLabel,
      total,
      hasMore,
      isCurated,
      aggregations = [],
      contentTypes = [],
      resultsDisplayType,
      sortUpdatedAtEnabled,
      sortCreatedAtEnabled,
      sortTitleEnabled,
      sortPublishDateEnabled,
      sortCourseStartDateEnabled,
      sortRelevanceEnabled,
      displayTypeListEnabled,
      displayTypeGridEnabled,
      displayTypeCalendarEnabled,
      displayStartDateEnabled,
      displayAuthorsEnabled,
      displayDescriptionOnCalendar,
      contentTypeFilterEnabled,
      queryCustomFields
    },
    contentItems = []
  } = data.CatalogContent;
  const enabledSorts = toEnabledSorts({
    sortUpdatedAtEnabled,
    sortCreatedAtEnabled,
    sortTitleEnabled,
    sortPublishDateEnabled,
    sortCourseStartDateEnabled,
    sortRelevanceEnabled
  });
  const enabledDisplayTypes = toEnabledDisplayTypes({
    displayTypeListEnabled,
    displayTypeGridEnabled,
    displayTypeCalendarEnabled
  });
  return {
    error: void 0,
    results: contentItems,
    queryCustomFields,
    aggregations,
    total,
    hasMore,
    isCurated,
    tokenLabel,
    resultsDisplayType,
    enabledSorts,
    enabledDisplayTypes,
    resultContentTypes: contentTypes,
    displayStartDateEnabled,
    displayAuthorsEnabled,
    displayDescriptionOnCalendar,
    contentTypeFilterEnabled,
    displayBundle
  };
};
const truthyFilter = x => !!x;
const serializeSort = sort => {
  if (typeof sort === 'string') {
    return sort;
  }
  const { field, direction } = sort;
  return [field, direction].filter(truthyFilter).join(SORT_DELIMITER);
};
var CatalogURLSearchParams = /* @__PURE__ */ (CatalogURLSearchParams2 => {
  CatalogURLSearchParams2['Token'] = 'token';
  CatalogURLSearchParams2['SearchTerm'] = 'query';
  CatalogURLSearchParams2['AggregationLabels'] = 'labels';
  CatalogURLSearchParams2['AggregationValues'] = 'values';
  CatalogURLSearchParams2['ContentTypes'] = 'content-types';
  CatalogURLSearchParams2['DisplayType'] = 'display-type';
  CatalogURLSearchParams2['Page'] = 'page';
  CatalogURLSearchParams2['Sort'] = 'sort';
  return CatalogURLSearchParams2;
})(CatalogURLSearchParams || {});
const toInteger = str => parseInt(str, 10);
const parsePageFromQueryParams = params => {
  const page = params.get(CatalogURLSearchParams.Page);
  if (!page) {
    return;
  }
  const parsedPage = toInteger(page);
  if (isNaN(parsedPage) || parsedPage < 1) {
    return;
  }
  return parsedPage;
};
const parseAggregationFiltersFromQueryParams = params => {
  const labels = params.get(CatalogURLSearchParams.AggregationLabels);
  const values = params.get(CatalogURLSearchParams.AggregationValues);
  if (!labels || !values) {
    return;
  }
  try {
    const parsedLabels = JSON.parse(labels);
    const parsedValues = JSON.parse(values);
    return parsedLabels.reduce((acc, label, index) => {
      if (index in parsedValues && parsedValues[index]) {
        acc.push({ label, value: parsedValues[index] });
      }
      return acc;
    }, []);
  } catch {
    return;
  }
};
const parseTokenFromQueryParams = params => {
  const token = params.get(CatalogURLSearchParams.Token);
  if (!token) {
    return;
  }
  return token;
};
const parseSearchTermFromQueryParams = params => {
  const searchTerm = params.get(CatalogURLSearchParams.SearchTerm);
  if (!searchTerm) {
    return;
  }
  return searchTerm;
};
const parseContentTypesFromQueryParams = params => {
  const contentTypes = params.get(CatalogURLSearchParams.ContentTypes);
  if (!contentTypes) {
    return;
  }
  try {
    return JSON.parse(contentTypes);
  } catch {
    return;
  }
};
const parseDisplayTypeFromQueryParams = params => {
  const displayType = params.get(CatalogURLSearchParams.DisplayType);
  if (!displayType) {
    return;
  }
  return displayType;
};
const parseSortFromQueryParams = params => {
  const sort = params.get(CatalogURLSearchParams.Sort);
  if (!sort) {
    return;
  }
  return parseSort(sort);
};
const toRequestParams = params => {
  const result = {};
  const page = parsePageFromQueryParams(params);
  if (page) {
    result.page = page;
  }
  const aggregationFilters = parseAggregationFiltersFromQueryParams(params);
  if (aggregationFilters) {
    result.aggregationFilters = aggregationFilters;
  }
  const token = parseTokenFromQueryParams(params);
  if (token) {
    result.token = token;
  }
  const searchTerm = parseSearchTermFromQueryParams(params);
  if (searchTerm) {
    result.searchTerm = searchTerm;
  }
  const contentTypes = parseContentTypesFromQueryParams(params);
  if (contentTypes) {
    result.contentTypes = contentTypes;
  }
  const displayType = parseDisplayTypeFromQueryParams(params);
  if (displayType) {
    result.displayType = displayType;
  }
  const sort = parseSortFromQueryParams(params);
  if (sort) {
    result.sort = sort;
  }
  return result;
};
class CatalogURLManager {
  constructor(parsedUrl) {
    __publicField(this, '_pathname');
    __publicField(this, '_searchParams');
    __publicField(this, '_parsedRequestParams');
    __publicField(this, '_isCurated');
    __publicField(this, '_selectedDisplayType');
    const { pathname, searchString } = parsedUrl;
    this._pathname = pathname;
    this._searchParams = new URLSearchParams(searchString || void 0);
    this._parsedRequestParams = toRequestParams(this._searchParams);
  }
  _composeURL(searchString) {
    if (!searchString) {
      return this._pathname;
    }
    return `${this._pathname}?${searchString}`;
  }
  _resetOrDefaultClonedParams() {
    const clonedParams = new URLSearchParams(this._searchParams);
    if (this._isCurated) {
      clonedParams.delete(CatalogURLSearchParams.AggregationLabels);
      clonedParams.delete(CatalogURLSearchParams.AggregationValues);
      clonedParams.delete(CatalogURLSearchParams.ContentTypes);
      clonedParams.delete(CatalogURLSearchParams.DisplayType);
      clonedParams.delete(CatalogURLSearchParams.Page);
      clonedParams.delete(CatalogURLSearchParams.SearchTerm);
      clonedParams.delete(CatalogURLSearchParams.Sort);
      clonedParams.delete(CatalogURLSearchParams.Token);
    }
    if (this._selectedDisplayType === ContentItemDisplayType.Calendar) {
      clonedParams.delete(CatalogURLSearchParams.Page);
    }
    return clonedParams;
  }
  setIsCurated(isCurated) {
    this._isCurated = isCurated;
  }
  setSelectedDisplayType(displayType) {
    this._selectedDisplayType = displayType;
  }
  getParsedRequestParams() {
    return this._parsedRequestParams;
  }
  composeURLForAddAggregationFilter(filter) {
    const { aggregationFilters = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const newFilters = [...aggregationFilters];
    newFilters.push(filter);
    const transformedFilters = parseAggregationFilters(newFilters);
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(
      CatalogURLSearchParams.AggregationLabels,
      JSON.stringify(transformedFilters.labels)
    );
    clonedParams.set(
      CatalogURLSearchParams.AggregationValues,
      JSON.stringify(transformedFilters.values)
    );
    return this._composeURL(clonedParams.toString());
  }
  composeURLsForRemoveAggregationFilterBatch(filters) {
    const { aggregationFilters = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const clonedParams = this._resetOrDefaultClonedParams();
    return filters.map(currentFilter => {
      const { label: currentLabel, value: currentValue } = currentFilter;
      const newClonedParams = new URLSearchParams(clonedParams);
      const newFilters = aggregationFilters.filter(
        ({ label, value }) => label !== currentLabel && value !== currentValue
      );
      if (newFilters.length) {
        const transformedFilters = parseAggregationFilters(newFilters);
        newClonedParams.set(
          CatalogURLSearchParams.AggregationLabels,
          JSON.stringify(transformedFilters.labels)
        );
        newClonedParams.set(
          CatalogURLSearchParams.AggregationValues,
          JSON.stringify(transformedFilters.values)
        );
      } else {
        newClonedParams.delete(CatalogURLSearchParams.AggregationLabels);
        newClonedParams.delete(CatalogURLSearchParams.AggregationValues);
      }
      newClonedParams.delete(CatalogURLSearchParams.Page);
      return {
        filter: currentFilter,
        url: this._composeURL(newClonedParams.toString())
      };
    });
  }
  composeURLForSetPage(page) {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.Page, page.toString());
    return this._composeURL(clonedParams.toString());
  }
  composeURLForRemoveToken() {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.Token);
    clonedParams.delete(CatalogURLSearchParams.Page);
    return this._composeURL(clonedParams.toString());
  }
  composeURLForAddContentType(contentType) {
    const { contentTypes = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const newContentTypes = [...contentTypes];
    newContentTypes.push(contentType);
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.ContentTypes, JSON.stringify(newContentTypes));
    return this._composeURL(clonedParams.toString());
  }
  composeURLForRemoveContentTypeBatch(filters) {
    const { contentTypes = [] } = this._isCurated ? {} : this._parsedRequestParams;
    const clonedParams = this._resetOrDefaultClonedParams();
    return filters.map(currentContentType => {
      const newClonedParams = new URLSearchParams(clonedParams);
      const newContentTypes = [...contentTypes].filter(item => item !== currentContentType);
      if (newContentTypes.length) {
        newClonedParams.set(CatalogURLSearchParams.ContentTypes, JSON.stringify(newContentTypes));
      } else {
        newClonedParams.delete(CatalogURLSearchParams.ContentTypes);
      }
      return {
        contentType: currentContentType,
        url: this._composeURL(newClonedParams.toString())
      };
    });
  }
  composeURLForSetSearchTermForm() {
    return this._composeURL('');
  }
  composeSearchTermFormHiddenFields() {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.Page);
    clonedParams.delete(CatalogURLSearchParams.SearchTerm);
    const hiddenFields = [];
    for (const [name, value] of clonedParams.entries()) {
      hiddenFields.push({ name, value });
    }
    return hiddenFields;
  }
  composeURLForRemoveSearchTerm() {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.delete(CatalogURLSearchParams.SearchTerm);
    return this._composeURL(clonedParams.toString());
  }
  composeURLForSetDisplayType(displayType) {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.DisplayType, displayType.toString());
    if (displayType === ContentItemDisplayType.Calendar) {
      clonedParams.delete(CatalogURLSearchParams.ContentTypes);
    }
    return this._composeURL(clonedParams.toString());
  }
  composeURLForSetSort(sort) {
    const clonedParams = this._resetOrDefaultClonedParams();
    clonedParams.set(CatalogURLSearchParams.Sort, serializeSort(sort));
    return this._composeURL(clonedParams.toString());
  }
}
const CatalogContext = createContext(void 0);
const CatalogProvider = ({ children, config }) => {
  const { parsedUrl } = config;
  const [urlManager] = useState(new CatalogURLManager(parsedUrl));
  const [params, setParams] = useState(void 0);
  const parsedUrlRequestParams = urlManager.getParsedRequestParams();
  const queryVariables = parseQueryVariables({
    ...DEFAULT_PARAMS,
    ...parsedUrlRequestParams
  });
  const { data, error, loading } = useCatalogContentQuery({
    variables: {
      ...queryVariables
    }
  });
  const didInitialized = useRef(false);
  if (!didInitialized.current && !loading) {
    const newParams = {
      ...DEFAULT_PARAMS,
      ...parsedUrlRequestParams,
      ...parseResponseData(data, error)
    };
    setParams(newParams);
    urlManager.setIsCurated(newParams.isCurated);
    urlManager.setSelectedDisplayType(newParams.displayType || newParams.resultsDisplayType);
    didInitialized.current = true;
  }
  if (!params) {
    return null;
  }
  return /* @__PURE__ */ jsx(CatalogContext.Provider, {
    value: {
      urlManager,
      params
    },
    children
  });
};
function useWindowEventListener(eventName, handler) {
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  useEffect(() => {
    const eventListener = event => savedHandler.current.call(window, event);
    window.addEventListener(eventName, eventListener);
    return () => {
      window.removeEventListener(eventName, eventListener);
    };
  }, [eventName]);
}
const DEFAULT_TIMEOUT = 500;
const DEFAULT_ANIMATION_SPEED = 0.25;
const DEFAULT_ELEMENT_TYPE = 'div';
const HeightEqualizerContext = createContext(void 0);
const HeightEqualizer = ({
  children,
  timeout = DEFAULT_TIMEOUT,
  animationSpeed = DEFAULT_ANIMATION_SPEED
}) => {
  const [sizes, setSizes] = useState([]);
  const [temporarySizes, setTemporarySizes] = useState([]);
  const [update, setUpdate] = useState(false);
  const [originalChildrenCount, setOriginalChildrenCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const handleUpdate = useCallback(() => setUpdate(value => !value), []);
  const debouncedHandleUpdate = useDebouncedCallback(handleUpdate, timeout);
  useWindowEventListener('resize', debouncedHandleUpdate);
  useEffect(() => {
    handleUpdate();
  }, [originalChildrenCount, handleUpdate]);
  useEffect(() => {
    if (originalChildrenCount <= childrenCount) {
      let filteredSizes = [];
      temporarySizes.map(filteredSize => {
        const name = filteredSize.name;
        const height = filteredSize.height;
        const elementIndex = filteredSizes.findIndex(e => e.name === name);
        if (elementIndex > -1) {
          const savedHeight = filteredSizes[elementIndex].height;
          if (savedHeight < height) {
            filteredSizes[elementIndex].height = height;
          }
        } else {
          filteredSizes = [
            ...filteredSizes,
            {
              name,
              height
            }
          ];
        }
      });
      setSizes(filteredSizes);
      setTemporarySizes([]);
      setChildrenCount(0);
    }
  }, [originalChildrenCount, childrenCount, temporarySizes]);
  return /* @__PURE__ */ jsx(HeightEqualizerContext.Provider, {
    value: {
      sizes,
      temporarySizes,
      update,
      animationSpeed,
      originalChildrenCount,
      childrenCount,
      setTemporarySizes,
      setOriginalChildrenCount,
      setChildrenCount
    },
    children
  });
};
HeightEqualizer.displayName = 'HeightEqualizer';
function useHeightEqualizer() {
  const context = React.useContext(HeightEqualizerContext);
  if (!context) {
    throw new Error('Expected a Height Equalizer Context, but no context was found');
  }
  return context;
}
const HeightEqualizerElement = ({ children = '', name, as, className }) => {
  const {
    sizes,
    update,
    setTemporarySizes,
    setOriginalChildrenCount,
    setChildrenCount,
    animationSpeed
  } = useHeightEqualizer();
  const [height, setHeight] = useState();
  const innerElement = useRef(null);
  const getHeight = useCallback(() => {
    if (!innerElement.current) {
      return;
    }
    const tempHeight = innerElement.current.style.getPropertyValue('height');
    innerElement.current.style.removeProperty('height');
    const newHeight = innerElement.current.offsetHeight;
    innerElement.current.style.setProperty('height', tempHeight);
    setTemporarySizes(values => {
      return [
        ...values,
        {
          name,
          height: newHeight
        }
      ];
    });
    setChildrenCount(value => value + 1);
  }, [setTemporarySizes, setChildrenCount, name]);
  useEffect(() => {
    setOriginalChildrenCount(value => value + 1);
    return () => {
      setOriginalChildrenCount(value => value - 1);
    };
  }, [setOriginalChildrenCount]);
  useEffect(() => {
    getHeight();
  }, [update, getHeight]);
  useEffect(() => {
    const elementIndex = sizes.findIndex(e => e.name === name);
    if (sizes && sizes[elementIndex] && sizes[elementIndex].height) {
      setHeight(sizes[elementIndex].height);
    }
  }, [sizes, name]);
  const inlineStyles = {
    height: `${height}px`,
    transitionDuration: animationSpeed === 0 ? '' : `${animationSpeed}s`
  };
  return React.createElement(
    as != null ? as : DEFAULT_ELEMENT_TYPE,
    {
      ref: innerElement,
      className,
      style: inlineStyles
    },
    children
  );
};
HeightEqualizerElement.displayName = 'HeightEqualizerElement';
function useCatalog() {
  const context = React.useContext(CatalogContext);
  if (!context) {
    throw new Error('Expected a Catalog Context, but no Catalog Context was found');
  }
  return context;
}
({
  [SortColumn.UpdatedAt]: 'catalog.sort-updated',
  [SortColumn.CreatedAt]: 'catalog.sort-created',
  [SortColumn.Title]: 'catalog.sort-title',
  [SortColumn.PublishDate]: 'catalog.sort-publish-date',
  [SortColumn.CourseStartDate]: 'catalog.sort-course-start-date',
  [SortColumn.Relevance]: 'catalog.sort-relevance'
});
const ItemLinkWrapper = ({ children, onClick, item }) => {
  const { isActive, href } = item;
  const itemIsActiveOrWebinarOrEvent = !!isActive;
  const handleClick = useCallback(
    evt => {
      onClick && onClick(evt, item);
    },
    [item, onClick]
  );
  const linkProps = {
    href,
    onClick: handleClick,
    className: `block text-gray-800 ${!itemIsActiveOrWebinarOrEvent ? 'cursor-default' : ''}`
  };
  return /* @__PURE__ */ jsx('a', {
    ...linkProps,
    children
  });
};
ItemLinkWrapper.displayName = 'ItemLinkWrapper';
const ItemRibbon = ({ ribbon, attached, attachedClassnames = '' }) => {
  const { contrastColor, color, darkerColor, label } = ribbon;
  const wrapperStyles = {
    color: contrastColor,
    backgroundColor: color
  };
  const wrapperAttachedClassnames = attached ? clsx('-right-2', attachedClassnames) : '-top-1';
  const wrapperClassnames = clsx(
    'text-xs font-normal leading-none absolute right-0 uppercase max-w-1/2 overflow-ellipsis z-10 px-1.5 py-1 whitespace-no-wrap',
    wrapperAttachedClassnames
  );
  const cornerStyles = {
    borderTopColor: darkerColor,
    borderLeftColor: darkerColor
  };
  return /* @__PURE__ */ jsxs('div', {
    className: wrapperClassnames,
    style: wrapperStyles,
    children: [
      attached &&
        /* @__PURE__ */ jsx('div', {
          className:
            'absolute right-0 top-full block h-0 w-0 border-4 border-solid border-transparent',
          style: cornerStyles
        }),
      label
    ]
  });
};
ItemRibbon.displayName = 'ItemRibbon';
const limitText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};
const DEFAULT_LOCALE = 'en-US';
const DEFAULT_CURRENCY_CODE = 'USD';
const ItemAssetBlock = ({ asset }) => {
  const { appearance } = usePageContext();
  const itemAsset = asset ? asset : appearance == null ? void 0 : appearance.logoAsset;
  return /* @__PURE__ */ jsx('img', {
    src: itemAsset,
    className: clsx(asset && 'w-full rounded-t-md', !asset && 'p-10 w-full border rounded-t-md')
  });
};
ItemAssetBlock.displayName = 'ItemAssetBlock';
const HeightEqualizerElementWrapper = ({ className, children, ...restProps }) => {
  const baseClassnames = 'overflow-hidden block transition-all';
  return /* @__PURE__ */ jsx(HeightEqualizerElement, {
    className: clsx(className, baseClassnames),
    ...restProps,
    children
  });
};
const ItemTitleBlock = ({ title }) =>
  /* @__PURE__ */ jsx('div', {
    className: 'font-semibold text-lg',
    children: title
  });
const ItemSourceBlock = ({ contentTypeLabel, courseStartDate }) =>
  /* @__PURE__ */ jsx(HeightEqualizerElementWrapper, {
    name: 'source',
    className: 'text-sm text-gray-500',
    children: /* @__PURE__ */ jsx('p', {
      children:
        courseStartDate &&
        /* @__PURE__ */ jsx('span', {
          className: 'flex text-md text-gray-500 font-semibold',
          children: contentTypeLabel
        })
    })
  });
const ItemCtaBlock = ({ isActive, callToAction }) => {
  if (isActive) {
    return /* @__PURE__ */ jsx('span', {
      className:
        'border-none text-blue-500 rounded-sm cursor-pointer inline-block text-sm font-normal leading-normal m-0 p-0 relative text-center no-underline transition-colors ease-in-out duration-200 float-right h-auto hover:text-accent',
      children: callToAction
    });
  }
  return /* @__PURE__ */ jsx('span', {
    className: 'text-xs',
    children: callToAction
  });
};
const DisplayTypeResultsGridItem = ({ onClick, displayStartDateEnabled, item }) => {
  const {
    asset,
    title,
    description,
    isActive,
    ribbon,
    courseStartDate,
    contentTypeLabel,
    callToAction,
    timeZone
  } = item;
  return /* @__PURE__ */ jsx('li', {
    children: /* @__PURE__ */ jsx(Fragment, {
      children: /* @__PURE__ */ jsx(ItemLinkWrapper, {
        item,
        onClick,
        children: /* @__PURE__ */ jsx('div', {
          className: 'grid grid-cols-1 relative',
          children: /* @__PURE__ */ jsxs('div', {
            className: 'bg-white rounded-md',
            children: [
              ribbon &&
                /* @__PURE__ */ jsx(ItemRibbon, {
                  ribbon,
                  attached: true,
                  attachedClassnames: '-top-1'
                }),
              /* @__PURE__ */ jsx('div', {
                className: 'relative',
                children: /* @__PURE__ */ jsx(ItemAssetBlock, {
                  asset
                })
              }),
              /* @__PURE__ */ jsxs('div', {
                className: 'p-8 space-y-4',
                children: [
                  title &&
                    /* @__PURE__ */ jsx(ItemTitleBlock, {
                      title
                    }),
                  /* @__PURE__ */ jsx(ItemSourceBlock, {
                    contentTypeLabel,
                    courseStartDate
                  }),
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-sm text-gray-500',
                    children: description && limitText(description, 75)
                  }),
                  /* @__PURE__ */ jsx('hr', {
                    className: 'my-2'
                  }),
                  /* @__PURE__ */ jsx('div', {
                    className: 'text-base leading-none py-2',
                    children: /* @__PURE__ */ jsx(ItemCtaBlock, {
                      isActive,
                      callToAction
                    })
                  })
                ]
              })
            ]
          })
        })
      })
    })
  });
};
const DisplayTypeResultsGrid = ({ items, ...restProps }) => {
  let contentItems;
  if (restProps.numberOfContentItems) {
    contentItems = items
      .slice(0, restProps.numberOfContentItems)
      .filter(({ isNotCompleted }) => !isNotCompleted)
      .map((item, index) =>
        /* @__PURE__ */ jsx(
          DisplayTypeResultsGridItem,
          {
            item,
            ...restProps
          },
          `result-item-${index}`
        )
      );
  } else {
    contentItems = items
      .filter(({ isNotCompleted }) => !isNotCompleted)
      .map((item, index) =>
        /* @__PURE__ */ jsx(
          DisplayTypeResultsGridItem,
          {
            item,
            ...restProps
          },
          `result-item-${index}`
        )
      );
  }
  return /* @__PURE__ */ jsx(HeightEqualizer, {
    children: /* @__PURE__ */ jsx('ul', {
      className: 'grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      children: contentItems
    })
  });
};
DisplayTypeResultsGrid.displayName = 'DisplayTypeResultsGrid';
const DisplayTypeResults = ({
  hydratedResults,
  displayBundle,
  displayAuthorsEnabled,
  displayStartDateEnabled,
  onClick,
  onAddedToQueue,
  priceFormatFn,
  numberOfContentItems
}) => {
  const baseProps = {
    items: hydratedResults,
    onAddedToQueue,
    priceFormatFn,
    numberOfContentItems
  };
  const props = {
    ...baseProps,
    onClick,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayBundle
  };
  return /* @__PURE__ */ jsx(DisplayTypeResultsGrid, {
    ...props
  });
};
const CatalogResults = ({
  companyHasSessionLevelCustomFieldsFeature,
  companyTimeZone,
  onClick,
  onAddedToQueue,
  priceFormat,
  companyDefaultLocale,
  currencyCode,
  numberOfContentItems
}) => {
  const { params } = useCatalog();
  const {
    aggregations,
    aggregationFilters,
    displayType,
    resultsDisplayType,
    results,
    queryCustomFields,
    displayBundle,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayDescriptionOnCalendar
  } = params;
  const { i18n, t } = useTranslation();
  let activeFilterDescription;
  if (aggregationFilters.length) {
    const { label: filterLabel, value: filterValue } = aggregationFilters[0];
    aggregations.forEach(({ label, buckets = [] }) => {
      if (label === filterLabel) {
        buckets.forEach(({ value, description }) => {
          if (value === filterValue) {
            activeFilterDescription = description;
          }
        });
      }
    });
  }
  const activeDisplayType = displayType || resultsDisplayType;
  const hydrationCustomFields = companyHasSessionLevelCustomFieldsFeature ? queryCustomFields : {};
  const hydratedResults = results.map(result =>
    hydrateContentItem(i18n, result, companyTimeZone, hydrationCustomFields)
  );
  const hasResults = !!hydratedResults.length;
  let priceFormatFn = priceFormat;
  if (!priceFormatFn) {
    const locale = companyDefaultLocale != null ? companyDefaultLocale : DEFAULT_LOCALE;
    const currency = currencyCode != null ? currencyCode : DEFAULT_CURRENCY_CODE;
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency
    });
    priceFormatFn = priceInCents => formatter.format(priceInCents / 100);
  }
  const emptyResults =
    !hasResults &&
    /* @__PURE__ */ jsx('div', {
      className: 'bg-gray-100 text-gray-700 p-4 mb-4 rounded',
      children: t('filter-no-courses')
    });
  const activeFilter =
    !!activeFilterDescription &&
    /* @__PURE__ */ jsxs(Fragment, {
      children: [activeFilterDescription, /* @__PURE__ */ jsx('hr', {})]
    });
  const resultsProps = {
    hydratedResults,
    displayBundle,
    displayAuthorsEnabled,
    displayStartDateEnabled,
    displayDescriptionOnCalendar,
    companyTimeZone,
    onClick,
    onAddedToQueue,
    priceFormatFn
  };
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [
      activeFilter,
      emptyResults,
      hasResults &&
        activeDisplayType &&
        /* @__PURE__ */ jsx(DisplayTypeResults, {
          numberOfContentItems,
          ...resultsProps,
          activeDisplayType
        })
    ]
  });
};
CatalogResults.displayName = 'CatalogResults';
export {
  CatalogProvider as C,
  DropDownOpen as D,
  Footer as F,
  LoadingDots as L,
  NavBar as N,
  SortColumn as S,
  useLanguagesQueryQuery as a,
  CatalogResults as b,
  useUserWaitlistQuery as c,
  useUnenrollFromWaitlistMutation as d,
  useReinstateUserCourseMutation as e,
  useReinstateUserLearningPathMutation as f,
  useUserArchivesQuery as g,
  formatTime as h,
  useUserBookmarksQuery as i,
  useUpdateBookmarkFolderMutation as j,
  useDestroyBookmarkFolderMutation as k,
  useUserBookmarksByFolderQuery as l,
  useUpdateBookmarkMutation as m,
  useDestroyBookmarkMutation as n,
  DropDownClosed as o,
  useUserCourseCompletionProgressQuery as p,
  useUserContentItemsQuery as q,
  hydrateContentItem as r,
  useUserCertificatesQuery as s,
  useUserCertificateFieldsQuery as t,
  useCatalog as u,
  useCreateCertificateFromUploadMutation as v,
  useContentGroupsQuery as w,
  ContentKind as x
};
