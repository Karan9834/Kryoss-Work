import React, { useEffect } from "react";
import AcadifyEduERPHero from "./sections/AcadifyEduERPHero";
import AcadifyEduERPAbout from "./sections/AcadifyEduERPAbout";
import AcadifyEduERPFeatures from "./sections/AcadifyEduERPFeatures";
import AcadifyEduERPHowItWorks from "./sections/AcadifyEduERPHowItWorks";
import AcadifyEduERPTechStack from "./sections/AcadifyEduERPTechStack";
import AcadifyEduERPGallery from "./sections/AcadifyEduERPGallery";
import AcadifyEduERPCTA from "./sections/AcadifyEduERPCTA";

const AcadifyEduERPPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans antialiased overflow-hidden">
            <AcadifyEduERPHero />
            <AcadifyEduERPAbout />
            <AcadifyEduERPFeatures />
            <AcadifyEduERPHowItWorks />
            <AcadifyEduERPTechStack />
            <AcadifyEduERPGallery />
            <AcadifyEduERPCTA />
        </div>
    );
};

export default AcadifyEduERPPage;
