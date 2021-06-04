$(document).ready(function () {
  $(function () {
      //DOM manipulation
    $(
      ".pediatric_DoctorList, .adult_DoctorList"
    ).html(`<div class="doctors_img">
        <img src="./image/Bitmap Copy.png">
        </div>
        <div class="doctors_details">
        <h5>Dr. Vijay Agarwal</h5>
        <p>MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology</p>
        <hr/>
        <p>Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.</p>
        <button class="btn btn_knowMore">Know More</button>
        </div>`);

    $(
      ".card_body_1, .card_body_2, .card_body_3, .card_body_4, .card_body_5, .card_body_6, .card_body_7"
    ).html(`<ul class="font-weight-light m-0">
        <li>BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders.</li>
        <li>It is also used to treat high risk cancers like some cases of Acute Lymphoblastic Leukemia, Acute Myeloid Leukemia, Multiple Myeloma and solid tumours like Neuroblastoma, Ewings Sarcoma and certain relapsed cancers like Lymphomas.</li>
        </ul>`);

    $(".carousel_card").html(`<div class="card-body">
        <div class="card_img">
            <img src="./image/Bitmap.png">
        </div>
        <div class="card_img2">
            <img src="./image/colon.png">
        </div>
        <p class="card-text font-weight-light"><i>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</i></p>
        </div>`);
  });
  
  //carousel call
  $(".carousel").carousel({
    interval: 2000,
  });

  //Scroll to top button
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  var rootElement = document.documentElement;

  function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  scrollToTopBtn.addEventListener("click", scrollToTop);
});
