<template>
  <div class="card mb-0">
    <div class="card-header">
      <div class="row justify-content-between align-items-center">
        <div class="col">
          <h3 class="card-title fw-bolder">Edit home page</h3>
        </div>
        <div class="col text-end">
          <router-link
            :to="{ name: 'home' }"
            class="btn btn-primary btn-sm shadow-none border-0 me-auto"
            >Back</router-link
          >
        </div>
      </div>
    </div>
    <div class="ms-4">
      <div class="form-check form-switch">
        <input
          class="form-check-input shadow-none"
          type="checkbox"
          v-model="editContents"
        />
        <label class="form-check-label">Edit contents</label>
      </div>
    </div>
    <div class="card-body" v-if="editContents === true">
      <div class="lead fw-bolder">Edit Contents</div>
      <div class="mb-2">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control form-control-sm shadow-none"
          placeholder="Name"
          v-model="form.name"
        />
      </div>
      <div class="my-2">
        <label class="form-label">Focus Title</label>
        <input
          type="text"
          class="form-control form-control-sm shadow-none"
          placeholder="Focus Title"
          v-model="form.focusTitle"
        />
      </div>
      <div class="mt-2">
        <label class="form-label">Short Description</label>
        <textarea
          class="form-control form-control-sm shadow-none"
          placeholder="Short Description"
          v-model="form.shortDescription"
        ></textarea>
      </div>
    </div>
    <div class="ms-4">
      <div class="form-check form-switch">
        <input
          class="form-check-input shadow-none"
          type="checkbox"
          v-model="editBG"
        />
        <label class="form-check-label">Edit Background</label>
      </div>
    </div>
    <div class="card-body" v-if="editBG === true">
      <div class="lead fw-bolder">Edit Background</div>
      <div class="row justify-content-center">
        <div class="col-md-7">
          <div class="input-group input-group-sm">
            <input
              class="form-control form-control-sm"
              type="file"
              accept="image/webp"
              @change="bgImg"
            />
            <select
              class="
                form-control form-control-sm form-select form-select-sm
                text-center
              "
              v-model="form.bgColor"
            >
              <option value="0">Background color</option>
              <option value="blue">Blue</option>
              <option value="gray">Gray</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="sky">Sky</option>
              <option value="black">Black</option>
            </select>
            <select
              class="
                form-control form-control-sm form-select form-select-sm
                text-center
              "
              v-model="form.opacity"
            >
              <option value="0">Transparency</option>
              <option value="100%">None</option>
              <option value="75%">3 Quarter</option>
              <option value="50%">Half</option>
              <option value="25%">Quarter</option>
              <option value="0%">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <div class="row justify-content-between align-items-center">
        <div class="col-3">
          <button class="btn btn-success btn-sm shadow-none">Submit</button>
        </div>
        <div class="col-3 text-end">
          <button
            type="reset"
            @click.prevent="reset"
            class="btn btn-secondary btn-sm shadow-none"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: null,
        focusTitle: null,
        shortDescription: null,
        bgColor: "0",
        opacity: "0",
        bgImg: null,
      },
      editContents: true,
      editBG: false,
    };
  },

  methods: {
    bgImg(event) {
      this.form.bgImg = event.target.files[0];
    },
    reset() {
      this.form.name = null;
      this.form.focusTitle = null;
      this.form.shortDescription = null;
      this.form.bgColor = "0";
      this.form.opacity = "0";
      this.form.bgImg = null;
    },
  },
};
</script>
<style scoped>
textarea {
  resize: none;
  height: 10rem;
}
</style>

