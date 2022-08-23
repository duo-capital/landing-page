<template>
  <v-container>
    <section class="mt-12 pt-5" id="hero">
      <v-alert
        border="left"
        close-text="Close Alert"
        color="primary"
        dark
        dismissible
        icon="mdi-bullhorn-variant"
      >
        FYI: If you (just like us) were affected by Zeta's application shutting
        down, we will fast track you into our beta user batch!
      </v-alert>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" xl="8">
              <h1 class="display-2 font-weight-bold mb-4 text--secondary">
                Coming in October 2022
              </h1>
              <h1 class="font-weight-light text--secondary">
                Shared budgeting for <br />
                <vue-typed-js
                  :strings="['organized', 'busy', 'power']"
                  :typeSpeed="100"
                  :loop="true"
                  :loopCount="300"
                >
                  <h1 class="typing"></h1>
                </vue-typed-js>
                couples
              </h1>
              <v-btn
                rounded
                outlined
                large
                dark
                href="https://wqbotpc2g9r.typeform.com/to/lbqzqZi2"
                target="_blank"
                class="mt-5 text--secondary"
              >
                Get Early Access
                <v-icon class="ml-2">mdi-door-open</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
          <v-row class="mt-4 pt-4 mb-4 align-end">
            <template>
              <h1 class="display-1 font-weight-bold mb-4 text--secondary">
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
          title: "Why are you building this?",
          content:
            "As a couple, we have relied on apps that partially solved our needs over the years, first HoneyDue, then Zeta, but after having to use them along with Excel due to feature-gaps, and their eventual pivots due to an unsustainable business model, we decided we had enough. We are now building the product we want for ourselves and likeminded couples.",
        },
        {
          title: "What are the top features?",
          content: `Import and split transactions from your personal and joint bank accounts, cards, Amazon purchases and more. \n
        You can also create budgets and track progress, export your data to excel, track manual investments and transactions.
        `,
        },
        {
          title: "Will there be a cost?",
          content:
            "Yes, we want to build something sustainable without having to cross-sell you other financial products. We will charge a single digit monthtly subscription fee, or a discounted annual subscription.",
        },
        {
          title: "Will there be an app?",
          content:
            "Not yet. We will focus on a web-based application first, bringing you in depth analysis on your financials and allowing you to export to CSV.",
        },
        {
          title: "Who is behind the project?",
          content:
            "Rom, and Nat, are a tech couple based out of NY. We've been running a tight ship for years by leveraging various apps and spreadsheets. After our favorite apps pivotted or stopped supporting features, we decided to build something for ourselves and the community.",
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

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>

<style>
.btn-play {
  transition: 0.2s;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
