import React from "react";
import Layout from "./Layout";

import Title from "../../common/components/home/title";

export default function Introduction() {
  return (
    <>
      <Layout
        content={
          <section
            id="about"
            class="tw-h-1/2 container px-5 py-15 mx-auto"
            href="#about"
          >
            <Title title="Home" />
            <p class="">
              <p class="text-center tw-font-bold">
                <em>
                  “We shape our infrastructure because thereafter they shape
                  us." ~
                </em>
                Dax Bamania
              </p>
              <br />
              <p class="indent-lg text-justify">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Stakeholder
                satisfaction has always been of prime importance at Chitkara
                University. This could be provided only with a comfortable
                work/study place as well as with the requisite support services.
                A clean and well-maintained infrastructure is an essential
                ingredient of a comfortable work and study place.
                State-of-the-art infrastructure of Chitkara University, in a
                built-up area of 1,66,700 m2, spread over 77 acres of land, has
                been created with this in mind.
              </p>
              <br />
              <p class="indent-lg text-justify">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Infrastructure
                needs continuous maintenance to remain as beautiful, clean,
                hygienic, and comfortable. Upkeep, administration and
                maintenance of infrastructure is a continuous process which
                needs dedicated attention, from the very next day of the
                creation of infrastructure; and which increases with time. With
                each passing day, the need for maintenance increases. Reasons
                that necessitate constant upkeep and maintenance of
                infrastructure could be any - natural causes of climate and
                weather, machines becoming obsolete, routine wear and tear and
                so on.
              </p>
              <br />
              <p class="indent-lg text-justify">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>At Chitkara
                University, upkeep and maintenance of infrastructure is handled
                by dedicated teams. It could be preventive or corrective; it
                could include cleanliness requirements; or some complaints like
                a broken furniture or an intercom that is not working; or even
                more grave situations like internal seepages or a broken wall.
                Concerns of infrastructure, if left unresolved or delayed, can
                lead to aggravated problems, unhygienic work and study
                environment, and safety concerns and the increased damage would
                lead to increased cost of repair. Hence the attitude adopted
                towards upkeep and maintenance has always been,
                <em>“a stitch in time saves nine” </em>. The teams that
                dedicatedly ensure these tasks are the Administration
                department, General Maintenance department and Electrical
                Maintenance department.
              </p>
              <br />
              <p class="indent-lg text-justify">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                Further, various facilities are also made available in this
                campus for the stakeholders. The very purpose of the facility is
                for the comfort of stakeholders. To avail these, certain
                processes need to be adhered to. This webpage has been created
                to touch base with our stakeholders so they may be able to
                appreciate and be aware of the infrastructure of the campus, to
                comprehend the processes laid for availing various facilities
                and to avail the maintenance support wherever required/desired
                and this page would also be a stage to propagate the various
                activities undertaken backstage, by Team Administration.
              </p>
            </p>
          </section>
        }
      ></Layout>
    </>
  );
}
