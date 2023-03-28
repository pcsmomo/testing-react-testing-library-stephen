# testing-react-testing-library-stephen

React Testing Library and Jest: The Complete Guide by Stephen Grider

## Folder structure

- 02-users
- 03-element-roles
  - `npx rtl-book serve roles-notes.js`
- 04-query-functions
  - `npx rtl-book serve query-notes.js`
- 05-query-criteria
  - `npx rtl-book serve criteria-notes.js`
- 06-matchers
  - `npx rtl-book serve matcher-notes.js`

### from section 7 to 10

- ## 07-overview

# Details

<details open>
  <summary>Click to Contract/Expend</summary>

## Section 2: A Whirlwind Overview of Testing

### 19. Getting Help with Query Functions

```js
screen.logTestingPlaygroundURL();

// https://testing-playground.com/#markup=DwEwlgbgfMAuCGAjANgUxrAFq+IMCcNMoA5eAW1WAHosioBRc+MZGu9w97XDRAexABPAhjwAreADsqtPHAnTUAAUkyAdAGN+5dvNpdYhvAGcKesVDPll1rToucYtAcOcIU6GuGhA
```

```html
<!-- If you cannot click, add some styles to make it easy to click -->
<tr style="border: 10px solid red; display:block;"></tr>
```

### 20. Query Function Escape Hatches

> Tip - Don't obsess over getting the 'right' query

Two 'escape hatches'

- Fallback #1: data-testid (is preffered then querySelector())
- Fallback #2: container.querySelector();

### 21. Another Query Function Fallback

```js
const { container } = render(<UserList users={users} />);
// eslint-disable-next-line
const rows = container.querySelectorAll('tbody tr');
```

### 24. Testing the Whole App

```js
// investigate the current state of screen
screen.debug();
```

## Section 3: Understanding Element Roles

### 27. Introducing RTL Book

Stephen's custom cheatsheet looks like Jupyter notebook

```sh
# 03-element-roles
npx rtl-book serve roles-notes.js
```

## Section 5: Query Function Suffixes

### 43. When to Use Each Suffix

```js
// for tooltip
screen.getByTitle('Click when ready to submit');
```

## Section 6: Matchers in Jest### 47. Implementing a Custom Matcher

```js
// Jest custom matcher
function toContainRole(container, role, quantity = 1) {
  const elements = within(container).getAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead.`,
  };
}

expect.extend({ toContainRole });
```

## Section 7: Big Project Overview

### 49. App Overview and Setup

```sh
# codesplain
npm install
npm start
```

[Prisma - Node.js and TypeScript ORM](https://www.prisma.io/)

### 51. The Path Ahead

#### Testing in reality

- Users complain to your companies support team about a bug
- Support team gives a workaround to the bug
- Support team gets tired of the 1 million tickets being filled and tells a project manager about the bug
- Project manager tells an engineering manager that the bug needs to be fixed
- Engineering manager tells you to fix the bug, probably without a lot of details
- You need to find the bug, fix it, and **write a test to confirm it is fixed**

#### The Plan Ahead

- We are going to pretend we are engineers working on the Codesplain project
- We are going to receive bug reports that sometimes provide... less information than we'd hope for
- Figure out hot to find the relavant code + fix it
- **Figure out how to write code to confirm the big is fixed**

### 52. A Process for Debugging

- Find the relavant components in the codebase
- Figure out how the component is getting its data/state/props
- User a debugger, consolelog, or documentation to understand the data
- Implement a fix
- Test the fix

## Section 8: The Mysterious 'Act' Function!

### 59. Adding Router Context

#### React Router

- BrowserRouter: Stores current URL in the address bar
- HashRouter: Stores current URL in the # part of the address bar
- MemoryRouter: Stores current URL in memory
  - Many blog posts recommend using this for testing purposes. We will too, but eventually replace it

### 61. Act Included with React Testing Library

Important Items

1. Unexpected state updates in tests are bad
2. The act function defines a window in time where state updates can (and should) occur
3. React Testing Library uses `act` behind the scenes for you!
   - `screen.findBy...`
   - `screen.findAllBy...`
   - `waitFor`
   - `user.keyboard`
   - `user.click`
   - automatically call `act` for you and this is the preferred way of using `act` when using RTL
4. To solve act warnings, you should use a `findBy`. Usually you don't want to follow the advice of the warning

</details>
