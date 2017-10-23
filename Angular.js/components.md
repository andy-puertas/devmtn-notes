# Understanding and Working with Components

### What are components?
- reusable, isolated units of code
- component data is isolated from other components
- processes more behind-the-scenes

### How can we use components?
As services, controllers, or anything else that we might want to replicate later in our code.

### What are the benefits of components?
- won't take as long to render information
- cleaner code
- smoother processes 
- isolated vars / limited scope

### Angular Component Boilerplate:
```
module.component(name, options)
```

```
angular.module('moduleName').component('componentName', {

});
```

### Adding controllers to our components:
```
{ .
  .
  controller: function () {}
  .
  .
}
```

```
{
  .
  .
  controller: 'SomeCtrl'
  .
  .
}
```

## Bindings
### What are bindings? How do they work?
- the `bindings` property on `.component()` allows us to define what we want to pass down to the component, assuming that our new component has isolate scope
    - `title: '@'`: functions as a path to pick up data and pass it on appropriately 


## Keywords:
- **Meta information:** info about info (for example, in an SQL table with many records, the meta info might be the number of records)
- **CSS reset file:** known starting point for styles. Typically copied to all projects. Styles expected to be overwritten by project's styling.
- **Bindings:** like props in React

## Other Resources:
- [Todd Motto explores the .component Method in Angular 1.5](https://toddmotto.com/exploring-the-angular-1-5-component-method/)
- [Step-by-step to build an Angular Component](https://tests4geeks.com/build-angular-1-5-component-angularjs-tutorial/)
- when in doubt, check out [the docs](https://docs.angularjs.org/guide/component)