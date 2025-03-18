## Tailwind 4 Angular Starter

[Follow this guide](https://flowbite.com/docs/getting-started/angular/) to learn how to set up a new Angular project with Tailwind CSS and integrate the open-source UI components from the Flowbite Library.

## Create Angular project

The recommended and quickest way to get started with creating a new Angular project is by installing the official CLI tool by running the following command in your terminal:

```bash
npm install -g @angular/cli
```

This command will make the Angular CLI available on your local computer.

1. Run the following command to create a new Angular project:

```bash
ng new flowbite-app
```

You can follow the instructions from the CLI prompts to select the options that you want to choose when creating a new project - you should select "CSS" when asked.

This command will create a new folder called `flowbite-app` where you have all the necessary source files to start a new local and production-ready Angular project.

2. Run the `ng serve --open` command in your terminal to start a local server:

```bash
ng serve --open
```

This will create a local development server and automatically open a new tab on the `localhost:4200` port by adding the `--open` flag to the command.

Congratulations! Now you have a fully working Angular project installed and configured.

## Install Tailwind CSS

Now that you've successfully installed and configured an Angular project we can proceed with installing the most popular utility-first CSS framework called Tailwind.

1. Install Tailwind CSS and Post CSS via NPM by running the following command:

```bash
npm install tailwindcss @tailwindcss/postcss postcss --save
```

This command will install all the dependencies of Tailwind CSS available in your `package.json` file.

2. Create a `.postcssrc.json` file in the root folder of your project and include the Tailwind PostCSS plugin:

```javascript
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

3. Import the core Tailwind directive inside the `styles.css` file:

```css
/* You can add global styles to this file, and also import other style files */

@import "tailwindcss";
```

5. Start a local development server on Angular by running `ng serve --open`. If you already had one open then you need to restart it to allow Angular to internally set up the new configuration.

Congratulations! You can now start using the utility classes from Tailwind CSS inside your Angular project.

## Install Flowbite

Now that you have both Angular and Tailwind CSS configured for your web application project you can proceed by installing the Flowbite Library to start leveraging the interactive UI components such as navbars, modals, cards, buttons, and more to build user interfaces faster with Tailwind CSS support.

1. Install Flowbite as a dependency using NPM by running the following command:

```bash
npm install flowbite --save
```

2. Import the default theme variables from Flowbite inside your main `input.css` CSS file:

```css
@import "flowbite/src/themes/default";
```

3. Import the Flowbite plugin file in your CSS:

```css
@plugin "flowbite/plugin";
```

4. Configure the source files of Flowbite in your CSS:

```css
@source "../node_modules/flowbite";
```

5. Update the `app.component.ts` file to use the `initFlowbite` function to enable the interactive components via data attributes:

```javascript
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
```

This will allow you to enable components such as the modals, navigation bars, dropdowns to dynamically set up the functionality via our data attributes interface.

## Using with Angular SSR

To enable using Flowbite with SSR (Server-Side Rendering) you need to create a custom service that will handle the dynamic import of Flowbite:

```javascript
// src/app/services/flowbite.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FlowbiteService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  loadFlowbite(callback: (flowbite: any) => void) {
    if (isPlatformBrowser(this.platformId)) {
      import('flowbite').then(flowbite => {
        callback(flowbite);
      });
    }
  }
}
```

**Important**: if you are using SSR make sure that this is the only way you're importing Flowbite in your Angular application to prevent the document object not being available on the server side.

After that, you can use this service in your component to start using the Flowbite API and data attributes:

```javascript
// src/app/components/some-component/some-component.component.ts
import { Component, OnInit } from '@angular/core';
import { FlowbiteService } from '../../services/flowbite.service';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.css']
})
export class SomeComponent implements OnInit {
  constructor(private flowbiteService: FlowbiteService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
```

This will prevent the "document is undefined" error that happens after upgrading to `v2.4.1` for SSR applications.

## UI components

Now that you have installed all of the frameworks and libraries you can start using the whole collection of UI components and templates from the [Flowbite UI Library](https://flowbite.com/docs/getting-started/introduction/) and [Blocks](https://flowbite.com/blocks/marketing/feature/).
