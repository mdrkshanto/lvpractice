<template>
  <div class="card">
    <div class="card-header">
        <div class="row justify-content-between">
            <h3 class="col col-sm-3 card-title fw-bolder">Overview</h3>
            <router-link :to="{name:'homeAdd'}" class="col col-sm-1 btn btn-primary btn-sm shadow-none"><i class="fas fa-plus"></i></router-link>
        </div>
    </div>
    <div class="card-body">
      <table
        class="
          table table-sm table-dark table-striped table-borderless
          text-center
        "
      >
        <thead>
          <tr>
            <th class="align-middle">#</th>
            <th class="align-middle">Image</th>
            <th class="align-middle">Name</th>
            <th class="align-middle">Focus Title</th>
            <th class="align-middle">Short Description</th>
            <th class="align-middle">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="align-middle">1</th>
            <td class="align-middle">
              <main class="bg-black text-light position-relative rounded">
                <img
                  src="frontEnd/assets/img/home.webp"
                  class="card-img img-fluid opacity-25 h-100"
                  alt=""
                />
                <section
                  class="
                    card-img-overlay
                    d-flex
                    flex-column
                    justify-content-center
                    align-items-center
                    h-100
                  "
                ></section>
              </main>
            </td>
            <td class="align-middle">Md Rezaul Karim Shanto</td>
            <td class="align-middle">Full Stack Web Developer</td>
            <td class="align-middle">
              I am a fully professional full stack web developer Involving with
              latest web designing and technologies is a great feel free to
              contact creative.
            </td>
            <td class="align-middle">
              <router-link
                :to="{ name: 'homeEdit' }"
                class="btn btn-info btn-sm"
                title="Edit"
                ><i class="fas fa-edit"></i
              ></router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped>
main {
  height: 4rem;
  width: 10rem;
}
</style>
