import React from 'react';

const PurchaseSetting = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Tabs */}
      <div className="flex gap-6 mb-6 border-b">
        <button className="pb-2 border-b-2 border-red-500 text-red-600 font-semibold">
          Purchase Settings
        </button>
        <button className="pb-2 text-gray-500 hover:text-gray-700">
          Purchase Notification Settings
        </button>
      </div>

      {/* Purchase Order Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Purchase Order Prefix</label>
          <input type="text" defaultValue="PO" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Purchase Order Number Separator</label>
          <input type="text" defaultValue="#" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Purchase Order Digits</label>
          <input type="number" defaultValue="3" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Purchase Order Number Example</label>
          <input type="text" defaultValue="PO#001" className="w-full border px-3 py-2 rounded" disabled />
        </div>
      </div>

      {/* Bill Order Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Bill Order Prefix</label>
          <input type="text" defaultValue="BIL" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bill Order Number Separator</label>
          <input type="text" defaultValue="#" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bill Order Digits</label>
          <input type="number" defaultValue="3" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Bill Order Number Example</label>
          <input type="text" defaultValue="BIL#001" className="w-full border px-3 py-2 rounded" disabled />
        </div>
      </div>

      {/* Vendor Credit Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium mb-1">Vendor Credit Prefix</label>
          <input type="text" defaultValue="VC" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vendor Credit Number Separator</label>
          <input type="text" defaultValue="#" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vendor Credit Digits</label>
          <input type="number" defaultValue="3" className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Vendor Credit Number Example</label>
          <input type="text" defaultValue="VC#001" className="w-full border px-3 py-2 rounded" disabled />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Terms And Condition</label>
        <textarea
          className="w-full border px-3 py-2 rounded h-24 resize-none"
          placeholder="Enter terms and conditions..."
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Save
        </button>
        <button className="text-blue-500 hover:underline">Hosting Suggestions</button>
      </div>
    </div>
  );
};

export default PurchaseSetting;
