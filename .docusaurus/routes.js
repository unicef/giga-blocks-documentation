
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','b24'),
    exact: true
  },
  {
    path: '/blog/2024/01/01/ Release 1.0',
    component: ComponentCreator('/blog/2024/01/01/ Release 1.0','1ac'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help','416'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/privacy-policy',
    component: ComponentCreator('/privacy-policy','5f6'),
    exact: true
  },
  {
    path: '/versions',
    component: ComponentCreator('/versions','b27'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api','181'),
    routes: [
      {
        path: '/api/',
        component: ComponentCreator('/api/','4ef'),
        exact: true
      },
      {
        path: '/api/auth-controller-generate-nonce',
        component: ComponentCreator('/api/auth-controller-generate-nonce','3c6'),
        exact: true
      },
      {
        path: '/api/auth-controller-refresh',
        component: ComponentCreator('/api/auth-controller-refresh','abe'),
        exact: true
      },
      {
        path: '/api/auth-controller-register',
        component: ComponentCreator('/api/auth-controller-register','e11'),
        exact: true
      },
      {
        path: '/api/auth-controller-send-otp',
        component: ComponentCreator('/api/auth-controller-send-otp','eb9'),
        exact: true
      },
      {
        path: '/api/auth-controller-wallet-login',
        component: ComponentCreator('/api/auth-controller-wallet-login','a31'),
        exact: true
      },
      {
        path: '/api/auth-controller-wallet-register',
        component: ComponentCreator('/api/auth-controller-wallet-register','758'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-create',
        component: ComponentCreator('/api/contribute-data-controller-create','334'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-find-all',
        component: ComponentCreator('/api/contribute-data-controller-find-all','84a'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-find-one',
        component: ComponentCreator('/api/contribute-data-controller-find-one','251'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-remove',
        component: ComponentCreator('/api/contribute-data-controller-remove','3d8'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-update',
        component: ComponentCreator('/api/contribute-data-controller-update','5a6'),
        exact: true
      },
      {
        path: '/api/contribute-data-controller-validate',
        component: ComponentCreator('/api/contribute-data-controller-validate','7b2'),
        exact: true
      },
      {
        path: '/api/create-new-user',
        component: ComponentCreator('/api/create-new-user','44e'),
        exact: true
      },
      {
        path: '/api/delete-an-user',
        component: ComponentCreator('/api/delete-an-user','0cb'),
        exact: true
      },
      {
        path: '/api/email-controller-create',
        component: ComponentCreator('/api/email-controller-create','d84'),
        exact: true
      },
      {
        path: '/api/email-controller-find-all',
        component: ComponentCreator('/api/email-controller-find-all','e8d'),
        exact: true
      },
      {
        path: '/api/email-controller-find-one',
        component: ComponentCreator('/api/email-controller-find-one','365'),
        exact: true
      },
      {
        path: '/api/email-controller-remove',
        component: ComponentCreator('/api/email-controller-remove','383'),
        exact: true
      },
      {
        path: '/api/email-controller-update',
        component: ComponentCreator('/api/email-controller-update','26b'),
        exact: true
      },
      {
        path: '/api/get-an-user',
        component: ComponentCreator('/api/get-an-user','0ce'),
        exact: true
      },
      {
        path: '/api/list-all-user',
        component: ComponentCreator('/api/list-all-user','38e'),
        exact: true
      },
      {
        path: '/api/school-controller-count-schools',
        component: ComponentCreator('/api/school-controller-count-schools','9b7'),
        exact: true
      },
      {
        path: '/api/school-controller-find-all',
        component: ComponentCreator('/api/school-controller-find-all','698'),
        exact: true
      },
      {
        path: '/api/school-controller-find-by-country',
        component: ComponentCreator('/api/school-controller-find-by-country','c99'),
        exact: true
      },
      {
        path: '/api/school-controller-find-one',
        component: ComponentCreator('/api/school-controller-find-one','0ed'),
        exact: true
      },
      {
        path: '/api/school-controller-list-uploads',
        component: ComponentCreator('/api/school-controller-list-uploads','236'),
        exact: true
      },
      {
        path: '/api/school-controller-mint-batch-school',
        component: ComponentCreator('/api/school-controller-mint-batch-school','013'),
        exact: true
      },
      {
        path: '/api/school-controller-mint-school',
        component: ComponentCreator('/api/school-controller-mint-school','2b6'),
        exact: true
      },
      {
        path: '/api/school-controller-queue',
        component: ComponentCreator('/api/school-controller-queue','63f'),
        exact: true
      },
      {
        path: '/api/school-controller-remove-all',
        component: ComponentCreator('/api/school-controller-remove-all','ec3'),
        exact: true
      },
      {
        path: '/api/school-controller-update',
        component: ComponentCreator('/api/school-controller-update','541'),
        exact: true
      },
      {
        path: '/api/school-controller-upload-file',
        component: ComponentCreator('/api/school-controller-upload-file','4bf'),
        exact: true
      },
      {
        path: '/api/update-an-user',
        component: ComponentCreator('/api/update-an-user','716'),
        exact: true
      }
    ]
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','f7d'),
    routes: [
      {
        path: '/docs/next/bounty-information',
        component: ComponentCreator('/docs/next/bounty-information','0bd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/brand-guidelines',
        component: ComponentCreator('/docs/next/brand-guidelines','909'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/code-of-conduct',
        component: ComponentCreator('/docs/next/code-of-conduct','1f6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/community-feedback',
        component: ComponentCreator('/docs/next/community-feedback','baa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/contribution-guidelines',
        component: ComponentCreator('/docs/next/contribution-guidelines','f34'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/getting-started-developer',
        component: ComponentCreator('/docs/next/getting-started-developer','c35'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/intro',
        component: ComponentCreator('/docs/next/intro','8d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/license',
        component: ComponentCreator('/docs/next/license','f3c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/software-requirements-specifications',
        component: ComponentCreator('/docs/next/software-requirements-specifications','8ac'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','7c0'),
    routes: [
      {
        path: '/docs/bounty-information',
        component: ComponentCreator('/docs/bounty-information','78f'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/brand-guidelines',
        component: ComponentCreator('/docs/brand-guidelines','f41'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/code-of-conduct',
        component: ComponentCreator('/docs/code-of-conduct','5f2'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/community-feedback',
        component: ComponentCreator('/docs/community-feedback','d46'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/contribution-guidelines',
        component: ComponentCreator('/docs/contribution-guidelines','71b'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/getting-started-developer',
        component: ComponentCreator('/docs/getting-started-developer','40f'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','130'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/license',
        component: ComponentCreator('/docs/license','425'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      },
      {
        path: '/docs/software-requirements-specifications',
        component: ComponentCreator('/docs/software-requirements-specifications','049'),
        exact: true,
        'sidebar': "version-1.0/tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','deb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
