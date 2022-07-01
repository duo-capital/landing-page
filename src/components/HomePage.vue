<template>
  <div>
    <home />
  </div>
</template>

<script>
import home from "@/components/HomeSection";
import contact from "@/components/ContactSection";

export default {
  name: "HomePage",

  components: {
    home,
    contact,
  },
};
</script>
