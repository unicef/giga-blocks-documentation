import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "giga-api/giga-nft-2-0-api-provider",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "giga-api/auth-controller-app-test",
          label: "Ping the server",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/auth-controller-login",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/auth-controller-send-admin-otp",
          label: "send otp for admin login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/auth-controller-refresh",
          label: "AuthController_refresh",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "School",
      items: [
        {
          type: "doc",
          id: "giga-api/school-controller-count-schools",
          label: "Get the count of schools",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-giga-metrics",
          label: "Get the giga metrics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-upload-file",
          label: "Upload the school csv for bulk mint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-validate-csv",
          label: "Upload the school csv for bulk mint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-find-all",
          label: "Get all schools",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-find-one",
          label: "Get a school",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-list-uploads",
          label: "Get all uploads",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-all-themes",
          label: "Get all themes added in giga system",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-single-theme",
          label: "Get a theme by name",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-update-theme",
          label: "Theme update for a school",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-reserve-nft",
          label: "Reserve a school",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-claim-school",
          label: "Claim the reserved school",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-giga-school-id",
          label: "Get the school by gigaSchoolId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-activate-school",
          label: "Activate the school by paying user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-daily-qos",
          label: "Get the daily qos data of school",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-weekly-qos",
          label: "Get the weekly qos data of school",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-monthly-qos",
          label: "Get the monthly qos data of school",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-countries",
          label: "Get all countries stored in giga db",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-minted-count",
          label: "Get minted count of csv school id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-csv-details",
          label: "Get minted count of csv school id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-update-images",
          label: "Add the images on-chain for all minted school",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-image-update-list",
          label: "Get the list of schools for on-chain image update ",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-sync-school",
          label: "Sync the database with contract in case of any missing data",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-reserved-schools",
          label: "Get the list of reserved schools",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-latest-schools",
          label: "Get the list of latest activated schools",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/school-controller-get-file",
          label: "Get the file from arweave",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "giga-api/users-controller-add-validator",
          label: "Create new user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-find-all",
          label: "List all user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-find-one",
          label: "Get an user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-update",
          label: "Update an user",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-remove",
          label: "Delete an user",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-find-contributor",
          label: "Get an contributor",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/users-controller-find-contributor-details",
          label: "Get an contributor",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Contribute",
      items: [
        {
          type: "doc",
          id: "giga-api/contribute-data-controller-update-image",
          label: "Updates image for a specific giga school id",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "NewsLetter",
      items: [
        {
          type: "doc",
          id: "giga-api/email-controller-create",
          label: "EmailController_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/email-controller-find-all",
          label: "EmailController_findAll",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/email-controller-find-one",
          label: "EmailController_findOne",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/email-controller-update",
          label: "EmailController_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/email-controller-remove",
          label: "EmailController_remove",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Magic Link",
      items: [
        {
          type: "doc",
          id: "giga-api/magic-link-controller-send-magic-link",
          label: "Send Magic Link",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/magic-link-controller-verify-magic-link",
          label: "Verify Magic Link",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Contributor",
      items: [
        {
          type: "doc",
          id: "giga-api/contributor-controller-list-contributors",
          label: "List of all contributors",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/contributor-controller-get-contributor",
          label: "Get contributor by userId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/contributor-controller-update-visibilty",
          label: "Updates contributor by walletAddress",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/contributor-controller-get-reserved-schools",
          label: "ContributorController_getReservedSchools",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/contributor-controller-get-contributor-by-wallet-address",
          label: "ContributorController_getContributorByWalletAddress",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "LinkActivation",
      items: [
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-create-link",
          label: "Create Link for especially minting feature",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-list-links",
          label: "List of all links",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-get-activation",
          label: "Get activation link by UUID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-validate-link",
          label: "Validate activation link by UUID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-deactivate-link",
          label: "Deactivate activation link by UUID",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/linkactivation-controller-activate-link",
          label: "Activate the specific activation link",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Featured",
      items: [
        {
          type: "doc",
          id: "giga-api/featured-controller-create",
          label: "Create Featured country",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/featured-controller-find-all",
          label: "List of all featured countries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/featured-controller-find-feature-school",
          label: "List of  featured schools for latest featured country",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Verifier",
      items: [
        {
          type: "doc",
          id: "giga-api/verifier-controller-get-auth-request",
          label: "VerifierController_getAuthRequest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/verifier-controller-call-back",
          label: "VerifierController_callBack",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Information Worker",
      items: [
        {
          type: "doc",
          id: "giga-api/information-worker-controller-create",
          label: "InformationWorkerController_create",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/information-worker-controller-find-all",
          label: "InformationWorkerController_findAll",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/information-worker-controller-find-one",
          label: "InformationWorkerController_findOne",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/information-worker-controller-update",
          label: "InformationWorkerController_update",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "giga-api/information-worker-controller-send-email",
          label: "InformationWorkerController_sendEmail",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Queues",
      items: [
        {
          type: "doc",
          id: "giga-api/queues-controller-get-all-jobs",
          label: "List all jobs for a specific queue",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/queues-controller-get-failed-jobs",
          label: "List all failed jobs for a specific queue",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/queues-controller-get-completed-jobs",
          label: "List all completed jobs for a specific queue",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "giga-api/queues-controller-retry-job",
          label: "Retry a failed job by jobId for a specific queue",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "giga-api/queues-controller-remove-job",
          label: "Remove a job by jobId for a specific queue",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "giga-api/queues-controller-get-pending-jobs",
          label: "Get the pending jobs for a specific queue",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
