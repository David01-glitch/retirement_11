import gardening from '../assets/images/hobbies/gardening.jpg';
import painting from '../assets/images/hobbies/painting.jpg';
import woodworking from '../assets/images/hobbies/woodworking.jpg';
import knitting from '../assets/images/hobbies/knitting.jpg';
import diy from '../assets/images/hobbies/diy.jpg';
import pottery from '../assets/images/hobbies/pottery.jpg';
import cooking from '../assets/images/hobbies/cooking.jpg';
import photography from '../assets/images/hobbies/photography.jpg';

import herbGarden from '../assets/images/blog/herb-garden.jpg';
import bookshelf from '../assets/images/blog/wooden-bookshelf.jpg';
import watercolor from '../assets/images/blog/watercolor-tips.jpg';
import knitPatterns from '../assets/images/blog/knitting-patterns.jpg';
import birdhouse from '../assets/images/blog/birdhouse.jpg';
import photoWalks from '../assets/images/blog/photo-walks.jpg';

import planterBox from '../assets/images/projects/planter-box.jpg';
import pictureFrame from '../assets/images/projects/picture-frame.jpg';
import scarf from '../assets/images/projects/scarf.jpg';
import herbProject from '../assets/images/projects/herb-garden.jpg';

import sarah from '../assets/images/community/sarah.jpg';
import robert from '../assets/images/community/robert.jpg';
import maria from '../assets/images/community/maria.jpg';
import henry from '../assets/images/community/henry.jpg';

import gardenBed from '../assets/images/tutorials/garden-bed.jpg';
import woodShelf from '../assets/images/tutorials/wood-shelf.jpg';
import sunsetPaint from '../assets/images/tutorials/sunset-paint.jpg';

export const HOBBIES = [
  { name: 'Gardening', slug: 'gardening', img: gardening, desc: 'Grow vibrant blooms, fresh herbs, and quiet joy in your own backyard sanctuary.', tone: 'from-olive-400/70 to-olive-700/80' },
  { name: 'Painting', slug: 'painting', img: painting, desc: 'From watercolor sunsets to acrylic landscapes — express the world as you see it.', tone: 'from-terracotta-400/70 to-terracotta-600/80' },
  { name: 'Woodworking', slug: 'woodworking', img: woodworking, desc: 'Shape timeless heirlooms with patience, sawdust, and steady hands.', tone: 'from-wood-400/70 to-wood-600/80' },
  { name: 'Knitting', slug: 'knitting', img: knitting, desc: 'Cozy scarves, baby blankets, and rhythmic peace — one stitch at a time.', tone: 'from-terracotta-400/70 to-wood-600/80' },
  { name: 'DIY Crafts', slug: 'diy-crafts', img: diy, desc: 'Reimagine everyday objects into beautiful keepsakes and gifts.', tone: 'from-olive-400/70 to-terracotta-600/80' },
  { name: 'Pottery', slug: 'pottery', img: pottery, desc: 'Center the clay, center yourself — slow, tactile, and deeply satisfying.', tone: 'from-wood-400/70 to-terracotta-600/80' },
  { name: 'Cooking', slug: 'cooking', img: cooking, desc: 'Slow recipes from the heart — savor flavors, family, and friendship.', tone: 'from-terracotta-400/70 to-olive-700/80' },
  { name: 'Photography', slug: 'photography', img: photography, desc: 'Capture morning light, garden visitors, and the quiet beauty around you.', tone: 'from-olive-400/70 to-wood-600/80' },
];

export const ARTICLES = [
  {
    id: 1,
    title: 'Starting Your First Herb Garden at 60+',
    excerpt: 'A gentle, step-by-step guide to growing basil, mint, and rosemary on a windowsill — even without a garden.',
    img: herbGarden,
    author: 'Margaret Whitfield',
    date: 'May 4, 2026',
    readTime: '6 min read',
    tags: ['Gardening', 'Beginner'],
    body: `Starting a herb garden after retirement is one of the most rewarding ways to slow down and reconnect with nature. You don't need acres — a sunny windowsill, four small terracotta pots, and an afternoon are enough.

Begin with three forgiving herbs: basil for summer dishes, mint for evening tea, and rosemary for roasted vegetables. Each thrives in well-draining soil and six hours of indirect light. Water when the top inch of soil feels dry — not on a schedule.

Pinch the tops weekly. This single habit doubles your yield and keeps plants bushy. By month two, you'll be snipping fresh leaves into eggs, lemonade, and lamb. By month four, friends will ask for cuttings — and you'll have a quiet ritual that grounds your mornings.`
  },
  {
    id: 2,
    title: 'Building a Heirloom Bookshelf — Weekend Project',
    excerpt: 'A traditional pine bookshelf using simple hand tools. Designed for first-time woodworkers.',
    img: bookshelf,
    author: 'Robert Hensley',
    date: 'April 28, 2026',
    readTime: '9 min read',
    tags: ['Woodworking', 'DIY'],
    body: `A bookshelf is the perfect first woodworking project: forgiving joinery, satisfying scale, and a piece your grandchildren will keep. We'll build a four-shelf pine unit, 60 inches tall, using a hand saw, drill, and sandpaper.

Cut your boards to length using a miter box — accuracy here saves frustration later. Pre-drill every screw hole; pine splits easily. Sand in stages: 80-grit to flatten, 120 to refine, 220 to soften.

Finish with a coat of beeswax and mineral oil rather than polyurethane. The grain stays warm and inviting, and small dings can be buffed out years from now. Take your time. The piece you build slowly is the piece that lasts.`
  },
  {
    id: 3,
    title: 'Watercolor for Calm: 5 Beginner Techniques',
    excerpt: 'Loose, forgiving, and meditative — watercolor is the perfect medium for relaxing afternoons.',
    img: watercolor,
    author: 'Eleanor Park',
    date: 'April 21, 2026',
    readTime: '5 min read',
    tags: ['Painting', 'Wellness'],
    body: `Watercolor rewards patience over precision. Start with three colors only — ultramarine, burnt sienna, and yellow ochre — and a single round brush.

Practice five fundamentals: the flat wash, the graded wash, wet-on-wet blending, dry-brush texture, and lifting with a damp tissue. Each one takes ten minutes. Repeat them for a week and your hand will know more than your mind can explain.

The goal isn't a gallery piece. It's twenty minutes of quiet attention to color and water — a kind of meditation that leaves something beautiful behind.`
  },
  {
    id: 4,
    title: '8 Cozy Knitting Patterns for Beginners',
    excerpt: 'Soft scarves, simple cowls, and a no-fail blanket — patterns chosen for forgiving stitches and beautiful results.',
    img: knitPatterns,
    author: 'Dorothy Lin',
    date: 'April 14, 2026',
    readTime: '7 min read',
    tags: ['Knitting', 'Beginner'],
    body: `Eight patterns, each chosen for a reason: chunky garter scarf, ribbed cowl, seed-stitch washcloth, simple shawl, basket-weave throw, fingerless mitts, mosaic pillow cover, and the classic granny blanket.

Pick wool or wool-blend yarn for forgiveness. Acrylic is fine for first attempts but stitches don't bloom the same way. Use needles two sizes larger than the label suggests — your hands will thank you.

Don't unravel mistakes obsessively. A small irregularity is the signature of a handmade piece.`
  },
  {
    id: 5,
    title: 'A Beautiful Birdhouse from Scrap Wood',
    excerpt: 'Turn the offcuts in your garage into a charming home for chickadees and finches.',
    img: birdhouse,
    author: 'Henry Caldwell',
    date: 'April 7, 2026',
    readTime: '8 min read',
    tags: ['Woodworking', 'Outdoors'],
    body: `Every garage has a corner of leftover cedar, pine, or redwood. Today we turn those scraps into a six-piece birdhouse that will host two seasons of nesting before it needs repair.

Cut the entrance hole to 1¼ inches — small enough to keep starlings out, large enough for chickadees. Skip the perch; songbirds don't need one, and predators do.

Hang it eight feet up, facing east, away from prevailing wind. By late spring, you'll have neighbors.`
  },
  {
    id: 6,
    title: 'Morning Photo Walks: A Year-Long Practice',
    excerpt: 'How one retired teacher turned a daily walk into a stunning photography portfolio.',
    img: photoWalks,
    author: 'Sarah Mendoza',
    date: 'March 30, 2026',
    readTime: '6 min read',
    tags: ['Photography', 'Wellness'],
    body: `When Sarah retired, she committed to one promise: thirty minutes of morning light, every day, with a camera. Phone or DSLR — it never mattered. The discipline mattered.

A year later, she had 365 photographs, a small gallery show at the local library, and a quieter, calmer mind. The rules were simple: walk somewhere familiar, photograph one thing that surprised you, and write a single sentence about it.

You don't need talent. You need a routine and a kind eye.`
  },
];

export const PROJECTS = [
  { title: 'Cedar Planter Box', img: planterBox, time: '4 hours', level: 'Beginner', category: 'Woodworking', materials: ['Cedar boards', 'Screws', 'Sandpaper', 'Wood oil'] },
  { title: 'Rustic Picture Frame', img: pictureFrame, time: '2 hours', level: 'Beginner', category: 'DIY Crafts', materials: ['Pine moulding', 'Glass', 'Backing board', 'Wood glue'] },
  { title: 'Hand-Knit Wool Scarf', img: scarf, time: '8 hours', level: 'Easy', category: 'Knitting', materials: ['Worsted wool', '10mm needles', 'Tapestry needle', 'Stitch markers'] },
  { title: 'Kitchen Herb Garden', img: herbProject, time: '1 hour', level: 'Very Easy', category: 'Gardening', materials: ['Terracotta pots', 'Herb seedlings', 'Potting soil', 'Pebbles'] },
];

export const TESTIMONIALS = [
  { name: 'Sarah Mendoza', role: 'Retired Teacher · Tucson', img: sarah, quote: 'I joined to learn watercolor and stayed for the people. The morning challenges gave my retirement a beautiful rhythm.' },
  { name: 'Robert Hensley', role: 'Retired Engineer · Phoenix', img: robert, quote: 'The woodworking tutorials are the clearest I have ever followed. Built my granddaughter a toy chest in two weekends.' },
  { name: 'Maria Alvarez', role: 'Retired Nurse · Albuquerque', img: maria, quote: 'A warm corner of the internet. My herb garden, my friendships, and my Sunday afternoons all bloomed here.' },
  { name: 'Henry Caldwell', role: 'Retired Pilot · Sedona', img: henry, quote: 'I was nervous starting a hobby at 68. This community made it feel like coming home.' },
];

export const TUTORIALS = [
  { title: 'Build a Raised Garden Bed', img: gardenBed, duration: '18:24', category: 'Gardening' },
  { title: 'Floating Shelf for Beginners', img: woodShelf, duration: '22:10', category: 'Woodworking' },
  { title: 'Paint a Watercolor Sunset', img: sunsetPaint, duration: '14:52', category: 'Painting' },
];

export const FAQS = [
  { q: 'I have never had a hobby. Where should I start?', a: 'Start with what nourishes you, not what impresses anyone. Gardening, walking with a camera, or a one-pot recipe a week are gentle entry points. Try three things for a month each — one will quietly become yours.' },
  { q: 'Are these activities suitable if I have arthritis or limited mobility?', a: 'Yes. Many members work with arthritis, limited grip strength, or seated routines. Our tutorials note adaptations — larger needles for knitting, lighter tools for woodworking, raised beds for gardening. Comfort first, always.' },
  { q: 'Do I need expensive tools to begin?', a: 'No. Almost every project on this site begins with under $40 of materials. We deliberately design tutorials for borrowed, secondhand, or basic tools — the joy is in the doing, not the gear.' },
  { q: 'How does the community work?', a: 'Members share weekly projects, ask questions, and join optional monthly challenges. There is no pressure, no algorithm, and no comparison. Just kind people learning together.' },
  { q: 'Is the platform free to use?', a: 'Yes. All articles, tutorials, and community forums are free. We are reader-supported and never sell your information.' },
];
