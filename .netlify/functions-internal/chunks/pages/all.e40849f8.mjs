import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, m as maybeRenderHead, f as renderComponent } from '../astro.43588f80.mjs';
import 'html-escaper';
/* empty css                           *//* empty css                              *//* empty css                             *//* empty css                             */
const $$Astro$e = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url);
  canonicalURL.search = "";
  const socialImageURL = new URL("/minibridgebuilding-350x350.jpg", Astro2.url);
  const favicoURL = new URL("/favicon.ico", Astro2.url);
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="A free tool to help you find a new hobby to engage in.">
		<meta name="author" content="The Internet">
		<!-- favicon -->
		<link rel="shortcut icon"${addAttribute(favicoURL, "href")}>
		<!-- Open graph -->
		<meta property="og:title" content="Find yourself a hobby!">
		<meta property="og:type" content="website">
		<meta property="og:description" content="A free tool to help you find a new hobby to engage in.">
		<meta property="og:url"${addAttribute(canonicalURL, "content")}>
		<meta property="og:image"${addAttribute(socialImageURL, "content")}>
		<meta property="og:locale" content="en_US">

		<meta property="twitter:card" content="summary">
		<meta property="twitter:site" content="findyourselfahobby.com">
		<meta property="twitter:title" content="Find yourself a hobby!">
		<meta property="twitter:description" content="A free tool to help you find a new hobby to engage in.">
		<meta property="twitter:image:src"${addAttribute(socialImageURL, "content")}>
		<meta property="twitter:domain"${addAttribute(canonicalURL, "content")}>

    <meta name="generator"${addAttribute(Astro2.generator, "content")}>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap" rel="stylesheet">
    <title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/moriel/code/projects/findyourselfahobby/src/layouts/Layout.astro");

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$d = createAstro();
const $$Accordion = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Accordion;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = accordionItem => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \`\${getPanelHeight(accordionItem)}px\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const closeAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\`
  }

  const isAccordionOpen = accordionItem => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem () {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem)
      ? closeAccordionItem(accordionItem)
      : openAccordionItem(accordionItem)
  }

  function recalculateHeight () {
    const toggledAccordionItems = accordionItems.filter(element => element.classList.contains('is-active'))

    toggledAccordionItems.forEach(toggledAccordionItem => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \`\${getPanelHeight(toggledAccordionItem)}px\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \`accordion-item\${index + 1}\`)
    accordionItemPanel.setAttribute('id', \`item\${index + 1}\`)

    accordionItemHeader.setAttribute('aria-controls', \`item\${index + 1}\`)
    accordionItemPanel.setAttribute('aria-labelledby', \`accordion-item\${index + 1}\`)
  })

  document.addEventListener('keydown', event => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', event => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex(element => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`], ["", '<div class="accordion">\n  <ul class="accordion__wrapper">\n    ', `
  </ul>
</div>

<script type="module">
  // variables
  const accordionItems = [...document.querySelectorAll('.accordion__item')]

  // functions
  const getPanelHeight = accordionItem => {
    const accordionInner = accordionItem.querySelector('.panel__inner')
    return accordionInner.getBoundingClientRect().height
  }

  const openAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionPanel.style.height = \\\`\\\${getPanelHeight(accordionItem)}px\\\`
    accordionItem.classList.add('is-active')
    accordionItemHeader.setAttribute('aria-expanded', true)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" data-prefix="fas" data-icon="minus" class="svg-inline--fa fa-minus fa-w-14" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const closeAccordionItem = accordionItem => {
    const accordionItemHeader = accordionItem.querySelector('.accordion__header')
    const accordionToggleIndicator = accordionItem.querySelector('.header__toggle-indicator')
    const accordionPanel = accordionItem.querySelector('.accordion__panel')

    accordionItem.classList.remove('is-active')
    accordionPanel.style.height = 0
    accordionItemHeader.focus()
    accordionItemHeader.setAttribute('aria-expanded', false)
    accordionToggleIndicator.innerHTML = \\\`<svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>\\\`
  }

  const isAccordionOpen = accordionItem => {
    return accordionItem.classList.contains('is-active')
  }

  function toggleAccordionItem () {
    const accordionItem = event.target.closest('.accordion__item')
    if (!accordionItem || event.target.closest('.accordion__panel')) return

    isAccordionOpen(accordionItem)
      ? closeAccordionItem(accordionItem)
      : openAccordionItem(accordionItem)
  }

  function recalculateHeight () {
    const toggledAccordionItems = accordionItems.filter(element => element.classList.contains('is-active'))

    toggledAccordionItems.forEach(toggledAccordionItem => {
      const accordionPanel = toggledAccordionItem.querySelector('.accordion__panel')
      accordionPanel.style.height = \\\`\\\${getPanelHeight(toggledAccordionItem)}px\\\`
    })
  }

  // execution
  accordionItems.forEach((item, index) => {
    const accordionItemHeader = item.querySelector('.accordion__header')
    const accordionItemPanel = item.querySelector('.accordion__panel')

    accordionItemHeader.setAttribute('id', \\\`accordion-item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('id', \\\`item\\\${index + 1}\\\`)

    accordionItemHeader.setAttribute('aria-controls', \\\`item\\\${index + 1}\\\`)
    accordionItemPanel.setAttribute('aria-labelledby', \\\`accordion-item\\\${index + 1}\\\`)
  })

  document.addEventListener('keydown', event => {
    const accordionItem = event.target.closest('.accordion__item')

    if (event.key !== 'Escape') return
    if (!accordionItem) return

    if (isAccordionOpen(accordionItem)) {
      closeAccordionItem(accordionItem)
    }
  })

  document.addEventListener('keydown', event => {
    if (!event.target.closest('.accordion__header')) return

    const accordionWrapper = event.target.closest('.accordion__wrapper')
    const accordionItem = event.target.closest('.accordion__item')
    const accordionItems = [...accordionWrapper.querySelectorAll('.accordion__item')]
    const index = accordionItems.findIndex(element => element === accordionItem)

    const { key } = event

    let targetItem

    if (key === 'ArrowDown') {
      targetItem = accordionItems[index + 1]
    }

    if (key === 'ArrowUp') {
      targetItem = accordionItems[index - 1]
    }

    if (targetItem) {
      event.preventDefault()
      targetItem.querySelector('.accordion__header').focus()
    }
  })

  window.toggleAccordionItem = toggleAccordionItem
  window.onresize = recalculateHeight
<\/script>`])), maybeRenderHead($$result), renderSlot($$result, $$slots["default"]));
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Accordion.astro");

const $$Astro$c = createAstro();
const $$AccordionItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$AccordionItem;
  const { header } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="accordion__item">
  <h3>
    <button id="accordion-header-1" class="accordion__header" aria-expanded="false" aria-controls="accordion-panel-1" onclick="toggleAccordionItem()">
      ${header}
      <svg class="header__toggle-indicator" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
      </svg>
    </button>
  </h3>
  <div id="accordion-panel-1" role="region" class="accordion__panel" aria-labelledby="accordion-header-1">
    <div class="panel__inner">
      ${renderSlot($$result, $$slots["default"])}
    </div>
  </div>
</li>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/AccordionItem.astro");

const $$Astro$b = createAstro();
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="breadcrumbs" aria-label="Breadcrumbs">
  <ol>
    ${renderSlot($$result, $$slots["default"])}
  </ol>
</nav>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Breadcrumbs.astro");

const $$Astro$a = createAstro();
const $$BreadcrumbsItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$BreadcrumbsItem;
  const {
    href = "#",
    label = "Breadcrumb",
    currentPage = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li class="breadcrumbs__item">
  ${currentPage ? renderTemplate`<span>${label}</span>` : renderTemplate`<a${addAttribute(href, "href")}>${label}</a>`}
</li>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/BreadcrumbsItem.astro");

const $$Astro$9 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    url = "#",
    img = "https://fakeimg.pl/640x360",
    title = "Default title",
    footer = "Your name"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="card">
  <div class="card__image">
    <img${addAttribute(img, "src")} alt="">
  </div>
  <div class="card__content">
    <h3>
      <a${addAttribute(url, "href")}>${title}</a>
    </h3>
    <p>
      ${renderSlot($$result, $$slots["default"], renderTemplate`Default description.`)}
    </p>
    <small>
      ${footer}
    </small>
  </div>
</div>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Card.astro");

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$8 = createAstro();
const $$DarkMode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$DarkMode;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled'
      ? enableDarkMode()
      : disableDarkMode()
  })
<\/script>`], ["", `<button class="darkmode-toggle" aria-pressed="false" aria-label="Enable dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"></path></svg>
</button>

<script>
  // variables
  let darkMode = localStorage.getItem('darkMode')
  const darkModeToggle = document.querySelector('.darkmode-toggle')

  // functions
  const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0V3zM5.707 4.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zm14 0a1 1 0 0 0-1.414 0l-1 1a1 1 0 0 0 1.414 1.414l1-1a1 1 0 0 0 0-1.414zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-9 4a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2H3zm17 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1zM6.707 18.707a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414l1-1zm12-1.414a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1zM13 20a1 1 0 1 0-2 0v1a1 1 0 1 0 2 0v-1z" fill="currentColor"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'true')
    darkModeToggle.setAttribute('aria-label', 'Disable dark mode')
    localStorage.setItem('darkMode', 'enabled')
  }

  const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    darkModeToggle.innerHTML = \\\`<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M9.353 3C5.849 4.408 3 7.463 3 11.47A9.53 9.53 0 0 0 12.53 21c4.007 0 7.062-2.849 8.47-6.353C8.17 17.065 8.14 8.14 9.353 3z"/></svg>\\\`
    darkModeToggle.setAttribute('aria-pressed', 'false')
    darkModeToggle.setAttribute('aria-label', 'Enable dark mode')
    localStorage.setItem('darkMode', null)
  }

  // execution
  if (darkMode === 'enabled') enableDarkMode()

  darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')

    darkMode !== 'enabled'
      ? enableDarkMode()
      : disableDarkMode()
  })
<\/script>`])), maybeRenderHead($$result));
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/DarkMode.astro");

const $$Astro$7 = createAstro();
const $$Media = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Media;
  const {
    class: classNames,
    src = "https://shorturl.at/tCPS2",
    alt = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<img${addAttribute(classNames, "class")}${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy" decoding="async">`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Media.astro");

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro();
const $$Modal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Modal;
  const {
    triggerId,
    title,
    closeText = "Close"
  } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="modal" role="dialog"', '>\n  <div class="modal__inner">\n    <div class="modal__content">\n      <h3 tabindex="-1">\n        ', "\n      </h3>\n      ", '\n    </div>\n    <div class="modal__close">\n      <button>', `</button>
    </div>
  </div>
</div>

<script type="module">
  // variables
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  const modalId = modal.getAttribute('aria-labelledby')
  const modalCloseButton = modal.querySelector('.modal__close button')
  const modalTrigger = document.querySelector(\`#\${modalId}\`)
  
  // functions
  const teleportToRoot = element => {
    element.remove()
    body.appendChild(element)
  }

  const getKeyboardFocusableElements = element => {
    return [...element.querySelectorAll(
      'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )]
      .filter(el => !el.hasAttribute('disabled'))
  }

  const trapFocus = event => {
    const focusables = getKeyboardFocusableElements(modal)
    const firstFocusable = focusables[0]
    const lastFocusable = focusables[focusables.length - 1]

    if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const openModal = _ => {
    const modalTitle = modal.querySelector('h3')

    modal.classList.add('show')
    body.classList.add('modal-is-active')
    modalTitle.focus()
    document.addEventListener('keydown', trapFocus)

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeModal()
      }
    })
  }

  const closeModal = _ => {
    modal.classList.remove('show')
    body.classList.remove('modal-is-active')
    modalTrigger.focus({ preventScroll: true })
    document.removeEventListener('keydown', trapFocus)
  }

  // execution
  teleportToRoot(modal)

  modalTrigger.addEventListener('click', openModal)

  modalCloseButton.addEventListener('click', closeModal)

  modal.addEventListener('click', event => { 
    if (!event.target.closest('.modal__content')) {
      closeModal()
    }
  })

  window.closeModal = closeModal
<\/script>`], ["", '<div class="modal" role="dialog"', '>\n  <div class="modal__inner">\n    <div class="modal__content">\n      <h3 tabindex="-1">\n        ', "\n      </h3>\n      ", '\n    </div>\n    <div class="modal__close">\n      <button>', `</button>
    </div>
  </div>
</div>

<script type="module">
  // variables
  const body = document.querySelector('body')
  const modal = document.querySelector('.modal')
  const modalId = modal.getAttribute('aria-labelledby')
  const modalCloseButton = modal.querySelector('.modal__close button')
  const modalTrigger = document.querySelector(\\\`#\\\${modalId}\\\`)
  
  // functions
  const teleportToRoot = element => {
    element.remove()
    body.appendChild(element)
  }

  const getKeyboardFocusableElements = element => {
    return [...element.querySelectorAll(
      'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )]
      .filter(el => !el.hasAttribute('disabled'))
  }

  const trapFocus = event => {
    const focusables = getKeyboardFocusableElements(modal)
    const firstFocusable = focusables[0]
    const lastFocusable = focusables[focusables.length - 1]

    if (document.activeElement === lastFocusable && event.key === 'Tab' && !event.shiftKey) {
      event.preventDefault()
      firstFocusable.focus()
    }

    if (document.activeElement === firstFocusable && event.key === 'Tab' && event.shiftKey) {
      event.preventDefault()
      lastFocusable.focus()
    }
  }

  const openModal = _ => {
    const modalTitle = modal.querySelector('h3')

    modal.classList.add('show')
    body.classList.add('modal-is-active')
    modalTitle.focus()
    document.addEventListener('keydown', trapFocus)

    modal.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeModal()
      }
    })
  }

  const closeModal = _ => {
    modal.classList.remove('show')
    body.classList.remove('modal-is-active')
    modalTrigger.focus({ preventScroll: true })
    document.removeEventListener('keydown', trapFocus)
  }

  // execution
  teleportToRoot(modal)

  modalTrigger.addEventListener('click', openModal)

  modalCloseButton.addEventListener('click', closeModal)

  modal.addEventListener('click', event => { 
    if (!event.target.closest('.modal__content')) {
      closeModal()
    }
  })

  window.closeModal = closeModal
<\/script>`])), maybeRenderHead($$result), addAttribute(triggerId, "aria-labelledby"), title, renderSlot($$result, $$slots["default"], renderTemplate`Modal description.`), closeText);
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Modal.astro");

const $$Astro$5 = createAstro();
const $$Notification = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Notification;
  const {
    type = "default",
    role = "none",
    ariaLive = "off"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`notification type-${type}`, "class")}${addAttribute(role, "role")}${addAttribute(ariaLive, "aria-live")}>
  ${renderSlot($$result, $$slots["default"], renderTemplate`
    <p><strong>Message:</strong> This is a notification!</p>
  `)}
</div>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Notification.astro");

const $$Astro$4 = createAstro();
const $$Pagination = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    firstPage = "#",
    previousPage = "#",
    nextPage = "#",
    lastPage = "#",
    currentPage = "1",
    totalPages = "12"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="pagination" aria-label="Pagination">
  <ul class="pagination__list">
    <li>
      ${firstPage ? renderTemplate`<a${addAttribute(firstPage, "href")} aria-label="Go to the first page"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>` : renderTemplate`<span class="disabled"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6667 9L18 15.6667L24.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.6667 9L8 15.6667L14.6667 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>`}
    </li>
    <li>
      ${previousPage ? renderTemplate`<a${addAttribute(previousPage, "href")}${addAttribute(`Go back to ${previousPage}`, "aria-label")}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path></svg></a>` : renderTemplate`<span class="disabled"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 7-5 5 5 5"></path></svg></span>`}
    </li>
    <li>
      <span>Page ${currentPage} of ${totalPages}</span>
    </li>
    <li>
      ${nextPage ? renderTemplate`<a${addAttribute(nextPage, "href")}${addAttribute(`Go to ${nextPage}`, "aria-label")}><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path></svg></a>` : renderTemplate`<span class="disabled"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 7 5 5-5 5"></path></svg></span>`}
    </li>
    <li>
      ${lastPage ? renderTemplate`<a${addAttribute(lastPage, "href")} aria-label="Go to the last page"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>` : renderTemplate`<span class="disabled"><svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.33333 9L14 15.6667L7.33333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3333 9L24 15.6667L17.3333 22.3333" stroke="currentColor" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>`}
    </li>
  </ul>
</nav>`;
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/Pagination.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$SkipLinks = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SkipLinks;
  return renderTemplate(_a || (_a = __template(["", `<div class="skip-links">
  <a href="#main-content">Skip to main content</a>
</div>

<script type="module">
  // variables
  const skipLink = document.querySelector('.skip-links a')

  // execution
  skipLink.addEventListener('keydown', event => {
    if (!event.target.closest('a')) return
    const key = event.key

    if (key !== 'Enter') return
    event.preventDefault()
    const target = event.target.getAttribute('href')

    if (document.querySelector(target)) {
      const targetElement = document.querySelector(target)
      targetElement.setAttribute('tabindex', '-1')
      targetElement.focus()
    } else if (!document.querySelector(target) && document.querySelector('h1')) {
      const h1 = document.querySelector('h1')
      h1.setAttribute('tabindex', '-1')
      h1.focus()
    } else {
      console.warn('SkipLinks are not set, either missing an h1 or main content id on the page.')
    }
  })
<\/script>`])), maybeRenderHead($$result));
}, "/home/moriel/code/projects/findyourselfahobby/node_modules/accessible-astro-components/SkipLinks.astro");

const intros = {
	basic: "it looks like you have a lot of time on your hands.",
	takeoverspace: "it looks like you're in a space that is not meant for you.",
	energy: "it looks like you are wasting a lot of energy answering comments online.",
	recommend: "this page can help you find a new fun activity!"
};
const data = {
	intros: intros
};

const acroyoga = {
	title: "Acroyoga",
	wikititle: "Acroyoga",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/A6A8876a_-_Copy.jpg/300px-A6A8876a_-_Copy.jpg",
		width: 300,
		height: 317
	}
};
const acting = {
	title: "Acting",
	wikititle: "Acting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Bernhardt_Hamlet2.jpg/300px-Bernhardt_Hamlet2.jpg",
		width: 300,
		height: 437
	}
};
const alternate_history = {
	title: "Alternate history",
	wikititle: "Alternate_history",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Diverging_arrows.png/300px-Diverging_arrows.png",
		width: 300,
		height: 192
	}
};
const amateur_radio = {
	title: "Amateur radio",
	wikititle: "Amateur_radio",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Amateurfunkstation.jpg/300px-Amateurfunkstation.jpg",
		width: 300,
		height: 225
	}
};
const animation = {
	title: "Animation",
	wikititle: "Animation",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Animexample3edit.png",
		width: 260,
		height: 236
	}
};
const manga = {
	title: "Manga",
	wikititle: "Manga",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Wikipe-tan_manga_page1.jpg/300px-Wikipe-tan_manga_page1.jpg",
		width: 300,
		height: 400
	}
};
const baton_twirling = {
	title: "Baton twirling",
	wikititle: "Baton_twirling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Vice-championne_de_France_Duo_de_Gien_2010_de_Twirling_Baton_HD.webm/300px--Vice-championne_de_France_Duo_de_Gien_2010_de_Twirling_Baton_HD.webm.jpg",
		width: 300,
		height: 169
	}
};
const beatboxing = {
	title: "Beatboxing",
	wikititle: "Beatboxing",
	image: {
	}
};
const beer_sommelier = {
	title: "Beer tasting",
	wikititle: "Beer_sommelier",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Beer_sommelier_at_work.jpg/300px-Beer_sommelier_at_work.jpg",
		width: 300,
		height: 225
	}
};
const campanology = {
	title: "Bell ringing",
	wikititle: "Campanology",
	image: {
	}
};
const blacksmith = {
	title: "Blacksmith",
	wikititle: "Blacksmith",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/A_blacksmith_at_work.jpg/300px-A_blacksmith_at_work.jpg",
		width: 300,
		height: 400
	}
};
const blog = {
	title: "Blogging",
	wikititle: "Blog",
	image: {
	}
};
const bonsai = {
	title: "Bonsai",
	wikititle: "Bonsai",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Korean_Hornbeam.jpg/300px-Korean_Hornbeam.jpg",
		width: 300,
		height: 283
	}
};
const book_discussion_club = {
	title: "Book discussion clubs",
	wikititle: "Book_discussion_club",
	image: {
	}
};
const book_rebinding = {
	title: "Book rebinding",
	wikititle: "Book_rebinding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Knjiga_nakon_procesa_restauracije%2C_spremna_za_prepovez.JPG/300px-Knjiga_nakon_procesa_restauracije%2C_spremna_za_prepovez.JPG",
		width: 300,
		height: 183
	}
};
const bowling = {
	title: "Bowling",
	wikititle: "Bowling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bowlerbowling.JPG/300px-Bowlerbowling.JPG",
		width: 300,
		height: 225
	}
};
const bread = {
	title: "Breadmaking",
	wikititle: "Bread",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/300px-Korb_mit_Br%C3%B6tchen.JPG",
		width: 300,
		height: 225
	}
};
const bullet_journal = {
	title: "Bullet journaling",
	wikititle: "Bullet_journal",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Bullet-Journal-by-Matt-Ragland.jpg/300px-Bullet-Journal-by-Matt-Ragland.jpg",
		width: 300,
		height: 237
	}
};
const butcher = {
	title: "Butchering",
	wikititle: "Butcher",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Carniceras_2.jpg/300px-Carniceras_2.jpg",
		width: 300,
		height: 200
	}
};
const calligraphy = {
	title: "Calligraphy",
	wikititle: "Calligraphy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Attavante_degli_Attavanti_-_Leaf_from_a_Gradual-_Initial_P_with_the_Nativity_-_2003.173_-_Cleveland_Museum_of_Art.tif/lossy-page1-300px-Attavante_degli_Attavanti_-_Leaf_from_a_Gradual-_Initial_P_with_the_Nativity_-_2003.173_-_Cleveland_Museum_of_Art.tif.jpg",
		width: 300,
		height: 434
	}
};
const history_of_candle_making = {
	title: "Candle making",
	wikititle: "History_of_candle_making",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/COLLECTIE_TROPENMUSEUM_Kaarsengietmachine_TMnr_10014241.jpg/300px-COLLECTIE_TROPENMUSEUM_Kaarsengietmachine_TMnr_10014241.jpg",
		width: 300,
		height: 219
	}
};
const candy_making = {
	title: "Candy making",
	wikititle: "Candy_making",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Candy_in_the_making_in_Nablus_027_-_Aug_2011.jpg/300px-Candy_in_the_making_in_Nablus_027_-_Aug_2011.jpg",
		width: 300,
		height: 200
	}
};
const car_spotting = {
	title: "Car spotting",
	wikititle: "Car_spotting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Carspotters.jpg/300px-Carspotters.jpg",
		width: 300,
		height: 201
	}
};
const card_game = {
	title: "Card games",
	wikititle: "Card_game",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Theodoor_Rombouts_-_Joueurs_de_cartes.jpg/300px-Theodoor_Rombouts_-_Joueurs_de_cartes.jpg",
		width: 300,
		height: 256
	}
};
const cardistry = {
	title: "Cardistry",
	wikititle: "Cardistry",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Display_Card_Flourish.jpg/300px-Display_Card_Flourish.jpg",
		width: 300,
		height: 249
	}
};
const ceramic = {
	title: "Ceramics",
	wikititle: "Ceramic",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Two_flasks_with_dragons.jpg/300px-Two_flasks_with_dragons.jpg",
		width: 300,
		height: 200
	}
};
const online_chat = {
	title: "Chatting",
	wikititle: "Online_chat",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Gossip-chat.png/300px-Gossip-chat.png",
		width: 300,
		height: 311
	}
};
const cheesemaking = {
	title: "Cheesemaking",
	wikititle: "Cheesemaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Production_of_cheese_1.jpg/300px-Production_of_cheese_1.jpg",
		width: 300,
		height: 200
	}
};
const chess = {
	title: "Chess",
	wikititle: "Chess",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/ChessSet.jpg/300px-ChessSet.jpg",
		width: 300,
		height: 278
	}
};
const cleaning = {
	title: "Cleaning",
	wikititle: "Cleaning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Woman_washing_hands.jpg/300px-Woman_washing_hands.jpg",
		width: 300,
		height: 452
	}
};
const clothing = {
	title: "Clothesmaking",
	wikititle: "Clothing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Clothes.jpg/300px-Clothes.jpg",
		width: 300,
		height: 471
	}
};
const home_roasting_coffee = {
	title: "Coffee roasting",
	wikititle: "Home_roasting_coffee",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Wok_down_angle.jpg/300px-Wok_down_angle.jpg",
		width: 300,
		height: 225
	}
};
const collecting = {
	title: "Collecting",
	wikititle: "Collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/NutcrackerCollection.JPG/300px-NutcrackerCollection.JPG",
		width: 300,
		height: 225
	}
};
const coloring_book = {
	title: "Coloring",
	wikititle: "Coloring_book",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Garfield_Goose_1953_book_at_home_in_castle.jpg/300px-Garfield_Goose_1953_book_at_home_in_castle.jpg",
		width: 300,
		height: 206
	}
};
const communication = {
	title: "Communication",
	wikititle: "Communication",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Stephen_Avenue_3.jpg/300px-Stephen_Avenue_3.jpg",
		width: 300,
		height: 243
	}
};
const activism = {
	title: "Community activism",
	wikititle: "Activism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Barricade18March1871.jpg/300px-Barricade18March1871.jpg",
		width: 300,
		height: 230
	}
};
const community_radio = {
	title: "Community radio",
	wikititle: "Community_radio",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/TennisCourtDiscoKRBXRadioBoiseVolunteers.JPG/300px-TennisCourtDiscoKRBXRadioBoiseVolunteers.JPG",
		width: 300,
		height: 225
	}
};
const computer_programming = {
	title: "Computer programming",
	wikititle: "Computer_programming",
	image: {
	}
};
const confectionery = {
	title: "Confectionery",
	wikititle: "Confectionery",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Krokan.jpg/300px-Krokan.jpg",
		width: 300,
		height: 608
	}
};
const constructed_language = {
	title: "Conlanging",
	wikititle: "Constructed_language",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Conlangflag.svg/300px-Conlangflag.svg.png",
		width: 300,
		height: 185
	}
};
const construction = {
	title: "Construction",
	wikititle: "Construction",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Construction_site_in_Cologne%2C_Germany_%282017%29.jpg/300px-Construction_site_in_Cologne%2C_Germany_%282017%29.jpg",
		width: 300,
		height: 225
	}
};
const cooking = {
	title: "Cooking",
	wikititle: "Cooking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Agdz-rosino-05.jpg/300px-Agdz-rosino-05.jpg",
		width: 300,
		height: 451
	}
};
const cosplay = {
	title: "Cosplaying",
	wikititle: "Cosplay",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/LBCC_2014_-_Loki_and_Friends_%2815239112498%29.jpg/300px-LBCC_2014_-_Loki_and_Friends_%2815239112498%29.jpg",
		width: 300,
		height: 232
	}
};
const couponing = {
	title: "Couponing",
	wikititle: "Couponing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Tem_phi%E1%BA%BFu_th%E1%BB%9Di_bao_c%E1%BA%A5p.jpg/300px-Tem_phi%E1%BA%BFu_th%E1%BB%9Di_bao_c%E1%BA%A5p.jpg",
		width: 300,
		height: 225
	}
};
const craft = {
	title: "Craft",
	wikititle: "Craft",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swanson_Shoe_Repair_18.jpg/300px-Swanson_Shoe_Repair_18.jpg",
		width: 300,
		height: 225
	}
};
const creative_writing = {
	title: "Creative writing",
	wikititle: "Creative_writing",
	image: {
	}
};
const crochet = {
	title: "Crocheting",
	wikititle: "Crochet",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Crochet.webm/300px--Crochet.webm.jpg",
		width: 300,
		height: 220
	}
};
const crossword = {
	title: "Crossword puzzles",
	wikititle: "Crossword",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/CrosswordUSA.svg/300px-CrosswordUSA.svg.png",
		width: 300,
		height: 300
	}
};
const cryptography = {
	title: "Cryptography",
	wikititle: "Cryptography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Lorenz-SZ42-2.jpg/300px-Lorenz-SZ42-2.jpg",
		width: 300,
		height: 223
	}
};
const cue_sports = {
	title: "Billiards",
	wikititle: "Cue_sports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/c/c4/1674_illustration-The_Billiard_Table.png",
		width: 277,
		height: 329
	}
};
const dance = {
	title: "Dance",
	wikititle: "Dance",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Two_dancers.jpg/300px-Two_dancers.jpg",
		width: 300,
		height: 379
	}
};
const decorative_arts = {
	title: "Decorating",
	wikititle: "Decorative_arts",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Bowl_with_cover_MET_SF06_377ab_img2_%28cropped%29.jpg/300px-Bowl_with_cover_MET_SF06_377ab_img2_%28cropped%29.jpg",
		width: 300,
		height: 200
	}
};
const digital_art = {
	title: "Digital art",
	wikititle: "Digital_art",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Dombis_1687.jpg/300px-Dombis_1687.jpg",
		width: 300,
		height: 225
	}
};
const restaurant = {
	title: "Dining",
	wikititle: "Restaurant",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Interior_of_Le_Bernardin.jpg/300px-Interior_of_Le_Bernardin.jpg",
		width: 300,
		height: 225
	}
};
const diorama = {
	title: "Diorama",
	wikititle: "Diorama",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Monpa_diorama.JPG/300px-Monpa_diorama.JPG",
		width: 300,
		height: 200
	}
};
const djembe = {
	title: "Djembe",
	wikititle: "Djembe",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Lenke_djembe_from_Mali.jpeg/300px-Lenke_djembe_from_Mali.jpeg",
		width: 300,
		height: 450
	}
};
const do_it_yourself = {
	title: "Do it yourself",
	wikititle: "Do_it_yourself",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Arthur_Rothstein%2C_Boy_building_a_model_airplane_as_girl_watches%2C_FSA_camp%2C_Robstown%2C_Texas%2C_1942.jpg/300px-Arthur_Rothstein%2C_Boy_building_a_model_airplane_as_girl_watches%2C_FSA_camp%2C_Robstown%2C_Texas%2C_1942.jpg",
		width: 300,
		height: 205
	}
};
const drama = {
	title: "Drama",
	wikititle: "Drama",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/The_Battle_of_Bosworth_Field_-_A_Scene_from_the_Great_Drama_of_History.jpg/300px-The_Battle_of_Bosworth_Field_-_A_Scene_from_the_Great_Drama_of_History.jpg",
		width: 300,
		height: 199
	}
};
const drawing = {
	title: "Drawing",
	wikititle: "Drawing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg/300px-Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg",
		width: 300,
		height: 413
	}
};
const drone_racing = {
	title: "Drone racing",
	wikititle: "Drone_racing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/The_Sound_of_Drone_Racing_%28LOUDNESS_WARNING%29.webm/300px--The_Sound_of_Drone_Racing_%28LOUDNESS_WARNING%29.webm.jpg",
		width: 300,
		height: 169
	}
};
const editing = {
	title: "Editing",
	wikititle: "Editing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Seattle_Daily_Times_news_editor_quarters_-_1900.jpg/300px-Seattle_Daily_Times_news_editor_quarters_-_1900.jpg",
		width: 300,
		height: 236
	}
};
const electronic_game = {
	title: "electronic games",
	wikititle: "electronic_game",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Yahtzee_Electronic_game.png/300px-Yahtzee_Electronic_game.png",
		width: 300,
		height: 398
	}
};
const electronics = {
	title: "Electronics",
	wikititle: "Electronics",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/300px-Arduino_ftdi_chip-1.jpg",
		width: 300,
		height: 225
	}
};
const embroidery = {
	title: "Embroidery",
	wikititle: "Embroidery",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bayeux_Tapestry_scene55_Eustach.jpg/300px-Bayeux_Tapestry_scene55_Eustach.jpg",
		width: 300,
		height: 425
	}
};
const engraving = {
	title: "Engraving",
	wikititle: "Engraving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/D%C3%BCrer-Hieronymus-im-Geh%C3%A4us.jpg/300px-D%C3%BCrer-Hieronymus-im-Geh%C3%A4us.jpg",
		width: 300,
		height: 391
	}
};
const entertainment = {
	title: "Entertaining",
	wikititle: "Entertainment",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Symposium_scene_Nicias_Painter_MAN.jpg/300px-Symposium_scene_Nicias_Painter_MAN.jpg",
		width: 300,
		height: 200
	}
};
const everyday_carry = {
	title: "Everyday carry",
	wikititle: "Everyday_carry",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/The_Items_Maczter_Carries_v3.0_%283528437339%29.jpg/300px-The_Items_Maczter_Carries_v3.0_%283528437339%29.jpg",
		width: 300,
		height: 207
	}
};
const experiment = {
	title: "Experimenting",
	wikititle: "Experiment",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Apollo_15_feather_and_hammer_drop.ogv/300px--Apollo_15_feather_and_hammer_drop.ogv.jpg",
		width: 300,
		height: 220
	}
};
const fantasy_sport = {
	title: "Fantasy sport",
	wikititle: "Fantasy_sport",
	image: {
	}
};
const fashion = {
	title: "Fashion",
	wikititle: "Fashion",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Carolina_Herrera_AW14_12.jpg/300px-Carolina_Herrera_AW14_12.jpg",
		width: 300,
		height: 199
	}
};
const fashion_design = {
	title: "Fashion design",
	wikititle: "Fashion_design",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Bundesarchiv_Bild_183-N0409-0320%2C_VEB_Bekleidungswerk_%22Steppke%22_G%C3%B6rlitz%2C_Gestaltung_Kinderkonfektion.jpg/300px-Bundesarchiv_Bild_183-N0409-0320%2C_VEB_Bekleidungswerk_%22Steppke%22_G%C3%B6rlitz%2C_Gestaltung_Kinderkonfektion.jpg",
		width: 300,
		height: 224
	}
};
const feng_shui = {
	title: "Feng shui decorating",
	wikititle: "Feng_shui",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Guishan_Dingxiang.png/300px-Guishan_Dingxiang.png",
		width: 300,
		height: 366
	}
};
const filmmaking = {
	title: "Filmmaking",
	wikititle: "Filmmaking",
	image: {
	}
};
const fingerpaint = {
	title: "Fingerpainting",
	wikititle: "Fingerpaint",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/GaoQipei-FingerPaintingOfEagleAndPineTrees-ShanghaiMuseum-May27-08.jpg/300px-GaoQipei-FingerPaintingOfEagleAndPineTrees-ShanghaiMuseum-May27-08.jpg",
		width: 300,
		height: 624
	}
};
const fishfarming = {
	title: "Fishfarming",
	wikititle: "Fishfarming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Loch_Ainort_fish_farm_-_geograph.org.uk_-_1800327.jpg/300px-Loch_Ainort_fish_farm_-_geograph.org.uk_-_1800327.jpg",
		width: 300,
		height: 225
	}
};
const fishkeeping = {
	title: "Fishkeeping",
	wikititle: "Fishkeeping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Aquarium3.jpg/300px-Aquarium3.jpg",
		width: 300,
		height: 182
	}
};
const flower_arranging = {
	title: "Flower arranging",
	wikititle: "Flower_arranging",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Floral_art.jpg/300px-Floral_art.jpg",
		width: 300,
		height: 225
	}
};
const fly_tying = {
	title: "Fly tying",
	wikititle: "Fly_tying",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Halford-Dry_Fly_Entomology.JPG/300px-Halford-Dry_Fly_Entomology.JPG",
		width: 300,
		height: 264
	}
};
const furniture = {
	title: "Furniture building",
	wikititle: "Furniture",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/8th_Century_BCE_Assyrian_Plaque_from_Fort_Shalmaneser._in_Nimrud.jpg/300px-8th_Century_BCE_Assyrian_Plaque_from_Fort_Shalmaneser._in_Nimrud.jpg",
		width: 300,
		height: 251
	}
};
const games = {
	title: "Gaming",
	wikititle: "Games",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paris_-_Tout%C3%A2nkhamon%2C_le_Tr%C3%A9sor_du_Pharaon_-_Plateau_de_jeu_miniature_en_ivoire_-_005.jpg/300px-Paris_-_Tout%C3%A2nkhamon%2C_le_Tr%C3%A9sor_du_Pharaon_-_Plateau_de_jeu_miniature_en_ivoire_-_005.jpg",
		width: 300,
		height: 300
	}
};
const tabletop_game = {
	title: "tabletop game",
	wikititle: "tabletop_game",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Chess_table%2C_wicker_chair%2C_chess%2C_kettle%2C_men_Fortepan_74442.jpg/300px-Chess_table%2C_wicker_chair%2C_chess%2C_kettle%2C_men_Fortepan_74442.jpg",
		width: 300,
		height: 209
	}
};
const gambling = {
	title: "Gambling",
	wikititle: "Gambling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Caravaggio_%28Michelangelo_Merisi%29_-_The_Cardsharps_-_Google_Art_Project.jpg/300px-Caravaggio_%28Michelangelo_Merisi%29_-_The_Cardsharps_-_Google_Art_Project.jpg",
		width: 300,
		height: 216
	}
};
const genealogy = {
	title: "Genealogy",
	wikititle: "Genealogy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/900-158_Ahnentafel_Herzog_Ludwig.jpg/300px-900-158_Ahnentafel_Herzog_Ludwig.jpg",
		width: 300,
		height: 239
	}
};
const gingerbread_house = {
	title: "Gingerbread house making",
	wikititle: "Gingerbread_house",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Gingerbread_house_with_gumdrops.jpg/300px-Gingerbread_house_with_gumdrops.jpg",
		width: 300,
		height: 200
	}
};
const glassblowing = {
	title: "Glassblowing",
	wikititle: "Glassblowing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Glassblowers_at_work%2C_Crown_Crystal%2C_1950%2C_by_Crown_Crystal_Studio_%284442231204%29.jpg/300px-Glassblowers_at_work%2C_Crown_Crystal%2C_1950%2C_by_Crown_Crystal_Studio_%284442231204%29.jpg",
		width: 300,
		height: 234
	}
};
const gardening = {
	title: "Gardening",
	wikititle: "Gardening",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Cementerio%2C_Tulc%C3%A1n%2C_Ecuador%2C_2015-07-21%2C_DD_60.JPG/300px-Cementerio%2C_Tulc%C3%A1n%2C_Ecuador%2C_2015-07-21%2C_DD_60.JPG",
		width: 300,
		height: 392
	}
};
const gongfu_tea = {
	title: "Gongfu tea",
	wikititle: "Gongfu_tea",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Gong_fu_cha.jpg/300px-Gong_fu_cha.jpg",
		width: 300,
		height: 225
	}
};
const graphic_design = {
	title: "Graphic design",
	wikititle: "Graphic_design",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Graphic-designer-application-projects-collage-2.0.jpg/300px-Graphic-designer-application-projects-collage-2.0.jpg",
		width: 300,
		height: 303
	}
};
const gunsmithing = {
	title: "Gunsmithing",
	wikititle: "Gunsmithing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Harpers_Ferry_gun_smith_shop_-_Blanchard_lathe_-_02.jpg/300px-Harpers_Ferry_gun_smith_shop_-_Blanchard_lathe_-_02.jpg",
		width: 300,
		height: 199
	}
};
const hacker = {
	title: "Hacking",
	wikititle: "Hacker",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Coding_da_Vinci_-_Der_Kultur-Hackathon_%2814123515524%29.jpg/300px-Coding_da_Vinci_-_Der_Kultur-Hackathon_%2814123515524%29.jpg",
		width: 300,
		height: 200
	}
};
const hairstyle = {
	title: "Hairstyle",
	wikititle: "Hairstyle",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Old_Chinese_woman_with_elaborate_hair_style._John_Thomson._China%2C_1869._The_Wellcome_Collection%2C_London.jpg/300px-Old_Chinese_woman_with_elaborate_hair_style._John_Thomson._China%2C_1869._The_Wellcome_Collection%2C_London.jpg",
		width: 300,
		height: 381
	}
};
const computer_hardware = {
	title: "Hardware",
	wikititle: "Computer_hardware",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/PDP-11-M7270.jpg/300px-PDP-11-M7270.jpg",
		width: 300,
		height: 326
	}
};
const herpetoculture = {
	title: "Herp keeping",
	wikititle: "Herpetoculture",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Phyllobates_terribilis_vivarium.jpg/300px-Phyllobates_terribilis_vivarium.jpg",
		width: 300,
		height: 300
	}
};
const hobby = {
	title: "Hobby finding",
	wikititle: "Hobby",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Seashells_North_Wales_1985.jpg/300px-Seashells_North_Wales_1985.jpg",
		width: 300,
		height: 200
	}
};
const home_improvement = {
	title: "Home improvement",
	wikititle: "Home_improvement",
	image: {
	}
};
const homebrewing = {
	title: "Homebrewing",
	wikititle: "Homebrewing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/BREWFERM_Pils_Beer_Homebrewing_Kit.jpg/300px-BREWFERM_Pils_Beer_Homebrewing_Kit.jpg",
		width: 300,
		height: 294
	}
};
const homing_pigeons = {
	title: "Homing pigeons",
	wikititle: "Homing_pigeons",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Postduif.jpg/300px-Postduif.jpg",
		width: 300,
		height: 219
	}
};
const hula_hooping = {
	title: "Hula hooping",
	wikititle: "Hula_hooping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Girl_twirling_Hula_Hoop%2C_1958.jpg/300px-Girl_twirling_Hula_Hoop%2C_1958.jpg",
		width: 300,
		height: 300
	}
};
const hydroponics = {
	title: "Hydroponics",
	wikititle: "Hydroponics",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Hydroponic_onions%2C_NASA_--_17_June_2004.jpg/300px-Hydroponic_onions%2C_NASA_--_17_June_2004.jpg",
		width: 300,
		height: 199
	}
};
const ice_skating = {
	title: "Ice skating",
	wikititle: "Ice_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Skating%2C_man%2C_woman%2C_ice-skating_rink%2C_winter%2C_smile%2C_free_time_Fortepan_14348.jpg/300px-Skating%2C_man%2C_woman%2C_ice-skating_rink%2C_winter%2C_smile%2C_free_time_Fortepan_14348.jpg",
		width: 300,
		height: 223
	}
};
const invention = {
	title: "Inventing",
	wikititle: "Invention",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Science_and_Invention_Nov_1928_Cover_2.jpg/300px-Science_and_Invention_Nov_1928_Cover_2.jpg",
		width: 300,
		height: 410
	}
};
const jewelry_making = {
	title: "Jewelry making",
	wikititle: "Jewelry_making",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Render4.jpg/300px-Render4.jpg",
		width: 300,
		height: 252
	}
};
const jigsaw_puzzle = {
	title: "Jigsaw puzzles",
	wikititle: "Jigsaw_puzzle",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Jigsaw_puzzle_01_by_Scouten.jpg/300px-Jigsaw_puzzle_01_by_Scouten.jpg",
		width: 300,
		height: 199
	}
};
const diary = {
	title: "Journaling",
	wikititle: "Diary",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/The_Diary_of_a_Young_Girl_at_the_Anne_Frank_Zentrum.jpg/300px-The_Diary_of_a_Young_Girl_at_the_Anne_Frank_Zentrum.jpg",
		width: 300,
		height: 225
	}
};
const judo = {
	title: "Judo",
	wikititle: "Judo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg/300px-Jigoro_Kano_and_Kyuzo_Mifune_%28restoration%29.jpg",
		width: 300,
		height: 388
	}
};
const juggling = {
	title: "Juggling",
	wikititle: "Juggling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Afghan_circus.jpg/300px-Afghan_circus.jpg",
		width: 300,
		height: 300
	}
};
const karaoke = {
	title: "Karaoke",
	wikititle: "Karaoke",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/%E5%8D%A1%E6%8B%89OK.jpg/300px-%E5%8D%A1%E6%8B%89OK.jpg",
		width: 300,
		height: 225
	}
};
const karate = {
	title: "Karate",
	wikititle: "Karate",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Hanashiro_Chomo.jpg/300px-Hanashiro_Chomo.jpg",
		width: 300,
		height: 470
	}
};
const kendama = {
	title: "Kendama",
	wikititle: "Kendama",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Kendama_toy.jpg/300px-Kendama_toy.jpg",
		width: 300,
		height: 400
	}
};
const kite_building = {
	title: "Kite Building",
	wikititle: "Kite_Building",
	image: {
	}
};
const knife_making = {
	title: "Knife making",
	wikititle: "Knife_making",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Jere_Davidson_ENGRAVING_a_large_knife.jpg/300px-Jere_Davidson_ENGRAVING_a_large_knife.jpg",
		width: 300,
		height: 387
	}
};
const knitting = {
	title: "Knitting",
	wikititle: "Knitting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Oma_strickt_Str%C3%BCmpfe.jpg/300px-Oma_strickt_Str%C3%BCmpfe.jpg",
		width: 300,
		height: 200
	}
};
const knot_tying = {
	title: "Knot tying",
	wikititle: "Knot_tying",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nf_knots.png/300px-Nf_knots.png",
		width: 300,
		height: 295
	}
};
const kombucha = {
	title: "Kombucha brewing",
	wikititle: "Kombucha",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kombucha_Mature.jpg/300px-Kombucha_Mature.jpg",
		width: 300,
		height: 444
	}
};
const kung_fu = {
	title: "Kung fu",
	wikititle: "Kung_fu",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/%D8%AD%D8%B1%DA%A9%D8%A7%D8%AA_%D8%A7%D9%86%D9%81%D8%B1%D8%A7%D8%AF%DB%8C_%DA%A9%D9%86%DA%AF_%D9%81%D9%88%D8%8C_%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%DA%A9%D8%A8%D8%B1%DB%8C_Kung_fu_in_iran_%28Qom%29_Mohammad_Akbari_27.jpg/300px-%D8%AD%D8%B1%DA%A9%D8%A7%D8%AA_%D8%A7%D9%86%D9%81%D8%B1%D8%A7%D8%AF%DB%8C_%DA%A9%D9%86%DA%AF_%D9%81%D9%88%D8%8C_%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%DA%A9%D8%A8%D8%B1%DB%8C_Kung_fu_in_iran_%28Qom%29_Mohammad_Akbari_27.jpg",
		width: 300,
		height: 200
	}
};
const kun_khmer = {
	title: "Kun khmer",
	wikititle: "Kun_khmer",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Highkickpradal.jpg/300px-Highkickpradal.jpg",
		width: 300,
		height: 281
	}
};
const lace_making = {
	title: "Lace making",
	wikititle: "Lace_making",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Verknipte_kantstrook.JPG/300px-Verknipte_kantstrook.JPG",
		width: 300,
		height: 480
	}
};
const lapidary = {
	title: "Lapidary",
	wikititle: "Lapidary",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/3/33/Thai_Gem_Cutting.jpg",
		width: 259,
		height: 243
	}
};
const leather_crafting = {
	title: "Leather crafting",
	wikititle: "Leather_crafting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Leathertools.jpg/300px-Leathertools.jpg",
		width: 300,
		height: 448
	}
};
const lego = {
	title: "Lego building",
	wikititle: "Lego",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/300px-LEGO_logo.svg.png",
		width: 300,
		height: 300
	}
};
const livestreaming = {
	title: "Livestreaming",
	wikititle: "Livestreaming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/CR_staff_and_PeopleRail_journalist_livestreaming_at_Beijing_Fengtai_Railway_Station_Exit_5_%2820220620132147%29.jpg/300px-CR_staff_and_PeopleRail_journalist_livestreaming_at_Beijing_Fengtai_Railway_Station_Exit_5_%2820220620132147%29.jpg",
		width: 300,
		height: 200
	}
};
const music = {
	title: "Playing musical instruments",
	wikititle: "Music",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg/300px-The_Sounds_of_Earth_-_GPN-2000-001976.jpg",
		width: 300,
		height: 300
	}
};
const podcasts = {
	title: "Listening to podcasts",
	wikititle: "Podcasts",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serial_Podcast.jpg/300px-Serial_Podcast.jpg",
		width: 300,
		height: 170
	}
};
const lock_picking = {
	title: "Lock picking",
	wikititle: "Lock_picking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lockpicking-Set.jpg/300px-Lockpicking-Set.jpg",
		width: 300,
		height: 349
	}
};
const machining = {
	title: "Machining",
	wikititle: "Machining",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mobile_Machine_Shop_US_Army_1943.jpg/300px-Mobile_Machine_Shop_US_Army_1943.jpg",
		width: 300,
		height: 386
	}
};
const macrame = {
	title: "Macrame",
	wikititle: "Macrame",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Macrame_.jpg/300px-Macrame_.jpg",
		width: 300,
		height: 450
	}
};
const makeup = {
	title: "Makeup",
	wikititle: "Makeup",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Cosmetics.JPG/300px-Cosmetics.JPG",
		width: 300,
		height: 218
	}
};
const massaging = {
	title: "Massaging",
	wikititle: "Massaging",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Spa_Picture_2.jpg/300px-Spa_Picture_2.jpg",
		width: 300,
		height: 203
	}
};
const mechanics = {
	title: "Mechanics",
	wikititle: "Mechanics",
	image: {
	}
};
const meditation = {
	title: "Meditation",
	wikititle: "Meditation",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Dhikr_Rifa-iyya.jpg/300px-Dhikr_Rifa-iyya.jpg",
		width: 300,
		height: 208
	}
};
const memory_training = {
	title: "Memory training",
	wikititle: "Memory_training",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Hippocampus_small.gif",
		width: 200,
		height: 200
	}
};
const metalworking = {
	title: "Metalworking",
	wikititle: "Metalworking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Dreher_an_einer_Drehbank.jpg/300px-Dreher_an_einer_Drehbank.jpg",
		width: 300,
		height: 197
	}
};
const micronation = {
	title: "Micropatriology",
	wikititle: "Micronation",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Sealand_fortress.jpg",
		width: 280,
		height: 170
	}
};
const miniature_art = {
	title: "Miniature art",
	wikititle: "Miniature_art",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Peter_Carl_Faberg%C3%A9_-_Miniature_Chair_-_1966.454_-_Cleveland_Museum_of_Art.tif/lossy-page1-300px-Peter_Carl_Faberg%C3%A9_-_Miniature_Chair_-_1966.454_-_Cleveland_Museum_of_Art.tif.jpg",
		width: 300,
		height: 401
	}
};
const simple_living = {
	title: "Minimalism",
	wikititle: "Simple_living",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gandhi_spinning_1942.jpg/300px-Gandhi_spinning_1942.jpg",
		width: 300,
		height: 220
	}
};
const model_building = {
	title: "Model building",
	wikititle: "Model_building",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Model-building-p1030188.jpg/300px-Model-building-p1030188.jpg",
		width: 300,
		height: 225
	}
};
const modeling = {
	title: "Modeling",
	wikititle: "Modeling",
	image: {
	}
};
const model_engineering = {
	title: "Model engineering",
	wikititle: "Model_engineering",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Stuart_No_10_Engine.jpg/300px-Stuart_No_10_Engine.jpg",
		width: 300,
		height: 421
	}
};
const nail_art = {
	title: "Nail art",
	wikititle: "Nail_art",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Natural_French_manicure.jpg/300px-Natural_French_manicure.jpg",
		width: 300,
		height: 450
	}
};
const needlepoint = {
	title: "Needlepoint",
	wikititle: "Needlepoint",
	image: {
	}
};
const origami = {
	title: "Origami",
	wikititle: "Origami",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cranes_made_by_Origami_paper.jpg/300px-Cranes_made_by_Origami_paper.jpg",
		width: 300,
		height: 183
	}
};
const painting = {
	title: "Painting",
	wikititle: "Painting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/300px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
		width: 300,
		height: 447
	}
};
const pen_spinning = {
	title: "Pen Spinning",
	wikititle: "Pen_Spinning",
	image: {
	}
};
const performance = {
	title: "Performance",
	wikititle: "Performance",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Don_Quijote_de_La_Mancha%2C_Teresa_Carre%C3%B1o_Teather.jpg/300px-Don_Quijote_de_La_Mancha%2C_Teresa_Carre%C3%B1o_Teather.jpg",
		width: 300,
		height: 166
	}
};
const pet_sitting = {
	title: "Pet sitting",
	wikititle: "Pet_sitting",
	image: {
	}
};
const philately = {
	title: "Philately",
	wikititle: "Philately",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Stamp_UK_Penny_Red_pl148.jpg/300px-Stamp_UK_Penny_Red_pl148.jpg",
		width: 300,
		height: 356
	}
};
const photography = {
	title: "Photography",
	wikititle: "Photography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Photography_by_Victor_Albert_Grigas_%281919-2017%29_00232_Old_Town_Art_Fair_Chicago_1968_%2823705070328%29.jpg/300px-Photography_by_Victor_Albert_Grigas_%281919-2017%29_00232_Old_Town_Art_Fair_Chicago_1968_%2823705070328%29.jpg",
		width: 300,
		height: 202
	}
};
const pilates = {
	title: "Pilates",
	wikititle: "Pilates",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pilates_01.jpg/300px-Pilates_01.jpg",
		width: 300,
		height: 200
	}
};
const planning = {
	title: "Planning",
	wikititle: "Planning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Wiki_Education_Foundation_February_2015_planning_sprint_01.jpg/300px-Wiki_Education_Foundation_February_2015_planning_sprint_01.jpg",
		width: 300,
		height: 200
	}
};
const plastic_art = {
	title: "Plastic art",
	wikititle: "Plastic_art",
	image: {
	}
};
const poetry = {
	title: "Poetry",
	wikititle: "Poetry",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rafael_-_El_Parnaso_%28Estancia_del_Sello%2C_Roma%2C_1511%29.jpg/300px-Rafael_-_El_Parnaso_%28Estancia_del_Sello%2C_Roma%2C_1511%29.jpg",
		width: 300,
		height: 198
	}
};
const pole_dancing = {
	title: "Pole dancing",
	wikititle: "Pole_dancing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Yoon_Bo-mi_at_Pink_Paradise_concert%2C_30_May_2015_04.jpg/300px-Yoon_Bo-mi_at_Pink_Paradise_concert%2C_30_May_2015_04.jpg",
		width: 300,
		height: 196
	}
};
const postcrossing = {
	title: "Postcrossing",
	wikititle: "Postcrossing",
	image: {
	}
};
const pottery = {
	title: "Pottery",
	wikititle: "Pottery",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Traditional_pottery_in_Nigeria_%28Ikpu_ite%29_11.jpg/300px-Traditional_pottery_in_Nigeria_%28Ikpu_ite%29_11.jpg",
		width: 300,
		height: 200
	}
};
const practical_jokes = {
	title: "Practical jokes",
	wikititle: "Practical_jokes",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Joke_-_phone_books_in_doorway.jpg/300px-Joke_-_phone_books_in_doorway.jpg",
		width: 300,
		height: 673
	}
};
const pressed_flower_craft = {
	title: "Flower collecting and pressing",
	wikititle: "Pressed_flower_craft",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Dried_Flowers_for_Making_Oshibana.jpg/300px-Dried_Flowers_for_Making_Oshibana.jpg",
		width: 300,
		height: 200
	}
};
const proofreading = {
	title: "Proofreading and editing",
	wikititle: "Proofreading",
	image: {
	}
};
const proverbs = {
	title: "Proverbs",
	wikititle: "Proverbs",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Books_and_Scroll_Ornament_with_Open_Book.png/300px-Books_and_Scroll_Ornament_with_Open_Book.png",
		width: 300,
		height: 165
	}
};
const public_speaking = {
	title: "Public speaking",
	wikititle: "Public_speaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cicer%C3%B3n_denuncia_a_Catilina%2C_por_Cesare_Maccari.jpg/300px-Cicer%C3%B3n_denuncia_a_Catilina%2C_por_Cesare_Maccari.jpg",
		width: 300,
		height: 180
	}
};
const puppetry = {
	title: "Puppetry",
	wikititle: "Puppetry",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Teatro_dei_burattini.jpg/300px-Teatro_dei_burattini.jpg",
		width: 300,
		height: 225
	}
};
const puzzle = {
	title: "Puzzles",
	wikititle: "Puzzle",
	image: {
	}
};
const pyrography = {
	title: "Pyrography",
	wikititle: "Pyrography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pyrography_The_White_Horse.jpg/300px-Pyrography_The_White_Horse.jpg",
		width: 300,
		height: 377
	}
};
const quilling = {
	title: "Quilling",
	wikititle: "Quilling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Fish1.jpg/300px-Fish1.jpg",
		width: 300,
		height: 249
	}
};
const quilting = {
	title: "Quilting",
	wikititle: "Quilting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Quilter_and_quilting_in_the_Bazaar_of_Nishapur_11.JPG/300px-Quilter_and_quilting_in_the_Bazaar_of_Nishapur_11.JPG",
		width: 300,
		height: 400
	}
};
const quizzes = {
	title: "Quizzes",
	wikititle: "Quizzes",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Health_Quiz%2C_RAMC%3B_651-3_Wellcome_L0024826_%28cropped%29.jpg/300px-Health_Quiz%2C_RAMC%3B_651-3_Wellcome_L0024826_%28cropped%29.jpg",
		width: 300,
		height: 250
	}
};
const rail_transport_modeling = {
	title: "Rail transport modeling",
	wikititle: "Rail_transport_modeling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/H0e_layout2.png/300px-H0e_layout2.png",
		width: 300,
		height: 190
	}
};
const rapping = {
	title: "Rapping",
	wikititle: "Rapping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/50_cent_en_concierto.jpg/300px-50_cent_en_concierto.jpg",
		width: 300,
		height: 225
	}
};
const recipe = {
	title: "Recipe creation",
	wikititle: "Recipe",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Backzutaten_041.jpg/300px-Backzutaten_041.jpg",
		width: 300,
		height: 179
	}
};
const refinishing = {
	title: "Refinishing",
	wikititle: "Refinishing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Swedish_Windsor_Chairs.jpg/300px-Swedish_Windsor_Chairs.jpg",
		width: 300,
		height: 197
	}
};
const reiki = {
	title: "Reiki",
	wikititle: "Reiki",
	image: {
	}
};
const robot_combat = {
	title: "Robot combat",
	wikititle: "Robot_combat",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/RoboCore_Robot_Combat.jpg/300px-RoboCore_Robot_Combat.jpg",
		width: 300,
		height: 200
	}
};
const scrapbooking = {
	title: "Scrapbooking",
	wikititle: "Scrapbooking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Vintage_Scrapbook.jpg/300px-Vintage_Scrapbook.jpg",
		width: 300,
		height: 196
	}
};
const scuba_diving = {
	title: "Scuba diving",
	wikititle: "Scuba_diving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Buzo.jpg/300px-Buzo.jpg",
		width: 300,
		height: 300
	}
};
const sculpting = {
	title: "Sculpting",
	wikititle: "Sculpting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Dying_gaul.jpg/300px-Dying_gaul.jpg",
		width: 300,
		height: 244
	}
};
const sewing = {
	title: "Sewing",
	wikititle: "Sewing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Syende_fiskerpige.jpeg/300px-Syende_fiskerpige.jpeg",
		width: 300,
		height: 370
	}
};
const shoemaking = {
	title: "Shoemaking",
	wikititle: "Shoemaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Schuhmacher-1568.png/300px-Schuhmacher-1568.png",
		width: 300,
		height: 389
	}
};
const singing = {
	title: "Singing",
	wikititle: "Singing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Ah_cricket_20122_%287364759010%29.jpg/300px-Ah_cricket_20122_%287364759010%29.jpg",
		width: 300,
		height: 193
	}
};
const skipping_rope = {
	title: "Skipping rope",
	wikititle: "Skipping_rope",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ghanaian_kid_%28skipping_rope%29_06_%28cropped%29.jpg/300px-Ghanaian_kid_%28skipping_rope%29_06_%28cropped%29.jpg",
		width: 300,
		height: 468
	}
};
const slot_car = {
	title: "Slot car",
	wikititle: "Slot_car",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ninco_JGTC_Fahrerfeld.jpg/300px-Ninco_JGTC_Fahrerfeld.jpg",
		width: 300,
		height: 125
	}
};
const soapmaking = {
	title: "Soapmaking",
	wikititle: "Soapmaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Handmade_soap_cropped_and_simplified.jpg/300px-Handmade_soap_cropped_and_simplified.jpg",
		width: 300,
		height: 258
	}
};
const speedrunning = {
	title: "Speedrunning",
	wikititle: "Speedrunning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Mooseman%2C_Duck_%26_Hagginater_%2848149452022%29.jpg/300px-Mooseman%2C_Duck_%26_Hagginater_%2848149452022%29.jpg",
		width: 300,
		height: 200
	}
};
const speculative_evolution = {
	title: "Speculative evolution",
	wikititle: "Speculative_evolution",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Balundaur1_-_Speculative_Dinosaur_Project.jpg/300px-Balundaur1_-_Speculative_Dinosaur_Project.jpg",
		width: 300,
		height: 222
	}
};
const spreadsheets = {
	title: "Spreadsheets",
	wikititle: "Spreadsheets",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/LibreOffice_7.2.4.1_Calc_with_csv_screenshot.png/300px-LibreOffice_7.2.4.1_Calc_with_csv_screenshot.png",
		width: 300,
		height: 212
	}
};
const stamp_collecting = {
	title: "Stamp collecting",
	wikititle: "Stamp_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Fran%C3%A7ois_Barraud_-_Le_Philat%C3%A9liste.jpg/300px-Fran%C3%A7ois_Barraud_-_Le_Philat%C3%A9liste.jpg",
		width: 300,
		height: 362
	}
};
const storytelling = {
	title: "Storytelling",
	wikititle: "Storytelling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/John_Everett_Millais_%281829-1896%29_-_The_Boyhood_of_Raleigh_-_N01691_-_National_Gallery.jpg/300px-John_Everett_Millais_%281829-1896%29_-_The_Boyhood_of_Raleigh_-_N01691_-_National_Gallery.jpg",
		width: 300,
		height: 253
	}
};
const stretching = {
	title: "Stretching",
	wikititle: "Stretching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%D0%A1%D0%B0%D0%BC%D0%B8%D1%80%D0%B0_%D0%9C%D1%83%D1%81%D1%82%D0%B0%D1%84%D0%B0%D0%B5%D0%B2%D0%B0_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg/300px-%D0%A1%D0%B0%D0%BC%D0%B8%D1%80%D0%B0_%D0%9C%D1%83%D1%81%D1%82%D0%B0%D1%84%D0%B0%D0%B5%D0%B2%D0%B0_%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0.jpg",
		width: 300,
		height: 200
	}
};
const string_figure = {
	title: "String Figures",
	wikititle: "String_figure",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Osage_Two_Diamonds_Jayne_Fig_56.jpg/300px-Osage_Two_Diamonds_Jayne_Fig_56.jpg",
		width: 300,
		height: 225
	}
};
const sudoku = {
	title: "Sudoku",
	wikititle: "Sudoku",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg/300px-Sudoku_Puzzle_by_L2G-20050714_standardized_layout.svg.png",
		width: 300,
		height: 300
	}
};
const speech = {
	title: "Talking",
	wikititle: "Speech",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Real-time_MRI_-_Speaking_%28English%29.ogv/256px--Real-time_MRI_-_Speaking_%28English%29.ogv.jpg",
		width: 256,
		height: 256
	}
};
const taekwondo = {
	title: "Taekwondo",
	wikititle: "Taekwondo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg/300px-Milad_Kharchegani_at_the_2016_Summer_Olympics.jpg",
		width: 300,
		height: 237
	}
};
const tapestry = {
	title: "Tapestry",
	wikititle: "Tapestry",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Rea-Menzies_in_studio.jpg/300px-Rea-Menzies_in_studio.jpg",
		width: 300,
		height: 225
	}
};
const tarot = {
	title: "Tarot",
	wikititle: "Tarot",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Tarockkarten_in_der_Hand_eines_Spielers.jpg/300px-Tarockkarten_in_der_Hand_eines_Spielers.jpg",
		width: 300,
		height: 217
	}
};
const tattoo = {
	title: "Tattooing",
	wikititle: "Tattoo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Anchor_tattoo_and_sketch.jpg/300px-Anchor_tattoo_and_sketch.jpg",
		width: 300,
		height: 300
	}
};
const taxidermy = {
	title: "Taxidermy",
	wikititle: "Taxidermy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Primate_Taxidermy%2C_Rahmat_International_Wildlife_Museum_and_Gallery.jpg/300px-Primate_Taxidermy%2C_Rahmat_International_Wildlife_Museum_and_Gallery.jpg",
		width: 300,
		height: 200
	}
};
const joke = {
	title: "Telling jokes",
	wikititle: "joke",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Boris_Yeltsin_with_Bill_Clinton-1.jpg/300px-Boris_Yeltsin_with_Bill_Clinton-1.jpg",
		width: 300,
		height: 169
	}
};
const charity_shop = {
	title: "Thrifting",
	wikititle: "Charity_shop",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Thrift_store_goodies.jpg/300px-Thrift_store_goodies.jpg",
		width: 300,
		height: 217
	}
};
const upcycling = {
	title: "Upcycling",
	wikititle: "Upcycling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Cans_repurposed_as_a_chair_in_Brazil.jpg/300px-Cans_repurposed_as_a_chair_in_Brazil.jpg",
		width: 300,
		height: 402
	}
};
const video_editing = {
	title: "Video editing",
	wikititle: "Video_editing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Mesa_de_v%C3%ADdeo_1.JPG/300px-Mesa_de_v%C3%ADdeo_1.JPG",
		width: 300,
		height: 225
	}
};
const video_game_development = {
	title: "Video game developing",
	wikititle: "Video_game_development",
	image: {
	}
};
const video_gaming = {
	title: "Video gaming",
	wikititle: "Video_gaming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Universum_TV_Multispiel_2006.jpg/300px-Universum_TV_Multispiel_2006.jpg",
		width: 300,
		height: 200
	}
};
const videography = {
	title: "Videography",
	wikititle: "Videography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Videographer-using-DSLR.jpg/300px-Videographer-using-DSLR.jpg",
		width: 300,
		height: 200
	}
};
const vr_gaming = {
	title: "VR gaming",
	wikititle: "VR_gaming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2487_cline_vr_studio_20190318.jpg/300px-2487_cline_vr_studio_20190318.jpg",
		width: 300,
		height: 200
	}
};
const wargaming = {
	title: "Wargaming",
	wikititle: "Wargaming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/CosimAmphibious.svg/300px-CosimAmphibious.svg.png",
		width: 300,
		height: 225
	}
};
const watchmaker = {
	title: "Watch making",
	wikititle: "Watchmaker",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Watchmaker.jpg/300px-Watchmaker.jpg",
		width: 300,
		height: 196
	}
};
const documentary_film = {
	title: "Watching documentaries",
	wikititle: "Documentary_film",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/BolexH16.jpg/300px-BolexH16.jpg",
		width: 300,
		height: 332
	}
};
const movies = {
	title: "Watching movies",
	wikititle: "Movies",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Le_Voyage_dans_la_lune_%28black_and_white%2C_1902%29.webm/300px--Le_Voyage_dans_la_lune_%28black_and_white%2C_1902%29.webm.jpg",
		width: 300,
		height: 225
	}
};
const television_program = {
	title: "Watching television",
	wikititle: "Television_program",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/MDR_Kripo_live.jpg/300px-MDR_Kripo_live.jpg",
		width: 300,
		height: 228
	}
};
const sealing_wax = {
	title: "Wax sealing",
	wikititle: "Sealing_wax",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Cornelis_Norbertus_Gysbrechts_-_Quodlibet.jpg/300px-Cornelis_Norbertus_Gysbrechts_-_Quodlibet.jpg",
		width: 300,
		height: 360
	}
};
const weaving = {
	title: "Weaving",
	wikititle: "Weaving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Warp_and_weft_2.jpg/300px-Warp_and_weft_2.jpg",
		width: 300,
		height: 333
	}
};
const webtoon = {
	title: "Webtooning",
	wikititle: "Webtoon",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Middle_Class_in_Joseon.jpg/300px-Middle_Class_in_Joseon.jpg",
		width: 300,
		height: 136
	}
};
const weight_training = {
	title: "Weightlifting",
	wikititle: "Weight_training",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/TwoDumbbells.JPG/300px-TwoDumbbells.JPG",
		width: 300,
		height: 358
	}
};
const welding = {
	title: "Welding",
	wikititle: "Welding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/G502_Overhead.jpg/300px-G502_Overhead.jpg",
		width: 300,
		height: 450
	}
};
const whittling = {
	title: "Whittling",
	wikititle: "Whittling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Carveknife.JPG/300px-Carveknife.JPG",
		width: 300,
		height: 207
	}
};
const wine_tasting = {
	title: "Wine tasting",
	wikititle: "Wine_tasting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Brooklyn_Museum_-_Monk_Testing_Wine_-_Antonio_Casanova_y_Estorach.jpg/300px-Brooklyn_Museum_-_Monk_Testing_Wine_-_Antonio_Casanova_y_Estorach.jpg",
		width: 300,
		height: 388
	}
};
const winemaking = {
	title: "Winemaking",
	wikititle: "Winemaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Wine_grapes_baja.jpg/300px-Wine_grapes_baja.jpg",
		width: 300,
		height: 375
	}
};
const witchcraft = {
	title: "Witchcraft",
	wikititle: "Witchcraft",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Baldung_Hexen_1508_kol.JPG/300px-Baldung_Hexen_1508_kol.JPG",
		width: 300,
		height: 432
	}
};
const wood_carving = {
	title: "Wood carving",
	wikititle: "Wood_carving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Patrick-damiaens-1323207754.jpg/300px-Patrick-damiaens-1323207754.jpg",
		width: 300,
		height: 203
	}
};
const woodworking = {
	title: "Woodworking",
	wikititle: "Woodworking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Woodcarvings_of_cranes.jpg/300px-Woodcarvings_of_cranes.jpg",
		width: 300,
		height: 293
	}
};
const word_searches = {
	title: "Word searches",
	wikititle: "Word_searches",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Wordsearch.svg/300px-Wordsearch.svg.png",
		width: 300,
		height: 209
	}
};
const worldbuilding = {
	title: "Worldbuilding",
	wikititle: "Worldbuilding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/01_-_Kort_over_hele_Midg%C3%A5rd_%28Tolkien%29_-_p%C3%A5_dansk.jpg/300px-01_-_Kort_over_hele_Midg%C3%A5rd_%28Tolkien%29_-_p%C3%A5_dansk.jpg",
		width: 300,
		height: 295
	}
};
const writing = {
	title: "Writing",
	wikititle: "Writing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Rosetta_Stone.JPG/300px-Rosetta_Stone.JPG",
		width: 300,
		height: 351
	}
};
const musical_composition = {
	title: "Writing music",
	wikititle: "Musical_composition",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Borodin_Scherzo_in_A_flat.png/300px-Borodin_Scherzo_in_A_flat.png",
		width: 300,
		height: 240
	}
};
const yoga = {
	title: "Yoga",
	wikititle: "Yoga",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Shiva_Bangalore.jpg/300px-Shiva_Bangalore.jpg",
		width: 300,
		height: 296
	}
};
const zumba = {
	title: "Zumba",
	wikititle: "Zumba",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Zumba_%288158431916%29.jpg/300px-Zumba_%288158431916%29.jpg",
		width: 300,
		height: 450
	}
};
const air_sports = {
	title: "Air sports",
	wikititle: "Air_sports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/North_American_T-6_Texan_race_start_2014_Reno_Air_Races_photo_D_Ramey_Logan.jpg/300px-North_American_T-6_Texan_race_start_2014_Reno_Air_Races_photo_D_Ramey_Logan.jpg",
		width: 300,
		height: 151
	}
};
const airsoft = {
	title: "Airsoft",
	wikititle: "Airsoft",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Airsoft_squad.jpg/300px-Airsoft_squad.jpg",
		width: 300,
		height: 200
	}
};
const amateur_geology = {
	title: "Amateur geology",
	wikititle: "Amateur_geology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kunzite_Nouristan.jpg/300px-Kunzite_Nouristan.jpg",
		width: 300,
		height: 279
	}
};
const amusement_park = {
	title: "Amusement park visiting",
	wikititle: "Amusement_park",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Cinderella_Castle_2013_Wade.jpg/300px-Cinderella_Castle_2013_Wade.jpg",
		width: 300,
		height: 425
	}
};
const archery = {
	title: "Archery",
	wikititle: "Archery",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/ArcheryGermanyEarly1980s-2.jpg/300px-ArcheryGermanyEarly1980s-2.jpg",
		width: 300,
		height: 195
	}
};
const auto_detailing = {
	title: "Auto detailing",
	wikititle: "Auto_detailing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Elektron_vacuum_cleaner_1916.jpg/300px-Elektron_vacuum_cleaner_1916.jpg",
		width: 300,
		height: 220
	}
};
const automobilism = {
	title: "Automobilism",
	wikititle: "Automobilism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/401_Gridlock.jpg/300px-401_Gridlock.jpg",
		width: 300,
		height: 200
	}
};
const astronomy = {
	title: "Astronomy",
	wikititle: "Astronomy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Laser_Towards_Milky_Ways_Centre.jpg/300px-Laser_Towards_Milky_Ways_Centre.jpg",
		width: 300,
		height: 272
	}
};
const badminton = {
	title: "Badminton",
	wikititle: "Badminton",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Olympics_2012_Mixed_Doubles_Final.jpg/300px-Olympics_2012_Mixed_Doubles_Final.jpg",
		width: 300,
		height: 199
	}
};
const base_jumping = {
	title: "BASE jumping",
	wikititle: "BASE_jumping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Base_jump.webm/300px--Base_jump.webm.jpg",
		width: 300,
		height: 169
	}
};
const baseball = {
	title: "Baseball",
	wikititle: "Baseball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Mookie_Betts_hitting_the_ball_%2836478781664%29.jpg/300px-Mookie_Betts_hitting_the_ball_%2836478781664%29.jpg",
		width: 300,
		height: 225
	}
};
const basketball = {
	title: "Basketball",
	wikititle: "Basketball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg/300px-Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg",
		width: 300,
		height: 225
	}
};
const beachcombing = {
	title: "Beachcombing",
	wikititle: "Beachcombing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Beach_Combing_%2814283064095%29.jpg/300px-Beach_Combing_%2814283064095%29.jpg",
		width: 300,
		height: 225
	}
};
const beekeeping = {
	title: "Beekeeping",
	wikititle: "Beekeeping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/27-alimenti%2C_miele%2C_Taccuino_Sanitatis%2C_Casanatense_4182..jpg/300px-27-alimenti%2C_miele%2C_Taccuino_Sanitatis%2C_Casanatense_4182..jpg",
		width: 300,
		height: 330
	}
};
const birdwatching = {
	title: "Birdwatching",
	wikititle: "Birdwatching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/NMAAHC_Bird_Walk.jpg/300px-NMAAHC_Bird_Walk.jpg",
		width: 300,
		height: 225
	}
};
const blacksmithing = {
	title: "Blacksmithing",
	wikititle: "Blacksmithing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/A_blacksmith_at_work.jpg/300px-A_blacksmith_at_work.jpg",
		width: 300,
		height: 400
	}
};
const bmx = {
	title: "BMX",
	wikititle: "BMX",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/BMX_racing_action_photo.jpg/300px-BMX_racing_action_photo.jpg",
		width: 300,
		height: 225
	}
};
const board_sports = {
	title: "Board sports",
	wikititle: "Board_sports",
	image: {
	}
};
const bodybuilding = {
	title: "Bodybuilding",
	wikititle: "Bodybuilding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/300px-Arnold_Schwarzenegger_1974.jpg",
		width: 300,
		height: 436
	}
};
const bus = {
	title: "Bus riding",
	wikititle: "Bus",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg/300px-LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg",
		width: 300,
		height: 200
	}
};
const camping = {
	title: "Camping",
	wikititle: "Camping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg/300px-Tent_camping_along_the_Sulayr_trail_in_La_Taha%2C_Sierra_Nevada_National_Park_%28DSCF5147%29.jpg",
		width: 300,
		height: 204
	}
};
const canoeing = {
	title: "Canoeing",
	wikititle: "Canoeing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/WW_Open_Canoe_in_Big_Water.png/300px-WW_Open_Canoe_in_Big_Water.png",
		width: 300,
		height: 168
	}
};
const canyoning = {
	title: "Canyoning",
	wikititle: "Canyoning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Bali_canyoning.jpg/300px-Bali_canyoning.jpg",
		width: 300,
		height: 450
	}
};
const carrier_pigeons = {
	title: "Carrier pigeons",
	wikititle: "Carrier_pigeons",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Postduif.jpg/300px-Postduif.jpg",
		width: 300,
		height: 219
	}
};
const car = {
	title: "Car riding",
	wikititle: "Car",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/401_Gridlock.jpg/300px-401_Gridlock.jpg",
		width: 300,
		height: 200
	}
};
const car_tuning = {
	title: "Car tuning",
	wikititle: "Car_tuning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/King_of_Europe_Round_3_Lydden_Hill_2014_%2814356011899%29.jpg/300px-King_of_Europe_Round_3_Lydden_Hill_2014_%2814356011899%29.jpg",
		width: 300,
		height: 193
	}
};
const caving = {
	title: "Caving",
	wikititle: "Caving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Caving2.jpg/300px-Caving2.jpg",
		width: 300,
		height: 225
	}
};
const city_tourism = {
	title: "City trip",
	wikititle: "City_tourism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Berlin-Vue_depuis_la_Humboldt-Box_%281%29.jpg/300px-Berlin-Vue_depuis_la_Humboldt-Box_%281%29.jpg",
		width: 300,
		height: 225
	}
};
const climbing = {
	title: "Climbing",
	wikititle: "Climbing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Pictograms-nps-land-technical_rock_climbing.svg/300px-Pictograms-nps-land-technical_rock_climbing.svg.png",
		width: 300,
		height: 300
	}
};
const composting = {
	title: "Composting",
	wikititle: "Composting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Compost_site_germany.JPG/300px-Compost_site_germany.JPG",
		width: 300,
		height: 225
	}
};
const croquet = {
	title: "Croquet",
	wikititle: "Croquet",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Modern_croquet_equipment.JPG/300px-Modern_croquet_equipment.JPG",
		width: 300,
		height: 200
	}
};
const cycling = {
	title: "Cycling",
	wikititle: "Cycling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Two_siblings_on_their_way_home_after_school.jpg/300px-Two_siblings_on_their_way_home_after_school.jpg",
		width: 300,
		height: 199
	}
};
const dairy_farming = {
	title: "Dairy Farming",
	wikititle: "Dairy_Farming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Alte_Batzenalpe_2014_Interior_06.jpg/300px-Alte_Batzenalpe_2014_Interior_06.jpg",
		width: 300,
		height: 200
	}
};
const darts = {
	title: "Darts",
	wikititle: "Darts",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Darts_in_a_dartboard.jpg/300px-Darts_in_a_dartboard.jpg",
		width: 300,
		height: 199
	}
};
const dodgeball = {
	title: "Dodgeball",
	wikititle: "Dodgeball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Andrew_Ketchum_dodging_a_ball_at_the_World_Dodgeball_Championships_in_Los_Angeles_in_2018.jpg/300px-Andrew_Ketchum_dodging_a_ball_at_the_World_Dodgeball_Championships_in_Los_Angeles_in_2018.jpg",
		width: 300,
		height: 300
	}
};
const dog_training = {
	title: "Dog training",
	wikititle: "Dog_training",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Controlled_training_exercises_130129-F-HX529-104.jpg/300px-Controlled_training_exercises_130129-F-HX529-104.jpg",
		width: 300,
		height: 200
	}
};
const dog_walking = {
	title: "Dog walking",
	wikititle: "Dog_walking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Dog_walking_woman.jpg/300px-Dog_walking_woman.jpg",
		width: 300,
		height: 208
	}
};
const dowsing = {
	title: "Dowsing",
	wikititle: "Dowsing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/18th_century_dowser.jpg/300px-18th_century_dowser.jpg",
		width: 300,
		height: 454
	}
};
const dragon_boat = {
	title: "Dragon boat",
	wikititle: "Dragon_boat",
	image: {
	}
};
const driving = {
	title: "Driving",
	wikititle: "Driving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Convertible_Mercedes_Car_Driving_On_A_Highway.jpg/300px-Convertible_Mercedes_Car_Driving_On_A_Highway.jpg",
		width: 300,
		height: 225
	}
};
const farming = {
	title: "Farming",
	wikititle: "Farming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Maler_der_Grabkammer_des_Sennudem_001.jpg/300px-Maler_der_Grabkammer_des_Sennudem_001.jpg",
		width: 300,
		height: 196
	}
};
const fishing = {
	title: "Fishing",
	wikititle: "Fishing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Stilts_fishermen_Sri_Lanka_02.jpg/300px-Stilts_fishermen_Sri_Lanka_02.jpg",
		width: 300,
		height: 225
	}
};
const flag_football = {
	title: "Flag football",
	wikititle: "Flag_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flagfootballut.jpg/300px-Flagfootballut.jpg",
		width: 300,
		height: 200
	}
};
const flower = {
	title: "Flower growing",
	wikititle: "Flower",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flower_poster_2.jpg/300px-Flower_poster_2.jpg",
		width: 300,
		height: 399
	}
};
const aviation = {
	title: "Flying",
	wikititle: "Aviation",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Pan_Am_Boeing_747-121_N732PA_Bidini.jpg/300px-Pan_Am_Boeing_747-121_N732PA_Bidini.jpg",
		width: 300,
		height: 200
	}
};
const flying_disc = {
	title: "Flying disc",
	wikititle: "Flying_disc",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Frisbee_090719.jpg/300px-Frisbee_090719.jpg",
		width: 300,
		height: 225
	}
};
const model_aircraft = {
	title: "Model aircraft",
	wikititle: "Model_aircraft",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Model_B747-400_-_SINGAPORE_AIRLINES.jpg/300px-Model_B747-400_-_SINGAPORE_AIRLINES.jpg",
		width: 300,
		height: 200
	}
};
const foraging = {
	title: "Foraging",
	wikititle: "Foraging",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Grizzly_Bear_foraging.jpg/300px-Grizzly_Bear_foraging.jpg",
		width: 300,
		height: 227
	}
};
const fossicking = {
	title: "Fossicking",
	wikititle: "Fossicking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Gold_panning%2C_Australia%2C_1900.jpg/300px-Gold_panning%2C_Australia%2C_1900.jpg",
		width: 300,
		height: 225
	}
};
const freestyle_football = {
	title: "Freestyle football",
	wikititle: "Freestyle_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Football_freestyle_2013_Masters_epee_t171023.jpg/300px-Football_freestyle_2013_Masters_epee_t171023.jpg",
		width: 300,
		height: 450
	}
};
const fruit_picking = {
	title: "Fruit picking",
	wikititle: "Fruit_picking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Orchard.ladders.jpg/300px-Orchard.ladders.jpg",
		width: 300,
		height: 208
	}
};
const geocaching = {
	title: "Geocaching",
	wikititle: "Geocaching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Geocaching_in_Norway.jpg/300px-Geocaching_in_Norway.jpg",
		width: 300,
		height: 225
	}
};
const ghost_hunting = {
	title: "Ghost hunting",
	wikititle: "Ghost_hunting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Nightshot2.png/300px-Nightshot2.png",
		width: 300,
		height: 213
	}
};
const gold_prospecting = {
	title: "Gold prospecting",
	wikititle: "Gold_prospecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Gold_Pan.jpg/300px-Gold_Pan.jpg",
		width: 300,
		height: 225
	}
};
const graffiti = {
	title: "Graffiti",
	wikititle: "Graffiti",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Former_roof_felt_factory_in_Tampere_Jun2012_003.jpg/300px-Former_roof_felt_factory_in_Tampere_Jun2012_003.jpg",
		width: 300,
		height: 200
	}
};
const groundhopping = {
	title: "Groundhopping",
	wikititle: "Groundhopping",
	image: {
	}
};
const guerrilla_gardening = {
	title: "Guerrilla gardening",
	wikititle: "Guerrilla_gardening",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Guerilla_Garden_logo_amongst_the_strawberries.jpg/300px-Guerilla_Garden_logo_amongst_the_strawberries.jpg",
		width: 300,
		height: 225
	}
};
const gymnastics = {
	title: "Gymnastics",
	wikititle: "Gymnastics",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ESTADOS_UNIDOS_LEVAM_OURO_NA_GIN%C3%81STICA_FEMININA_POR_EQUIPES_DOS_JOGOS_OL%C3%8DMPICOS_RIO_2016_%2828849586476%29.jpg/300px-ESTADOS_UNIDOS_LEVAM_OURO_NA_GIN%C3%81STICA_FEMININA_POR_EQUIPES_DOS_JOGOS_OL%C3%8DMPICOS_RIO_2016_%2828849586476%29.jpg",
		width: 300,
		height: 200
	}
};
const handball = {
	title: "Handball",
	wikititle: "Handball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/SAP_Arena_Handball_ausverkauft.jpg/300px-SAP_Arena_Handball_ausverkauft.jpg",
		width: 300,
		height: 200
	}
};
const herbalism = {
	title: "Herbalism",
	wikititle: "Herbalism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Et_assortert_utvalg_urtemedisiner_fra_apoteket_%C3%98rnen_ved_Glomdalsmuseet.jpg/300px-Et_assortert_utvalg_urtemedisiner_fra_apoteket_%C3%98rnen_ved_Glomdalsmuseet.jpg",
		width: 300,
		height: 450
	}
};
const herping = {
	title: "Herping",
	wikititle: "Herping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Thamnophis_sirtalis_parietalis.jpg",
		width: 300,
		height: 206
	}
};
const hiking = {
	title: "Hiking",
	wikititle: "Hiking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/300px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
		width: 300,
		height: 200
	}
};
const hobby_horse = {
	title: "Hobby horsing",
	wikititle: "Hobby_horse",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Morris_dancers_Thames_at_Richmond.jpg/300px-Morris_dancers_Thames_at_Richmond.jpg",
		width: 300,
		height: 223
	}
};
const hobby_tunneling = {
	title: "Hobby tunneling",
	wikititle: "Hobby_tunneling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Forestiere_Underground_Gardens_at_5021_West_Shaw_Avenue%2C_Fresno%2C_California_LCCN2013634990.tif/lossy-page1-300px-Forestiere_Underground_Gardens_at_5021_West_Shaw_Avenue%2C_Fresno%2C_California_LCCN2013634990.tif.jpg",
		width: 300,
		height: 200
	}
};
const hooping = {
	title: "Hooping",
	wikititle: "Hooping",
	image: {
	}
};
const horseback_riding = {
	title: "Horseback riding",
	wikititle: "Horseback_riding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg/300px-Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg",
		width: 300,
		height: 200
	}
};
const hunting = {
	title: "Hunting",
	wikititle: "Hunting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bushmen_hunters_%28cropped%29.png/300px-Bushmen_hunters_%28cropped%29.png",
		width: 300,
		height: 352
	}
};
const inline_skating = {
	title: "Inline skating",
	wikititle: "Inline_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Amsterdam_-_Vondelpark_-_1466.jpg/300px-Amsterdam_-_Vondelpark_-_1466.jpg",
		width: 300,
		height: 450
	}
};
const jogging = {
	title: "Jogging",
	wikititle: "Jogging",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Girls_jog_along_Morro_Strand_State_Beach.jpg/300px-Girls_jog_along_Morro_Strand_State_Beach.jpg",
		width: 300,
		height: 200
	}
};
const jumping_rope = {
	title: "Jumping rope",
	wikititle: "Jumping_rope",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ghanaian_kid_%28skipping_rope%29_06_%28cropped%29.jpg/300px-Ghanaian_kid_%28skipping_rope%29_06_%28cropped%29.jpg",
		width: 300,
		height: 468
	}
};
const karting = {
	title: "Karting",
	wikititle: "Karting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%9A%D0%BB%D0%B0%D1%81_60.jpg/300px-%D0%9A%D0%BB%D0%B0%D1%81_60.jpg",
		width: 300,
		height: 199
	}
};
const kayaking = {
	title: "Kayaking",
	wikititle: "Kayaking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Woman_kayaking_on_a_turquoise_lake_%2851125937521%29.jpg/300px-Woman_kayaking_on_a_turquoise_lake_%2851125937521%29.jpg",
		width: 300,
		height: 169
	}
};
const kite = {
	title: "Kite flying",
	wikititle: "Kite",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Yokaichi01.jpg/300px-Yokaichi01.jpg",
		width: 300,
		height: 200
	}
};
const kitesurfing = {
	title: "Kitesurfing",
	wikititle: "Kitesurfing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kitesurfing_Sotavento.jpg/300px-Kitesurfing_Sotavento.jpg",
		width: 300,
		height: 450
	}
};
const lacrosse = {
	title: "Lacrosse",
	wikititle: "Lacrosse",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/UNC_Lacrosse.jpg/300px-UNC_Lacrosse.jpg",
		width: 300,
		height: 345
	}
};
const larping = {
	title: "LARPing",
	wikititle: "LARPing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Dados_4_a_20_caras_trans.png/300px-Dados_4_a_20_caras_trans.png",
		width: 300,
		height: 300
	}
};
const lomography = {
	title: "Lomography",
	wikititle: "Lomography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Diana_camera.jpg/300px-Diana_camera.jpg",
		width: 300,
		height: 205
	}
};
const longboarding = {
	title: "Longboarding",
	wikititle: "Longboarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Longboarding_in_spain.jpg/300px-Longboarding_in_spain.jpg",
		width: 300,
		height: 375
	}
};
const martial_arts = {
	title: "Martial arts",
	wikititle: "Martial_arts",
	image: {
	}
};
const magnet_fishing = {
	title: "Magnet fishing",
	wikititle: "Magnet_fishing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Magnet_fishing_catch.jpg/300px-Magnet_fishing_catch.jpg",
		width: 300,
		height: 230
	}
};
const metal_detector = {
	title: "Metal detecting",
	wikititle: "Metal_detector",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/B020311e_-_PFC_Generett_and_SGT_Rutledge_probe_in_yard_of_house.png/300px-B020311e_-_PFC_Generett_and_SGT_Rutledge_probe_in_yard_of_house.png",
		width: 300,
		height: 457
	}
};
const motorcycling = {
	title: "Motorcycling",
	wikititle: "Motorcycling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Family_transport_in_Tehran.jpg/300px-Family_transport_in_Tehran.jpg",
		width: 300,
		height: 199
	}
};
const meteorology = {
	title: "Meteorology",
	wikititle: "Meteorology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Global_tropical_cyclone_tracks-edit2.jpg/300px-Global_tropical_cyclone_tracks-edit2.jpg",
		width: 300,
		height: 150
	}
};
const motor_sports = {
	title: "Motor sports",
	wikititle: "Motor_sports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/%22Follow_You%2C_Follow_Me%22%2C_Qualfying_Part_3%2C_2019_Italian_Grand_Prix%2C_Monza%2C_7th_September.jpg/300px-%22Follow_You%2C_Follow_Me%22%2C_Qualfying_Part_3%2C_2019_Italian_Grand_Prix%2C_Monza%2C_7th_September.jpg",
		width: 300,
		height: 169
	}
};
const mountain_biking = {
	title: "Mountain biking",
	wikititle: "Mountain_biking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/MtnBiking_SedonaMag.jpg/300px-MtnBiking_SedonaMag.jpg",
		width: 300,
		height: 410
	}
};
const mountaineering = {
	title: "Mountaineering",
	wikititle: "Mountaineering",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/M_Rainier.jpg/300px-M_Rainier.jpg",
		width: 300,
		height: 400
	}
};
const museum = {
	title: "Museum visiting",
	wikititle: "Museum",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/World_museums.png/300px-World_museums.png",
		width: 300,
		height: 172
	}
};
const mushroom_hunting = {
	title: "Mushroom hunting",
	wikititle: "Mushroom_hunting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/KostrzewskiFranciszek.Grzybobranie.1860.jpg/300px-KostrzewskiFranciszek.Grzybobranie.1860.jpg",
		width: 300,
		height: 197
	}
};
const mycology = {
	title: "Mycology",
	wikititle: "Mycology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Mycena_leaiana_var._australis.jpg/300px-Mycena_leaiana_var._australis.jpg",
		width: 300,
		height: 228
	}
};
const netball = {
	title: "Netball",
	wikititle: "Netball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/3/39/MalawiFijiNetball.jpg",
		width: 282,
		height: 500
	}
};
const noodling = {
	title: "Noodling",
	wikititle: "Noodling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Noodling_champ.jpg",
		width: 257,
		height: 239
	}
};
const nordic_skating = {
	title: "Nordic skating",
	wikititle: "Nordic_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gasplakeskate.jpg/300px-Gasplakeskate.jpg",
		width: 300,
		height: 225
	}
};
const orienteering = {
	title: "Orienteering",
	wikititle: "Orienteering",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Orienteering_symbol.svg/300px-Orienteering_symbol.svg.png",
		width: 300,
		height: 300
	}
};
const paintball = {
	title: "Paintball",
	wikititle: "Paintball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/NAdo-JTF3.jpg/300px-NAdo-JTF3.jpg",
		width: 300,
		height: 267
	}
};
const paragliding = {
	title: "Paragliding",
	wikititle: "Paragliding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Paragliding_1350361.jpg/300px-Paragliding_1350361.jpg",
		width: 300,
		height: 400
	}
};
const parkour = {
	title: "Parkour",
	wikititle: "Parkour",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Julien_Do_parkour_in_park.jpg/300px-Julien_Do_parkour_in_park.jpg",
		width: 300,
		height: 200
	}
};
const pickleball = {
	title: "Pickleball",
	wikititle: "Pickleball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Pickleball_Pros.jpg/300px-Pickleball_Pros.jpg",
		width: 300,
		height: 200
	}
};
const picnicking = {
	title: "Picnicking",
	wikititle: "Picnicking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Thomas_Cole%27s_%22The_Picnic%22%2C_Brooklyn_Museum_IMG_3787.JPG/300px-Thomas_Cole%27s_%22The_Picnic%22%2C_Brooklyn_Museum_IMG_3787.JPG",
		width: 300,
		height: 225
	}
};
const podcast = {
	title: "Podcast hosting",
	wikititle: "Podcast",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serial_Podcast.jpg/300px-Serial_Podcast.jpg",
		width: 300,
		height: 170
	}
};
const polo = {
	title: "Polo",
	wikititle: "Polo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Varsity_Polo_2013.jpg/300px-Varsity_Polo_2013.jpg",
		width: 300,
		height: 200
	}
};
const powerlifting = {
	title: "Powerlifting",
	wikititle: "Powerlifting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/IPF_World_Champion_Dean_Bowring_performing_the_three_Powerlifting_moves.jpg/300px-IPF_World_Champion_Dean_Bowring_performing_the_three_Powerlifting_moves.jpg",
		width: 300,
		height: 376
	}
};
const public_transport = {
	title: "Public transport riding",
	wikititle: "Public_transport",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/YX18KXG_88_1.jpg/300px-YX18KXG_88_1.jpg",
		width: 300,
		height: 200
	}
};
const qigong = {
	title: "Qigong",
	wikititle: "Qigong",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/World_Tai_Chi_%26_Qigong_Day_event_%28Manhattan%29.jpg/300px-World_Tai_Chi_%26_Qigong_Day_event_%28Manhattan%29.jpg",
		width: 300,
		height: 225
	}
};
const rafting = {
	title: "Rafting",
	wikititle: "Rafting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Upstream_view_Colorado_River_approximatly_Mile_59.0.jpg/300px-Upstream_view_Colorado_River_approximatly_Mile_59.0.jpg",
		width: 300,
		height: 200
	}
};
const railway = {
	title: "Railway journeys",
	wikititle: "Railway",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/World_railway_network.svg/300px-World_railway_network.svg.png",
		width: 300,
		height: 143
	}
};
const railway_modelling = {
	title: "Railway modelling",
	wikititle: "Railway_modelling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/H0e_layout2.png/300px-H0e_layout2.png",
		width: 300,
		height: 190
	}
};
const rappelling = {
	title: "Rappelling",
	wikititle: "Rappelling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Elizabeth_Furnace_-_Repeling.JPG/300px-Elizabeth_Furnace_-_Repeling.JPG",
		width: 300,
		height: 452
	}
};
const renaissance_fair = {
	title: "Renaissance fair",
	wikititle: "Renaissance_fair",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Mary_Queen_of_Scots_reenactor.jpg/300px-Mary_Queen_of_Scots_reenactor.jpg",
		width: 300,
		height: 450
	}
};
const renovating = {
	title: "Renovating",
	wikititle: "Renovating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Apartment_Renovation_by_Dipt.jpg/300px-Apartment_Renovation_by_Dipt.jpg",
		width: 300,
		height: 200
	}
};
const road_cycling = {
	title: "Road biking",
	wikititle: "Road_Cycling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Henninger_Turm-2005-Finale-Runde2-Spitzengruppe.jpg/300px-Henninger_Turm-2005-Finale-Runde2-Spitzengruppe.jpg",
		width: 300,
		height: 225
	}
};
const rock_climbing = {
	title: "Rock climbing",
	wikititle: "Rock_climbing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Crack_climbing_in_Indian_Creek%2C_Utah.jpg/300px-Crack_climbing_in_Indian_Creek%2C_Utah.jpg",
		width: 300,
		height: 451
	}
};
const rock_art = {
	title: "Rock painting",
	wikititle: "Rock_art",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/4/41/Petroglyph_jqjacobs.jpg",
		width: 222,
		height: 137
	}
};
const roller_skating = {
	title: "Roller skating",
	wikititle: "Roller_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Neck_and_neck.jpg/300px-Neck_and_neck.jpg",
		width: 300,
		height: 450
	}
};
const roundnet = {
	title: "Roundnet",
	wikititle: "Roundnet",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spikeball_Net.jpg/300px-Spikeball_Net.jpg",
		width: 300,
		height: 322
	}
};
const rugby_football = {
	title: "Rugby",
	wikititle: "Rugby_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Foot_Ball%2C_Kingston-upon-Thames%2C_Shrove_Tuesday%2C_Feb._24th%2C_1846.jpg/300px-Foot_Ball%2C_Kingston-upon-Thames%2C_Shrove_Tuesday%2C_Feb._24th%2C_1846.jpg",
		width: 300,
		height: 236
	}
};
const running = {
	title: "Running",
	wikititle: "Running",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Ludovic_and_Lauren_%288425515069%29.jpg/300px-Ludovic_and_Lauren_%288425515069%29.jpg",
		width: 300,
		height: 240
	}
};
const safari = {
	title: "Safari",
	wikititle: "Safari",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Sabi_sabi_game_drive.jpg/300px-Sabi_sabi_game_drive.jpg",
		width: 300,
		height: 221
	}
};
const sailing = {
	title: "Sailing",
	wikititle: "Sailing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Regattafeld_vor_Laboe.jpg/300px-Regattafeld_vor_Laboe.jpg",
		width: 300,
		height: 199
	}
};
const sand_art_and_play = {
	title: "Sand art",
	wikititle: "Sand_art_and_play",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/St%C3%B8rre_sandslot.jpg/300px-St%C3%B8rre_sandslot.jpg",
		width: 300,
		height: 271
	}
};
const sandboarding = {
	title: "Sandboarding",
	wikititle: "Sandboarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sandboarding_in_Dubai.jpg/300px-Sandboarding_in_Dubai.jpg",
		width: 300,
		height: 420
	}
};
const scouting = {
	title: "Scouting",
	wikititle: "Scouting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/WikiProject_Scouting_fleur-de-lis_dark.svg/300px-WikiProject_Scouting_fleur-de-lis_dark.svg.png",
		width: 300,
		height: 319
	}
};
const sculling = {
	title: "Sculling",
	wikititle: "Sculling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Single_Sculler.jpg/300px-Single_Sculler.jpg",
		width: 300,
		height: 200
	}
};
const shooting_sports = {
	title: "Shooting sports",
	wikititle: "Shooting_sports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Vincent_Hancock_at_2008_Summer_Olympics_men%27s_skeet_finals_2008-08-16.JPG/300px-Vincent_Hancock_at_2008_Summer_Olympics_men%27s_skeet_finals_2008-08-16.JPG",
		width: 300,
		height: 200
	}
};
const shopping = {
	title: "Shopping",
	wikititle: "Shopping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Souk_in_Tunisia_1.jpg/300px-Souk_in_Tunisia_1.jpg",
		width: 300,
		height: 238
	}
};
const shuffleboard = {
	title: "Shuffleboard",
	wikititle: "Shuffleboard",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Deck_Shuffleboard.JPG/300px-Deck_Shuffleboard.JPG",
		width: 300,
		height: 229
	}
};
const skateboarding = {
	title: "Skateboarding",
	wikititle: "Skateboarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg/300px-Lenna_skates_in_front_of_the_Barclays_Center_-_Brooklyn%2C_NY.jpg",
		width: 300,
		height: 214
	}
};
const skiing = {
	title: "Skiing",
	wikititle: "Skiing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ski_Famille_-_Family_Ski_Holidays.jpg/300px-Ski_Famille_-_Family_Ski_Holidays.jpg",
		width: 300,
		height: 168
	}
};
const skimboarding = {
	title: "Skimboarding",
	wikititle: "Skimboarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Skimboarding_Seal_Beach_11_25_11.webm/300px--Skimboarding_Seal_Beach_11_25_11.webm.jpg",
		width: 300,
		height: 169
	}
};
const skydiving = {
	title: "Skydiving",
	wikititle: "Skydiving",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Dobromir_Slavchev_-_skydive.jpg/300px-Dobromir_Slavchev_-_skydive.jpg",
		width: 300,
		height: 169
	}
};
const slacklining = {
	title: "Slacklining",
	wikititle: "Slacklining",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cambridgeslackerssaf40.jpg/300px-Cambridgeslackerssaf40.jpg",
		width: 300,
		height: 225
	}
};
const sled = {
	title: "Sledding",
	wikititle: "Sled",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Uphill_Sleigh_Ride.jpg/300px-Uphill_Sleigh_Ride.jpg",
		width: 300,
		height: 200
	}
};
const snorkeling = {
	title: "Snorkeling",
	wikititle: "Snorkeling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Reef_snorkeler.jpg/300px-Reef_snorkeler.jpg",
		width: 300,
		height: 225
	}
};
const snowboarding = {
	title: "Snowboarding",
	wikititle: "Snowboarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Snowboarding.jpg/300px-Snowboarding.jpg",
		width: 300,
		height: 176
	}
};
const snowmobiling = {
	title: "Snowmobiling",
	wikititle: "Snowmobiling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/SnowmobilesYellowstone.jpg/300px-SnowmobilesYellowstone.jpg",
		width: 300,
		height: 202
	}
};
const snowshoeing = {
	title: "Snowshoeing",
	wikititle: "Snowshoeing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Atlas_snowshoes.jpg/300px-Atlas_snowshoes.jpg",
		width: 300,
		height: 383
	}
};
const soccer = {
	title: "Soccer",
	wikititle: "Soccer",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg/300px-Football_in_Bloomington%2C_Indiana%2C_1996.jpg",
		width: 300,
		height: 204
	}
};
const stone_skipping = {
	title: "Stone skipping",
	wikititle: "Stone_skipping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stone_skimming_-Patagonia-9Mar2010.jpg/300px-Stone_skimming_-Patagonia-9Mar2010.jpg",
		width: 300,
		height: 199
	}
};
const storm_chasing = {
	title: "Storm chasing",
	wikititle: "Storm_chasing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Tornado_chase_NSSL.png/300px-Tornado_chase_NSSL.png",
		width: 300,
		height: 414
	}
};
const sun_bathing = {
	title: "Sun bathing",
	wikititle: "Sun_bathing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Tan_lines_on_human_female_chest.jpg/300px-Tan_lines_on_human_female_chest.jpg",
		width: 300,
		height: 185
	}
};
const surfing = {
	title: "Surfing",
	wikititle: "Surfing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mavericks_Surf_Contest_2010b.jpg/300px-Mavericks_Surf_Contest_2010b.jpg",
		width: 300,
		height: 199
	}
};
const survivalism = {
	title: "Survivalism",
	wikititle: "Survivalism",
	image: {
	}
};
const human_swimming = {
	title: "Swimming",
	wikititle: "Human_swimming",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg/300px-40._Schwimmzonen-_und_Mastersmeeting_Enns_2017_100m_Brust_Herren_USC_Traun-9897.jpg",
		width: 300,
		height: 200
	}
};
const table_tennis = {
	title: "Table tennis",
	wikititle: "Table_tennis",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg/300px-Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg",
		width: 300,
		height: 200
	}
};
const tai_chi = {
	title: "Tai chi",
	wikititle: "Tai_chi",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Yang-single_%28restoration%29.jpg/300px-Yang-single_%28restoration%29.jpg",
		width: 300,
		height: 351
	}
};
const tennis = {
	title: "Tennis",
	wikititle: "Tennis",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg/300px-2013_Australian_Open_-_Guillaume_Rufin.jpg",
		width: 300,
		height: 450
	}
};
const topiary = {
	title: "Topiary",
	wikititle: "Topiary",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Rufford_Old_Hall_14.jpg/300px-Rufford_Old_Hall_14.jpg",
		width: 300,
		height: 450
	}
};
const tourism = {
	title: "Tourism",
	wikititle: "Tourism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/1_times_square_night_2013.jpg/300px-1_times_square_night_2013.jpg",
		width: 300,
		height: 200
	}
};
const trade_fair = {
	title: "Trade fair visiting",
	wikititle: "Trade_fair",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/MWC_2019_%2846487932494%29.jpg/300px-MWC_2019_%2846487932494%29.jpg",
		width: 300,
		height: 225
	}
};
const travel = {
	title: "Travel",
	wikititle: "Travel",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Cross_Harbour_Tunnel_%281%29.JPG/300px-Cross_Harbour_Tunnel_%281%29.JPG",
		width: 300,
		height: 200
	}
};
const unicycle = {
	title: "Unicycling",
	wikititle: "Unicycle",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Torker_Unicycle.JPG/300px-Torker_Unicycle.JPG",
		width: 300,
		height: 482
	}
};
const urban_exploration = {
	title: "Urban exploration",
	wikititle: "Urban_exploration",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Thomas_Bresson_-_Fort_du_Salbert-8_%28by%29.JPG/300px-Thomas_Bresson_-_Fort_du_Salbert-8_%28by%29.JPG",
		width: 300,
		height: 199
	}
};
const vacation = {
	title: "Vacation",
	wikititle: "Vacation",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Joss_Bay%2C_Broadstairs%2C_England_-_Aug_2008.jpg/300px-Joss_Bay%2C_Broadstairs%2C_England_-_Aug_2008.jpg",
		width: 300,
		height: 110
	}
};
const vegetable_farming = {
	title: "Vegetable farming",
	wikititle: "Vegetable_farming",
	image: {
	}
};
const conservation_and_restoration_of_road_vehicles = {
	title: "Vehicle restoration",
	wikititle: "Conservation_and_restoration_of_road_vehicles",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/1949_VW_Beetle.jpg/300px-1949_VW_Beetle.jpg",
		width: 300,
		height: 225
	}
};
const volleyball = {
	title: "Volleyball",
	wikititle: "Volleyball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg/300px-Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg",
		width: 300,
		height: 199
	}
};
const volunteering = {
	title: "Volunteering",
	wikititle: "Volunteering",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg/300px-Vilnius_Marathon_2015_volunteers_by_Augustas_Didzgalvis.jpg",
		width: 300,
		height: 200
	}
};
const walking = {
	title: "Walking",
	wikititle: "Walking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CGI_Human_Walk.jpg/300px-CGI_Human_Walk.jpg",
		width: 300,
		height: 141
	}
};
const water_sports = {
	title: "Water sports",
	wikititle: "Water_sports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Water_sports_composite.jpg/300px-Water_sports_composite.jpg",
		width: 300,
		height: 195
	}
};
const zoo = {
	title: "Zoo visiting",
	wikititle: "Zoo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/World_zoo.png/300px-World_zoo.png",
		width: 300,
		height: 169
	}
};
const archaeology = {
	title: "Archaeology",
	wikititle: "Archaeology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/03_2017_FS_UWC_NF_Erin_and_Rolynda_conducting_artifact_analysis_%2833478566901%29.jpg/300px-03_2017_FS_UWC_NF_Erin_and_Rolynda_conducting_artifact_analysis_%2833478566901%29.jpg",
		width: 300,
		height: 225
	}
};
const architecture = {
	title: "Architecture",
	wikititle: "Architecture",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/300px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg",
		width: 300,
		height: 199
	}
};
const aerospace = {
	title: "Aerospace",
	wikititle: "Aerospace",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Top_of_Atmosphere.jpg/300px-Top_of_Atmosphere.jpg",
		width: 300,
		height: 199
	}
};
const biology = {
	title: "Biology",
	wikititle: "Biology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Biology-0001.jpg/300px-Biology-0001.jpg",
		width: 300,
		height: 237
	}
};
const botany = {
	title: "Botany",
	wikititle: "Botany",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Myris_fragr_Fr_080112-3294_ltn.jpg/300px-Myris_fragr_Fr_080112-3294_ltn.jpg",
		width: 300,
		height: 264
	}
};
const business = {
	title: "Business",
	wikititle: "Business",
	image: {
	}
};
const chemistry = {
	title: "Chemistry",
	wikititle: "Chemistry",
	image: {
	}
};
const engineering = {
	title: "Engineering",
	wikititle: "Engineering",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Maquina_vapor_Watt_ETSIIM.jpg/300px-Maquina_vapor_Watt_ETSIIM.jpg",
		width: 300,
		height: 223
	}
};
const entrepreneurship = {
	title: "Entrepreneurship",
	wikititle: "Entrepreneurship",
	image: {
	}
};
const finance = {
	title: "Finance",
	wikititle: "Finance",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Philippine-stock-market-board.jpg/300px-Philippine-stock-market-board.jpg",
		width: 300,
		height: 225
	}
};
const geography = {
	title: "Geography",
	wikititle: "Geography",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/OrteliusWorldMap.jpeg/300px-OrteliusWorldMap.jpeg",
		width: 300,
		height: 204
	}
};
const history = {
	title: "History",
	wikititle: "History",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Marble_bust_of_Herodotos_MET_DT11742_%28cropped%29.jpg/300px-Marble_bust_of_Herodotos_MET_DT11742_%28cropped%29.jpg",
		width: 300,
		height: 400
	}
};
const jurisprudential = {
	title: "Jurisprudential",
	wikititle: "Jurisprudential",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Imbalanced_justice_scale_silhouette.svg/300px-Imbalanced_justice_scale_silhouette.svg.png",
		width: 300,
		height: 306
	}
};
const linguistics = {
	title: "Linguistics",
	wikititle: "Linguistics",
	image: {
	}
};
const literature = {
	title: "Literature",
	wikititle: "Literature",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Books_and_Scroll_Ornament_with_Open_Book.png/300px-Books_and_Scroll_Ornament_with_Open_Book.png",
		width: 300,
		height: 165
	}
};
const mathematics = {
	title: "Mathematics",
	wikititle: "Mathematics",
	image: {
	}
};
const medical_science = {
	title: "Medical science",
	wikititle: "Medical_science",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Asklepios.3.jpg/300px-Asklepios.3.jpg",
		width: 300,
		height: 457
	}
};
const microbiology = {
	title: "Microbiology",
	wikititle: "Microbiology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Agar_plate_with_colonies.jpg/300px-Agar_plate_with_colonies.jpg",
		width: 300,
		height: 225
	}
};
const myrmecology = {
	title: "Myrmecology",
	wikititle: "Myrmecology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Meat_eater_ant_feeding_on_honey02.jpg/300px-Meat_eater_ant_feeding_on_honey02.jpg",
		width: 300,
		height: 200
	}
};
const neuroscience = {
	title: "Neuroscience",
	wikititle: "Neuroscience",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/PurkinjeCell.jpg/300px-PurkinjeCell.jpg",
		width: 300,
		height: 351
	}
};
const philosophy = {
	title: "Philosophy",
	wikititle: "Philosophy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/300px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
		width: 300,
		height: 233
	}
};
const physics = {
	title: "Physics",
	wikititle: "Physics",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Laser.jpg/300px-Laser.jpg",
		width: 300,
		height: 234
	}
};
const psychology = {
	title: "Psychology",
	wikititle: "Psychology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Psi2.svg/300px-Psi2.svg.png",
		width: 300,
		height: 300
	}
};
const publishing = {
	title: "Publishing",
	wikititle: "Publishing",
	image: {
	}
};
const rail_transport = {
	title: "Railway studies",
	wikititle: "Rail_transport",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/World_railway_network.svg/300px-World_railway_network.svg.png",
		width: 300,
		height: 143
	}
};
const religious_studies = {
	title: "Religious studies",
	wikititle: "Religious_studies",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Religious_syms.svg/300px-Religious_syms.svg.png",
		width: 300,
		height: 300
	}
};
const research = {
	title: "Research",
	wikititle: "Research",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Humanit%C3%A9s_Num%C3%A9riques.JPG/300px-Humanit%C3%A9s_Num%C3%A9riques.JPG",
		width: 300,
		height: 225
	}
};
const science_and_technology_studies = {
	title: "Science and technology studies",
	wikititle: "Science_and_technology_studies",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Science_Museum_20190311_144126_%2849362160668%29.jpg/300px-Science_Museum_20190311_144126_%2849362160668%29.jpg",
		width: 300,
		height: 225
	}
};
const social_studies = {
	title: "Social studies",
	wikititle: "Social_studies",
	image: {
	}
};
const sociology = {
	title: "Sociology",
	wikititle: "Sociology",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Social_Network_Diagram_%28segment%29.svg/300px-Social_Network_Diagram_%28segment%29.svg.png",
		width: 300,
		height: 116
	}
};
const sports_science = {
	title: "Sports science",
	wikititle: "Sports_science",
	image: {
	}
};
const story_writing = {
	title: "Story writing",
	wikititle: "Story_writing",
	image: {
	}
};
const life_science = {
	title: "Life science",
	wikititle: "Life_science",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/EscherichiaColi_NIAID.jpg/300px-EscherichiaColi_NIAID.jpg",
		width: 300,
		height: 252
	}
};
const teaching = {
	title: "Teaching",
	wikititle: "Teaching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Students_of_Nan_Hua_High_School%2C_Singapore%2C_in_the_school_hall_-_20060127.jpg/300px-Students_of_Nan_Hua_High_School%2C_Singapore%2C_in_the_school_hall_-_20060127.jpg",
		width: 300,
		height: 225
	}
};
const web_design = {
	title: "Web design",
	wikititle: "Web_design",
	image: {
	}
};
const wikipedia_community = {
	title: "Wikipedia editing",
	wikititle: "Wikipedia_community",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Wikimania_2012_Group_Photograph-0001a.jpg/300px-Wikimania_2012_Group_Photograph-0001a.jpg",
		width: 300,
		height: 200
	}
};
const action_figure = {
	title: "Action figure",
	wikititle: "Action_figure",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Big_Day_Out_stalls%2C_Cambridge%2C_July_2010_%2809%29.JPG/300px-Big_Day_Out_stalls%2C_Cambridge%2C_July_2010_%2809%29.JPG",
		width: 300,
		height: 200
	}
};
const antiquing = {
	title: "Antiquing",
	wikititle: "Antiquing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/06_Restoration_of_gilded_mirror_in_Muzeum_Gornoslaskie%2C_Bytom%2C_Poland_-_furniture_restorer_working.jpg/300px-06_Restoration_of_gilded_mirror_in_Muzeum_Gornoslaskie%2C_Bytom%2C_Poland_-_furniture_restorer_working.jpg",
		width: 300,
		height: 225
	}
};
const art_collecting = {
	title: "Art collecting",
	wikititle: "Art_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Usov.jpg/300px-Usov.jpg",
		width: 300,
		height: 400
	}
};
const book_collecting = {
	title: "Book collecting",
	wikititle: "Book_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Book_collection.jpg",
		width: 299,
		height: 238
	}
};
const button_collecting = {
	title: "Button collecting",
	wikititle: "Button_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Button_collection_display.jpg/300px-Button_collection_display.jpg",
		width: 300,
		height: 218
	}
};
const trading_cards = {
	title: "Card collecting",
	wikititle: "Trading_cards",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Panini_maradona_supersport.jpg/300px-Panini_maradona_supersport.jpg",
		width: 300,
		height: 420
	}
};
const cassette_tapes = {
	title: "Cassette tapes",
	wikititle: "Cassette_tapes",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Compactcassette.jpg/300px-Compactcassette.jpg",
		width: 300,
		height: 195
	}
};
const coin_collecting = {
	title: "Coin collecting",
	wikititle: "Coin_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Modern_coins_from_various_countries_within_coin_holders.jpg/300px-Modern_coins_from_various_countries_within_coin_holders.jpg",
		width: 300,
		height: 225
	}
};
const comic_book_collecting = {
	title: "Comic book collecting",
	wikititle: "Comic_book_collecting",
	image: {
	}
};
const compact_discs = {
	title: "Compact discs",
	wikititle: "Compact_discs",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Compact_Disc_wordmark.svg/300px-Compact_Disc_wordmark.svg.png",
		width: 300,
		height: 147
	}
};
const crystals = {
	title: "Crystals",
	wikititle: "Crystals",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Am%C3%A9thyste_3.JPG/300px-Am%C3%A9thyste_3.JPG",
		width: 300,
		height: 198
	}
};
const digital_hoarding = {
	title: "Digital hoarding",
	wikititle: "Digital_hoarding",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Exampleofdigitalhoarding_cluttereddesktop001.jpg/300px-Exampleofdigitalhoarding_cluttereddesktop001.jpg",
		width: 300,
		height: 225
	}
};
const dolls = {
	title: "Dolls",
	wikititle: "Dolls",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Poup%C3%A9e_c_1870.jpg/300px-Poup%C3%A9e_c_1870.jpg",
		width: 300,
		height: 419
	}
};
const element_collecting = {
	title: "Element collecting",
	wikititle: "Element_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Wooden_periodic_table.jpg/300px-Wooden_periodic_table.jpg",
		width: 300,
		height: 149
	}
};
const ephemera = {
	title: "Ephemera collecting",
	wikititle: "Ephemera",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ephemera_Collection%3B_QV%3B_Advertising%3B_1850-1_Wellcome_L0031705.jpg/300px-Ephemera_Collection%3B_QV%3B_Advertising%3B_1850-1_Wellcome_L0031705.jpg",
		width: 300,
		height: 466
	}
};
const films = {
	title: "Films",
	wikititle: "Films",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Le_Voyage_dans_la_lune_%28black_and_white%2C_1902%29.webm/300px--Le_Voyage_dans_la_lune_%28black_and_white%2C_1902%29.webm.jpg",
		width: 300,
		height: 225
	}
};
const fingerprint = {
	title: "Fingerprint collecting",
	wikititle: "Fingerprint",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/4/49/Fingerprint_Whorl.jpg",
		width: 250,
		height: 234
	}
};
const knife_collecting = {
	title: "Knife collecting",
	wikititle: "Knife_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Pocket_Knife_Collection.jpg/300px-Pocket_Knife_Collection.jpg",
		width: 300,
		height: 247
	}
};
const lapel_pin = {
	title: "Lapel pins",
	wikititle: "Lapel_pin",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/ProjectLapels.jpeg/300px-ProjectLapels.jpeg",
		width: 300,
		height: 258
	}
};
const film_memorabilia = {
	title: "Movie memorabilia collecting",
	wikititle: "Film_memorabilia",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Ruby_slippers.JPG/300px-Ruby_slippers.JPG",
		width: 300,
		height: 241
	}
};
const notaphily = {
	title: "Banknote collecting",
	wikititle: "Notaphily",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Typical_paper_money_collection_album_03.jpg/300px-Typical_paper_money_collection_album_03.jpg",
		width: 300,
		height: 169
	}
};
const perfume = {
	title: "Perfume",
	wikititle: "Perfume",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Flacon_Manifesto.jpg/300px-Flacon_Manifesto.jpg",
		width: 300,
		height: 421
	}
};
const phillumeny = {
	title: "Phillumeny",
	wikititle: "Phillumeny",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Match_and_match_labels%2C_100_years_ago.jpg/300px-Match_and_match_labels%2C_100_years_ago.jpg",
		width: 300,
		height: 450
	}
};
const rail_transport_modelling = {
	title: "Rail transport modelling",
	wikititle: "Rail_transport_modelling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/H0e_layout2.png/300px-H0e_layout2.png",
		width: 300,
		height: 190
	}
};
const record_collecting = {
	title: "Record collecting",
	wikititle: "Record_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Part_of_Record_Collection_%285012173261%29.jpg/300px-Part_of_Record_Collection_%285012173261%29.jpg",
		width: 300,
		height: 225
	}
};
const rock_tumbling = {
	title: "Rock tumbling",
	wikititle: "Rock_tumbling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/RockTumbler2.JPG/300px-RockTumbler2.JPG",
		width: 300,
		height: 201
	}
};
const patch_collecting = {
	title: "Scutelliphily",
	wikititle: "Patch_collecting",
	image: {
	}
};
const shoes = {
	title: "Shoes",
	wikititle: "Shoes",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Skor_fr%C3%A5n_1700-_till_1960-talet_-_Nordiska_Museet_-_NMA.0056302.jpg/300px-Skor_fr%C3%A5n_1700-_till_1960-talet_-_Nordiska_Museet_-_NMA.0056302.jpg",
		width: 300,
		height: 242
	}
};
const sneakers = {
	title: "Sneakers",
	wikititle: "Sneakers",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Air_jordan_XI_space_jam.jpg/300px-Air_jordan_XI_space_jam.jpg",
		width: 300,
		height: 225
	}
};
const sports_memorabilia = {
	title: "Sports memorabilia",
	wikititle: "Sports_memorabilia",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pine-tar_bat.jpg/300px-Pine-tar_bat.jpg",
		width: 300,
		height: 488
	}
};
const stuffed_toy = {
	title: "Stuffed toy collecting",
	wikititle: "Stuffed_toy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Nachbildung_55PB_Steiff_Museum_Giengen.jpg/300px-Nachbildung_55PB_Steiff_Museum_Giengen.jpg",
		width: 300,
		height: 427
	}
};
const tea_bag = {
	title: "Tea bag collecting",
	wikititle: "Tea_bag",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Tea_bag.JPG/300px-Tea_bag.JPG",
		width: 300,
		height: 224
	}
};
const transit_map = {
	title: "Transit map collecting",
	wikititle: "Transit_map",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/NYC_subway-4D.svg/300px-NYC_subway-4D.svg.png",
		width: 300,
		height: 324
	}
};
const video_game_collecting = {
	title: "Video game collecting",
	wikititle: "Video_game_collecting",
	image: {
	}
};
const vintage_cars = {
	title: "Vintage cars",
	wikititle: "Vintage_cars",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/1919_Ford_Model_T_Highboy_Coupe.jpg/300px-1919_Ford_Model_T_Highboy_Coupe.jpg",
		width: 300,
		height: 260
	}
};
const vintage_clothing = {
	title: "Vintage clothing",
	wikititle: "Vintage_clothing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vintage_shops%2C_Dublin.jpg/300px-Vintage_shops%2C_Dublin.jpg",
		width: 300,
		height: 225
	}
};
const vinyl_records = {
	title: "Vinyl records",
	wikititle: "Vinyl_records",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/12in-Vinyl-LP-Record-Angle.jpg/300px-12in-Vinyl-LP-Record-Angle.jpg",
		width: 300,
		height: 300
	}
};
const antiquities = {
	title: "Antiquities",
	wikititle: "Antiquities",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/The_Parthenon_sculptures%2C_British_Museum_%2814063376069%29_%282%29_%28cropped%29.jpg/300px-The_Parthenon_sculptures%2C_British_Museum_%2814063376069%29_%282%29_%28cropped%29.jpg",
		width: 300,
		height: 300
	}
};
const auto_audiophilia = {
	title: "Auto audiophilia",
	wikititle: "Auto_audiophilia",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Autoradio_panasonic.jpg/300px-Autoradio_panasonic.jpg",
		width: 300,
		height: 225
	}
};
const fossil_hunting = {
	title: "Fossil hunting",
	wikititle: "Fossil_hunting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Sharksteeth-castlehain.jpg/300px-Sharksteeth-castlehain.jpg",
		width: 300,
		height: 347
	}
};
const insect_collecting = {
	title: "Insect collecting",
	wikititle: "Insect_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Beetle_collection.jpg/300px-Beetle_collection.jpg",
		width: 300,
		height: 227
	}
};
const leaves = {
	title: "Leaves",
	wikititle: "Leaves",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Leaf_Varieties_%2815_sp%29.png/300px-Leaf_Varieties_%2815_sp%29.png",
		width: 300,
		height: 301
	}
};
const metal_detecting = {
	title: "Metal detecting",
	wikititle: "Metal_detecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/B020311e_-_PFC_Generett_and_SGT_Rutledge_probe_in_yard_of_house.png/300px-B020311e_-_PFC_Generett_and_SGT_Rutledge_probe_in_yard_of_house.png",
		width: 300,
		height: 457
	}
};
const mineral_collecting = {
	title: "Mineral collecting",
	wikititle: "Mineral_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Breiddalsvik_mineral_collection_7.jpg/300px-Breiddalsvik_mineral_collection_7.jpg",
		width: 300,
		height: 400
	}
};
const rock_balancing = {
	title: "Rock balancing",
	wikititle: "Rock_balancing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Stacked_stones.jpg/300px-Stacked_stones.jpg",
		width: 300,
		height: 225
	}
};
const sea_glass = {
	title: "Sea glass collecting",
	wikititle: "Sea_glass",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Amant.JPG/300px-Amant.JPG",
		width: 300,
		height: 187
	}
};
const seashell = {
	title: "Seashell collecting",
	wikititle: "Seashell",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Conchiglie_Seashells_01.jpg/300px-Conchiglie_Seashells_01.jpg",
		width: 300,
		height: 225
	}
};
const stone_collecting = {
	title: "Stone collecting",
	wikititle: "Stone_collecting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Kunzite_Nouristan.jpg/300px-Kunzite_Nouristan.jpg",
		width: 300,
		height: 279
	}
};
const air_hockey = {
	title: "Air hockey",
	wikititle: "Air_hockey",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/AirHockeyTable.JPG/300px-AirHockeyTable.JPG",
		width: 300,
		height: 225
	}
};
const animal_fancy = {
	title: "Animal fancy",
	wikititle: "Animal_fancy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Laszlo_-_Mrs._George_Owen_Sandys.jpg/300px-Laszlo_-_Mrs._George_Owen_Sandys.jpg",
		width: 300,
		height: 608
	}
};
const axe_throwing = {
	title: "Axe throwing",
	wikititle: "Axe_throwing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Slow_motion_axe_throwing.gif/300px-Slow_motion_axe_throwing.gif",
		width: 300,
		height: 300
	}
};
const backgammon = {
	title: "Backgammon",
	wikititle: "Backgammon",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Backgammon_lg.png/300px-Backgammon_lg.png",
		width: 300,
		height: 195
	}
};
const baking = {
	title: "Baking",
	wikititle: "Baking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Freshly_baked_bread_loaves.jpg/300px-Freshly_baked_bread_loaves.jpg",
		width: 300,
		height: 148
	}
};
const ballet_dancing = {
	title: "Ballet dancing",
	wikititle: "Ballet_dancing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/300px-Edgar_Degas_-_La_Classe_de_danse.jpg",
		width: 300,
		height: 344
	}
};
const ballroom_dancing = {
	title: "Ballroom dancing",
	wikititle: "Ballroom_dancing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Michael_Foskett_%26_Nika_Vlasenko_2.JPG/300px-Michael_Foskett_%26_Nika_Vlasenko_2.JPG",
		width: 300,
		height: 482
	}
};
const beauty_pageant = {
	title: "Beauty pageants",
	wikititle: "Beauty_pageant",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Miss_Universe_1930_Winners.jpg/300px-Miss_Universe_1930_Winners.jpg",
		width: 300,
		height: 234
	}
};
const book_folding = {
	title: "Book folding",
	wikititle: "Book_folding",
	image: {
	}
};
const boxing = {
	title: "Boxing",
	wikititle: "Boxing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Boxing_Tournament_in_Aid_of_King_George%27s_Fund_For_Sailors_at_the_Royal_Naval_Air_Station%2C_Henstridge%2C_Somerset%2C_July_1945_A29806.jpg/300px-Boxing_Tournament_in_Aid_of_King_George%27s_Fund_For_Sailors_at_the_Royal_Naval_Air_Station%2C_Henstridge%2C_Somerset%2C_July_1945_A29806.jpg",
		width: 300,
		height: 268
	}
};
const contract_bridge = {
	title: "Bridge",
	wikititle: "Contract_Bridge",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Bridge-Gro%C3%9Fschlemm.JPG/300px-Bridge-Gro%C3%9Fschlemm.JPG",
		width: 300,
		height: 212
	}
};
const cheerleading = {
	title: "Cheerleading",
	wikititle: "Cheerleading",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JU_Cheerleaders.jpg/300px-JU_Cheerleaders.jpg",
		width: 300,
		height: 387
	}
};
const cribbage = {
	title: "Cribbage",
	wikititle: "Cribbage",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Afternoon_cribbage_on_the_patio._%2850002851016%29.jpg/300px-Afternoon_cribbage_on_the_patio._%2850002851016%29.jpg",
		width: 300,
		height: 300
	}
};
const curling = {
	title: "Curling",
	wikititle: "Curling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Brier_045.jpg/300px-Brier_045.jpg",
		width: 300,
		height: 225
	}
};
const competitive_dance = {
	title: "Dancing",
	wikititle: "Competitive_dance",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/CompetitiveDanceGroup.jpg/300px-CompetitiveDanceGroup.jpg",
		width: 300,
		height: 202
	}
};
const debate = {
	title: "Debate",
	wikititle: "Debate",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Petrus_alphonsi_dialogues.jpg/300px-Petrus_alphonsi_dialogues.jpg",
		width: 300,
		height: 379
	}
};
const dominoes = {
	title: "Dominoes",
	wikititle: "Dominoes",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dominospiel.JPG/300px-Dominospiel.JPG",
		width: 300,
		height: 225
	}
};
const competitive_eating = {
	title: "Eating",
	wikititle: "Competitive_eating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Eating_Comp_21aug2005.jpg/300px-Eating_Comp_21aug2005.jpg",
		width: 300,
		height: 200
	}
};
const esports = {
	title: "Esports",
	wikititle: "Esports",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg/300px-LGD_Gaming_at_the_2015_LPL_Summer_Finals.jpg",
		width: 300,
		height: 200
	}
};
const fencing = {
	title: "Fencing",
	wikititle: "Fencing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Final_Trophee_Monal_2012_n08.jpg/300px-Final_Trophee_Monal_2012_n08.jpg",
		width: 300,
		height: 199
	}
};
const figure_skating = {
	title: "Figure skating",
	wikititle: "Figure_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/2020-01-11_Ice_Dance_Rhythm_Dance_%282020_Winter_Youth_Olympics%29_by_Sandro_Halank%E2%80%930220.jpg/300px-2020-01-11_Ice_Dance_Rhythm_Dance_%282020_Winter_Youth_Olympics%29_by_Sandro_Halank%E2%80%930220.jpg",
		width: 300,
		height: 243
	}
};
const ice_hockey = {
	title: "Ice hockey",
	wikititle: "Ice_hockey",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pittsburgh_Penguins%2C_Washington_Capitals%2C_Bryan_Rust_%2833744033514%29.jpg/300px-Pittsburgh_Penguins%2C_Washington_Capitals%2C_Bryan_Rust_%2833744033514%29.jpg",
		width: 300,
		height: 217
	}
};
const jujitsu = {
	title: "Jujitsu",
	wikititle: "Jujitsu",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/JUJITSU_%28AND_RIFLES%29_in_an_agricultural_school.jpg/300px-JUJITSU_%28AND_RIFLES%29_in_an_agricultural_school.jpg",
		width: 300,
		height: 199
	}
};
const kabaddi = {
	title: "Kabaddi",
	wikititle: "Kabaddi",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg/300px-Iran_men%27s_national_kabaddi_team_13970602000432636707284535394012_98208.jpg",
		width: 300,
		height: 200
	}
};
const word_games = {
	title: "Word games",
	wikititle: "word_games",
	image: {
	}
};
const laser_tag = {
	title: "Laser tag",
	wikititle: "Laser_tag",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LaserTag_Vest.png/300px-LaserTag_Vest.png",
		width: 300,
		height: 318
	}
};
const mahjong = {
	title: "Mahjong",
	wikititle: "Mahjong",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mahjong_in_Hangzhou.jpg/300px-Mahjong_in_Hangzhou.jpg",
		width: 300,
		height: 450
	}
};
const marbles = {
	title: "Marbles",
	wikititle: "Marbles",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/JM_marbles_01.jpg/300px-JM_marbles_01.jpg",
		width: 300,
		height: 225
	}
};
const model_united_nations = {
	title: "Model United Nations",
	wikititle: "Model_United_Nations",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/JMUN_UNSC.jpg/300px-JMUN_UNSC.jpg",
		width: 300,
		height: 200
	}
};
const pinball = {
	title: "Pinball",
	wikititle: "Pinball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/A_rebuilt_Terminator_2_pinball_machine_by_Wayne_Patrick_Finn_Melbourne_Australia._38.jpg/300px-A_rebuilt_Terminator_2_pinball_machine_by_Wayne_Patrick_Finn_Melbourne_Australia._38.jpg",
		width: 300,
		height: 450
	}
};
const poker = {
	title: "Poker",
	wikititle: "Poker",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/US_Navy_090620-N-2798F-033_Sailors_assigned_to_the_aircraft_carrier_USS_Harry_S._Truman_%28CVN_75%29_and_Carrier_Air_Wing_%28CVW%29_3_compete_in_a_Texas_Hold_%27Em_Poker_tournament_aboard_Harry_S._Truman.jpg/300px-thumbnail.jpg",
		width: 300,
		height: 214
	}
};
const rughooking = {
	title: "Rughooking",
	wikititle: "Rughooking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Rugaction.jpg/300px-Rugaction.jpg",
		width: 300,
		height: 496
	}
};
const shogi = {
	title: "Shogi",
	wikititle: "Shogi",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Shogi_board_pieces_and_komadai.jpg/300px-Shogi_board_pieces_and_komadai.jpg",
		width: 300,
		height: 130
	}
};
const slot_car_racing = {
	title: "Slot car racing",
	wikititle: "Slot_car_racing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ninco_JGTC_Fahrerfeld.jpg/300px-Ninco_JGTC_Fahrerfeld.jpg",
		width: 300,
		height: 125
	}
};
const speedcubing = {
	title: "Speedcubing",
	wikititle: "Speedcubing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/3x3x3_Speed_cube.jpg/300px-3x3x3_Speed_cube.jpg",
		width: 300,
		height: 393
	}
};
const sport_stacking = {
	title: "Sport stacking",
	wikititle: "Sport_stacking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Sport-Stacking.jpg/300px-Sport-Stacking.jpg",
		width: 300,
		height: 225
	}
};
const table_football = {
	title: "Table football",
	wikititle: "Table_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Baby_foot_artlibre_jnl.jpg/300px-Baby_foot_artlibre_jnl.jpg",
		width: 300,
		height: 400
	}
};
const wrestling = {
	title: "Wrestling",
	wikititle: "Wrestling",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Wrestling_at_the_2016_Summer_Olympics%2C_Gazyumov_vs_Andriitsev_6.jpg/300px-Wrestling_at_the_2016_Summer_Olympics%2C_Gazyumov_vs_Andriitsev_6.jpg",
		width: 300,
		height: 195
	}
};
const association_football = {
	title: "Association football",
	wikititle: "Association_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg/300px-Football_in_Bloomington%2C_Indiana%2C_1996.jpg",
		width: 300,
		height: 204
	}
};
const australian_rules_football = {
	title: "Australian rules football",
	wikititle: "Australian_rules_football",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Archie_Smith.jpg/300px-Archie_Smith.jpg",
		width: 300,
		height: 379
	}
};
const auto_racing = {
	title: "Auto racing",
	wikititle: "Auto_racing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Three-wide_multiple_row_back.JPG/300px-Three-wide_multiple_row_back.JPG",
		width: 300,
		height: 193
	}
};
const beach_volleyball = {
	title: "Beach volleyball",
	wikititle: "Beach_volleyball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/SBT_GBC2018.jpg/300px-SBT_GBC2018.jpg",
		width: 300,
		height: 450
	}
};
const breakdancing = {
	title: "Breakdancing",
	wikititle: "Breakdancing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Breakdancer_-_Faneuil_Hall.jpg/300px-Breakdancer_-_Faneuil_Hall.jpg",
		width: 300,
		height: 443
	}
};
const capoeira = {
	title: "Capoeira",
	wikititle: "Capoeira",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rugendasroda.jpg/300px-Rugendasroda.jpg",
		width: 300,
		height: 208
	}
};
const cornhole = {
	title: "Cornhole",
	wikititle: "Cornhole",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cornhole%2C_Homerville.JPG/300px-Cornhole%2C_Homerville.JPG",
		width: 300,
		height: 225
	}
};
const cricket = {
	title: "Cricket",
	wikititle: "Cricket",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Pollock_to_Hussey.jpg/300px-Pollock_to_Hussey.jpg",
		width: 300,
		height: 130
	}
};
const cycle_sport = {
	title: "Cycling",
	wikititle: "Cycle_sport",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Giro_d%27Italia_2021%2C_Stage_15.jpg/300px-Giro_d%27Italia_2021%2C_Stage_15.jpg",
		width: 300,
		height: 171
	}
};
const disc_golf = {
	title: "Disc golf",
	wikititle: "Disc_golf",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Disc_golfer_and_basket.jpg/300px-Disc_golfer_and_basket.jpg",
		width: 300,
		height: 281
	}
};
const dog_sport = {
	title: "Dog sport",
	wikititle: "Dog_sport",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/LabradorWeaving.jpg/300px-LabradorWeaving.jpg",
		width: 300,
		height: 315
	}
};
const equestrianism = {
	title: "Equestrianism",
	wikititle: "Equestrianism",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg/300px-Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg",
		width: 300,
		height: 200
	}
};
const exhibition_drill = {
	title: "Exhibition drill",
	wikititle: "Exhibition_drill",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/SilentDrillPlatoon-1.jpg/300px-SilentDrillPlatoon-1.jpg",
		width: 300,
		height: 375
	}
};
const field_hockey = {
	title: "Field hockey",
	wikititle: "Field_hockey",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Field_hockey_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Boys_Preliminary_Round_%E2%80%93_MAS-ARG_%28141%29.jpg/300px-Field_hockey_at_the_2018_Summer_Youth_Olympics_%E2%80%93_Boys_Preliminary_Round_%E2%80%93_MAS-ARG_%28141%29.jpg",
		width: 300,
		height: 193
	}
};
const physical_fitness = {
	title: "Fitness",
	wikititle: "Physical_fitness",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/USMC-Rich_Froning_Jr.jpg/300px-USMC-Rich_Froning_Jr.jpg",
		width: 300,
		height: 332
	}
};
const footbag = {
	title: "Footbag",
	wikititle: "Footbag",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/en/7/7e/Footbag-32-panel.png",
		width: 266,
		height: 263
	}
};
const frisbee = {
	title: "Frisbee",
	wikititle: "Frisbee",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Frisbee_090719.jpg/300px-Frisbee_090719.jpg",
		width: 300,
		height: 225
	}
};
const golf = {
	title: "Golfing",
	wikititle: "Golf",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Golfer_swing.jpg/300px-Golfer_swing.jpg",
		width: 300,
		height: 224
	}
};
const horsemanship = {
	title: "Horsemanship",
	wikititle: "Horsemanship",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg/300px-Horse_riding_in_coca_cola_arena_-_melbourne_show_2005.jpg",
		width: 300,
		height: 200
	}
};
const iceboat = {
	title: "Iceboat racing",
	wikititle: "Iceboat",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dn_nasva_0820.jpg/300px-Dn_nasva_0820.jpg",
		width: 300,
		height: 200
	}
};
const jukskei = {
	title: "Jukskei",
	wikititle: "Jukskei",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/A_classic_jukskei_game_2014-02-01_12-20.jpg/300px-A_classic_jukskei_game_2014-02-01_12-20.jpg",
		width: 300,
		height: 225
	}
};
const kart_racing = {
	title: "Kart racing",
	wikititle: "Kart_racing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/%D0%9A%D0%BB%D0%B0%D1%81_60.jpg/300px-%D0%9A%D0%BB%D0%B0%D1%81_60.jpg",
		width: 300,
		height: 199
	}
};
const knife_throwing = {
	title: "Knife throwing",
	wikititle: "Knife_throwing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/KnifeThrowingShow.jpg/300px-KnifeThrowingShow.jpg",
		width: 300,
		height: 440
	}
};
const marching_band = {
	title: "Marching band",
	wikititle: "Marching_band",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/TTUband.jpg/300px-TTUband.jpg",
		width: 300,
		height: 188
	}
};
const mini_golf = {
	title: "Mini golf",
	wikititle: "Mini_golf",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Minigolf.jpg/300px-Minigolf.jpg",
		width: 300,
		height: 398
	}
};
const powerboat_racing = {
	title: "Powerboat racing",
	wikititle: "Powerboat_racing",
	image: {
	}
};
const racewalking = {
	title: "Race walking",
	wikititle: "Racewalking",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/1987WorldCupTrials.jpg/300px-1987WorldCupTrials.jpg",
		width: 300,
		height: 244
	}
};
const racquetball = {
	title: "Racquetball",
	wikititle: "Racquetball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Racquetball-racquet-and-bal.jpg",
		width: 250,
		height: 133
	}
};
const roller_derby = {
	title: "Roller derby",
	wikititle: "Roller_derby",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/WasatchVsJunctionCity.jpg/300px-WasatchVsJunctionCity.jpg",
		width: 300,
		height: 273
	}
};
const rugby_league = {
	title: "Rugby league football",
	wikititle: "Rugby_league",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Lance_hohaia_running_into_the_defence_%28rugby_league%29.jpg/300px-Lance_hohaia_running_into_the_defence_%28rugby_league%29.jpg",
		width: 300,
		height: 207
	}
};
const rowing = {
	title: "rowing",
	wikititle: "rowing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Portland_Pudgy_safety_dinghy%2C_rowing.JPG/300px-Portland_Pudgy_safety_dinghy%2C_rowing.JPG",
		width: 300,
		height: 215
	}
};
const sled_dog_racing = {
	title: "Sled dog racing",
	wikititle: "Sled_dog_racing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Frauenwald%2C_Hundeschlittenrennen%2C_6.jpg/300px-Frauenwald%2C_Hundeschlittenrennen%2C_6.jpg",
		width: 300,
		height: 181
	}
};
const softball = {
	title: "Softball",
	wikititle: "Softball",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Australia_v_Japan_Game_7_034.JPG/300px-Australia_v_Japan_Game_7_034.JPG",
		width: 300,
		height: 450
	}
};
const speed_skating = {
	title: "Speed skating",
	wikititle: "Speed_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Paulien_van_Deutekom_%2808-12-2007%29.jpg/300px-Paulien_van_Deutekom_%2808-12-2007%29.jpg",
		width: 300,
		height: 220
	}
};
const tennis_polo = {
	title: "Tennis polo",
	wikititle: "Tennis_polo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Original_toccer.jpg/300px-Original_toccer.jpg",
		width: 300,
		height: 200
	}
};
const tether_car = {
	title: "Tether car",
	wikititle: "Tether_car",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Priboy2.JPG/300px-Priboy2.JPG",
		width: 300,
		height: 174
	}
};
const tour_skating = {
	title: "Tour skating",
	wikititle: "Tour_skating",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Gasplakeskate.jpg/300px-Gasplakeskate.jpg",
		width: 300,
		height: 225
	}
};
const trapshooting = {
	title: "Trapshooting",
	wikititle: "Trapshooting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Shooting_at_the_1987_Pan_American_Games.JPEG/300px-Shooting_at_the_1987_Pan_American_Games.JPEG",
		width: 300,
		height: 240
	}
};
const triathlon = {
	title: "Triathlon",
	wikititle: "Triathlon",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Tri_swim_bike_run.jpg/300px-Tri_swim_bike_run.jpg",
		width: 300,
		height: 109
	}
};
const water_polo = {
	title: "Water polo",
	wikititle: "Water_polo",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/WaterPolo.JPG/300px-WaterPolo.JPG",
		width: 300,
		height: 225
	}
};
const audiophile = {
	title: "Audiophile",
	wikititle: "Audiophile",
	image: {
	}
};
const formicarium = {
	title: "Ant farming",
	wikititle: "Formicarium",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Formicarium_with_ytongNest.jpg/300px-Formicarium_with_ytongNest.jpg",
		width: 300,
		height: 302
	}
};
const learning = {
	title: "Learning",
	wikititle: "Learning",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Cooking_contest_140418-N-OX321-101.jpg/300px-Cooking_contest_140418-N-OX321-101.jpg",
		width: 300,
		height: 214
	}
};
const microscopy = {
	title: "Microscopy",
	wikititle: "Microscopy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Misc_pollen_colorized.jpg/300px-Misc_pollen_colorized.jpg",
		width: 300,
		height: 228
	}
};
const shortwave_listening = {
	title: "Shortwave listening",
	wikititle: "Shortwave_listening",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/ATS_909_worldband_receiver.jpg/300px-ATS_909_worldband_receiver.jpg",
		width: 300,
		height: 225
	}
};
const aircraft_spotting = {
	title: "Aircraft spotting",
	wikititle: "Aircraft_spotting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/KrasAir_Ilyushin_Il-96_spotting_Mishin.jpg/300px-KrasAir_Ilyushin_Il-96_spotting_Mishin.jpg",
		width: 300,
		height: 225
	}
};
const amateur_astronomy = {
	title: "Amateur astronomy",
	wikititle: "Amateur_astronomy",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Astronomy_Amateur_3_V2.jpg/300px-Astronomy_Amateur_3_V2.jpg",
		width: 300,
		height: 303
	}
};
const urban_beekeeping = {
	title: "Beekeeping",
	wikititle: "Urban_beekeeping",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Honey_bee_in_Toronto.jpg/300px-Honey_bee_in_Toronto.jpg",
		width: 300,
		height: 225
	}
};
const bus_spotting = {
	title: "Bus spotting",
	wikititle: "Bus_spotting",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ikarus-Zemun_IK160P.jpg/300px-Ikarus-Zemun_IK160P.jpg",
		width: 300,
		height: 200
	}
};
const butterfly_gardening = {
	title: "Butterfly gardening",
	wikititle: "Butterfly_gardening",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Danaus.jpg/300px-Danaus.jpg",
		width: 300,
		height: 200
	}
};
const gongoozler = {
	title: "Gongoozling",
	wikititle: "Gongoozler",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/FoxtonLocks.jpg/300px-FoxtonLocks.jpg",
		width: 300,
		height: 225
	}
};
const satellite_watching = {
	title: "Satellite watching",
	wikititle: "Satellite_watching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ISS_2008-01-10.jpg/300px-ISS_2008-01-10.jpg",
		width: 300,
		height: 200
	}
};
const whale_watching = {
	title: "Whale watching",
	wikititle: "Whale_watching",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ballenafranca%2Balvina.jpg/300px-Ballenafranca%2Balvina.jpg",
		width: 300,
		height: 375
	}
};
const hobbies = {
	"3d_printing": {
	title: "3D printing",
	wikititle: "3D_printing",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ultimaker_History_-_6_Ultimaker_2.png/300px-Ultimaker_History_-_6_Ultimaker_2.png",
		width: 300,
		height: 453
	}
},
	acroyoga: acroyoga,
	acting: acting,
	alternate_history: alternate_history,
	amateur_radio: amateur_radio,
	animation: animation,
	manga: manga,
	baton_twirling: baton_twirling,
	beatboxing: beatboxing,
	beer_sommelier: beer_sommelier,
	campanology: campanology,
	blacksmith: blacksmith,
	blog: blog,
	bonsai: bonsai,
	book_discussion_club: book_discussion_club,
	book_rebinding: book_rebinding,
	bowling: bowling,
	bread: bread,
	bullet_journal: bullet_journal,
	butcher: butcher,
	calligraphy: calligraphy,
	history_of_candle_making: history_of_candle_making,
	candy_making: candy_making,
	car_spotting: car_spotting,
	card_game: card_game,
	cardistry: cardistry,
	ceramic: ceramic,
	online_chat: online_chat,
	cheesemaking: cheesemaking,
	chess: chess,
	cleaning: cleaning,
	clothing: clothing,
	home_roasting_coffee: home_roasting_coffee,
	collecting: collecting,
	coloring_book: coloring_book,
	communication: communication,
	activism: activism,
	community_radio: community_radio,
	computer_programming: computer_programming,
	confectionery: confectionery,
	constructed_language: constructed_language,
	construction: construction,
	cooking: cooking,
	cosplay: cosplay,
	couponing: couponing,
	craft: craft,
	creative_writing: creative_writing,
	crochet: crochet,
	crossword: crossword,
	cryptography: cryptography,
	cue_sports: cue_sports,
	dance: dance,
	decorative_arts: decorative_arts,
	digital_art: digital_art,
	restaurant: restaurant,
	diorama: diorama,
	djembe: djembe,
	do_it_yourself: do_it_yourself,
	drama: drama,
	drawing: drawing,
	drone_racing: drone_racing,
	editing: editing,
	electronic_game: electronic_game,
	electronics: electronics,
	embroidery: embroidery,
	engraving: engraving,
	entertainment: entertainment,
	everyday_carry: everyday_carry,
	experiment: experiment,
	fantasy_sport: fantasy_sport,
	fashion: fashion,
	fashion_design: fashion_design,
	feng_shui: feng_shui,
	filmmaking: filmmaking,
	fingerpaint: fingerpaint,
	fishfarming: fishfarming,
	fishkeeping: fishkeeping,
	flower_arranging: flower_arranging,
	fly_tying: fly_tying,
	furniture: furniture,
	games: games,
	tabletop_game: tabletop_game,
	gambling: gambling,
	genealogy: genealogy,
	gingerbread_house: gingerbread_house,
	glassblowing: glassblowing,
	gardening: gardening,
	gongfu_tea: gongfu_tea,
	graphic_design: graphic_design,
	gunsmithing: gunsmithing,
	hacker: hacker,
	hairstyle: hairstyle,
	computer_hardware: computer_hardware,
	herpetoculture: herpetoculture,
	hobby: hobby,
	home_improvement: home_improvement,
	homebrewing: homebrewing,
	homing_pigeons: homing_pigeons,
	hula_hooping: hula_hooping,
	hydroponics: hydroponics,
	ice_skating: ice_skating,
	invention: invention,
	jewelry_making: jewelry_making,
	jigsaw_puzzle: jigsaw_puzzle,
	diary: diary,
	judo: judo,
	juggling: juggling,
	karaoke: karaoke,
	karate: karate,
	kendama: kendama,
	kite_building: kite_building,
	knife_making: knife_making,
	knitting: knitting,
	knot_tying: knot_tying,
	kombucha: kombucha,
	kung_fu: kung_fu,
	kun_khmer: kun_khmer,
	lace_making: lace_making,
	lapidary: lapidary,
	leather_crafting: leather_crafting,
	lego: lego,
	livestreaming: livestreaming,
	music: music,
	podcasts: podcasts,
	lock_picking: lock_picking,
	machining: machining,
	macrame: macrame,
	makeup: makeup,
	massaging: massaging,
	mechanics: mechanics,
	meditation: meditation,
	memory_training: memory_training,
	metalworking: metalworking,
	micronation: micronation,
	miniature_art: miniature_art,
	simple_living: simple_living,
	model_building: model_building,
	modeling: modeling,
	model_engineering: model_engineering,
	nail_art: nail_art,
	needlepoint: needlepoint,
	origami: origami,
	painting: painting,
	pen_spinning: pen_spinning,
	performance: performance,
	pet_sitting: pet_sitting,
	philately: philately,
	photography: photography,
	pilates: pilates,
	planning: planning,
	plastic_art: plastic_art,
	poetry: poetry,
	pole_dancing: pole_dancing,
	postcrossing: postcrossing,
	pottery: pottery,
	practical_jokes: practical_jokes,
	pressed_flower_craft: pressed_flower_craft,
	proofreading: proofreading,
	proverbs: proverbs,
	public_speaking: public_speaking,
	puppetry: puppetry,
	puzzle: puzzle,
	pyrography: pyrography,
	quilling: quilling,
	quilting: quilting,
	quizzes: quizzes,
	rail_transport_modeling: rail_transport_modeling,
	rapping: rapping,
	recipe: recipe,
	refinishing: refinishing,
	reiki: reiki,
	robot_combat: robot_combat,
	"rubik's_cube": {
	title: "Rubik's Cube",
	wikititle: "Rubik's_Cube",
	image: {
		source: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Rubiks_cube_solved.jpg/300px-Rubiks_cube_solved.jpg",
		width: 300,
		height: 300
	}
},
	scrapbooking: scrapbooking,
	scuba_diving: scuba_diving,
	sculpting: sculpting,
	sewing: sewing,
	shoemaking: shoemaking,
	singing: singing,
	skipping_rope: skipping_rope,
	slot_car: slot_car,
	soapmaking: soapmaking,
	speedrunning: speedrunning,
	speculative_evolution: speculative_evolution,
	spreadsheets: spreadsheets,
	stamp_collecting: stamp_collecting,
	storytelling: storytelling,
	stretching: stretching,
	string_figure: string_figure,
	sudoku: sudoku,
	speech: speech,
	taekwondo: taekwondo,
	tapestry: tapestry,
	tarot: tarot,
	tattoo: tattoo,
	taxidermy: taxidermy,
	joke: joke,
	charity_shop: charity_shop,
	upcycling: upcycling,
	video_editing: video_editing,
	video_game_development: video_game_development,
	video_gaming: video_gaming,
	videography: videography,
	vr_gaming: vr_gaming,
	wargaming: wargaming,
	watchmaker: watchmaker,
	documentary_film: documentary_film,
	movies: movies,
	television_program: television_program,
	sealing_wax: sealing_wax,
	weaving: weaving,
	webtoon: webtoon,
	weight_training: weight_training,
	welding: welding,
	whittling: whittling,
	wine_tasting: wine_tasting,
	winemaking: winemaking,
	witchcraft: witchcraft,
	wood_carving: wood_carving,
	woodworking: woodworking,
	word_searches: word_searches,
	worldbuilding: worldbuilding,
	writing: writing,
	musical_composition: musical_composition,
	yoga: yoga,
	zumba: zumba,
	air_sports: air_sports,
	airsoft: airsoft,
	amateur_geology: amateur_geology,
	amusement_park: amusement_park,
	archery: archery,
	auto_detailing: auto_detailing,
	automobilism: automobilism,
	astronomy: astronomy,
	badminton: badminton,
	base_jumping: base_jumping,
	baseball: baseball,
	basketball: basketball,
	beachcombing: beachcombing,
	beekeeping: beekeeping,
	birdwatching: birdwatching,
	blacksmithing: blacksmithing,
	bmx: bmx,
	board_sports: board_sports,
	bodybuilding: bodybuilding,
	bus: bus,
	camping: camping,
	canoeing: canoeing,
	canyoning: canyoning,
	carrier_pigeons: carrier_pigeons,
	car: car,
	car_tuning: car_tuning,
	caving: caving,
	city_tourism: city_tourism,
	climbing: climbing,
	composting: composting,
	croquet: croquet,
	cycling: cycling,
	dairy_farming: dairy_farming,
	darts: darts,
	dodgeball: dodgeball,
	dog_training: dog_training,
	dog_walking: dog_walking,
	dowsing: dowsing,
	dragon_boat: dragon_boat,
	driving: driving,
	farming: farming,
	fishing: fishing,
	flag_football: flag_football,
	flower: flower,
	aviation: aviation,
	flying_disc: flying_disc,
	model_aircraft: model_aircraft,
	foraging: foraging,
	fossicking: fossicking,
	freestyle_football: freestyle_football,
	fruit_picking: fruit_picking,
	geocaching: geocaching,
	ghost_hunting: ghost_hunting,
	gold_prospecting: gold_prospecting,
	graffiti: graffiti,
	groundhopping: groundhopping,
	guerrilla_gardening: guerrilla_gardening,
	gymnastics: gymnastics,
	handball: handball,
	herbalism: herbalism,
	herping: herping,
	hiking: hiking,
	hobby_horse: hobby_horse,
	hobby_tunneling: hobby_tunneling,
	hooping: hooping,
	horseback_riding: horseback_riding,
	hunting: hunting,
	inline_skating: inline_skating,
	jogging: jogging,
	jumping_rope: jumping_rope,
	karting: karting,
	kayaking: kayaking,
	kite: kite,
	kitesurfing: kitesurfing,
	lacrosse: lacrosse,
	larping: larping,
	lomography: lomography,
	longboarding: longboarding,
	martial_arts: martial_arts,
	magnet_fishing: magnet_fishing,
	metal_detector: metal_detector,
	motorcycling: motorcycling,
	meteorology: meteorology,
	motor_sports: motor_sports,
	mountain_biking: mountain_biking,
	mountaineering: mountaineering,
	museum: museum,
	mushroom_hunting: mushroom_hunting,
	mycology: mycology,
	netball: netball,
	noodling: noodling,
	nordic_skating: nordic_skating,
	orienteering: orienteering,
	paintball: paintball,
	paragliding: paragliding,
	parkour: parkour,
	pickleball: pickleball,
	picnicking: picnicking,
	podcast: podcast,
	polo: polo,
	powerlifting: powerlifting,
	public_transport: public_transport,
	qigong: qigong,
	rafting: rafting,
	railway: railway,
	railway_modelling: railway_modelling,
	rappelling: rappelling,
	renaissance_fair: renaissance_fair,
	renovating: renovating,
	road_cycling: road_cycling,
	rock_climbing: rock_climbing,
	rock_art: rock_art,
	roller_skating: roller_skating,
	roundnet: roundnet,
	rugby_football: rugby_football,
	running: running,
	safari: safari,
	sailing: sailing,
	sand_art_and_play: sand_art_and_play,
	sandboarding: sandboarding,
	scouting: scouting,
	sculling: sculling,
	shooting_sports: shooting_sports,
	shopping: shopping,
	shuffleboard: shuffleboard,
	skateboarding: skateboarding,
	skiing: skiing,
	skimboarding: skimboarding,
	skydiving: skydiving,
	slacklining: slacklining,
	sled: sled,
	snorkeling: snorkeling,
	snowboarding: snowboarding,
	snowmobiling: snowmobiling,
	snowshoeing: snowshoeing,
	soccer: soccer,
	stone_skipping: stone_skipping,
	storm_chasing: storm_chasing,
	sun_bathing: sun_bathing,
	surfing: surfing,
	survivalism: survivalism,
	human_swimming: human_swimming,
	table_tennis: table_tennis,
	tai_chi: tai_chi,
	tennis: tennis,
	topiary: topiary,
	tourism: tourism,
	trade_fair: trade_fair,
	travel: travel,
	unicycle: unicycle,
	urban_exploration: urban_exploration,
	vacation: vacation,
	vegetable_farming: vegetable_farming,
	conservation_and_restoration_of_road_vehicles: conservation_and_restoration_of_road_vehicles,
	volleyball: volleyball,
	volunteering: volunteering,
	walking: walking,
	water_sports: water_sports,
	zoo: zoo,
	archaeology: archaeology,
	architecture: architecture,
	aerospace: aerospace,
	biology: biology,
	botany: botany,
	business: business,
	chemistry: chemistry,
	engineering: engineering,
	entrepreneurship: entrepreneurship,
	finance: finance,
	geography: geography,
	history: history,
	jurisprudential: jurisprudential,
	linguistics: linguistics,
	literature: literature,
	mathematics: mathematics,
	medical_science: medical_science,
	microbiology: microbiology,
	myrmecology: myrmecology,
	neuroscience: neuroscience,
	philosophy: philosophy,
	physics: physics,
	psychology: psychology,
	publishing: publishing,
	rail_transport: rail_transport,
	religious_studies: religious_studies,
	research: research,
	science_and_technology_studies: science_and_technology_studies,
	social_studies: social_studies,
	sociology: sociology,
	sports_science: sports_science,
	story_writing: story_writing,
	life_science: life_science,
	teaching: teaching,
	web_design: web_design,
	wikipedia_community: wikipedia_community,
	action_figure: action_figure,
	antiquing: antiquing,
	art_collecting: art_collecting,
	book_collecting: book_collecting,
	button_collecting: button_collecting,
	trading_cards: trading_cards,
	cassette_tapes: cassette_tapes,
	coin_collecting: coin_collecting,
	comic_book_collecting: comic_book_collecting,
	compact_discs: compact_discs,
	crystals: crystals,
	digital_hoarding: digital_hoarding,
	dolls: dolls,
	element_collecting: element_collecting,
	ephemera: ephemera,
	films: films,
	fingerprint: fingerprint,
	knife_collecting: knife_collecting,
	lapel_pin: lapel_pin,
	film_memorabilia: film_memorabilia,
	notaphily: notaphily,
	perfume: perfume,
	phillumeny: phillumeny,
	rail_transport_modelling: rail_transport_modelling,
	record_collecting: record_collecting,
	rock_tumbling: rock_tumbling,
	patch_collecting: patch_collecting,
	shoes: shoes,
	sneakers: sneakers,
	sports_memorabilia: sports_memorabilia,
	stuffed_toy: stuffed_toy,
	tea_bag: tea_bag,
	transit_map: transit_map,
	video_game_collecting: video_game_collecting,
	vintage_cars: vintage_cars,
	vintage_clothing: vintage_clothing,
	vinyl_records: vinyl_records,
	antiquities: antiquities,
	auto_audiophilia: auto_audiophilia,
	fossil_hunting: fossil_hunting,
	insect_collecting: insect_collecting,
	leaves: leaves,
	metal_detecting: metal_detecting,
	mineral_collecting: mineral_collecting,
	rock_balancing: rock_balancing,
	sea_glass: sea_glass,
	seashell: seashell,
	stone_collecting: stone_collecting,
	air_hockey: air_hockey,
	animal_fancy: animal_fancy,
	axe_throwing: axe_throwing,
	backgammon: backgammon,
	baking: baking,
	ballet_dancing: ballet_dancing,
	ballroom_dancing: ballroom_dancing,
	beauty_pageant: beauty_pageant,
	book_folding: book_folding,
	boxing: boxing,
	contract_bridge: contract_bridge,
	cheerleading: cheerleading,
	cribbage: cribbage,
	curling: curling,
	competitive_dance: competitive_dance,
	debate: debate,
	dominoes: dominoes,
	competitive_eating: competitive_eating,
	esports: esports,
	fencing: fencing,
	figure_skating: figure_skating,
	ice_hockey: ice_hockey,
	jujitsu: jujitsu,
	kabaddi: kabaddi,
	word_games: word_games,
	laser_tag: laser_tag,
	mahjong: mahjong,
	marbles: marbles,
	model_united_nations: model_united_nations,
	pinball: pinball,
	poker: poker,
	rughooking: rughooking,
	shogi: shogi,
	slot_car_racing: slot_car_racing,
	speedcubing: speedcubing,
	sport_stacking: sport_stacking,
	table_football: table_football,
	wrestling: wrestling,
	association_football: association_football,
	australian_rules_football: australian_rules_football,
	auto_racing: auto_racing,
	beach_volleyball: beach_volleyball,
	breakdancing: breakdancing,
	capoeira: capoeira,
	cornhole: cornhole,
	cricket: cricket,
	cycle_sport: cycle_sport,
	disc_golf: disc_golf,
	dog_sport: dog_sport,
	equestrianism: equestrianism,
	exhibition_drill: exhibition_drill,
	field_hockey: field_hockey,
	physical_fitness: physical_fitness,
	footbag: footbag,
	frisbee: frisbee,
	golf: golf,
	horsemanship: horsemanship,
	iceboat: iceboat,
	jukskei: jukskei,
	kart_racing: kart_racing,
	knife_throwing: knife_throwing,
	marching_band: marching_band,
	mini_golf: mini_golf,
	powerboat_racing: powerboat_racing,
	racewalking: racewalking,
	racquetball: racquetball,
	roller_derby: roller_derby,
	rugby_league: rugby_league,
	rowing: rowing,
	sled_dog_racing: sled_dog_racing,
	softball: softball,
	speed_skating: speed_skating,
	tennis_polo: tennis_polo,
	tether_car: tether_car,
	tour_skating: tour_skating,
	trapshooting: trapshooting,
	triathlon: triathlon,
	water_polo: water_polo,
	audiophile: audiophile,
	formicarium: formicarium,
	learning: learning,
	microscopy: microscopy,
	shortwave_listening: shortwave_listening,
	aircraft_spotting: aircraft_spotting,
	amateur_astronomy: amateur_astronomy,
	urban_beekeeping: urban_beekeeping,
	bus_spotting: bus_spotting,
	butterfly_gardening: butterfly_gardening,
	gongoozler: gongoozler,
	satellite_watching: satellite_watching,
	whale_watching: whale_watching
};

const $$Astro$2 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const introKey = Astro2.url.searchParams.get("intro") || "";
  let hobbyKey = Astro2.url.searchParams.get("hobby") || "";
  const intro = introKey && data.intros[introKey] ? data.intros[introKey] : data.intros.basic;
  let hobbyData = hobbyKey && hobbies[hobbyKey];
  const trimUrlParamObj = {
    intro: introKey || "basic"
  };
  if (hobbyKey) {
    trimUrlParamObj["hobby"] = hobbyKey;
  }
  const trimUrlParam = new URLSearchParams(trimUrlParamObj);
  if (!hobbyData) {
    hobbyKey = Object.keys(hobbies)[Math.floor(Math.random() * Object.keys(hobbies).length)];
    hobbyData = hobbies[hobbyKey];
  }
  const wikilink = `https://en.wikipedia.org/wiki/${encodeURIComponent(hobbyData.wikititle)}`;
  const urlParams = new URLSearchParams({
    intro: introKey || "basic",
    hobby: hobbyKey
  });
  const canonicalURL = new URL(Astro2.url);
  canonicalURL.search = "";
  const hobbyLink = `${canonicalURL}?${urlParams.toString()}`;
  let randomLink = canonicalURL.toString();
  if (introKey && introKey !== "basic") {
    randomLink += `?intro=${introKey}`;
  }
  const variantsLink = `/variants?${trimUrlParam.toString()}`;
  const creditsLink = `/credits?${trimUrlParam.toString()}`;
  return renderTemplate`

${renderComponent($$result, "Layout", $$Layout, { "title": "Find yourself a hobby", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-J7PV25F6">
    <div class="preintro astro-J7PV25F6">If you were given this link, it's probably because</div>
    <div class="intro astro-J7PV25F6">${intro}</div>
    <div class="prehobby astro-J7PV25F6">Why don't you try this activity:</div>
    ${renderComponent($$result2, "Card", $$Card, { "url": wikilink, "img": hobbyData.image && hobbyData.image.source || "/minibridgebuilding-350x350.jpg", "title": hobbyData.title, "footer": "\u{1F9E1} Try it! You might be great at it! \u{1F9E1}", "class": "astro-J7PV25F6" })}
    <a class="give-me-another button astro-J7PV25F6"${addAttribute(randomLink, "href")}>
      <span class="dice astro-J7PV25F6">🎲</span> Give me another <span class="dice astro-J7PV25F6">🎲</span>
    </a>
	</main><div class="footer astro-J7PV25F6">
    <a class="footer-button astro-J7PV25F6"${addAttribute(variantsLink, "href")}>↩️ Variants</a>
    <a class="footer-button astro-J7PV25F6" href="#" id="sharing-modal-trigger">🔗 Direct link</a>
    <a class="footer-button astro-J7PV25F6"${addAttribute(creditsLink, "href")}>❤️ Credits</a>
  </div>${renderComponent($$result2, "Modal", $$Modal, { "triggerId": "sharing-modal-trigger", "title": "Get a direct link", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<small class="astro-J7PV25F6">(click to copy)</small><div class="sharing-links astro-J7PV25F6">
      <a id="sharing-this-link" class="sharing-link-input astro-J7PV25F6"${addAttribute(hobbyLink, "href")}>This activity 🔗</a>
      <input id="sharing-this-input" type="text"${addAttribute(hobbyLink, "value")} readonly class="astro-J7PV25F6">
      <span id="sharing-this-label" class="astro-J7PV25F6"></span>
    </div><div class="sharing-links astro-J7PV25F6">
      <a id="sharing-random-link" class="ssharing-link-input astro-J7PV25F6"${addAttribute(randomLink, "href")}>Random activity 🎲</a>
      <input id="sharing-random-input" type="text"${addAttribute(randomLink, "value")} readonly class="astro-J7PV25F6">
      <span id="sharing-random-label" class="astro-J7PV25F6"></span>
    </div>` })}` })}`;
}, "/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro");

const $$file$2 = "/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Variants = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Variants;
  let introKey = Astro2.url.searchParams.get("intro") || "basic";
  const hobbyKey = Astro2.url.searchParams.get("hobby") || "";
  if (!data.intros[introKey]) {
    introKey = "basic";
  }
  const paramObj = {
    intro: introKey || "basic"
  };
  if (hobbyKey) {
    paramObj["hobby"] = hobbyKey;
  }
  const urlParams = new URLSearchParams(paramObj);
  const linkToHome = `/?${urlParams.toString()}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Find yourself a hobby", "class": "astro-ZPH6V6R7" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-ZPH6V6R7">
    <h1 class="astro-ZPH6V6R7">Choose a suitable introduction:</h1>
    <div class="intro-options astro-ZPH6V6R7">
      ${Object.keys(data.intros).map(
    (key) => {
      let link = `/?intro=${key}`;
      if (hobbyKey) {
        link += `&hobby=${hobbyKey}`;
      }
      return renderTemplate`<a class="intro astro-ZPH6V6R7"${addAttribute(link, "href")}>${key === introKey ? "\u{1F31F}" : ""} ${data.intros[key]} ${key === introKey ? "\u{1F31F}" : ""}</a>`;
    }
  )}
    </div>
  </main><div class="footer astro-ZPH6V6R7">
    <a class="footer-button astro-ZPH6V6R7"${addAttribute(linkToHome, "href")}>Back</a>
  </div>` })}`;
}, "/home/moriel/code/projects/findyourselfahobby/src/pages/variants.astro");

const $$file$1 = "/home/moriel/code/projects/findyourselfahobby/src/pages/variants.astro";
const $$url$1 = "/variants";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Variants,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Credits = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Credits;
  let introKey = Astro2.url.searchParams.get("intro") || "basic";
  let hobbyKey = Astro2.url.searchParams.get("hobby") || "";
  if (!data.intros[introKey]) {
    introKey = "basic";
  }
  const paramObj = {
    intro: introKey || "basic"
  };
  if (hobbyKey) {
    paramObj["hobby"] = hobbyKey;
  }
  const urlParams = new URLSearchParams(paramObj);
  const linkToHome = `/?${urlParams.toString()}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Find yourself a hobby", "class": "astro-CAK72J2B" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="astro-CAK72J2B">
    <h1 class="astro-CAK72J2B">Credits</h1>
    <ul class="astro-CAK72J2B">
      <li class="astro-CAK72J2B">Preview photo credit: <a href="https://www.flickr.com/photos/93438832@N04/14302663864" class="astro-CAK72J2B">"Mini bridgebuilding"</a><span class="astro-CAK72J2B"> by <a href="https://www.flickr.com/photos/93438832@N04" class="astro-CAK72J2B">PAUL fotografie (Netherlands)</a></span> is licensed under <a href="https://creativecommons.org/licenses/by/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;" class="astro-CAK72J2B">CC BY 2.0</a></li>
      <li class="astro-CAK72J2B">Hobbies taken from Wikipedia's <a href="https://en.wikipedia.org/wiki/List_of_hobbies" class="astro-CAK72J2B">List of Hobbies</a></li>
      <li class="astro-CAK72J2B">Site made with <a href="https://astro.build/" class="astro-CAK72J2B">astro.js</a>; code available on <a href="https://github.com/mooeypoo/findyourselfahobby" class="astro-CAK72J2B">github</a></li>

    </ul>
    <img src="/minibridgebuilding-350x350.jpg" class="astro-CAK72J2B">
    <div class="kofi astro-CAK72J2B">
      <a class="button astro-CAK72J2B" href="https://ko-fi.com/mooeypoo">☕ Buy me coffee!</a>
    </div>
  </main><div class="footer astro-CAK72J2B">
    <a class="footer-button astro-CAK72J2B"${addAttribute(linkToHome, "href")}>Back</a>
  </div>` })}`;
}, "/home/moriel/code/projects/findyourselfahobby/src/pages/credits.astro");

const $$file = "/home/moriel/code/projects/findyourselfahobby/src/pages/credits.astro";
const $$url = "/credits";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Credits,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
