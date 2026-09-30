const projectData = {
  title: "Prompt Optimization Lab",
  subtitle: "AI × Design × Evaluation",

  description:
    "A practical prompt engineering case study showing how a weak AI instruction is analyzed, optimized, tested, and transformed into a production-ready prompt.",

  v0: {
    name: "V0 — Weak Prompt",

    objective:
      "Create an attractive and professional Facebook post for a new Panjabi product.",

    prompt:
      "Write a Facebook post for our new panjabi. Make it attractive and professional.",

    weaknesses: [
      "No target audience",
      "No brand voice",
      "No product details",
      "No content structure",
      "No CTA requirement",
      "No length specification",
      "No Bangladeshi cultural context",
    ],

    output: `Introducing our new Panjabi collection! Stylish, comfortable and perfect for every occasion. Get yours today and upgrade your style.`,
  },

  v1: {
    name: "V1 — Structured Prompt",

    objective:
      "Generate a structured Facebook product post using clear audience, brand, product and CTA requirements.",

    prompt: `Act as a professional Bangladeshi fashion copywriter.

Create a Facebook product post for a men's Panjabi.

Target audience:
Bangladeshi men aged 18–35.

Tone:
Premium, modern, confident and culturally relevant.

Product:
A premium men's Panjabi suitable for Eid, weddings and formal occasions.

Requirements:
- Start with an attention-grabbing hook.
- Highlight comfort, fabric and design.
- Use natural Bangla.
- Keep the post between 80–120 words.
- Include a clear call-to-action.
- Include 3–5 relevant emojis.
- Avoid exaggerated claims.

Output format:
1. Hook
2. Main product description
3. Benefits
4. CTA`,

    improvements: [
      "Defined the target audience",
      "Added brand tone",
      "Specified product context",
      "Added content structure",
      "Added word limit",
      "Added CTA",
      "Added cultural context",
    ],

    output: `ঈদের সাজে এবার যোগ হোক আভিজাত্যের নতুন ছোঁয়া। ✨

আমাদের Premium Panjabi তৈরি করা হয়েছে আধুনিক ডিজাইন ও আরামের কথা মাথায় রেখে। নরম ও আরামদায়ক ফ্যাব্রিক, refined detailing এবং elegant fit—সব মিলিয়ে ঈদ, বিয়ে কিংবা যেকোনো special occasion-এর জন্য পারফেক্ট।

নিজের style-কে আরও premium করে তুলতে আজই বেছে নিন আপনার পছন্দের Panjabi। 👑

📩 অর্ডার করতে এখনই inbox করুন.`,
  },

  v2: {
    name: "V2 — Production Prompt",

    objective:
      "Create a reusable production-grade prompt that can consistently generate conversion-focused Facebook product content.",

    prompt: `You are a senior Bangladeshi e-commerce copywriter specializing in fashion brands.

TASK
Create a Facebook product post for a Bangladeshi men's fashion brand.

PRODUCT INPUT
Product: Premium Men's Panjabi
Occasion: Eid / Wedding / Formal
Audience: Bangladeshi men aged 18–35

BRAND VOICE
- Premium
- Modern
- Confident
- Warm
- Culturally relevant

CONTENT GOALS
1. Capture attention within the first sentence.
2. Communicate product value clearly.
3. Create desire without making unsupported claims.
4. Encourage the customer to take action.

CONTENT RULES
- Write in natural Bangla.
- Use short readable paragraphs.
- Keep the post between 80–120 words.
- Use 3–5 relevant emojis.
- Mention product benefits naturally.
- Do not invent price, discount, fabric specifications or availability.
- Avoid generic AI phrases.
- Avoid excessive emoji usage.
- End with a clear CTA.

OUTPUT STRUCTURE
[HOOK]
[PRODUCT VALUE]
[KEY BENEFITS]
[OCCASION / USE CASE]
[CTA]

QUALITY CHECK
Before returning the answer, verify:
- Is the hook strong?
- Is the language natural?
- Is the product value clear?
- Is every factual claim supported by the input?
- Is there a clear CTA?
- Is the length within the required range?`,

    improvements: [
      "Reusable production structure",
      "Explicit quality-control layer",
      "Hallucination prevention",
      "Defined output format",
      "Clear conversion objective",
      "Bangladeshi localization",
      "Input/output separation",
    ],

    output: `ঈদের লুকে আভিজাত্য আনতে খুঁজছেন এমন একটি Panjabi, যা style আর comfort—দুটোই ধরে রাখে? ✨

আমাদের Premium Men's Panjabi-এর modern design ও elegant look আপনাকে ঈদ, wedding বা formal occasion-এ polished appearance দিতে তৈরি করা হয়েছে।

আপনার personal style-এর সঙ্গে মানানসই একটি refined traditional look তৈরি করুন—সহজ, আধুনিক এবং timeless। 👑

📩 আপনার পছন্দের design সম্পর্কে জানতে এখনই inbox করুন.`,
  },

  evaluation: [
    {
      metric: "Instruction Following",
      v0: 38,
      v1: 76,
      v2: 94,
    },
    {
      metric: "Audience Relevance",
      v0: 42,
      v1: 81,
      v2: 95,
    },
    {
      metric: "Brand Consistency",
      v0: 35,
      v1: 79,
      v2: 93,
    },
    {
      metric: "Content Structure",
      v0: 30,
      v1: 84,
      v2: 96,
    },
    {
      metric: "CTA Quality",
      v0: 40,
      v1: 82,
      v2: 94,
    },
    {
      metric: "Overall Quality",
      v0: 37,
      v1: 81,
      v2: 94,
    },
  ],

  testCases: [
    {
      id: "TC-01",
      name: "Standard Product",
      input: "Premium men's Panjabi for Eid",
      expected:
        "Clear premium positioning, Bangla copy and CTA.",
    },
    {
      id: "TC-02",
      name: "Minimal Product Data",
      input: "Only product name is provided",
      expected:
        "Prompt must avoid inventing unsupported product specifications.",
    },
    {
      id: "TC-03",
      name: "Different Occasion",
      input: "Panjabi for wedding",
      expected:
        "Content should adapt the use case while maintaining brand voice.",
    },
    {
      id: "TC-04",
      name: "Conversion Focus",
      input:
        "Customer needs to be encouraged to contact the brand",
      expected:
        "Output should contain a natural and specific CTA.",
    },
  ],
};

export default projectData;