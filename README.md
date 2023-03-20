# testing-react-testing-library-stephen

React Testing Library and Jest: The Complete Guide by Stephen Grider

## Folder structure

- 02-users
- 03-element-roles
  - `npx rtl-book serve roles-notes.js`

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

</details>
