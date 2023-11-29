const FAQSection = () => {
  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">FAQ Section</h2>

      <div className="space-y-4">
        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-2 text-lg font-bold">
            Q: How can I contribute to the community?
          </h3>
          <p className="mb-2 text-gray-600">
            A: You can contribute by sharing your travel experiences and tips in
            the relevant sections. Create engaging posts, share insights, and
            participate in discussions with fellow community members.
          </p>
        </div>

        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-2 text-lg font-bold">
            Q: Are there any specific guidelines for posting?
          </h3>
          <p className="mb-2 text-gray-600">
            A: Yes, there are guidelines to ensure a positive and respectful
            community environment. Please refer to the Community Guidelines and
            Rules section for detailed information. Key points include avoiding
            offensive language, respecting diverse perspectives, and adhering to
            ethical travel practices.
          </p>
        </div>

        <div className="p-4 bg-white rounded-md shadow-md">
          <h3 className="mb-2 text-lg font-bold">
            Q: How can I report inappropriate content or behavior?
          </h3>
          <p className="mb-2 text-gray-600">
            A: If you come across inappropriate content or behavior, you can
            report it to the community moderators. Look for the Report option on
            posts or reach out to the moderators directly. Your reports help
            maintain a safe and welcoming community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
