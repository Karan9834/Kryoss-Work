import { ShieldCheck, TrendingUp, Users } from "lucide-react";

export default function FirebaseBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}

        <div>
          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Benefits
          </span>

          <h2 className="text-4xl font-semibold mt-6 leading-tight">
            Strategic Advantages of Our{" "}
            <span className="text-green-600">
              Firebase App Development
            </span>{" "}
            Solutions
          </h2>

          <p className="text-gray-500 mt-6 leading-relaxed max-w-lg">
            Partnering with our Firebase development team enables businesses
            to build powerful cloud-driven applications without maintaining a
            large in-house engineering team. We combine modern architecture,
            performance optimization, and scalable infrastructure to deliver
            digital products that grow with your business.
          </p>
        </div>


        {/* RIGHT BENEFITS */}

        <div className="space-y-8">

          {/* BENEFIT 1 */}

          <div className="flex gap-5 group">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <Users size={22}/>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Access to Premium Users
              </h4>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Firebase powered applications help businesses scale globally
                and engage high-value audiences through fast performance,
                real-time data, and seamless user experiences.
              </p>
            </div>

          </div>


          {/* DIVIDER */}

          <div className="border-t border-gray-200"></div>


          {/* BENEFIT 2 */}

          <div className="flex gap-5 group">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <ShieldCheck size={22}/>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Advanced Security Architecture
              </h4>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                Firebase offers powerful security rules and cloud-based
                authentication features that help protect your data and
                ensure safe interactions across your applications.
              </p>
            </div>

          </div>


          {/* DIVIDER */}

          <div className="border-t border-gray-200"></div>


          {/* BENEFIT 3 */}

          <div className="flex gap-5 group">

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white transition">
              <TrendingUp size={22}/>
            </div>

            <div>
              <h4 className="font-semibold text-lg text-gray-800">
                Sustainable Growth & ROI
              </h4>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                With scalable cloud infrastructure and real-time analytics,
                Firebase helps businesses launch faster and achieve long-term
                return on investment through efficient performance and growth.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}