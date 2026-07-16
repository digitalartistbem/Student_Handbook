export interface HandbookSection {
  id: string;
  title: string;
  category: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
  tableData?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
}

export interface Offense {
  number: number;
  description: string;
  firstViolation: string;
  secondViolation: string;
  thirdViolation: string;
  gravity: 'Minor' | 'Major' | 'Extreme';
}

export interface Scholarship {
  id: string;
  name: string;
  type: 'Institutional' | 'Academic';
  description: string;
  qualifications: string[];
  benefits: {
    criteria: string;
    discount: string;
  }[];
  conditions: string[];
  requirements: string[];
}

export const handbookCategories = [
  { id: 'info', name: 'General Info & History', icon: 'Info' },
  { id: 'programs', name: 'Academic Programs & Admission', icon: 'BookOpen' },
  { id: 'enrollment', name: 'Enrollment & Fees', icon: 'FileText' },
  { id: 'policies', name: 'Academic Policies & Loads', icon: 'Scale' },
  { id: 'scholarships', name: 'Scholarships & Grants', icon: 'GraduationCap' },
  { id: 'grading', name: 'Grading & Scholastic Standings', icon: 'Award' },
  { id: 'conduct', name: 'Student Conduct & Honesty', icon: 'ShieldAlert' },
  { id: 'disciplinary', name: 'Disciplinary Offenses & Rules', icon: 'Hammer' },
  { id: 'curricular', name: 'Curricular Rules (OJT & Thesis)', icon: 'Briefcase' },
  { id: 'services', name: 'Services & Organizations', icon: 'Users' },
  { id: 'pledges', name: 'Pledges, Hymn & Conforme', icon: 'Heart' },
];

export const handbookSections: HandbookSection[] = [
  {
    id: 'foreword',
    title: 'Foreword',
    category: 'info',
    content: `This Student Handbook is a useful resource tool that orients you on the academic and non-academic policies of ACLC/ACLC College. This handbook contains the history, philosophy and objectives of the institution as well as enumerates the services and academic support available to you, our students.\n\nWe encourage you to familiarize yourselves with the rules and regulations of ACLC or ACLC College as may be applicable to you so as to guide you with your decisions as well as the corresponding disciplinary actions. Any concerns or questions not covered in this Handbook may be referred to the Dean, Coordinator, Registrar or School Director.\n\nWelcome to ACLC/ACLC College!`,
  },
  {
    id: 'history',
    title: 'History of AMA Education System & ACLC',
    category: 'info',
    content: `The AMA Group of Companies was built upon the dream of the late Amable M. Aguiluz Sr. (AMA), Auditor General and National Treasurer during the term of President Diosdado Macapagal, to build an institution that would provide world-class education to Filipino youth.\n\nThat dream bore fruit on October 20, 1980 when his son, Dr. Amable R. Aguiluz V (ARA), established the AMA Institute of Computer Studies and blazed the trail for popular computer education in the country. Originally located along Shaw Boulevard, the pioneering school offered EDP Fundamentals, Basic Programming and Technology Career courses.\n\nIn June 1981, AMA Computer College (AMACC) was launched offering a four-year degree program in Computer Science, the first to be offered in the country. From only 13 students, the population of AMACC surged to 600 in 1983 and to 2,000 in 1985. To meet the growing demand for computer-related programs, AMACC established its first campus in Makati in 1983. A second campus followed in 1986 in Project 8, Quezon City.\n\nIn 1987, AMA Computer Learning Center (ACLC) was established offering short courses in computer programming and two-year technical vocational courses. Today, there are more than 100 learning centers nationwide.\n\nIn the same year, AMA Basic Education was formed to offer elementary, high school and eventually pre-school education. Now known as the St. Augustine International School, its branches are located in Metro Manila, Laguna, Cebu, and Davao.\n\nIn 1996, AMA Telecommunications and Electronics Learning Center (AMATEL) was established, the country's first-ever telecommunications school. It is now called AMA International Institute of Technology (AIIT).\n\nIn 1998, ABE International Business College was established offering programs in Hotel and Restaurant Management (HRM), Business Administration and other computer-related programs. Today, ACLC / ACLC College has sixty eight branches nationwide.\n\nThe AMA school network also expanded overseas with branches in Los Angeles, California; Manama, Bahrain; Bangladesh; China; and Hong Kong. In 2000, AMAES launched its most ambitious expansion program with no less than 14 branches being set up nationwide. To help its graduates find employment, AMA established in the same year its own manpower placement agency called INFOTECH Professional Services Inc.\n\nThe year 2002 saw AMA expanding into maritime education, medicine, nursing, caregiving and allied health courses. Now, the Norwegian Maritime Academy (NMA), the AMA School of Medicine (ASM), and the St. Augustine School of Nursing (SASN) are making a mark in their respective fields with their IT-based curricula.\n\nAMA Education System (AMAES), the umbrella for AMA schools, currently boasts of more than 200 campuses nationwide and in key foreign cities. It has proudly produced more than 150,000 professionals who have been gainfully employed locally and overseas.\n\nOn August 20, 2002, AMA was granted University status by the Commission on Higher Education (CHED), a well-earned tribute to the first ISO-certificated computer educational institution in the Philippines. Founding Chairman Dr. Amable R. Aguiluz V was installed as the first AMA University President.`,
  },
  {
    id: 'mission-vision',
    title: 'Philosophy, Mission, Vision & Aims',
    category: 'info',
    content: `Our institution is driven by a deep philosophy of lifelong human development and a precise vision for leadership in technology-based business education.`,
    subsections: [
      {
        title: 'Philosophy',
        content: `Education is a lifelong development of human elements within the context of socio-cultural environment in which he lives and operates.\n\nLearner is an individual capable of full acquisitions of self-actualization and productivity through exposures and experiences to various learning conditions.\n\nTeacher is a catalyst who initiates and provides learning process adapted to individual differences of the learners, utilizes effective and modern learning techniques with the ultimate goal of maximizing the learner's potential growth process.`,
      },
      {
        title: 'Vision',
        content: `The vision of the ACLC/ACLC College is to become the leader and dominant provider of quality and excellent information technology - based business education and related services in the global market.`,
      },
      {
        title: 'Mission',
        content: `The global mission of ACLC/ACLC College is to provide a holistic, quality, computer-based education in all levels and disciplines with the objective of producing professionals and leaders responsive to the needs of science and the international community for the honor and glory of God Almighty.`,
      },
      {
        title: 'Specific Aims',
        content: `1. To provide students with the necessary knowledge, skills and attitudes through a competency-based curricula necessary for them to be gainfully employed in both local and international companies and organizations.\n2. To provide the students with the relevant trainings and tools that will develop and enhance their potentials and skills that match the needs and demands of the industry.\n3. To develop in them critical thinking skills and enable them to make informed decisions.\n4. To instill in them the values of self-respect, honesty, obedience, compassion, punctuality, social responsibility, self-reliance, and self-discipline to be effective professionals and leaders.\n5. To mold them to become responsible and productive citizens who are socially responsible and capable of making positive contribution to the country's development.`,
      },
    ],
  },
  {
    id: 'academic-programs',
    title: 'Academic Program Offerings',
    category: 'programs',
    content: `ACLC College offers various Academic Programs ranging from standard Commission on Higher Education (CHED) four-year baccalaureate degrees to Technical Education and Skills Development Authority (TESDA) vocational registrations, and customized Bundled Programs.`,
    subsections: [
      {
        title: 'Degree Programs (CHED)',
        content: `• BS Accountancy\n• BSBA major in Human Resources Development Management\n• BSBA major in Marketing\n• BSBA major in Management Information Systems\n• BSBA major in Entrepreneurship\n• BSBA major in Financial Management\n• BS Computer Science\n• BS Information Technology\n• BS Information Systems`,
      },
      {
        title: 'TESDA Programs with Training Regulation (WTR)',
        content: `• Programming NC IV\n• Computer-based Accountancy\n• Business & Information Management\n• Animation NC II\n• 2D Animation NC III\n• 3D Animation NC III\n• Software Developer - Java\n• Software Developer - Microsoft.NET\n• Bookkeeping NC III\n• Technical Drafting NC II`,
      },
      {
        title: 'TESDA Programs with No Training Regulation (NTR)',
        content: `• Software Development\n• Web Applications Development / Web Development Technology\n• Multimedia Technologies\n• Networking & Telecommunications Technologies\n• Computer Systems and Network Technology`,
      },
      {
        title: 'Bundled Programs',
        content: `• Computer Graphics & Animation\n• Computer System Design and Programming\n• Business & Office Administration Services\n• Computer-based Accounting\n• Project Management\n• Architectural Design`,
      },
    ],
  },
  {
    id: 'admission-policy',
    title: 'Admission Policies & Requirements',
    category: 'programs',
    content: `Admission to ACLC/ACLC College is open to all qualified applicants. Admission is determined by the applicant's readiness and ability to contribute towards the enrichment of the academic community and potential to be of service to the Filipino people and global community.`,
    subsections: [
      {
        title: 'Admission Procedure',
        content: `1. Proceed to Admissions Office for assessment of credentials and accomplish the Application Form.\n2. Pay the non-refundable Admissions Entrance Exam Fee of Php 100.00 at the Cashier's Office (Graduates from AMAES feeder schools are exempted).\n3. Take the Entrance Examination (for "Freshman") or Qualifying Exam (for "Transferee") on the scheduled date.\n4. Get the results of the exam. After passing, submit all required documents to the Admissions Officer.`,
      },
      {
        title: 'Requirements for Freshman Students',
        content: `• Completely filled out application form\n• Form 138 (High School Report Card) or F137-A (High School Transcript) from DepEd-accredited schools\n• Certificate of Good Moral Character from High School attended\n• Two pcs. of (2x2) and (1x1) recent photographs (colored)\n• Photocopy of NSO Birth Certificate or legal adoption papers (original copy must be presented for verification)\n• One (1) long brown envelope`,
      },
      {
        title: 'Requirements for Transferee / New Students',
        content: `A student transferee from another institution must submit the following requirements to the Admissions officer:\n1. Completely filled up application form\n2. Honorable Dismissal from the school previously attended\n3. Certificate of Good Moral Character from previous school\n4. Transcript of Records (TOR) or Certified True Copy of Grades (TCG) for evaluation purposes\n5. Course description of all completed courses for which transfer credit is sought (authenticated by Registrar from originating school)\n6. Photocopy of Birth Certificate or legal adoption papers\n7. Two pcs of (2x2) and two pcs of (1x1) recent photographs (colored)\n8. One (1) long brown envelope`,
      },
      {
        title: 'Residency Requirements for Transfer Students',
        content: `Transfer students are required to complete at least 50% of the program credit requirements in residence at ACLC/ACLC College. A maximum of 50% of the program course requirements can be applied for credit transfer.`,
      },
      {
        title: 'Transferees from AMAES Member Schools',
        content: `A student transferring from an AMAES member school maybe admitted to ACLC/ACLC College provided the following requirements are submitted to the Admissions officer:\n1. Certified True Copy of Grades\n2. Letter of Intent to transfer\n3. Honorable Dismissal from originating AMAES school\n4. Certificate of Good Moral Character\n5. Two (2) pcs of 2x2 and two (2) pcs of 1x1 recent photographs (colored)\n6. Photocopy of birth certificate or legal adoption papers\n7. One (1) long brown envelope\n\nNote: Transferees from AMAES member schools are not required to take the entrance examination. All equivalent courses/modules of instruction taken from originating AMAES member school can be credited automatically.`,
      },
      {
        title: 'Foreign Student Applicants',
        content: `A foreign student who wishes to enroll at ACLC/ACLC College must submit the following requirements:\n1. Completely filled out application form\n2. Photocopy of Student Visa (original must be presented for verification)\n3. Letter of consent approved by Commission on Higher Education (CHED)\n4. Five copies of revised original Personal History Statement (PHS) duly accomplished and signed by the applicant in English and in national alphabet, accompanied by personal seal, if any, original left and right hand prints on PHS and original photos\n5. A notarized affidavit of support and proof of adequate financial support to cover student's accommodation and subsistence, school dues and other incidental expenses\n6. Photocopy of passport pages where name, photo, birth date and birthplace appear\n7. Photocopy of birth certificate or legal adoption papers\n8. Two copies of (1x1) picture for Student Visa Application`,
      },
    ],
  },
  {
    id: 'enrollment-procedures',
    title: 'Enrollment Steps & Guidelines',
    category: 'enrollment',
    content: `Enrollment procedures vary slightly based on whether the student is a Freshman, Transferee, or an Old/Returning Student. Ensure to follow each designated sequence carefully.`,
    subsections: [
      {
        title: 'For Freshmen',
        content: `1. Secure an Admissions Slip from the Admissions Office.\n2. Proceed to the Dean/Educ. Coordinator's Office for assessment.\n3. Proceed to the Registrar's Office for review of enlisted courses and verification of credentials.\n4. Proceed to the Admissions Office for final encoding of courses.\n5. Proceed to the Accounting Office for assessment of fees.\n6. Pay the assessed fees at the Cashier's Office and a Certificate of Registration (COR) shall be issued.`,
      },
      {
        title: 'For Transferees',
        content: `1. Secure the following from Admissions Office:\n   a. Admission Slip\n   b. Credit Transfer Form\n   c. Transcript of Records for Evaluation\n2. Proceed to the Dean/Educ. Coordinator's Office for assessment/preparation of credit transfer and enlistment, which include:\n   a. crediting of subjects and encoding\n   b. advisement report\n3. Proceed to the Registrar's Office for review of enlisted courses and credited courses.\n4. Proceed to the Dean/Educ. Coordinator's Office for final encoding of courses.\n5. Proceed to the Accounting Office for assessment of fees.\n6. Pay the assessed fees at the Cashier's Office and a Certificate of Registration (COR) shall be issued.`,
      },
      {
        title: 'For Old Students',
        content: `1. Check the schedule of enrollment for old students.\n2. Proceed to the Enlistment area for advisement and enlist the courses that have been advised to enroll in.\n3. Proceed to the Accounting Section for assessment.\n4. Pay the assessed fees at the designated transaction window at the Accounting Office and a COR will be issued.\n\nNOTE:\n• You can also view your grades online and do online enlistment.\n• If you are a returning student, secure first a Clearance Form.`,
      },
    ],
  },
  {
    id: 'withdrawal-refund',
    title: 'Withdrawal of Enrollment & Refund Policy',
    category: 'enrollment',
    content: `Withdrawal of enrollment from the college is allowed until the day before the final examinations with appropriate charges. Regardless of whether the student attended classes or not, the date of filing of the withdrawal form at the Accounting Office governs the refund.`,
    subsections: [
      {
        title: 'Refund Policy for Students Who Paid in Full',
        content: `• Before the start of classes: 100% refund of TOTAL FEES (Tuition and Miscellaneous fees).\n• Within the first week of classes: 90% refund of TOTAL FEES (Tuition and Miscellaneous fees).\n• Within the second week of classes: 80% refund of TOTAL FEES (Tuition and Miscellaneous fees).\n• After the second week of classes: NO REFUND.\n\nNote: Registration Fee, Other Fees, and Application Fees are non-refundable.`,
      },
      {
        title: 'Refund Policy for Students Who Paid in Partial',
        content: `• Before start of classes: Total Amount Paid less (Registration Fee + Other Fees + Application Fees).\n• Within the 1st week of classes: Total Amount Paid less (Registration Fee + Other Fees + Application Fees + 10% of Tuition & Miscellaneous Fees).\n• Within the 2nd week of classes: Total Amount Paid less (Registration Fee + Other Fees + Application Fees + 20% of Tuition & Miscellaneous Fees).\n• After the 2nd week of classes: No refund with appropriate charges.\n\nNote: Registration Fee, Other Fees, and Application Fees are non-refundable.`,
      },
      {
        title: 'Students with PHP 1,000.00 Partial Payment Promo',
        content: `• Students who paid 1,000 pesos shall not be given any refund.\n• Students will have to pay the remaining balance for application, registration, other fees, and appropriate percentage of tuition/miscellaneous fees depending on the date of withdrawal (10% on 1st week, 20% on 2nd week, 100% after 2nd week).`,
      },
    ],
  },
  {
    id: 'cash-discount-notes',
    title: 'Cash Discounts & Promissory Notes',
    category: 'enrollment',
    content: `Financial considerations including cash discounts, installment options, promissory notes, and identification procedures.`,
    subsections: [
      {
        title: 'Cash Discount',
        content: `The student who pays in cash is entitled to 1% discount on the tuition fees.`,
      },
      {
        title: 'Promissory Note Upon Enrollment',
        content: `As an exception, students may avail of the Promissory Note (PN) only under the following conditions:\n\n• A student with no outstanding balance from previous term may be allowed to pay a minimum of 50% of the required down payment of the current term in cash and execute a promissory note (PN) on the balance payable on or before the first day of the preliminary examination (prelims).\n• A student with a previous balance on a prior term must pay his outstanding balance in full and 50% of the required down payment of the current term in cash and execute a PN on the balance of the required down payment of the current term provided such PN is paid on or before the 1st day of the prelims.\n• In cases where a student has an outstanding balance before the final examination, the student shall be allowed to take the final examination. However, the final grades of the student concerned, after being duly recorded and submitted to the Registrar, shall be withheld or the student's re-enrollment is refused.\n• The number of Promissory Notes allowed shall be limited to twenty percent (20%) of the previous term's population less allowance for attrition of twenty percent for all brands.`,
      },
      {
        title: 'Student ID Card',
        content: `All students must secure identification cards from the Registrar's Office. Students must present their Identification Cards when entering the school premises and should be properly worn at all times. The student ID serves as a basis for identifying the student when he transacts business with ACLC/ACLC College. In case of lost ID card, a student should submit an affidavit of loss to the Registrar's Office. The student pays the appropriate fee at the Accounting Office and presents the receipt to the Registrar's Office with a 1" x 1" picture (white background) for replacement of the lost ID.`,
      },
    ],
  },
  {
    id: 'academic-loads',
    title: 'Academic Load & Units Regulations',
    category: 'policies',
    content: `Students should follow the curricular program structure they are enrolled in. Hence, regular academic load will be based on the number of units/hours reflected in the curricular program structure.`,
    subsections: [
      {
        title: 'Regular Academic Load Matrix',
        content: `The regular academic load for a particular trimester refers to the total units reflected in the approved curriculum:`,
      },
      {
        title: 'Academic Load Overload',
        content: `Only graduating students are allowed to have overload units but not to exceed 6 units. Policy on pre-requisites shall also apply. A student must seek approval of the College Dean/Educ. Coordinator before he/she can be allowed to enroll the overload courses.`,
      },
      {
        title: 'Course Prerequisites',
        content: `Courses approved as prerequisites to other courses may not be waived except in meritorious cases. This means that students who have enrolled and fully attended a course that is a prerequisite to another may be allowed to enroll and attend the latter course for credit, without having passed or earned credit/s for the pre-requisite course.`,
      },
      {
        title: 'Course Crediting for Transfer Students',
        content: `• Within AMAES: All equivalent courses will be credited within AMAES member schools. Equivalent courses refer to those with the same course description and credit units for both lecture and laboratory.\n• From Other Schools: Relevant General Education (GE) courses are credited provided the courses have the same course description and course credits. Other preparatory courses can be credited provided these courses have corresponding equivalent in the ACLC/ACLC College program. All major courses must be validated. A student must pay the appropriate validating fee. Should the taker pass the validating exam, the course will be credited. If, however, the taker fails the validating exam, then he/she must enroll the course.`,
      },
    ],
  },
  {
    id: 'course-changes',
    title: 'Adding, Dropping & Course Substitutions',
    category: 'policies',
    content: `Rules on course adjustments including second degrees, course substitutions, and adding or dropping subjects.`,
    subsections: [
      {
        title: 'Second Degree Program',
        content: `Students who are degree holders, granted with Special Orders by the CHED, and who are enrolling in a second degree program will be given credit in all equivalent GE courses, preparatory courses and major courses.\n\nGraduates of ACLC/ACLC College who wish to take a second degree program will be given credit to all GE, preparatory, major courses and elective courses taken in the first-degree program that have equivalent courses in the second-degree program applied for.\n\nThesis, Practicum/OJT will not be given credit for the second-degree program. Thus, the student will be required to enroll and complete all requirements pertaining to the Practicum/OJT requirement of the second program. Thesis or Project Guidelines will be implemented. Thesis topics related or extension of the student's previously completed Thesis in the first degree will be allowed.`,
      },
      {
        title: 'Substitution of Courses',
        content: `Substitution of courses may be allowed only in the following cases:\n• When a student is pursuing a curriculum that has been superseded by a new curriculum and the substitution tends to bring the curriculum in line with the new.\n• When there is conflict of hours between a required course and another course, or\n• When the required course is not offered and non-enrollment of which would result to undue delay in the completion of the program.\n\nPrescribed elective courses can be substituted with the equivalent courses provided that the student applied for the said substitution.\n\nEvery petition for substitution must:\n1. Involve courses within the same department, if possible. If not, the two courses concerned must be allied to each other.\n2. Be between courses having the same number of units, and\n3. Be recommended by the Head of the Department concerned.\n\nNo substitution shall be allowed for any course in which the student has failed or received a grade of "5". All petitions for substitution must be submitted to the Office of Dean/Educ. Coordinator/Educ. Coordinator only after the second week after the formal start of classes. Any petition submitted thereafter shall be considered for the following term. Only after the School Director approved the substitution can the student enroll the substitute course.`,
      },
      {
        title: 'Adding / Dropping of Courses',
        content: `A student who wishes to change/add/drop course(s) should accomplish a dropping/adding form which is available at the Registrar's office provided however, that such change will not conflict with his other schedules and result to overload in units.\n\nAccomplished form should be filed at the Accounting Office not later than the last day of adding/dropping schedule for possible refund or additional payment depending on the course(s) dropped/added.`,
      },
      {
        title: 'Dropping of Course',
        content: `A student is allowed to drop from his/her enrolled course(s) until before the midterm examination without academic penalty. A grade of D (Officially dropped) will be recorded on the transcript for the course(s) from which the student has dropped. The grade D will not be included in the computation of the student's GPA.\n\nA student is not allowed to drop from enrolled course(s) after the midterm examination.\n\nA student who incurred absences for more than 20% of the required total number of laboratory or lecture hours shall be given a grade of UD (unofficially dropped) for the courses where the absences were incurred.\n\nIf absences were recorded before the midterm exam and the student did not drop the courses officially, a grade of UD is given. If absences were recorded after the midterm period, a grade of UD or 5.00 will be given depending on the academic standing of the student. If the academic standing is passing, a grade of UD will be given; if the academic standing is failing, a grade of 5.00 is given.`,
      },
      {
        title: 'Shifting to Another Program',
        content: `Shifting or transferring to another program of ACLC/ACLC College is allowed. All equivalent courses/modules of instruction will be credited towards the new program. The student shall be furnished by the Registrar's Office with a copy of the credited courses under the new program.\n\nTo shift to another program, the student must accomplish an application form for this purpose duly approved by the Dean/Educ. Coordinator of the accepting college and recommended by the Dean/Educ. Coordinator of the originating college.`,
      },
    ],
  },
  {
    id: 'leave-returning',
    title: 'Leave of Absence, Shifting & Dismissals',
    category: 'policies',
    content: `Administrative guidelines on Cross-Enrollment, Transfers, Leaves of Absence (LOA), Re-admission, and Dismissal rules.`,
    subsections: [
      {
        title: 'Cross-Enrollment Regulations',
        content: `Cross-enrollment from AMAES to AMAES/Non-AMAES Schools:\n1. Students are not allowed to cross-enroll if the course is offered in the "mother school".\n2. Non-graduating students are not allowed to cross-enroll.\n3. Non-credit courses are not allowed for cross-enrollment.\n4. Major courses are not allowed for cross-enrollment.\n5. Students maybe allowed to cross-enroll in any of the AMAES Schools depending on the need for completion of the subjects if the student is "graduating" on the said term.`,
      },
      {
        title: 'Leave of Absence (LOA)',
        content: `A student is allowed to file a leave of absence (LOA) from the school until the last day of enrollment. Leave of absence will be reflected in the official transcript of records of the student. A student who did not register and failed to submit approved leave of absence form will be included in the absence without leave (AWOL) list. A student on leave of absence may not participate in co-curricular or extra-curricular activities while on leave from the school.\n\nProcedure on filing leave of absence:\n1. Obtain leave of absence form at the Registras Office.\n2. Accomplish the leave of absence form.\n3. Present the accomplished leave of absence form to the Accounting office and pay the applicable fee.\n4. Submit the completely accomplished leave of absence form to the Registrar for updating of records.`,
      },
      {
        title: 'Returning Student',
        content: `Returning students are those who are returning after not enrolling for more than two (2) terms. Students who are classified under this may be affected by changes in the curriculum and other revalidation procedures.\n\n1. A student who is on LOA or on AWOL for more than one (1) trimester must seek re-admission approval from the College Dean/Educ. Coordinator. A copy of the approved re-admission form must be submitted to the Registrar's Office to re-activate the records of the student.\n2. A student who has been dismissed for academic deficiencies or suspended for disciplinary reasons for one or more trimesters must submit an application for re-admission and a letter of appeal to the College Dean/Educ. Coordinator. The application for re-admission must be recommended.\n\nA student who stopped for more than five (5) years and with only 10% or less of course deficiencies (e.g. 15-21 units remaining to complete the program) shall be allowed to use their old curriculum or the curriculum of which they started with.\n\nThe student must complete the program and graduate within one (1) year. Otherwise, an additional penalty of one (1) course for every year of extension will be imposed. If the remaining deficiency includes Thesis A and B, the student is required to present a new thesis topic and enroll both Thesis A and Thesis B.\n\nA student who stopped for more than five (5) years and with more than 10% of course deficiencies (e.g. more than 21 units remaining to complete the program) shall use the new curriculum or the revised curriculum currently implemented. All courses taken from the previous curriculum will be credited, provided that these are equivalent to the courses in the new/revised curriculum.`,
      },
      {
        title: 'Disqualified / Dismissed Students',
        content: `Students who have been disqualified from the program they are currently enrolled in due to their failure to meet the grade requirements despite allowed remedial classes may seek admission to other programs.\n\nStudents who have been dismissed or disqualified for reasons outlined in the scholastic delinquency policies will not be granted admission in any of the Colleges of AMAES.\n\nRequest for transfer credentials:\nA student who intends to transfer to another academic institution must submit a letter to the College Dean/Educ. Coordinator indicating the intention to transfer and reason(s) for the transfer. Request for transfer credentials shall be filed with the Registrar's Office. A student shall secure a clearance form from the Registrar's Office, signed by the respective department heads indicated in the form, prior to the issuance of the transfer credentials. ACLC/ACLC College strictly enforces a NO Clearance, NO Release of Transfer Credential policy. Students are advised to process their student clearance on time to avoid unnecessary delays.`,
      },
    ],
  },
  {
    id: 'scholarship-list',
    title: 'Scholarship Programs & Criteria',
    category: 'scholarships',
    content: `AMA Education System provides various scholarship grants to qualified, academically exceptional, and financially challenged students, subject to the availability of funds and the approval of the Chairman.`,
    subsections: [
      {
        title: 'Amable M. Aguiluz Sr. Memorial Scholarship Grant',
        content: `In memory of AMA Sr., this scholarship grant is for financially challenged but academically qualified students. Maximum of 1% of total population per branch, application is subject for approval of the Chairman.\n\nQualifications:\nGraduated with above average grade:\n1. Final High School Grade of 80 or better.\n2. No grade below 80 in Mathematics, Science and English.\n\nAnnual Family Income not exceeding:\n• Provincial: Php 72,000\n• NCR: Php 100,000\n\nBenefits (Discount on all fees shall be as follows):\n• HS Average Grade 80 - 89: 50% discount\n• HS Average Grade 90 - 94: 75% discount\n• HS Average Grade 95 and above: 100% discount\n\nA student shall pay corresponding fees including the application, registration and student organization fees.\n\nTerms and Conditions:\n1. To continue enjoying the scholarship grant, the grantee must maintain a GPA of 2.0 on a minimum load of 18 units per trimester.\n2. Scholarship can be granted for a maximum of 4 years only and subject to renewal every term.\n3. No grade below 3.0 or D in all courses enrolled.\n4. Must not be charged with any academic violation.\n5. Must not be involved in any form of conduct violation.\n\nRequirements:\n1. High School Report Card (Form 137)\n2. Income Tax Return/Income Tax Exemption from BIR\n3. Recommendation letter from School Director Approved Application form (With the Chairman's Approval)`,
      },
      {
        title: 'Academic Excellence (ACAEX) Scholarship Award',
        content: `Qualifications:\n1. Minimum of one (1) year residency in the college.\n2. GPA for one year of 1.0 - 1.75 on minimum load of 18 units trimester.\n3. No grade below 3.0 or D in all courses enrolled.\n4. No disciplinary cases/academic violations or pending cases at the office of student services.\n\nBenefits:\n• 100% discount on all fees for student with a GPA of 1.25 or better on the succeeding year (first term)\n• 75% discount on all fees for students with a GPA of 1.26 to 1.50 on the succeeding year (first term)\n• 50% discount on all fees for students with GPA of 1.51 to 1.75 on the succeeding year (first term)\n\nTerms and Conditions:\n1. To continuously enjoy the scholarship award, the recipient must maintain a term GPA of 1.00 - 1.75 on a minimum load of 18 units per trimester.\n2. No grade below 3.0 or D in all courses enrolled.\n3. Must not be charged with any academic violation.\n4. Must not be involved in any form of conduct violation.\n5. Scholarship can be granted for a maximum of 4 years only subject to renewal every term.\n\nRequirements:\n1. True copy of grades issued by the registrar (term grades must be submitted for renewal of scholarship)\n2. Certificate of Good Moral from the Office of Student Relations/Dean/Educ. Coordinator\n3. Approved application form (Chairman/President Approval)`,
      },
      {
        title: 'Procedure to Avail Scholarship (Standard / Renewal)',
        content: `Standard Scholarship Application Procedure:\n1. Secure Scholarships/Financial Aid Application Form from the Admissions Office.\n2. Submit completely accomplished application form to the Office of the School Director at least two (2) weeks before the regular registration period.\n3. Attach the required documents.\n4. Incomplete attachments and late application will not be processed.\n5. Applicants will be notified of the result of their scholarship application one week before the start of regular registration.\n\nStandard Renewal Procedure:\n1. The scholarship grant of a student-beneficiary may be renewed provided he/she complies with all the renewal requirements, whether academic or otherwise.\n2. Secure Scholarships/Financial Aid Application Form from the Admissions Office.\n3. Submit completely accomplished application form to the Office of the School Director at least two weeks before the regular registration period.\n4. Attach all required documents particular to a specific scholarship category.\n5. Incomplete attachments and late application will not be processed.\n6. Applicants will be notified of the result of their scholarship application for renewal one week before the start of regular registration.\n\nProcessing and Approval of Scholarship Application or Renewal of Existing Scholarships:\n1. The School Director shall inform all applicants of the results of their application in writing regardless if the application is approved or disapproved. If approved, indicate the benefits and the requirements to continuously enjoy the scholarship grant.\n2. Students with approved scholarships must submit a photocopy of the letter of approval/Memo to the cashier during payment. Original letter of approval must be presented for verification purposes.\n\nStudents with approved scholarships must submit a photocopy of the letter of approval to the cashier during payment. Original letter of approval must be presented for verification purposes. If approval has not been confirmed, student must pay the minimum required payment. Refund of the payment shall be given once the scholarship has been approved at a later date. Students without approved scholarship memo will not enjoy the scholarship discounts upon enrollment.`,
      },
    ],
  },
  {
    id: 'grading-system',
    title: 'Attendance, Grading Tables & Formulas',
    category: 'grading',
    content: `ACLC College operates on a rigorous trimestral academic calendar. Standard evaluation includes quizzes, class participation, and major term exams, calculated via specific weight matrices.`,
    subsections: [
      {
        title: 'Attendance Policy',
        content: `Students are required to attend classes regularly. Students who incurred more than the allowable number of unexcused absences (20% of the total contact hours) will be dropped from the class and will be given a grade of Dropped due to excessive absences (D) or UD. In cases of prolonged absences due to medical reasons, students are required to present medical certificates or documents. A student who fails to submit a medical certificate or document will be marked absent for the duration.`,
      },
      {
        title: 'Lecture Class Grading Formula (Trimestral Mode)',
        content: `Final Grade = 30% (Prelim Grade) + 30% (Midterm Grade) + 40% (Final term Grade)\n\nBreakdown of grade for each term period must be:\n• Quizzes (2): 40%\n• Class Participation (projects, assignments, recitation, attendance): 10%\n• Major Exam: 50%\n• LECTURE GRADE TOTAL: 100%\n\nFormula:\n(Raw Score / Maximum Score) * 100% = Grade Percentage`,
      },
      {
        title: 'Classes with Laboratory Grading Formula',
        content: `Final Grade = 30% (Prelim Grade) + 30% (Midterm Grade) + 40% (Final Grade)\nTerm Grade = 60% (Lecture Grade) + 40% (Laboratory Grade)\n\nBreakdown of lecture grade per term:\n• Quizzes (2): 40%\n• Class Participation (projects, assignments, recitation, attendance): 10%\n• Major Exam: 50%\n• Lecture Grade: 100%\n\nBreakdown of laboratory grade per term:\n• Experiments/Machine Problems (minimum of 2): 40%\n• Class participation: 10%\n• Major Exam: 50%\n• Laboratory Grade: 100%`,
      },
      {
        title: 'Competency-Based / Modular Program Grading',
        content: `For Modules with Laboratory:\n• Grade = 20% Knowledge + 70% Skills + 10% Attitude\n\nWhere:\n• Knowledge = 40% Quizzes + 20% Class Standing* + 40% Summative Exam\n• *Class Standing = Average (Assignment / Homework, Seatwork, Board work, Recitation, etc.)\n• Skills = 100% Machine Problems/Laboratory Exercises, final projects, actual demonstration for Computer related modules; OR 100% Actual Demonstration of HRS, Tourism, Culinary skills competencies for related modules; OR 50% RLE rating + 50% Skills Lab rating for Health related modules\n• Attitude = 50% Attendance + 50% Classroom Behavior\n\nFor Modules Without Laboratory:\n• Grade = 70% Knowledge + 30% Attitude\n\nWhere:\n• Knowledge = 40% Quizzes + 20% Class Standing* + 40% Summative Exam\n• Attitude = 50% Attendance + 50% Classroom Behavior`,
      },
      {
        title: 'Clearing of Incomplete (IC) Grade',
        content: `A student who received a grade of IC shall be given a period of one (1) year from the time the IC was incurred to complete/remove the grade.\n\nIf however, the student still fails to take the removal/completion examination or submit the requirements for the course(s) within the one (1) year period the IC grade will be converted to a grade of 5.0 and the student will be advised to re-take/re-enroll the course(s).\n\nProcedure for Clearing the IC Grade:\n1. Proceed to the Registrar's Office and secure the completion/removal form.\n2. Fill out the form and submit the form to the Dean/Educ. Coordinator for approval.\n3. Take note of the schedule of removal/completion examination(s) or submit requirements on the scheduled date.\n4. After taking the exam, consult with the Dean/Educ. Coordinator about the result of the exam(s) and the final grade for the course.\n5. Check with the Registrar's office if the IC grade(s) was/were changed accordingly.\n6. If the IC grade(s) was/were changed to a failing mark, the student must re-enroll the course(s).\n7. Absolutely NO appeal on the late removal/completion examination will be entertained.`,
      },
      {
        title: 'General Point Average (GPA) Computation',
        content: `Only grades in academic courses are included in the computation of the GPA. Grades in P.E. and NSTP are not included.\n\nTo compute the GPA:\n1. Multiply the credit units for each course by the corresponding grade points merited in each course to get the honor points.\n2. Add the honor points to get the total.\n3. Divide the total honor points by the total number of credits during the term. Indices are computed to four decimal places rounded off to two.\n\nGrades in courses which were cross-enrolled will be included in the computation.`,
      },
    ],
    tableData: {
      headers: ['Grade Range', 'Grade Point', 'Grade Input', 'Description'],
      rows: [
        ['96 - 100', '1.00', 'A+', 'Excellent'],
        ['91 - 95', '1.25', 'A', 'Very Good'],
        ['86 - 90', '1.50', 'A-', 'Very Good'],
        ['81 - 85', '1.75', 'B+', 'Good'],
        ['75 - 80', '2.00', 'B', 'Good'],
        ['69 - 74', '2.25', 'B-', 'Good'],
        ['63 - 68', '2.50', 'C+', 'Fair'],
        ['57 - 62', '2.75', 'C', 'Fair'],
        ['50 - 56', '3.00', 'C-', 'Fair'],
        ['Below 50', '5.00', 'F', 'Failed'],
        ['IC', '', 'IC', 'Incomplete'],
        ['IP', '', 'IP', 'In Progress'],
        ['W', '', 'W', 'Withdrawn'],
        ['D', '', 'D', 'Dropped'],
      ],
      caption: 'ACLC Trimestral Grading Scale & Equivalents'
    }
  },
  {
    id: 'scholastic-delinquency',
    title: 'Scholastic Delinquency Statuses',
    category: 'grading',
    content: `Scholastic standings are determined by the Grade Point Average (GPA) of the student computed every end of the term. The Registrar shall compute the academic standing of the students and submit list result to the College Dean/Educ. Coordinator for appropriate actions.`,
    subsections: [
      {
        title: 'Good Academic Standing',
        content: `GPA 2.75 or better and passed at least 75% of the total academic units enrolled for the term.`,
      },
      {
        title: 'Academic Probation',
        content: `GPA 3.0 or better and passed at least 50% of the total academic units enrolled for the term.`,
      },
      {
        title: 'Scholastic Delinquency: Student Notice',
        content: `A student who fails 25% of the total units enrolled in the term will be classified as under STUDENT NOTICE.\n\nThe STUDENT NOTICE is a reminder from the College Dean/Educ. Coordinator for the student to improve his/her academic performance in the following term.`,
      },
      {
        title: 'Scholastic Delinquency: Probationary Status',
        content: `A student with GPA of at least 3.0 but failed 50% of the total units enrolled will be placed as under PROBATIONARY status list.\n\nStudents who received STUDENT NOTICE for two (2) consecutive terms will also be placed on the PROBATIONARY status list.\n\n• A student is issued a notice from the College Dean/Educ. Coordinator about his/her probationary status. The letter shall include an advisory for the student on how to improve his/her academic performance and be removed from the PROBATIONARY status.\n• A student placed under PROBATIONARY status will be allowed to enroll a maximum of 15 units in the succeeding term to help him/her improve his/her academic performance.\n• A student will be removed from the PROBATIONARY status list after passing at least 75% of the total units enrolled in the succeeding term and obtaining a GPA of 3.0 or better.`,
      },
      {
        title: 'Scholastic Delinquency: Dismissed Status',
        content: `A student with a GPA below 3.0 and failed more than 75% of the total units enrolled in the term will be classified as under DISMISSED status.\n\nA student who received PROBATION NOTICE for two (2) consecutive terms will also be placed on the DISMISSED status list.\n\n• A student is issued a notice from the College Dean/Educ. Coordinator about his/her dismissed status. The notice letter shall include the advisory for the student on how to apply for re-admission in the same program or in a different program of study.\n• A student placed under DISMISSED status must apply for re-admission in the same program or in a different program of study. The College Dean/Educ. Coordinator must provide a decision one (1) week after the appeal is submitted.\n• A re-admitted student will be allowed to enroll a maximum of 12 units in the succeeding term to help him/her improve the academic status.\n• A re-admitted student will be removed from the DISMISSED status upon passing at least 75% of the total units enrolled in the succeeding term and obtaining a GPA of 3.0 or better.`,
      },
      {
        title: 'Scholastic Delinquency: Disqualified Status',
        content: `A student with GPA below 3.0 and failed 100% of the total units enrolled in the term will be classified as under DISQUALIFIED status.\n\nA student who received DISMISSED NOTICE for two (2) consecutive terms will also be placed on the DISQUALIFIED status list.\n\n• A disqualified student may submit an appeal for re-admission in a different college/program to the School Director. Should the School Director finds merit in the appeal, the letter will be recommended for approval of the VPAA.\n• A re-admitted student will be advised to shift to a less demanding program of study and will be allowed to enroll at the most 12 units in the succeeding term.\n• A student with denied re-admission appeal will be advised to transfer to other institution and will be given honorable dismissal and transcript of record after all school clearances are accomplished.`,
      },
      {
        title: 'Maximum Residency Rule (MRR)',
        content: `A student must finish the requirements of a program of any college using the same curriculum within the period of actual maximum residency rule (MRR) which is equivalent to twice the normal length prescribed for the program.\n\nA student who fails to complete the program of study in the prescribed MRR may request for waiver of the MRR under specific procedures.`,
      },
      {
        title: 'Examinations Policy',
        content: `As a general policy NO student is allowed to take a major examination without the TEST PERMIT. The student should observe the following:\n1. Secure the test permits from the accounting/cashier office at least a day before the scheduled examination to avoid long time spent in queues.\n2. Be at the prescribed examination room and scheduled examination date at least 10 minutes before the start of the exam. Those who are late for at most one(1) hour will be accepted but will not be given extra time to finish the examination.\n3. Wear the school ID and present the test permit to the assigned proctor before entering the examination room. Make sure that the proctor signs the TEST PERMIT.\n4. Take the assigned seat and sign the attendance sheet.\n5. Complete the examination within the prescribed room. All communication devices are not allowed to be used during the examination.\n6. Submit the completed examination to the proctor and leave the examination room quietly.`,
      },
    ],
  },
  {
    id: 'student-conduct',
    title: 'Student Academic Honesty',
    category: 'conduct',
    content: `The following acts are considered violations of student academic honesty and are therefore meted with appropriate sanctions.`,
    subsections: [
      {
        title: '1. Cheating',
        content: `The fraudulent or dishonest presentation of work or presentation of others' work as one's own. It includes using or attempting to use unauthorized materials, information or study aids in any academic exercise such as:\n\n• Use of books, notes, calculators, Internet, communication or collaboration with others, which has not been authorized by the professor;\n• During examination, copying from another student's examination paper, facilitating other students' copying and allowing other students to copy from one's own paper;\n• Submitting or presenting assignments, take home exams or any work written, prepared or completed in full or in part by someone else;\n• Unauthorized access to or use of examinations tests or quizzes;\n• Fabrication, falsification or invention of any information or citation in an academic exercise, listing sources that were not used in the academic exercise, reporting of research, analyses, tests, or other studies never performed; manipulating or altering data or other manifestations of research to achieve a desired result; selective reporting, including the deliberate suppression of conflicting or unwanted data;\n• Using previously completed assignments to satisfy the requirements of another course without the permission of the instructors involved;\n• Handing in the same assignment simultaneously in two or more courses without the full knowledge and approval of all professors involved.`
      },
      {
        title: '2. Plagiarism',
        content: `The act of taking the words, ideas, data, illustrations or statements of another person or source and presenting them as one's own. Including but not limited to:\n\n• Submitting another author's published or unpublished work, in whole, in part, or in paraphrase, as one's own work, without fully and properly crediting the other author with footnotes, citations or other bibliographical reference.\n• Submitting as one's own original work any material, including data, tables, graphs, charts, or other visual material obtained from any source, without acknowledgement and citation of the source.\n• Submitting as one's own original work material produced through acknowledged collaboration with others, unless such collaboration is permitted by the instructor.`
      },
      {
        title: '3. Collusion',
        content: `Assistance or an attempt to assist another student in an act of academic dishonesty. This includes, but is not limited to:\n• doing work for another student;\n• designing or producing a project for another student;\n• willfully providing answers during an exam, test or quiz;\n• calling a student on a mobile phone while taking an exam and providing information;\n• providing a student with an advance copy of a test;\n• leaving inappropriate materials behind at the site of an exam or test;\n• altering outcome/results.`
      },
      {
        title: '4. Inappropriate Proxy',
        content: `The misrepresentation of one's own or another's identity for academic purposes. Students must attend their own classes and be present for all examinations. Those impersonated and impersonators will be suspended or dismissed from the college.`
      },
      {
        title: 'Penalties & Proceedings',
        content: `Penalties for academic offenses may include:\n• resubmission of the work in question\n• submission of additional work\n• a lowered grade or loss of credit\n• a failing grade of 5.0 or UD or denial of credit in the course\n• suspension for a period not exceeding twenty percent (20%) of the prescribed class days\n• dismissal (for a specified term or permanently) from the college.\n\nProceedings:\n1. The student shall be informed in writing of the nature and cause of any accusation against him, and required to answer the accusation in writing.\n2. If the student denies the accusation or alleges some fact or matter in justification or mitigation of the offense, the institution shall form a fact-finding committee to hear and receive evidence;\n3. In all stages of the proceedings, the student shall have the right to assistance of a counsel of his choice;\n4. The student shall have the right to listen to, and examine the evidence presented against him, to ask clarificatory questions through the fact-finding committee, and to present evidence on his behalf;\n5. The fact-finding committee must consider the pieces of evidence presented, and received during the proceedings;\n6. The student shall be informed in writing of the decision promulgated in his case; and\n7. If the student is found culpable, the appropriate penalties shall be imposed.\n\n* Section 105 CHED Manual 2008`
      }
    ]
  },
  {
    id: 'disciplinary-procedures',
    title: 'Disciplinary Due Process & Sanctions',
    category: 'disciplinary',
    content: `All ACLC/ACLC College students are expected to conduct and present themselves in a decent manner, abiding by the generally accepted norms of good behavior at all times. Rules, jurisdictions, and standard due process for handling violations.`,
    subsections: [
      {
        title: 'Jurisdiction and Venue',
        content: `The Office of the Student Affairs where the respondent student is officially enrolled as of the date of alleged commission of the offense shall have jurisdiction over the case regardless of the place where said offense was allegedly or was proved to have been committed.\n\nJurisdiction may however be transferred from one campus to another upon the approval of the president or his authorized representative.`
      },
      {
        title: 'Sanctions Categories',
        content: `Any violation of the rules and regulations shall be subject to disciplinary action and the imposition of corresponding penalty as may be determined by the investigation committee and without prejudice to other sanctions:\n\n• Warning: It is a notice, oral or written to the student that continuation or repetition of specified conduct may be a cause for other disciplinary action.\n• Reprimand: It is a severe form of formal rebuke by a person in authority.\n• Censure: This may either be an oral or written reprimand for violation of specified regulation(s).\n• Restitution: Repayment of the direct cost for damages or services resulting from a violation.\n• Suspension: A school is allowed to deny or deprive an erring student of attendance in classes during the school year or term for a maximum period not exceeding 20% of the prescribed school days. (Punitive or Preventive).\n• Exclusion or Dismissal: This is a penalty in which the school is allowed to exclude or drop the name of the student from the school enrollment list for being undesirable and dismiss the student during the term and not allow him/her to finish the term.\n• Expulsion: The penalty of an expulsion is an extreme penalty on an erring student consisting of his exclusion from admission to any public or private in the Philippines and requires the prior approval of the Commission on Higher Education (CHED).`
      },
      {
        title: 'Due Process Procedures',
        content: `1. The student shall be informed in writing of the nature and cause of any accusation against him, and required to answer the accusation in writing. If the student is a minor, the parent or the guardian shall be furnished with a copy of a show cause letter;\n2. If the student denies the accusation or alleges some fact or matter in justification or mitigation of the offense, the Student Disciplinary Tribunal shall hear and receive evidence;\n3. In all stages of the proceedings, the student shall have the right to assistance of a counsel of his choice;\n4. The student shall have the right to listen to, and examine the evidence presented against him, to ask clarificatory questions through the fact-finding committee, and to present evidence on his behalf;\n5. The fact-finding committee must consider the pieces of evidence presented, and received during the proceedings;\n6. The student shall be informed in writing of the decision promulgated in his case; and\n7. If the student is found culpable, the appropriate penalties shall be imposed.`
      }
    ]
  },
  {
    id: 'ojt-requirements',
    title: 'On-The-Job Training (OJT) Regulations',
    category: 'curricular',
    content: `On-The-Job Training / Practicum programs are structured off-campus based training programs and hands-on practical integration of formal classroom training. The primary purpose is to develop student skills and meet industry standards.`,
    subsections: [
      {
        title: 'Practicum Procedure',
        content: `1. The student should enroll in the appropriate OJT/Practicum course. Make sure that the correct units are enrolled. Practicum/OJT courses are charged as lecture.\n2. Meet with the assigned Practicum/OJT adviser and get instructions on:\n   • Company/Organization where the student will have his/her OJT/Practicum. Students can only undergo OJT/Practicum in related/relevant training institutions.\n   • Guidelines and tips on how to report to the company/organization, objectives and tasks of the training as well as the name of the contact person/training institution supervisor and the schedule of duty of the student to the company.\n   • Scope of the training must be within the discipline or within the line of work of the student.\n3. Report to the assigned company/organization and excel in the assigned tasks/duties.\n4. Write the case(s) based on actual experience and apply the theories and principles learned in the classroom.\n5. Meet with the Practicum/OJT adviser as scheduled (one hour per week) and submit the required progress reports. Meetings with OJT/Practicum adviser will not be counted as part of the required OJT/Practicum hours.\n6. Students must complete the required number of hours as indicated in their respective program of study or complete a programming module/package, depending on the agreement of the student-trainee, practicum adviser/mentor and training institution supervisor.`
      },
      {
        title: 'Evaluation of Student Performance',
        content: `Since a definite work schedule shall have been agreed upon between the Practicum Adviser / Mentor and the training institution practicum supervisors, the student must be able to finish the work assigned to him/her on time. The student will be evaluated on the basis of performance of the tasks assigned to him/her.\n\nThe following skills/competencies/attitude will be the basis for assessing student-trainee performance and numerical grade:\n\n• Technical Skills: Effective application of identified skills and knowledge to meet the requirements or problems in their assigned areas or scope of responsibility (e.g. documentation, encoding, programming, etc.).\n• Quality of Work: Consider accuracy of work done based on expected output, reliability of the output, judgment to quality standards and delivery of output against target dates.\n• Initiative and Dedication: Consider attitudes toward work (e.g. enthusiasm, aggressiveness and persistence).\n• Interpersonal and Team Relationships: Harmonious working relationships in carrying out work activities with employees and scope and receptiveness in dealing with others.\n• Attendance and Punctuality: Number of absences and tardiness per evaluation period will be noted against the student's-trainee's score.\n• Personality Assessment: Appropriateness of the attire to the working environment, good grooming, cheerfulness and good communication skills forms part of the evaluation.\n\nLikewise, the OJT/Practicum adviser must provide an evaluation and numerical grade base on the following:\n• Attendance during scheduled meetings\n• Submission of the required documents including copy of the certificate of completion. A grade of IC will be issued to the students for failure to submit copy of the certificate of completion.\n\nFinal Grade = 90% (grade from training institution) + 10% (grade from OJT/Practicum adviser)\n\nCopy of the Certificate of Training Completion from the training institution will be submitted to the OJT adviser. The original Copy will remain with the student.`
      },
      {
        title: 'Field Trip',
        content: `Students who are joining the off-campus trip are briefed by the Dean/Educ. Coordinator/Program Head at least one (1) day before the actual schedule of the trip.\n\n1. Students are not allowed to bring, purchase and drink any alcoholic beverages or illegal substance during the entire field/educational trip\n2. Students must at all times conduct themselves as responsible persons in dealing with co-students, faculty members and company authorities.\n3. Students are not allowed to leave the designated premises for the duration of the trip\n4. Students will not be allowed to join the trip unless an official receipt indicating full payments of the field trip cost is presented.\n5. Students will not be allowed to joint the field trip without signed written consent and waiver from the parent or guardian. The said waiver must be submitted to the office of the Dean/Educ. Coordinator at least 1 week before the scheduled date of the trip`
      }
    ]
  },
  {
    id: 'thesis-requirements',
    title: 'Thesis / Capstone Project Rules',
    category: 'curricular',
    content: `Thesis or Capstone Projects are terminal courses and therefore only graduating students or on their last year of attendance are allowed to enroll the said course.`,
    subsections: [
      {
        title: 'General Procedure',
        content: `1. Thesis or Capstone Projects are terminal courses. Only graduating students are allowed to enroll.\n2. After enrollment of the course, students must report to the assigned adviser and attend regular scheduled class meetings.\n3. Submit requirements of the course according to schedule.\n4. Pay the defense fee and present/defend the completed Thesis/capstone project as scheduled.`
      },
      {
        title: 'Thesis A / DESPRO 1 Grading System',
        content: `Course Requirements:\n• Topic Proposal\n• Chapter 1 (Introduction) + exam\n• Chapter 2 (Review of Literature) + exam\n• Chapter 3 (Materials & Method) + exam\n\nFinal Grade = 30% (Prelim) + 30% (Midterm) + 40% (Final)\n\nA student will receive an "IC" mark for the following reasons:\n1. Failure to pay financial obligations even if the required chapters 1, 2 and 3 were submitted. Should any of the member of the group fail to pay outstanding financial obligations, only said member will be given an IC mark. The appropriate numerical grade will be given upon presentation of proof of payment for the outstanding balance.\n2. Failure to submit the revised Chapters 1, 2 and 3 even if the student has no outstanding financial obligations. The appropriate numerical grade will be given upon submission of the revised chapters. Guidelines for removal of IC will be implemented.\n\nA student will receive a grade of 5.0 if he fails to submit Chapter1, Chapter 2 and Chapter 3 during the designated deadlines. A student who got a failing grade must re-enroll the course and will be allowed to use the same topic/project for a period not exceeding one year. After which the student must present a new topic/project.`
      },
      {
        title: 'Thesis B Grading System',
        content: `Course Requirements:\n• Hardbound copy of the Thesis (3 copies)\n• Software/Hardware/Prototype\n• Oral Defense\n\nGrading System Matrix:\n• FINAL PAPER: 30%\n  - Originality / Inventiveness: 15%\n  - Quality of thesis manuscript: 15%\n• PROTOTYPE: 35%\n  - Conceptual & Logical Design: 20%\n  - Workability & Application: 15%\n• ORAL PRESENTATION: 35%\n  - Quality of thesis presentation: 20%\n  - Ability to defend the thesis: 15%\n• TOTAL: 100%\n\nFinal Grade = Final Paper Grade + Prototype Grade + Oral Defense Grade.\n\nA student will be given IC marks for the following reasons:\n1. Failure to pay financial obligations even if all requirements were complied with. Should any of the member of the group fail to pay outstanding financial obligations, only said member will be given an IC mark. The appropriate numerical grade will be given upon presentation of proof of payment for the outstanding balance.\n2. Failure to submit the hardbound copy of the thesis. The appropriate numerical grade will be given upon submission of all course requirements. Guidelines for removal of IC will be implemented.\n\nStudents will be given grade of 5 for the following reasons:\n1. Failure to remove IC mark.\n2. Failure to defend thesis on the scheduled date plus 1 week grace period.\n3. Failing grades in the three categories: Final Paper, Prototype and Oral Defense.\n\nA student who got a failing grade must re-enroll the course and will be allowed to use the same topic/project for a period not exceeding one year. After which, the student must present a new topic/project.`
      },
      {
        title: 'Capstone Project Evaluation Details',
        content: `Capstone Project refers to the final project meant to encapsulate all things learned in the IT and IS program of study. The capstone project shall provide the students with an experience that brings together the technical knowledge the students with on "real-life" projects or applications. Students shall be able to apply problem/project definition, project planning, design selection and optimization, team building, communication, presentation skills, interpersonal skills, meeting skills, and conflict resolution. Students are encouraged to collaborate with corporations, industry and government clients in order for them to develop projects with real life application.\n\nGrading System for CAPSTONE PROJECT is as follows:\n• Preliminary Period (Chapter 1 Intro + exam, Chapter 2 Review of Lit + exam, Chapter 3 Materials & Method + exam): 30% of total grade\n• Midterm Period (Chapter 4 Results/Findings and Analysis, Chapter 5 Conclusion and Recommendations): 30% of total grade\n• Final Period (Final Paper Grade, Prototype Grade, Oral Defense Grade): 40% of total grade\n\nFinal Capstone Grade = 30% (Prelim) + 30% (Midterm) + 40% (Final)\n\nA student will receive an "IC" mark for the following reasons:\n1. Failure to pay financial obligations even if all course requirements was submitted.\n2. Failure to submit the hardbound copy of the capstone project. The appropriate numerical grade will be given upon submission of the revised chapters. Guidelines for removal of IC will be implemented.\n\nA student will be given grade of 5 for the following reasons:\n1. Failure to submit the required chapters on schedule plus 1 week grace period\n2. Failure to remove IC mark within the allowed period.\n3. Failure to defend capstone project on the scheduled date plus 1 week grace period.\n4. Failing grades in the three categories: Final Paper, Prototype/Software and Oral Defense.`
      }
    ]
  },
  {
    id: 'graduation-honors',
    title: 'Graduation Requirements & Academic Honors',
    category: 'scholarships',
    content: `The institution confers degrees and titles only to a student who has satisfactorily completed all the academic and non academic requirements in the curriculum based on the student's record in the office of the Registrar.`,
    subsections: [
      {
        title: 'Graduation Procedure',
        content: `1. The student should secure and submit his/her application for graduation at the Registrar's Office.\n2. The Registrar evaluates whether the student has complied with all requirements towards the degree.\n3. After evaluation, the Registrar will confirm the student "graduating" status:\n   a. Preliminary deliberation shall be conducted when the midterm grades are available while the final deliberation is done after the submission of final grades for students.\n   b. List of candidates indicating deficiencies shall be posted in the bulletin board after the first deliberation.\n4. The student should secure clearance from the different department such as Accounting Division, Library, Guidance etc.\n5. The Registrar will submit the list of graduates to the Dean/Educ. Coordinator/SD for counter checking including the advisement reports and credentials and obtains their signature.\n6. Registrar submits the list of graduates to the Chief Registrar for final approval. The Chief Registrar counterchecks vs. advisement reports and credentials.`
      },
      {
        title: 'Academic Honors (Summa, Magna & Cum Laude)',
        content: `The following honors are awarded to graduating students who satisfied the required residency and grade requirements:\n\n• Summa Cum Laude: GPA 1.00 - 1.20 | No grade lower than 2.00 (Academic) or 2.50 (Non-academic)\n• Magna Cum Laude: GPA 1.21 - 1.40 | No grade lower than 2.25 (Academic) or 2.75 (Non-academic)\n• Cum Laude: GPA 1.41 - 1.75 | No grade lower than 2.50 (Academic) or 3.00 (Non-academic)\n\n* Grade requirements refer to those taken inside and outside the college.\n\nThe Honors/Awards Committee headed by the Registrar shall call for the nomination to graduation awards by sending a notice to the academic community. The Registrar will convene a committee for the deliberation, selection and recommendation of the awardees.\n\nTo qualify for Academic Honors the student must:\n1. Have completed at least fifty percent (50%) of the total number of academic units at the ACLC/ACLC College.\n2. Have enrolled at least 15 units per term except on his/her last term as a graduating student as prescribed in the curriculum.\n3. No grade below 3.0 or D.\n4. No derogatory record during his/her stay in the school.\n5. Not be charged with any academic/disciplinary violation.`
      }
    ]
  },
  {
    id: 'non-academic-awards',
    title: 'Non-Academic & Leadership Awards',
    category: 'scholarships',
    content: `The AMA Education System recognizes student achievements in extra-curricular, co-curricular, athletic, and leadership fields.`,
    subsections: [
      {
        title: 'Leadership Award',
        content: `The award is presented to a qualified member of the graduating class who has an outstanding participation in co-curricular and extra curricular activities that promote student and school welfare. The nominee must have exhibited exemplary character and at least one-year residence at ACLC/ACLC College. He/she should have maintained a cumulative GPA of 2.50 or better with no failing grade in any academic/non-academic subject and should have passed the criteria set and endorsed by the Branch Screening Committee.`
      },
      {
        title: 'Outstanding Project/Feasibility/Thesis Award',
        content: `The award is given to a student or group of students whose terminal project, feasibility, thesis, or capstone grade ranks highest in the graduating class.`
      },
      {
        title: 'Community Service Leadership Award',
        content: `This award recognizes civic-minded students with exemplary contribution to the improvement of the quality of life of their fellow Filipinos through their selfless and untiring service and dedication. Qualifications:\n1. Grade Point Average (GPA) of at least 2.5;\n2. At least two (2) years residency at ACLC/ACLC College\n3. Active involvement in a community extension project (off-campus) for at least two years (certification to be issued by the Dean/Educ. Coordinator/Community Extension Coordinator);\n4. Not be charged with any academic violation.\n5. Not be involved in any form of conduct violation.`
      },
      {
        title: 'Athletic Award',
        content: `This award honors a student-athlete who has consistently rendered outstanding performance in sport competitions. To qualify, a student athlete must have:\n1. Grade Point Average (GPA) of at least 2.5;\n2. At least two (2) years of residency ACLC/ACLC College\n3. At least two (2) years membership in a varsity team as certified by the sports coordinator; and\n4. Certification of good moral character as certified by the Office of the Student Affairs.`
      }
    ]
  },
  {
    id: 'services-facilities',
    title: 'Student Services, Library & Clinics',
    category: 'services',
    content: `ACLC provides various student support systems, counseling services, physical clinics, and library facilities to ensure a comfortable and holistic learning experience.`,
    subsections: [
      {
        title: 'The Library Policy',
        content: `The library is open from Monday to Saturday. Only bonafide members of the ACLC/ACLC College community are allowed to use the library. Outsiders may use the library facilities only upon prior written request from the librarian of the applicant's institution and approval of the School Director. ACLC students must secure a library card in order to borrow books from the library.\n\nBooks in the circulation section maybe borrowed for three (3) school days while reserved books can only be borrowed overnight. ACLC College maintains an open shelf system in order that the books will be more accessible to the students.\n\nBorrowing Privileges and Loan Periods:\n1. Circulation books may be taken out for overnight use and should be returned within three (3) days.\n2. Students may borrow a maximum of three (3) books of different subjects overnight. The books may be renewed if such reference materials are not in demand.\n3. Faculty is allowed to borrow at most five (5) books at a given time for a period of one week and renewable for another week if not in demand; however the books should be kept in the faculty room at all times.\n4. All textbooks and books stamped with "NOT FOR HOME USE" are strictly to be used within the library premises.\n5. A fiction book may be borrowed for five (5) days and is subject for renewal if the reference material is not in demand.\n6. General reference books, theses, newspapers, serials, vertical files, rare collections must be read inside the library only.\n7. Non-book materials such as maps, globes, pictures, vertical files and newspaper clippings may be borrowed for classroom use upon arrangement with the librarian.\n8. A student who wishes to borrow a non-book material for classroom use must present a written request approved by the teacher concerned. The request should indicate the time and the date needed, classroom, subject and the name of the teacher. The student has to leave his/her library card together with the request and he/she has to sign the book card.\n9. Books can only be renewed when presented to the librarian for proper recording.\n10. No one is allowed to borrow a book on behalf of another person.\n11. One week before the final examination, books and other library materials will no longer be allowed for home use.\n\nLibrary Fines:\n1. Materials that are returned late are subject to the following overdue fines:\n   a. Books borrowed for overnight: Maximum fine is five pesos (Php 5.00) per day\n   b. Books borrowed for photocopy, classroom use and not returned on time: Maximum fine is ten pesos (Php 10.00) per day\n   c. Overdue fine is discontinued upon report of lost of the book borrowed. Replacement of the book should be made within two (2) weeks. After two (2) weeks and no replacement were made, the fine will be reinstated.\n2. Borrowers with overdue books or with standing obligation to the library will not be allowed / to borrow unless all library accounts are settled.\n\nLibrary Conduct and Discipline:\n1. Observe silence. Idle conversations, loud laughter and other unnecessary noise must be avoided.\n2. In order not to annoy other library patrons, activities such as eating, sleeping or doing industrial work are prohibited.\n3. Keep the library clean. Don't litter on the floor or table. Wastebaskets are provided for the purpose.\n4. Keep things in order. Push your chair back against the table when you leave the library.\n5. Smoking, eating and drinking inside the library are strictly prohibited.\n6. Vandalism of any form will be dealt with strongly and accordingly.\n7. Return books properly.\n8. Handle books and other reading materials with care.\n\nStudents should not commit acts such as hiding or stealing books or other library property. Tearing out pages of books or periodicals and forging signatures are subject to suspension of library privileges. More serious misdemeanors shall be subjected to appropriate disciplinary actions as outlined in the student conduct policy.`
      },
      {
        title: 'Guidance and Counseling Center',
        content: `The Guidance and Testing Center was set up in order for students to discover their aptitude and interests and likewise find solution to their various problems. The Center has a staff that can assist students in acquiring the necessary skills in solving future difficulties. The Center offers the following services:\n\n• Orientation Service: Aims to facilitate adjustment to ACLC life.\n• Individual Inventory Service: Designed to give information about the student to aid him/her towards self-knowledge and self-realization.\n• Testing: Aims to assist the student to achieve self-knowledge and self-realization.\n• Information Service: Provides the student with sufficient educational, social occupational data to guide his/her choices and decisions;\n• Individual and Group Counseling: The most important service of the Guidance program designed to help the students towards maximum self-realization and development to a fully integrated, mature and responsible person.\n• Follow-up Services: Provides career counseling, systematic contacts with alumni, job placement opportunities, and provision for continuing education and involvement in the community service; and\n• Research and Evaluation: Provides a systematic evaluation of the effectiveness of the students' personnel service offered by ACLC/ACLC College, to be utilized for the improvement of the service.`
      },
      {
        title: 'Health Services (Clinics)',
        content: `The medical clinical provides free consultation and initial treatment of minor injuries and sickness. It also extends first aid treatment to emergency cases. The clinic is headed by a licensed health worker.\n\nThe Dental Clinic undertakes annual dental examination, dental consultation, dental health education program and emergency dental treatment arising from dental pain (temporary filling and control of secondary/ post exhaustion hemorrhage).`
      },
      {
        title: 'Placement Services',
        content: `The Placement Office is the information focal point for all job descriptions submitted by recruiting companies and organization. It serves as a bridge between the academe and the world of the work, maintaining the close contact with government offices, community agencies, and educational institutional and industrial firms. These external relations pave the way to finding employment for our students. The placement office handles the following function and activities:\n\n• Career counseling\n• Career Orientation talks\n• Pre-employment talks\n• Job fair (On campus recruitment)\n• General Assembly for seniors:\n  - Self assessment\n  - Resume writing\n  - Orientation on the different career field\n  - Job interview training program / Job placement`
      },
      {
        title: 'Academe - Industry Linkage Offices',
        content: `Function and Activities:\n1. Provides practicum students with the companies where they may undergo training. The nature of business of said companies must be related to the area of specialization of practicum students.\n2. Establishes linkages with top industrial corporations, government institutions as well as civic and non-government organizations.\n3. Establishes affiliation with professional organizations to keep abreast of issues concerning the different fields and programs that ACLC offers.\n4. Monitors pre and post evaluation and documentation of practicum students through close coordination with the respective training departments of the partner institutions.\n5. Establishes consortia with other schools in terms of faculty, library facilities, information technology, research and others.`
      },
      {
        title: 'Other Facilities (Computer, AVR & Store)',
        content: `• COMPUTER CENTER: Computer Laboratory rooms provide students with state-of-the-art computer facilities.\n• AUDIO-VISUAL ROOMS: Audio-visual rooms (AVR) provide the faculty and the students with richer teaching-learning experience through the effective use of instructional media. The AVR houses, collects, organizes and makes available adequate, overhead projectors, sound system tape recorders and multimedia system.\n• BOOKS/ SCHOOL SUPPLIES STORE: Book and school supplies stores are located near the canteen. Books, Manuals and other reading materials are available for sale at reasonable prices.\n• CAFETERIAS AND KIOSK: Snack counters and kiosks located in the canteen are made available to provide affordable and nutritious food.`
      }
    ]
  },
  {
    id: 'student-organizations',
    title: 'Student Organizations Rules',
    category: 'services',
    content: `Student organizations exist solely on the basis of camaraderie, unity and purposes explicitly stated in the organization's constitution. Duly recognized student organizations' objective should be in line with ACLC/ACLC College mission and objectives.`,
    subsections: [
      {
        title: 'Recognition and Renewal of Orgs',
        content: `The Office of the Student Affairs (OSA) is tasked to approve/supervise student organization. Specifically, OSA is responsible in implementing the following:\n\n1. Recognition of student organization or its suspension if the need arises and in accordance with the violation as set forth by the Office of the Student Affairs. Application for recognition is scheduled within the first two months of the first term of a particular school year.\n2. Approval of faculty as recommended by the officer of the student organization.\n3. Approval and disapproval of student activity as reckoned from ACLC/ACLC College mission and institutional objectives.\n4. Mediates and renders a decision in case of conflict between and among organizations.\n\nREQUIREMENTS FOR RECOGNITION / RENEWAL OF STUDENT ORGANIZATIONS:\n1. Application Form to be secured from Office of the Student Affairs within the required period (first two months of the first trimester)\n2. Constitution and By-Laws\n3. Member - a composition of 10-20 for start up\n4. Set the Interim Officer with pertinent information as Year level, course, address and Telephone Number\n5. Annual Program of Activities\n6. Progress reports of activities for organizations who will be seeking renewal\n7. Faculty Adviser/s\n8. Monetary Collection/Financial Report`
      },
      {
        title: 'Ban on Fraternities',
        content: `BAN ON ALL FORMS OF FRATERNITIES AND/OR ILLEGAL ORGANIZATIONS:\n\nAll forms of fraternities and/or illegal organizations are not allowed in the institution. Hence, all bona fide students of ACLC/ACLC College are dissuaded to join these kinds of associations. Any student proven and/or found to be a member of any fraternity and/or illegal organization shall face severe sanction based on the established student conduct policy.`
      },
      {
        title: 'Posters, Tickets & Activities',
        content: `• SOURCE VERIFICATION OF POSTERS / TEASERS / LEAFLETS: ACLC/ACLC College recognizes the students' freedom of expression. However, to ensure the responsible ventilation of views, opinions and the like, students are required to have all posters, teasers and similar items checked and approved for posting by the OSA/School Director.\n\n• SELLING OF TICKETS/SOLICITATIONS: Any group/student organization that intends to sell tickets or solicit contribution as part of a fund raising activity must initially secure a written approval from the School Director. Note that solicitation of any kind by faculty members from the student is strictly prohibited.\n\n• STUDENT ACTIVITIES: Organizers of student activities must secure a permit from the School Director least seven (7) days before the scheduled activity. The School Director may regulate the time, place, and manner of such activities in order to ensure that normal academic function shall not be disrupted.\n\nProposed student activity should be coursed through the Office of the School Director a week before the actual event. If the activity is academic, a written request should be submitted and recommended by the College Dean/Educ. Coordinator, and approved by the School Director at least 1 week before the event.\n\nAny monetary/ pecuniary collection that the organization undertakes requires the approval / supervision of the School Director. If the organization is engaged in ticket selling, the tickets should be properly stamped at the Office of the School Director verifying the number as reflected in the proposal, the expenses incurred and the intended budget for implementation of the project.`
      }
    ]
  },
  {
    id: 'pledge-hymn',
    title: 'Pledge of Loyalty, Hymn & Conforme',
    category: 'pledges',
    content: `Solemn commitments and the institutional anthem of ACLC / AMA Education System.`,
    subsections: [
      {
        title: 'Pledge Of Loyalty',
        content: `In gratitude to you, Alma Mater, I pledge my loyalty to you and your ideals, to perpetually uphold your standards and traditions, and to endeavor to serve my country and fellowmen to my utmost ability, mindful that whatever destiny shall bring me, I shall have to live up to your highest and fullest expectations, worthy of a true progeny of my Alma Mater, the ACLC/ACLC College.\n\nNever to be complacent, we shall persevere.\nFor progress and service.`
      },
      {
        title: 'AMA Hymn (Anthem)',
        content: `You put us in mold, Dear Alma Mater\nYou hold the future in this race against time\nThrough the years in your folds\nYou nurtured our dreams\nOur promise to you\nThe toast is for you\n\nDear Alma Mater\nYou have given us arms\nFor the battles of life\nAnd the conquest of our dreams\nOh, Dear AMA\nYou have sharpened our minds\nWe will triumph by which\nThe toast is for you\n\nThe light up ahead is victory foreseen\nWith noble desires we behold its gleam\nOur motherland lays her hopes on the youth\nThe future that we hold is her hope that unfolds\n\nDear Alma Mater\nYou have given us arms\nFor the battles of life\nAnd the conquest of our dreams\nOh, Dear AMA\nYou have sharpened our minds\nWe will triumph by which\nThe toast is for you`
      },
      {
        title: 'Conforme (Student Acceptance)',
        content: `I, the student, hereby acknowledge receipt of a copy of the ACLC/ACLC College Student Handbook 2015.\n\nI understand that it is my responsibility to familiarize myself with the policies and procedures outlined in the Handbook; to seek clarifications if necessary; and abide by these rules and regulations.\n\nI agree that the contents thereof shall serve as a guide to both my actions and those which will be taken by ACLC/ACLC College or AMA Education System (AMAES). This however shall not preclude ACLC/ACLC College or AMAES from taking other course of action in line with its concept of justice and righteousness warranted by the circumstance.\n\nThe issuance of the said Handbook likewise does not preclude ACLC/ACLC College or AMAES from making unilateral amendments as deemed necessary.`
      }
    ]
  }
];

export const handbookOffenses: Offense[] = [
  {
    number: 1,
    description: 'Failing to properly wear valid ID card while inside the school; failing to report the loss of ID card to the College Dean/Educ. Coordinator within 48 hours and have a replacement of the same within 48 hours; failing to surrender lost and found ID card within 48 hours while still in possession of a replacement ID card; failing to present ID card when requested by school authorities, faculty, personnel or guard on duty.',
    firstViolation: 'Warning',
    secondViolation: 'Reprimand/Censure',
    thirdViolation: 'Suspension',
    gravity: 'Minor'
  },
  {
    number: 2,
    description: 'Using for official school purposes or transaction own ID card, which is neither authorized nor valid.',
    firstViolation: 'Warning to Reprimand with Confiscation of ID',
    secondViolation: 'Suspension with Confiscation of ID',
    thirdViolation: 'Suspension to Non-readmission with Confiscation of ID',
    gravity: 'Major'
  },
  {
    number: 3,
    description: 'Unauthorized stay in, or entry to the school after 9:00 o’clock in the evening.',
    firstViolation: 'Warning to Reprimand / Censure',
    secondViolation: 'Reprimand/Censure to Suspension',
    thirdViolation: 'Suspension to Dismissal / Non-readmission',
    gravity: 'Minor'
  },
  {
    number: 4,
    description: 'Littering disposable materials such as but not limited to bottles, cans, pieces of paper, plastic and the like in the classroom, library and other places in the school.',
    firstViolation: 'Warning',
    secondViolation: 'Reprimand/Censure',
    thirdViolation: 'Reprimand/Censure to Suspension',
    gravity: 'Minor'
  },
  {
    number: 5,
    description: 'Posting, distributing or disseminating notices, posters, flyers, leaflets, broadsheets, opinionnaires, questionnaires, streamers, pop sheets, surveys or similar materials without the approval of the College Dean/Educ. Coordinator/education coordinator.',
    firstViolation: 'Warning/Censure',
    secondViolation: 'Suspension',
    thirdViolation: 'Dismissal / Expulsion',
    gravity: 'Major'
  },
  {
    number: 6,
    description: 'Defaming any student, teacher, personnel, or college authority or his agents; giving oral, or sending, disseminating or posting any written or electronically transmitted message or graphics, or demonstrating offensive gesture, which causes a person or his reputation or good name to be threatened, harassed, maligned, besmirched, disgraced, degraded, insulted, ridiculed or defamed.',
    firstViolation: 'Warning/Reprimand to Suspension',
    secondViolation: 'Suspension to Dismissal / Non-readmission',
    thirdViolation: 'Dismissal/Non-readmission',
    gravity: 'Major'
  },
  {
    number: 7,
    description: 'Producing, possessing, distributing, publishing, exhibiting and/or disseminating literature, films, prints, plays, shows or similar forms which are offensive to morals, contrary to law, public order, good custom, and school policies.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 8,
    description: 'Engaging in lewd, indecent, obscene, immoral or provocative conduct such as passionate kissing, necking, petting and similar acts while within the school premises or during a school activity/function.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 9,
    description: 'Stealing the property of the school or of property in the possession of, or owned by a member of the school community; extorting, or making unauthorized collections or solicitations of money or property from any student, personnel, faculty member or administrator.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 10,
    description: 'Giving money, gift, or token of any kind or giving a treat to a faculty member concerned or school employee, personnel or official, and/or any person acting for and in his behalf, in order to obtain any kind of favor or benefit such as but not limited to exemption from attending class, lecture, examination, recitation, test, quiz or similar activity, of leniency or non-submission of plate, project, experiment, report, term paper, or other requirement such as internship, clerkship, practicum, community service or similar requirements, or late submission of overdue requirement or school equipment.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 11,
    description: 'Unlawfully possessing or using explosives of any kind, chemical or biological substance which can cause harm or injury, or any deadly weapons such as but not limited to guns, knives, darts, knuckles, pipes, wrench and the like.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 12,
    description: 'Intentionally or negligently damaging, destroying or committing act(s) of vandalism on property owned or in the possession of another person or of the school; defacing or tearing off any library book, magazine, newspaper; damaging or carving tables, chairs, walls; writing, sticking or pasting any material on the walls, tables, chairs or other pieces of furniture; breaking glass windows, showcases, doors, laboratory equipment, materials, or electrical, mechanical or electronic devices; tearing or using improperly the curtains; removing or erasing or tampering with official notices, announcements and posters on bulletin boards; destroying or tampering with any school property; disobeying rules on the proper use of facilities including fraudulent use of school computers, network systems or computer files; abusing computer equipment (e.g., computer stalking and harassment, stealing, deleting information, Internet theft or knowingly introducing a computer virus) or gaining unauthorized access to computer resources on campus, or committing similar acts.',
    firstViolation: 'Suspension to Dismissal / Non-readmission',
    secondViolation: 'Dismissal/Non-readmission',
    thirdViolation: 'Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 13,
    description: 'Knowingly and without consent or authorization possessing, removing, using, misappropriating, or selling the property or services of another person or of the school; defrauding or procuring services or materials of the school or persons under false pretenses; obtaining the property or person of or of the school by misrepresentation or deceptive means;',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 14,
    description: 'Bringing in or imbibing or dispensing liquor or any intoxicating beverage; entering the school in a state of intoxication.',
    firstViolation: 'Warning/Censure/Reprimand to Suspension',
    secondViolation: 'Suspension to Dismissal / Non-readmission',
    thirdViolation: 'Dismissal/Non-readmission',
    gravity: 'Major'
  },
  {
    number: 15,
    description: 'Illegally using, possessing, or distributing narcotics or dangerous drugs or their derivatives or is under the influence of narcotics, hallucinogens, dangerous drugs, or controlled substances, except as permitted by law.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 16,
    description: 'Possessing, distributing or selling printed copies of offensive, obscene or harassing magazines. Offensive material includes, but is not limited to the following: Pornographic, nude, semi-nude or other similarly lewd images; Material displaying excessively violent or graphic content; Material of racist or sexist or similarly demeaning content; or any material that in general is understood to be socially and/or culturally offensive.',
    firstViolation: 'Warning/Censure/Reprimand to Suspension',
    secondViolation: 'Suspension to Dismissal / Confiscation',
    thirdViolation: 'Dismissal with Confiscation',
    gravity: 'Major'
  },
  {
    number: 17,
    description: 'Physically assaulting or encouraging to assault any person within the premises of the school; participating in any melee, such as but not limited to brawls, fighting, stabbing, quarreling, hazing which is any act that injures, degrades or tends to injure, degrade or disgrace any fellow student or person attending the school; threatening (by any means), intimidating, coercing or using physical or sexual force in a manner that endangers the health or safety of another person; creating a hostile environment, or which reasonably causes another person to be fearful of physical or emotional harm or abuse; or intentionally harassing or stalking another person. Harassment includes but is not limited to the verbal, emotional or sexual.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 18,
    description: 'Participating in gambling or other illegal or unauthorized games or contests of chance inside the school premises.',
    firstViolation: 'Warning/Censure to Suspension',
    secondViolation: 'Suspension to Dismissal',
    thirdViolation: 'Dismissal',
    gravity: 'Major'
  },
  {
    number: 19,
    description: 'Forging, altering, tampering, falsifying and/or misusing school documents, records, credentials, receipts, slips, markings, certifications; copying, reproducing or procuring any unauthorized, fake or tampered school document, record, credential, receipt, slip, marking, form, certification, identification card, and the like; or fabricating fake or spurious copy or semblance of the same AND using same for any school-related purpose or for any other purpose that puts the good name of the college in bad light; knowingly furnishing or using false or forged information in connection with official college transactions, proceedings, investigations – with fake or spurious documents, excuse letters, certifications, credentials, markings, or identification cards or similar supporting materials; publishing false information about the college, its officials, faculty members, personnel and students.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 20,
    description: 'Obstructing or disrupting teaching, administrative work, disciplinary proceedings or other school activities; impeding, obstructing, preventing or defeating either the right or obligation of the teacher or professor to teach his subjects or the right of the student to attend his classes; behaving violently or excessively disturbs other groups or individuals',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 21,
    description: 'Threatening, coercing, intimidating, compelling any student to be absent from classes; threatening, coercing, intimidating, preventing any administrator, faculty member, personnel, or administrator from discharging his duties.',
    firstViolation: 'Dismissal/Expulsion',
    secondViolation: 'Dismissal/Expulsion',
    thirdViolation: 'Dismissal/Expulsion',
    gravity: 'Extreme'
  },
  {
    number: 22,
    description: 'Using a college facility for activities like symposia, meeting, debates, practices and other such similar activities without having first obtained the necessary permit from the school director',
    firstViolation: 'Suspension to Dismissal / Non-readmission',
    secondViolation: 'Dismissal/Non-readmission',
    thirdViolation: 'Dismissal / Expulsion',
    gravity: 'Major'
  },
  {
    number: 23,
    description: 'Using without prior authority the name of ACLC in any ticket, invitation, program, announcement or similar printed matters.',
    firstViolation: 'Warning/Censure to Suspension',
    secondViolation: 'Suspension to Dismissal / Non-readmission',
    thirdViolation: 'Dismissal/Non-readmission',
    gravity: 'Major'
  },
  {
    number: 24,
    description: 'Cheating during examinations and quizzes, or plagiarism in connection with any academic work, or abetting the commission of the same.',
    firstViolation: 'Warning with invalidation of grade',
    secondViolation: 'Censure to Suspension with invalidation of grade',
    thirdViolation: 'Suspension to Dismissal / Non-readmission with invalidation of grade',
    gravity: 'Major'
  },
  {
    number: 25,
    description: 'Abusive behaviors or discourtesy towards school officials, faculty members, personnel, guards and other school officers.',
    firstViolation: 'Warning to Suspension',
    secondViolation: 'Censure/Reprimand to Suspension',
    thirdViolation: 'Suspension to Dismissal / Non-readmission',
    gravity: 'Major'
  },
  {
    number: 26,
    description: 'Coming to school or attending a school activity, occasion or function in an attire or grooming not appropriate for the said activity, occasion or function and/or not in accordance with basic decency and good custom or with duly established academic policy.',
    firstViolation: 'Warning to Suspension',
    secondViolation: 'Reprimand/Censure to Suspension',
    thirdViolation: 'Suspension to Dismissal',
    gravity: 'Minor'
  }
];

export const handbookScholarships: Scholarship[] = [
  {
    id: 'amasr',
    name: 'Amable M. Aguiluz Sr. Memorial Scholarship Grant',
    type: 'Institutional',
    description: 'In memory of AMA Sr., this grant is for financially challenged but academically qualified students.',
    qualifications: [
      'Final High School Average Grade of 80 or better.',
      'No grade below 80 in Mathematics, Science, and English.',
      'Annual Family Income must not exceed PHP 72,000 (Provincial) or PHP 100,000 (NCR).'
    ],
    benefits: [
      { criteria: 'High School Average Grade: 80 - 89', discount: '50% discount on all fees' },
      { criteria: 'High School Average Grade: 90 - 94', discount: '75% discount on all fees' },
      { criteria: 'High School Average Grade: 95 and above', discount: '100% discount on all fees' }
    ],
    conditions: [
      'Maintain a GPA of 2.0 or better.',
      'Must enroll a minimum load of 18 units per trimester.',
      'No grade below 3.0 or D in all courses enrolled.',
      'Must not be charged with any academic or conduct violation.',
      'Granted for a maximum of 4 years only, subject to renewal every term.'
    ],
    requirements: [
      'High School Report Card (Form 137 / Form 138)',
      'Income Tax Return or BIR Income Tax Exemption Certificate',
      'Recommendation letter from the High School Director',
      'Approved Application form with AMAES Chairman Approval'
    ]
  },
  {
    id: 'acaex',
    name: 'Academic Excellence (ACAEX) Scholarship Award',
    type: 'Academic',
    description: 'Awarded to outstanding students who demonstrate exceptional academic performance during their residency in ACLC.',
    qualifications: [
      'Minimum of one (1) year residency in the college.',
      'GPA for the previous academic year of 1.00 to 1.75.',
      'Minimum academic load of 18 units per trimester.',
      'No grade below 3.0 or D in all courses enrolled.',
      'No academic or conduct disciplinary records/pending cases.'
    ],
    benefits: [
      { criteria: 'Term GPA of 1.25 or better', discount: '100% discount on all fees on succeeding year (first term)' },
      { criteria: 'Term GPA of 1.26 to 1.50', discount: '75% discount on all fees on succeeding year (first term)' },
      { criteria: 'Term GPA of 1.51 to 1.75', discount: '50% discount on all fees on succeeding year (first term)' }
    ],
    conditions: [
      'Maintain a term GPA of 1.00 to 1.75.',
      'Must carry a minimum load of 18 units per trimester.',
      'No grade below 3.0 or D in all courses enrolled.',
      'Must not be charged with any academic or conduct violation.',
      'Granted for a maximum of 4 years only, subject to renewal every term.'
    ],
    requirements: [
      'True Copy of Grades (TCG) issued by the Registrar',
      'Certificate of Good Moral Character from the Office of Student Relations / Dean',
      'Approved Scholarship Application Form with Chairman/President Approval'
    ]
  }
];
