<template>
  <v-container>
    <section class="mt-12 pt-5" id="home">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row class="mb-12" align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 white--text">
                Money management for couples
              </h1>
              <h1 class="font-weight-light mb-4 white--text">
                Minimalistic, intuitive, simple.
              </h1>

              <v-btn
                rounded
                outlined
                large
                dark
                href="https://research.typeform.com/to/lbqzqZi2"
                target="_blank"
                class="mt-5 white--text"
              >
                Request Access
                <v-icon class="ml-2">mdi-door-open</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>

          <v-row class="mt-4 pt-4 mb-12 align-end">
            <template>
              <h1 class="display-1 font-weight-bold mb-4 white--text" >
                Watch How it Works
              </h1>
              <template>
                <div
                  class="container"
                  style="position: relative; padding-bottom: 56.25%; height: 0;"
                >
                  <iframe
                    src="https://www.loom.com/embed/d58f299a2cac4f3f84045f6daaca5643"
                    frameborder="0"
                    webkitallowfullscreen
                    mozallowfullscreen
                    allowfullscreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                  ></iframe>
                </div>
              </template>
            </template>
          </v-row>
          <v-row class="mt-4 pt-4 mb-4 align-end">
            <template>
              <h1 class="display-1 font-weight-bold mb-4 white--text">
                FAQs
              </h1>
              <v-expansion-panels>
                <v-expansion-panel v-for="(item, i) in faqs" :key="i">
                  <v-expansion-panel-header>
                    {{ item.title }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ item.content }}
                    <template v-if="item.links">
                      <br />
                      <br />
                      <div v-for="(link, j) in item.links" :key="j">
                        <a :href="link.url">
                          {{ link.title }}
                        </a>
                      </div>
                    </template>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </template>
          </v-row>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          title: "Features",
          content: `Import and split transactions from your personal and joint bank accounts, cards, Amazon purchases and more. \n
        You can get in depth analytics across and within spending categories to better understand where your money is going. Finally, we built in a monthly financial quiz to make sure you stay on top of your finances.
        `,
        },
        {
          title: "Pricing",
          content:
            "$1.99 monthly, or $19.99 yearly. We want to build something sustainable without having to cross-sell you other financial products.",
        },
        {
          title: "Is there a mobile app?",
          content:
            "Not yet. We will focus on a web-based application first, bringing you in-depth analysis of your financials and allowing you to export to CSV.",
        },
        {
          title: "Who is behind the project?",
          content:
            "Rom and Nat, are a tech couple based out of NY. We've been running a tight ship for years by leveraging various apps and spreadsheets. After our favorite apps pivoted or stopped supporting features, we decided to build something for ourselves and the community.",
          links: [
            {
              title: "Rom's LinkedIn.",
              url: "https://www.linkedin.com/in/romulomanzano/",
            },
            {
              title: "Nat's LinkedIn.",
              url: "https://www.linkedin.com/in/nataschaguerrero/",
            },
          ],
        },
      ],
    };
  },
};
</script>