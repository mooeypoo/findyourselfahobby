import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent, m as maybeRenderHead } from '../astro.43588f80.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>${title}</title>
	${renderHead($$result)}</head>
	<body>
		${renderSlot($$result, $$slots["default"])}
	</body></html>`;
}, "/home/moriel/code/projects/findyourselfahobby/src/layouts/Layout.astro");

const intros = {
	basic: "You were directed here because it looks like you have a lot of time on your hands.",
	takeoverspace: "It looks like you're in a space that is not meant for you.",
	energy: "It looks like you are wasting a lot of energy answering comments online."
};
const hobbies = [
	"Country line dancing",
	"Basket weaving",
	"Yarn making",
	"Wood working",
	"Cross stitch",
	"Bull riding",
	"Candle making",
	"Knitting",
	"Crocheting",
	"Soap making",
	"Skiing",
	"Cheese making",
	"Polo",
	"Ballroom dancing",
	"Cooking",
	"Tending to small baby goats",
	"Brewing",
	"Dog breeding",
	"Rat breeding",
	"Raising show chickens",
	"Singing",
	"Geocaching",
	"Dressmaking",
	"Training pigeons",
	"Masonry",
	"Emo poem writing",
	"Haiku writing",
	"Screenwriting",
	"Writing fan fiction",
	"Reading fan fiction",
	"Wine tasting",
	"Cake decorating",
	"Scrapbooking",
	"Dresage",
	"Journaling",
	"Rock climbing",
	"Mountain climbing",
	"Kite flying",
	"Car repair",
	"Poker",
	"Euchre",
	"Flying planes",
	"Boat racing",
	"Lawn care",
	"Making balloon animals",
	"HAM radio",
	"Parkour",
	"Hot air ballooning",
	"Playing Minecraft",
	"Coin collecting",
	"Stamp collecting",
	"Watch collecting",
	"Rock collecting",
	"Cactus collecting",
	"Metal detecting",
	"Wind surfing",
	"Window shopping",
	"Yachting",
	"Swimming",
	"Playing guitar",
	"Playing Ukulele",
	"Amateur meteorology",
	"Stargazing",
	"Whittling and Carving",
	"Bird watching",
	"Stone skipping",
	"Nascar driving",
	"Transcendental meditation",
	"Soccer",
	"Football",
	"Yoga",
	"Freesbie",
	"Cat grooming",
	"Dog grooming",
	"Gardening",
	"Urban farming",
	"Topiary",
	"Flower arrangement",
	"Vinyl record collecting",
	"Antiquing",
	"Archery",
	"Trainspotting",
	"Whale watching",
	"Photography",
	"Billiards",
	"Dungeon and Dragons",
	"Board games",
	"Marathon running",
	"Leatherworking",
	"Boat making",
	"Painting",
	"Weightlifting",
	"Curling",
	"Caligraphy",
	"Sculpting",
	"Bonsai Tree Sculpting",
	"Camping",
	"Bowling",
	"Car collecting",
	"Car restoration",
	"Cartooning",
	"Bread making",
	"Jewelry making",
	"Chess",
	"Tennis",
	"Coffee roasting",
	"Hiking",
	"Distilling",
	"Drone flying",
	"Fishkeeping",
	"Fishing",
	"Slot car racing",
	"Genealogy",
	"Golfing",
	"Hot sauce making",
	"Interior design",
	"Glass blowing",
	"Model crafting",
	"Model building",
	"Gold prospecting",
	"Canoeing",
	"Bicycling",
	"Perfumery",
	"Rock tumbling",
	"Book restoration",
	"Beatboxing",
	"Scuba diving",
	"Couponing",
	"Historical reenactment",
	"Medieval reenactment",
	"Orienteering",
	"Hoola hooping",
	"Pogo balling",
	"Knot tying",
	"Bee keeping",
	"Lace making",
	"Kombucha brewing",
	"Magic",
	"Nail art",
	"Slacklining",
	"Pressed flowers",
	"Model railroads",
	"Obstacle racing",
	"3d printing",
	"Taxidermy",
	"Welding",
	"Wikipedia editing",
	"Origami",
	"Dowsing",
	"Paper machier",
	"Writing documentation for an open source project",
	"Ghost hunting",
	"Rocketry",
	"LARPing",
	"Letterboxing",
	"Book binding",
	"Mushrooms hunting",
	"Animal fancy",
	"Cataloging"
];
const data = {
	intros: intros,
	hobbies: hobbies
};

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const introKey = Astro2.url.searchParams.get("intro") || "";
  const hobbyKey = Astro2.url.searchParams.get("hobby") || "";
  const intro = introKey && data.intros[introKey] ? data.intros[introKey] : data.intros.basic;
  const hobby = hobbyKey && data.hobbies[hobbyKey] ? data.hobbies[hobbyKey] : data.hobbies[Math.floor(Math.random() * data.hobbies.length)];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Someone thinks you might need a new hobby", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "v-app", "v-app", { "class": "astro-J7PV25F6" }, { "default": () => renderTemplate`
    ${renderComponent($$result2, "v-app-bar", "v-app-bar", { "color": "primary", "density": "compact", "class": "astro-J7PV25F6" }, { "default": () => renderTemplate`
      <template v-slot:prepend class="astro-J7PV25F6">
        ${renderComponent($$result2, "v-app-bar-nav-icon", "v-app-bar-nav-icon", { "class": "astro-J7PV25F6" })}
      </template>
      ${renderComponent($$result2, "v-app-bar-title", "v-app-bar-title", { "class": "astro-J7PV25F6" }, { "default": () => renderTemplate`Photos` })}
    ` })}
		${maybeRenderHead($$result2)}<h1 class="astro-J7PV25F6">${intro}</h1>
    <h2 class="astro-J7PV25F6">Why don't you try this hobby instead:</h2>
    <h2 class="astro-J7PV25F6">${hobby}</h2>
		<!-- <p class="instructions">
			To get started, open the directory <code>src/pages</code> in your project.<br />
			<strong>Code Challenge:</strong> Tweak the "Welcome to Astro" message above.
		</p>
		<ul role="list" class="link-card-grid">
			<Card
				href="https://docs.astro.build/"
				title="Documentation"
				body="Learn how Astro works and explore the official API docs."
			/>
			<Card
				href="https://astro.build/integrations/"
				title="Integrations"
				body="Supercharge your project with new frameworks and libraries."
			/>
			<Card
				href="https://astro.build/themes/"
				title="Themes"
				body="Explore a galaxy of community-built starter themes."
			/>
			<Card
				href="https://astro.build/chat/"
				title="Community"
				body="Come say hi to our amazing Discord community. ❤️"
			/>
		</ul> -->
	` })}` })}`;
}, "/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro");

const $$file = "/home/moriel/code/projects/findyourselfahobby/src/pages/index.astro";
const $$url = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _ };
