This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## REPO TREE
```
.
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── Albums.tsx
│   ├── Comment.tsx
│   ├── Hoverable.tsx
│   ├── NavBar.tsx
│   ├── Post.tsx
│   └── User.tsx
├── global.d.ts
├── helpers
│   └── fetch.ts
├── index.css
├── index.tsx
├── logo.svg
├── react-app-env.d.ts
├── reducers
│   ├── album.ts
│   ├── comment.ts
│   ├── index.ts
│   ├── photos.ts
│   ├── post.ts
│   └── user.ts
├── routes
│   └── routes.tsx
├── sagas
│   ├── albums.ts
│   ├── comments.ts
│   ├── index.ts
│   ├── photos.ts
│   ├── post.ts
│   └── user.ts
├── scenes
│   ├── AlbumDetail.tsx
│   ├── Albums.tsx
│   ├── Friends.tsx
│   ├── Home.tsx
│   ├── PageNotFound.tsx
│   ├── Profile.tsx
│   └── index.ts
├── serviceWorker.ts
└── types
    ├── albums.ts
    ├── comment.ts
    ├── photos.ts
    ├── post.ts
    └── users.ts
```

### Hoverable

```javascript
ype MouseEventHandler = (mouse: MouseEvent) => void;

type EventHandlers = {
  onMouseEnter: MouseEventHandler;
  onMouseLeave: MouseEventHandler;
};

type Props = {
  render: (isHovered: boolean, eventHandlers: EventHandlers) => ReactNode;
  hoverStyle?: StyleSheet;
};

```
### USEAGE

```javascript
 <Hoverable
          render={(isHovered, eventHandlers) => (
            <View {...eventHandlers}>
              <AlbumItem
                album={item}
                style={isHovered && { backgroundColor: "#add8e6" }}
              />
            </View>
          )}
        />

// isHovered return true when moose enter view 
```
### CONSUME API

```
export interface IHttpResponse<T> extends Response {
  parsedBody?: T;
}

export const http = <T>(request: RequestInfo): Promise<IHttpResponse<T>> => {
  return new Promise((resolve, reject) => {
    let response: IHttpResponse<T>;
    fetch(request)
      .then(res => {
        response = res;
        return res.json();
      })
      .then(body => {
        if (response.ok) {
          response.parsedBody = body;
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const get = async <T>(
  path: string,
  args: RequestInit = { method: "get" }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};

export const post = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "post", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};

export const put = async <T>(
  path: string,
  body: any,
  args: RequestInit = { method: "put", body: JSON.stringify(body) }
): Promise<IHttpResponse<T>> => {
  return await http<T>(new Request(path, args));
};

```

### Navigation 

[HookRouter](https://github.com/Paratron/hookrouter#readme)

### Management State

Redux and middleware redux-saga

### Typing 

TypeScript

### Others 

[React native web](https://github.com/necolas/react-native-web)
Material ui 

### Need To improve 

Some state need to render local(refactor some component like text input at home ) and implement suspense for some componenet would be awesome 

 
## TODO LIST
User can view list of users

- [X]  User can view list of posts of each user
- [X]  User can view list of albums of each user
- [X]  User can view the detail of each post and its comment
- [X]  User can view list of photos from an album
- [X]  User can view the detail of photo
- [X]  User can add and delete post
- [X]  User can add and delete comment
- [ ]  User can edit post
- [ ]  User can edit comment

## Progress 

![28 Oct 2019 10 22 19](https://user-images.githubusercontent.com/20268062/67649875-5ab3e000-f96d-11e9-8a6e-b6f898526b23.gif)

## Dependencies
```
 "hookrouter": "^1.2.3",
 "react": "^16.11.0",
 "react-dom": "^16.11.0",
 "react-redux": "^7.1.1",
 "react-scripts": "3.2.0",
 "redux-logger": "^3.0.6",
 "redux-saga": "^1.1.1",
 "typescript": "3.6.4"
 "react-native-web":"^0.11.7",,
```

Type script for static type 
redux for managment store 
saga for middleware 
hookrouter for routing 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for  it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).



