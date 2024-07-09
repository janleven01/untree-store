import Country from "./Country";
import Form from "./Form";

const BillingDetails = () => {
  return (
    <>
      <form>
        <div>
          {/* COUNTRY */}
          <Country className="px-3 py-2.5 border border-black outline-none focus:border-purple my-2" />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 pt-2 gap-5 max-md:gap-2">
          <div className="flex flex-col w-full">
            {/* FIRST NAME  */}
            <Form
              label="First Name"
              type="text"
              name="firstName"
              id="first-name"
              minLength={2}
              maxLength={50}
              isRequired={true}
            />
          </div>
          <div className="flex flex-col w-full">
            {/* LAST NAME */}
            <Form
              label="Last Name"
              type="text"
              name="lastName"
              id="last-name"
              minLength={2}
              maxLength={50}
              isRequired={true}
            />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          {/* COMPANY NAME */}
          <Form
            label="Company Name"
            type="text"
            name="companyName"
            id="company-name"
            minLength={2}
            maxLength={50}
          />
        </div>
        <div className="flex flex-col pt-4 gap-5">
          {/* ADDRESS */}
          <Form
            label="Address"
            type="text"
            name="streetAddress"
            id="street-address"
            placeholder="Stress Address"
            minLength={2}
            maxLength={50}
            isRequired={true}
          />
          <Form
            label="Detailed Address"
            type="text"
            name="detailedAddress"
            id="detailed-address"
            placeholder="Apartment, suite, unit etc. (optional)"
            minLength={2}
            maxLength={50}
            noLabel={true}
          />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 lg:gap-5 gap-2 pt-4">
          {/* STATE/COUNTRY  */}
          <Form
            label="State / Country"
            type="text"
            name="stateOrCountry"
            id="state-or-country"
            minLength={2}
            maxLength={50}
            isRequired={true}
          />
          {/* POSTAL / ZIP */}
          <Form
            label="Postal / Zip"
            type="number"
            name="postalOrZip"
            id="postal-or-zip"
            min={1}
            max={5}
            isRequired={true}
          />
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 lg:gap-5 gap-2 pt-4">
            {/* Email Address */}
            <Form
              label="Email Address"
              type="text"
              name="emailAddress"
              id="email-address"
              minLength={2}
              maxLength={50}
              isRequired={true}
            />
            {/* Phone */}
            <Form
              label="Phone"
              type="number"
              name="phoneNumber"
              id="phone-number"
              placeholder="Phone Number"
              min={10}
              max={20}
              isRequired={true}
            />
        </div>
      </form>
    </>
  );
};

export default BillingDetails;
