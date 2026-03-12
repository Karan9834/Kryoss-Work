import img1 from "../../../assets/IosApp/img1.webp";
import img2 from "../../../assets/IosApp/img2.webp";
import img3 from "../../../assets/IosApp/img3.webp";
import img4 from "../../../assets/IosApp/img4.webp";
import img5 from "../../../assets/IosApp/img5.webp";
import img6 from "../../../assets/IosApp/img6.webp";
import img7 from "../../../assets/IosApp/img7.webp";
import img8 from "../../../assets/IosApp/img8.webp";

export default function FirebaseWhyChooseUs() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-semibold mt-5 leading-tight">
            Your Reliable Partner for{" "}
            <span className="text-green-600">
              Firebase App Development
            </span>
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            With years of experience delivering cloud-powered applications,
            our team helps agencies and businesses launch scalable products.
            We combine technical expertise, modern architecture, and a
            collaborative development approach to ensure every project
            succeeds.
          </p>

        </div>


        {/* GRID */}

        <div className="grid lg:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Results-Focused Development
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Every application we build is designed with business impact in
              mind. From architecture to user experience, our solutions are
              focused on helping your product grow and deliver measurable
              results.
            </p>

            <div className="mt-6">
              {/* IMAGE */}
              <img
                src={img1}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>


          {/* CARD 2 */}

          <div className="bg-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Skilled Development Team
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Our engineers specialize in modern cloud technologies and
              scalable architectures. This ensures that every application
              we develop remains stable, secure, and ready for growth.
            </p>

            <div className="mt-6">
              <img
                src={img2}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>


          {/* CARD 3 */}

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Intuitive UI/UX Design
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Our designers focus on creating clean and intuitive interfaces
              that improve usability and engagement. A well-designed
              experience helps retain users and increases product value.
            </p>

            <div className="mt-6">
              <img
                src={img3}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>


          {/* CARD 4 */}

          <div className="bg-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Transparent Workflow
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              We maintain open communication during the entire development
              process. Regular updates and collaborative planning ensure
              that projects move forward without surprises.
            </p>

            <div className="mt-6">
              <img
                src={img4}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>


          {/* CARD 5 */}

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Long-Term Collaboration
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              We support businesses beyond the launch phase. Our team
              provides continuous improvements, maintenance, and technical
              support to help your application evolve.
            </p>

            <div className="mt-6">
              <img
                src={img5}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>


          {/* CARD 6 */}

          <div className="bg-green-100 rounded-2xl p-8 border border-green-200 hover:shadow-lg transition">

            <h3 className="text-xl font-semibold text-green-700">
              Enterprise-Level Security
            </h3>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Security is a priority in every solution we build. Our
              architecture follows industry best practices to protect
              sensitive data and ensure reliable performance.
            </p>

            <div className="mt-6">
              <img
                src={img6}
                alt=""
                className="max-h-40 object-contain"
              />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}