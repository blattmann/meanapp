# MEANapp

Complete MEAN stack application with authentication using json web tokens. Angular CLI, MongoDB and NPM need to be installed to run / build the app. Angular 2 is being used in this example app.

## Version

1.0.0

## Usage

--------------------------------------------------------------------------------

### Installation

#### Mac OSX and Homebrew

- Install Homebrew: <https://brew.sh/>

- Install Node / NPM: <https://changelog.com/posts/install-node-js-with-homebrew-on-os-x>

- Install MongoDB:

```sh
$ brew install mongodb
```

In case you have an older version of MongoDB installed you might ned to remove it first before you can install the latest version:

```sh
$ brew unlink mongodb
```

#### Linux / Windows

- Install Node / NPM: <https://nodejs.org/en/>

- Install MongoDB: <https://www.mongodb.com/download-center?jmp=nav#community>

#### All OS

Install Angular CLI:

```sh
$ npm install -g angular-cli
```

Install _nodemon_ to automatically update any changes in your code while the node server is running.

```sh
$ npm install -g nodemon
```

Run nodemon:

```sh
$ nodemon
```

Install the dependencies:

```sh
$ npm install
```

Start MongoDB (if not yet started):

```sh
$ mongod
```

Start MongoDB shell if needed:

```sh
$ mongo
```

Run the dev mode:

```sh
$ cd angular-src
$ ng serve
```

The app should be available on: <http://localhost:4200>

Build the app:

```sh
$ cd angular-src
$ ng build
```

Run the app:

```sh
$ npm start
```
