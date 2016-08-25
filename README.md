# UI-Router for Angular 2 QuickStart Source - WebPack

### Start development

Install the npm packages described in the `package.json` and verify that it works:

```bash
git clone https://github.com/ui-router/quickstart-ng2.git
cd quickstart-ng2
npm install
npm start
```

### UI-Router for NG2 quickstart highlights:

- We're using npm and systemjs.  We added a dependency on latest `ui-router-ng2` in [package.json](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/package.json#L19)
- Import UI-Router classes [directly from `"ui-router-ng2"`](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.component.ts#L2)
- When defining a component, [add the `UIROUTER_DIRECTIVES` to `directives:` array](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.component.ts#L20)
- Either [bootstrap a `UIView` component](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/bootstrap.ts#L14), or add a `<ui-view></ui-view>` viewport to your root component.
- [Create application states](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/app.states.ts#L16-L20) (as defined by Ng2StateDeclaration]]) which will fill in the `ui-view` viewports with component.
- Create a `UIRouterConfig`, and [register your states](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/router.config.ts#L17-L18) in the `UIRouterConfig.configure()` function.
- When bootstrapping: include the `UIROUTER_PROVIDERS` and [define a provider for your `UIRouterConfig`](https://github.com/ui-router/quickstart-ng2/blob/1.0.2/app/_bootstrap/bootstrap.ts#L17-L18)

#### Foo module

- Simple nested views
- Update browser hash value

#### Bar module

- Resolve data from server (bar list)
- Query parameter
- Nested view (bar detail renders inside bar list)

#### Baz module

- Resolve data from server (baz list)
- Path parameter
- View targeting (baz detail replaces the baz list) 

