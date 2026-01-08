import AuthenticationController from '../Authentication/AuthenticationController.mjs'
import AuthorizationMiddleware from '../Authorization/AuthorizationMiddleware.mjs'
import GitHubController from './GitHubController.mjs'

export default {
    apply(webRouter, privateApiRouter) {
        webRouter.post(
            '/project/:Project_id/github/configure',
            AuthenticationController.requireLogin(),
            AuthorizationMiddleware.ensureUserCanAdminProject,
            GitHubController.configure
        )

        webRouter.get(
            '/project/:Project_id/github/details',
            AuthenticationController.requireLogin(),
            AuthorizationMiddleware.ensureUserCanAdminProject,
            GitHubController.getDetails
        )

        webRouter.post(
            '/project/:Project_id/github/save',
            AuthenticationController.requireLogin(),
            AuthorizationMiddleware.ensureUserCanWriteProjectContent,
            GitHubController.save
        )
    },
}
