<template>
  <div>
    <div class="primary">
      <v-container>
        <section class="mt-12 pt-5" id="home">
          <v-row align="center" justify="center">
            <v-col cols="10">
              <v-row class="mb-12" align="center" justify="center">
                <v-col cols="12">
                  <h1
                    class="display-2 font-weight-bold mb-4 white--text text-center"
                  >
                    Money management for couples
                  </h1>
                  <h1 class="font-weight-light mb-4 white--text text-center">
                    Minimalistic, intuitive, simple.
                  </h1>
                  <div class="text-center">
                    <v-btn
                      rounded
                      outlined
                      large
                      dark
                      href="https://web.heyduo.com"
                      target="_blank"
                      class="mt-5 white--text"
                    >
                      Get Started
                    </v-btn>
                    <h3 class="font-weight-bold mt-2 white--text text-center">
                    30 day free trial
                  </h3>
                    
                  </div>
                </v-col>
                <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down">
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </div>
    <div class="primary">
      <v-container>
        <section>
          <v-row align="center" justify="center">
            <div class="text-center">
              <v-row>
                <h1 class="white--text text-center">
                  Watch Our Demo
                </h1>
              </v-row>
            </div>
            <v-col cols="12">
              <v-row class="mt-4 pt-4 mb-12">
                <template>
                  <template>
                    <div
                      class="container"
                      style="position: relative; padding-bottom: 56.25%; height: 0;"
                    >
                      <iframe
                        src="https://www.loom.com/embed/3e828444b0a94d788f32bbff90b991e9?hide_owner=true&hideEmbedTopBar=true"
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
            </v-col>
          </v-row>
        </section>
      </v-container>
    </div>
    <div class="primary">
      <v-container>
        <section>
          <v-row align="center" justify="center">
            <v-col cols="10">
              <div>
                <h1
                  class="display-1 font-weight-bold mb-4 white--text text-center"
                >
                  FAQs
                </h1>
              </div>
              <v-row class="mt-4 pt-4 mb-4 align-end">
                <template>
                  <v-expansion-panels>
                    <v-expansion-panel v-for="(item, i) in faqs" :key="i">
                      <v-expansion-panel-header class="text-h6">
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
    </div>
  </div>
</template>

<script>
import contact from "@/components/ContactSection";

export default {
  name: "HomePage",

  components: {
    contact,
  },
  data() {
    return {
      faqs: [
        {
          title: "Features",
          content: `Import and split transactions from your personal and joint bank accounts, cards, Amazon purchases and more. \n
        You can get in depth analytics across and within spending categories to better understand where your money is going.
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
