import { TabKey } from '../Types/types';

export const localizedTabLabelMapping: { [key in TabKey]: string } = {
  [TabKey.Current]: 'dashboard.current',
  [TabKey.Events]: 'dashboard.events',
  [TabKey.LearningPath]: 'learning-path',
  [TabKey.Completed]: 'dashboard.completed',
  [TabKey.Archived]: 'dashboard.archived',
  [TabKey.Bookmark]: 'dashboard.bookmark',
  [TabKey.Certificate]: 'dashboard.certificates',
  [TabKey.Waitlist]: 'dashboard.waitlisted'
};
