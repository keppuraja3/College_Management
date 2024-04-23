import Container from "react-bootstrap/Container";
import React from "react";

function About() {
  document.title = "About";

  return (
    <>
      <Container className="p-2 mt-2 ">
        <h1 className="text-uppercase fw-bold ">About</h1>
        <ul className=" about-container rounded-3 p-3 overflow-hidden ">
          <li className=" mb-3">
            <h3 className="text-center text-uppercase text-warning ">
              History
            </h3>
            The School of Art, the oldest of the Institution was founded at
            Madras in 1850 by Dr. ALEXANDER HUNTER, M.D., F.R.S.C.E., an eminent
            surgeon in the British Military Service. The school aimed to
            inculcate the Victorian taste of art in the students. At the same
            time, their practical purpose was to provide the new generation with
            useful and enjoyable skills in the industrial ornamental arts. The
            Madras School of Arts was started in Pophams, Broadway in May 1850.
            Only in the 1870s, the school headquarters was moved to the present
            location in Poonamallee High Road.
          </li>
          <li className=" mb-3">
            The school was taken over by the Department of Public Instruction in
            1852. In consultation with the East India House and the Royal
            Academy in London, Dr. HUNTER set up an eight-member committee to
            decide upon the future course of study in the School of Arts and its
            management. As a result, the Madras School was converted into
            Government School of Industrial Arts consisting of two Departments –
            the Artistic and the Industrial. With the Government funds, books
            were procured from the South Kensington School of Arts in London, to
            which all the Colonial Art Schools were linked. Through teaching
            techniques of drawing and lithography, the students of the school
            itself contributed to illustrating numerous publications on the
            topics ranging from arts to science and engineering. There is no
            other library in Chennai, that has a collection of art books equal
            to that of the Government College of Fine Arts library. The art work
            in the college museum were either done by students or collected by
            the school in the nineteenth century. Museum was setup in the
            nineteenth century as a means for educating art school students,
            artisans and the public. Today, the collection serves as a
            historical record of that time period's art production as well as
            museum collecting practices.
          </li>
          <li className=" mb-3">
            <h3 className="text-center text-uppercase text-warning ">Campus</h3>
            In its sixteenth year in 1868, the Government of Industrial Arts had
            taught about 3500 students out of whom about 2000 were placed in
            India, Canada, Australia, England and the Andaman and Nicobar
            Islands. It sent out teachers to the art schools in Calcutta,
            Jaipur, Travancore, Mysore and Ceylon. It was also ready to assist
            in setting up art schools in Lucknow, Roorkee, Surat, Pune, Agra,
            Lahore and Assam.
          </li>
          <li className=" mb-3">
            <h3 className="text-center text-uppercase text-warning ">Course</h3>
            Government School of Industrial Arts had two more British
            Superintendents R.F.CHISOLM and W.S.HADAWAY, but it was E.B.HAVELL,
            a British art teacher and critic, who arrived in India in 1884 as
            the Principal of Madras School of Arts and Crafts, that made a great
            impact by his vindication of the beauty of Indian art and the great
            ideas it had inspired. E.B.HAVELL was responsible for introducing
            wood carving, carpentry and metal work units in the school. He also
            espoused the cause of handloom weaving and the need to preserve
            traditional art and architecture. He put forth certain practical
            propositions for the revival of Indian art and architecture. HAVELL
            left Madras in 1896, to take over as the Principal of the Calcutta
            School of Art. When the Madras School came under the jurisdiction of
            the Director of Industries and Commerce - RAO BAHADUR,
            N.R.BALAKRISHNA MUDALIAR became its first Indian Superintendent in
            1927. D.P.ROY CHOUDHURY, student of ABANINDRANATH TAGORE, took over
            as the first Indian Prinicipal of the Madras School of Arts and
            Crafts in 1929. K.C.S.PANIKER, suceeded him as Principal in 1957 and
            it was during his tenure that the Madras School of Arts and Crafts
            was upgraded into a College in 1961. In 1973, the Department of
            Technical Education stepped into the administration. Mr.S.DHANAPAL
            who became the Principal, encouraged the study and making of South
            Indian traditional painting and sculpture. The new degree courses in
            B.Sc. Design, B.F.A, Fine Arts were introduced in 1979 in
            affiliation with University of Madras. Similarly the other
            departments like Textile, Ceramic, Painting, Sculpture were also
            established. The Government of Tamil Nadu also created a Department
            of Art and Culture with the specific idea of patronage and guidance
            in the field of Arts and Design. The College of Arts and Crafts,
            Chennai was brought under its purview in December 1991. Under the
            Department of Art and Culture purview, PG programme like
            M.F.A-Painting was introduced in 1999. The next year, Visual
            communication Design, Ceramic Design, Textile Design was introduced
            and M.F.A-Sculpture was introduced during 2009-2010. The Government
            College of Fine Arts became affiliated to Tamil Nadu Dr.J
            Jayalaithaa Music and Fine Arts University.
          </li>
          <li className=" mb-3">
            <h3 className="text-center text-uppercase text-warning ">
              Faculity
            </h3>
            With the dedicated effort from Department of Art and Culture,
            Faculty, Staff and Students both past and present, the college today
            boasts with an exalted status of academic distinction, nationally
            and internationally. The 4-year full time UG Degree courses are
            Painting, Sculpture, Print making, Visual Communication Design,
            Textile Design, Ceramic Design. These Under Graduate Degree can be
            succeeded by two year fulltime PG degree courses which includes
            Painting, Sculpture, Visual Communication Design, Ceramic Design and
            Textile Design.
          </li>
        </ul>
      </Container>
    </>
  );
}

export default About;
