const {
  readTranslations,
  processTranslations,
  writeTranslations
} = require('../lib/parse-translations');
const fsPromises = require('fs/promises');
const path = require('path');
const { writeFile } = require('fs/promises');

describe('readTranslations', () => {
  it('should read translations file correctly', async () => {
    const OP_DIR = path.join(process.cwd(), 'tooling/cli');

    const expectedTranslations = {
      en: {
        lms: {
          'content-access': 'Content Access:',
          runs: 'Runs:',
          'course-ended': 'Course ended:',
          'course.prerequisites': 'You have not met the prerequisites.',
          'course-view-details': 'View Details',
          'learning-path.view': 'View Learning Path',
          'learning-path.continue': 'Continue Learning Path',
          'learning-path.start': 'Start Learning Path',
          'view-course': 'View %{contentType}',
          'continue-course': 'Continue',
          'start-course': 'Start %{contentType}',
          'not-completed-course': 'Not Completed',
          'join-waitlist': 'Join Waitlist',
          'dashboard.bookmark-save': 'Save',
          'dashboard.unenroll-waitlist': 'Unenroll from Waitlist',
          'dashboard.archive-warning':
            'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.',
          'dashboard.archived': 'Archived',
          'bookmark.cancel': 'Cancel',
          'bookmark.delete-confirmation': 'Are you sure?',
          'bookmark.delete-folder-confirmation':
            'This action cannot be undone and all bookmarks in this folder will be deleted.',
          'bookmark.view': 'View',
          'bookmark.remove': 'Remove Bookmark',
          no: 'No',
          yes: 'Yes',
          'filter-no-courses':
            'Sorry, we were unable to find a match for that search term or category, please try again.',
          'archive.reinstate': 'Reinstate',
          'external-certificate.upload': 'Upload Third-Party Certificate',
          'external-certificate.instructions':
            'Upload a third-party certificate. Please provide details.',
          'external-certificate.cancel': 'Cancel',
          'external-certificate.submit': 'Submit',
          remove: 'Remove',
          'wysiwyg.image': 'Image',
          'certificate.issued-date': 'Issue Date',
          'certificate.expiration-date': 'Expiration Date'
        }
      }
    };

    const translations = await readTranslations(OP_DIR);

    expect(translations).toEqual(expectedTranslations);
  });
});

describe('processTranslations', () => {
  it('should process translations correctly', async () => {
    const OP_DIR = path.join(process.cwd(), 'tooling/cli');

    const expectedTranslations = {
      en: {
        lms: {
          'content-access': 'Content Access:',
          runs: 'Runs:',
          'course-ended': 'Course ended:',
          'course.prerequisites': 'You have not met the prerequisites.',
          'course-view-details': 'View Details',
          'learning-path.view': 'View Learning Path',
          'learning-path.continue': 'Continue Learning Path',
          'learning-path.start': 'Start Learning Path',
          'view-course': 'View %{contentType}',
          'continue-course': 'Continue',
          'start-course': 'Start %{contentType}',
          'not-completed-course': 'Not Completed',
          'join-waitlist': 'Join Waitlist',
          'dashboard.bookmark-save': 'Save',
          'dashboard.unenroll-waitlist': 'Unenroll from Waitlist',
          'dashboard.archive-warning':
            'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.',
          'dashboard.archived': 'Archived',
          'bookmark.cancel': 'Cancel',
          'bookmark.delete-confirmation': 'Are you sure?',
          'bookmark.delete-folder-confirmation':
            'This action cannot be undone and all bookmarks in this folder will be deleted.',
          'bookmark.view': 'View',
          'bookmark.remove': 'Remove Bookmark',
          no: 'No',
          yes: 'Yes',
          'filter-no-courses':
            'Sorry, we were unable to find a match for that search term or category, please try again.',
          'archive.reinstate': 'Reinstate',
          'external-certificate.upload': 'Upload Third-Party Certificate',
          'external-certificate.instructions':
            'Upload a third-party certificate. Please provide details.',
          'external-certificate.cancel': 'Cancel',
          'external-certificate.submit': 'Submit',
          remove: 'Remove',
          'wysiwyg.image': 'Image',
          'certificate.issued-date': 'Issue Date',
          'certificate.expiration-date': 'Expiration Date'
        }
      }
    };

    const translations = await readTranslations(OP_DIR);

    processTranslations(translations, OP_DIR).then(result => {
      expect(result).toEqual(expectedTranslations);
    });
  });
});

describe('writeTranslations', () => {
  it('should write translations to a file', async () => {
    const OP_DIR = path.join(process.cwd(), 'tooling/cli');

    try {
      const translation_to_write = {
        en: {
          lms: {
            'content-access': 'Content Access:',
            runs: 'Runs:',
            'course-ended': 'Course ended:',
            'course.prerequisites': 'You have not met the prerequisites.',
            'course-view-details': 'View Details',
            'learning-path.view': 'View Learning Path',
            'learning-path.continue': 'Continue Learning Path',
            'learning-path.start': 'Start Learning Path',
            'view-course': 'View %{contentType}',
            'continue-course': 'Continue',
            'start-course': 'Start %{contentType}',
            'not-completed-course': 'Not Completed',
            'join-waitlist': 'Join Waitlist',
            'dashboard.bookmark-save': 'Save',
            'dashboard.unenroll-waitlist': 'Unenroll from Waitlist',
            'dashboard.archive-warning':
              'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.',
            'dashboard.archived': 'Archived',
            'bookmark.cancel': 'Cancel',
            'bookmark.delete-confirmation': 'Are you sure?',
            'bookmark.delete-folder-confirmation':
              'This action cannot be undone and all bookmarks in this folder will be deleted.',
            'bookmark.view': 'View',
            'bookmark.remove': 'Remove Bookmark',
            no: 'No',
            yes: 'Yes',
            'filter-no-courses':
              'Sorry, we were unable to find a match for that search term or category, please try again.',
            'archive.reinstate': 'Reinstate',
            'external-certificate.upload': 'Upload Third-Party Certificate',
            'external-certificate.instructions':
              'Upload a third-party certificate. Please provide details.',
            'external-certificate.cancel': 'Cancel',
            'external-certificate.submit': 'Submit',
            remove: 'Remove',
            'wysiwyg.image': 'Image',
            'certificate.issued-date': 'Issue Date',
            'certificate.expiration-date': 'Expiration Date'
          }
        }
      };

      const TI_TRANSLATIONS_PATH = path.join(OP_DIR, 'locales/translations.json');

      // Empty the translations file
      await fsPromises.writeFile(TI_TRANSLATIONS_PATH, '');

      await writeTranslations(translation_to_write, OP_DIR);

      const writtenContent = await fsPromises.readFile(path.join(TI_TRANSLATIONS_PATH), 'utf8');
      const parsedContent = JSON.parse(writtenContent);

      expect(parsedContent).toEqual(translation_to_write);
    } finally {
      const originalTranslations = {
        en: {
          lms: {
            'content-access': 'Content Access:',
            runs: 'Runs:',
            'course-ended': 'Course ended:',
            'course.prerequisites': 'You have not met the prerequisites.',
            'course-view-details': 'View Details',
            'learning-path.view': 'View Learning Path',
            'learning-path.continue': 'Continue Learning Path',
            'learning-path.start': 'Start Learning Path',
            'view-course': 'View %{contentType}',
            'continue-course': 'Continue',
            'start-course': 'Start %{contentType}',
            'not-completed-course': 'Not Completed',
            'join-waitlist': 'Join Waitlist',
            'dashboard.bookmark-save': 'Save',
            'dashboard.unenroll-waitlist': 'Unenroll from Waitlist',
            'dashboard.archive-warning':
              'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.',
            'dashboard.archived': 'Archived',
            'bookmark.cancel': 'Cancel',
            'bookmark.delete-confirmation': 'Are you sure?',
            'bookmark.delete-folder-confirmation':
              'This action cannot be undone and all bookmarks in this folder will be deleted.',
            'bookmark.view': 'View',
            'bookmark.remove': 'Remove Bookmark',
            no: 'No',
            yes: 'Yes',
            'filter-no-courses':
              'Sorry, we were unable to find a match for that search term or category, please try again.',
            'archive.reinstate': 'Reinstate',
            'external-certificate.upload': 'Upload Third-Party Certificate',
            'external-certificate.instructions':
              'Upload a third-party certificate. Please provide details.',
            'external-certificate.cancel': 'Cancel',
            'external-certificate.submit': 'Submit',
            remove: 'Remove',
            'wysiwyg.image': 'Image',
            'certificate.issued-date': 'Issue Date',
            'certificate.expiration-date': 'Expiration Date'
          }
        }
      };
      await writeFile(
        path.join(OP_DIR, 'locales/translations.json'),
        JSON.stringify(originalTranslations, null, 2)
      );
    }
  });
});
