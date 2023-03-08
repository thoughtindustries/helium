import { GlobalTypes } from '@thoughtindustries/content';
import { AvailableTab, TabKey } from '../Types/types';

export const getAvailableTabs = (
  contentGroups: GlobalTypes.ContentGroup[],
  userHasManagerInterfaceAccess?: boolean,
  companyEnableExternalCertificateUploads?: boolean,
  companyHasWaitlistingFeature?: boolean
): AvailableTab[] => {
  const tabs = [];
  const contentGroupList = contentGroups.reduce((list, { kind, count }) => {
    list[kind] = count;
    return list;
  }, {} as { [key in GlobalTypes.ContentGroupKind]?: number });

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

  if (
    contentGroupList.certificates ||
    companyEnableExternalCertificateUploads ||
    userHasManagerInterfaceAccess
  ) {
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
