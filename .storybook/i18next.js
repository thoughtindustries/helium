import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false
  },

  resources: {
    en: {
      translation: {
        'agree-terms': 'I agree to the',
        'agree-terms-alert': 'Please agree to the terms & conditions.',
        'already-member': 'Already a Member?',
        'bundle.learn-button': 'Learn More',
        'cart.add-instructor-button': 'Add Instructor',
        'cart.coupon': 'Coupon:',
        'cart.checkout': 'Checkout',
        'cart.empty': 'Your cart is empty.',
        'cart.header_one': 'Your Basket ({{count}} item)',
        'cart.header_other': 'Your Basket ({{count}} items)',
        'cart.instructor-access-added': 'Instructor Access Added',
        'cart.instructor-access-body':
          'By adding premium instruction to this course you will avail of one-on-one  expert feedback, coaching and more.',
        'cart.instructor-access-headline':
          'Would you like to add expert personal instruction to this course?',
        'catalog.date-time': 'Date & Time',
        'catalog.location': 'Location',
        'catalog.location-in-person': 'In Person',
        'catalog.location-online': 'Online',
        'catalog.price': 'Price',
        'catalog.sort-by': 'Sort by',
        'catalog.sort-course-start-date': 'Start Date',
        'catalog.sort-created': 'Most Recent',
        'catalog.sort-publish-date': 'Publish Date',
        'catalog.sort-relevance': 'Relevance',
        'catalog.sort-title': 'Title',
        'catalog.sort-updated': 'Last Updated',
        'catalog-search-header': 'Browse',
        'catalog-search-placeholder': 'Search for content',
        'course.per-month': 'per month',
        'course.per-year': 'per year',
        'course-add-to-queue': 'Add to Queue',
        'course-added-to-queue': 'Added to Queue',
        'course-completed-decal': 'Completed!',
        'course-view-details': 'View Details',
        'dashboard.archived': 'Archived',
        'dashboard.available': 'Available',
        'dashboard.bookmark': 'Bookmarks',
        'dashboard.bookmark-save': 'Save',
        'bookmark.remove': 'Remove Bookmark',
        'bookmark.cancel': 'Cancel',
        'dashboard.archive-warning':
          'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.',
        'bookmark.view': 'View',
        'external-certificate.upload': 'Upload Third-Party Certificate',
        'bookmark.edit': 'Edit',
        'external-certificate.instructions':
          'Upload a third-party certificate. Please provide details.',
        'archive.archive': 'Archive',
        'dashboard.activity': 'Activity',
        'dashboard.started': 'Started',
        'dashboard.completed': 'Completed',
        'dashboard.certificates': 'Certifications',
        'dashboard.collaborations': 'Collaborations',
        'dashboard.current': 'My Learning',
        'dashboard.events': 'Events',
        'dashboard.waitlisted': 'Waitlisted',
        'redemption-code.validate': 'Validate',
        'redemption-code.placeholder': 'Enter Code Here',
        'redemption-code.add-redemption-code': '+ Add Another Code',
        'redemption-code.manual-already-redeemed-error':
          'This code has already been redeemed. Please sign in to access the school.',
        'redemption-code.manual-code-expired':
          'Sorry, this code has expired and is no longer valid.',
        'redemption-code.redeem-course-copy-signed-in-manual-code':
          'Fill in a code below, click validate, and then redeem your code.',
        'redemption-code.redeem-course-copy-not-signed-in-manual-code':
          'Fill in your details, validate your redemption code, and click redeem to access the school.',
        'redemption-code.redeem-code-preloaded': 'Register',
        'redemption-code.validating': 'Validating…',
        'redemption-code.validated': 'Validated!',
        'redemption-code.manual-code-not-found-error':
          'Code not found. Please check your code and try again.',
        'redemption-code.redeem-code-manual-validated': 'Congrats, your code has been validated!',
        'register-first-name': 'First Name',
        'register-last-name': 'Last Name',
        'register-email': 'Email Address',
        'register-password': 'Password',
        'register-confirm-password': 'Password Confirmation',
        'register-invalid-code-alert':
          'You have not validated any redemption codes. Please try again.',
        course: 'Course',
        'filter-by': 'Filter by',
        'filter-no-courses':
          'Sorry, we were unable to find a match for that search term or category, please try again.',
        'learning-path_one': 'Learning Path',
        'learning-path_other': 'Learning Paths',
        'free-purchase': 'This purchase is free!',
        'header-cart': 'Basket',
        'mobile-back-button': 'Back',
        'mobile-menu-button': 'Menu',
        more: 'more',
        'primary-bundle-intro': 'All courses only',
        'sign-in': 'Sign In',
        'terms-and-conditions': 'Terms & Conditions',
        'product.add-to-cart': 'Add to basket',
        'product.continue': 'Continue Shopping',
        quantity: 'Quantity:',
        'relatedProducts.checkout': 'Recommended for you…',
        remove: 'Remove',
        total: 'Total:',
        'total-due-now': 'Total Due Today:',
        undo: 'Undo'
      }
    }
  }
});

export { i18n };
