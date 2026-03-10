import React from 'react'
import AppointmentHero from '../../../components/Appointment_booking/AppointmentHero'
import AppointmentAbout from '../../../components/Appointment_booking/AppointmentAbout'
import AppScreens from '../../../components/Appointment_booking/AppScreens'
import AppCta1 from '../../../components/Appointment_booking/AppCta1'
import DoctorAppFeatures from '../../../components/Appointment_booking/DoctorAppFeatures'
import AdminFeatures from '../../../components/Appointment_booking/AdminFeatures'
import PlatformsSection from '../../../components/Appointment_booking/PlatformsSection'
import AppFlow from '../../../components/Appointment_booking/AppFlow'
import AppBenefits from '../../../components/Appointment_booking/AppBenefits'
import AppointmentScheduling from '../../../components/Appointment_booking/AppointmentScheduling'
import LaunchSection from '../../../components/Appointment_booking/LaunchSection'
import AppWhySection from '../../../components/Appointment_booking/AppWhySection'
import AppDevelopmentProcess from '../../../components/Appointment_booking/AppDevelopmentProcess'
import DoctorAppSolutions from '../../../components/Appointment_booking/DoctorAppSolutions'
import OnDemandApps from '../../../components/DatingApp/OnDemandApps'
import OnDemandSolutions from '../../../components/DatingApp/OnDemandSolutions'
import TechStack from '../../../components/PestControl/PestTech'
import AppFaqs from '../../../components/Appointment_booking/AppFaqs'
import AppContact from '../../../components/Appointment_booking/AppContact'
import AppBlog from '../../../components/Appointment_booking/AppBlog'
import AppFinalCta from '../../../components/Appointment_booking/AppFinalCta'

const AppointmentBooking = () => {
  return (
    <>
    <AppointmentHero/>
    <AppointmentAbout/>
    <AppScreens/>
    <AppCta1/>
    <DoctorAppFeatures/>
    <AdminFeatures/>
    <PlatformsSection/>
    <AppFlow/>
    <AppBenefits/>
    <AppointmentScheduling/>
    <LaunchSection/>
    <AppWhySection/>
    <AppDevelopmentProcess/>
    <DoctorAppSolutions/>
    <OnDemandApps/>
    <OnDemandSolutions/>
    <TechStack/>
    <AppFaqs/>
    <AppContact/>
    <AppBlog/>
    <AppFinalCta/>
    </>
  )
}

export default AppointmentBooking