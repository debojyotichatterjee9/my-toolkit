"use client";

// components/RandomUserGenerator.tsx
import React, { useState } from 'react';
import { generateRandomUser, copyToClipboard } from '@/utils/randomUserGeneratorUtils';
import { User } from '@/types/user';
import 'daisyui';

const RandomUserGenerator: React.FC = () => {
  const [userData, setUserData] = useState<User>(generateRandomUser());
  const [alertVisible, setAlertVisible] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleRegenerate = () => {
    setUserData(generateRandomUser());
  };

  const handleClear = () => {
    setUserData({} as User);
  };

  const handleCopyAll = () => {
    copyToClipboard(JSON.stringify(userData, null, 2));
    showSuccessAlert();
  };

  const handleCopyGroup = (group: any) => {
    copyToClipboard(JSON.stringify(group, null, 2));
    showSuccessAlert();
  };

  const handleCopyField = (value: string, fieldName: string) => {
    copyToClipboard(value);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const showSuccessAlert = () => {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 2000);
  };

  return (
    <div className="p-4 space-y-4">
      {alertVisible && <div className="alert alert-success">All values are copied!</div>}
      
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold">Name</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup(userData.name)}>Copy</button>
          </div>
          {['name_prefix', 'first_name', 'last_name', 'name_suffix'].map(field => (
            <div key={field} className="flex space-x-2 mb-2">
              <input className="input input-bordered w-full" value={userData.name[field as keyof typeof userData.name] || ''} readOnly />
              <button className="btn btn-primary" onClick={() => handleCopyField(userData.name[field as keyof typeof userData.name], field)}>
                {copiedField === field ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold">Organization</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ organization_name: userData.organization_name })}>Copy</button>
          </div>
          <div className="flex space-x-2 mb-2">
            <input className="input input-bordered w-full" value={userData.organization_name || ''} readOnly />
            <button className="btn btn-primary" onClick={() => handleCopyField(userData.organization_name, 'organization_name')}>
              {copiedField === 'organization_name' ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Password</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ password: userData.password })}>Copy</button>
          </div>
          <div className="flex space-x-2 mb-2">
            <input className="input input-bordered w-full" value={userData.password || ''} readOnly />
            <button className="btn btn-primary" onClick={() => handleCopyField(userData.password, 'password')}>
              {copiedField === 'password' ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Identification</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ identification: userData.identification })}>Copy</button>
          </div>
          {userData.identification.map((id: any, index: any) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input className="input input-bordered w-full" value={`${id.type}: ${id.value}`} readOnly />
              <button className="btn btn-primary" onClick={() => handleCopyField(`${id.type}: ${id.value}`, `identification-${index}`)}>
                {copiedField === `identification-${index}` ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold">Address</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ address: userData.address })}>Copy</button>
          </div>
          {/* {userData.address.map((address: any, index: any) => (
            <div key={index} className="space-y-2">
              {Object.entries(address).map(([key, value]) => (
                typeof value === 'object' ? (
                  Object.entries(value).map(([k, v]): any | null => (
                    <div key={k} className="flex space-x-2 mb-2">
                      <input className="input input-bordered w-full" value={`${k}: ${v}`} readOnly />
                      <button className="btn btn-primary" onClick={() => handleCopyField(`${k}: ${v}`, `address-${index}-${k}`)}>
                        {copiedField === `address-${index}-${k}` ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  ))
                ) : (
                  <div key={key} className="flex space-x-2 mb-2">
                    <input className="input input-bordered w-full" value={`${key}: ${value}`} readOnly />
                    <button className="btn btn-primary" onClick={() => handleCopyField(`${key}: ${value}`, `address-${index}-${key}`)}>
                      {copiedField === `address-${index}-${key}` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                )
              ))}
            </div>
          ))} */}
        </div>

        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ contact: userData.contact })}>Copy</button>
          </div>
          {userData.contact.map((contact: any, index: any) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input className="input input-bordered w-full" value={`${contact.type} (${contact.label}): ${contact.country_code} ${contact.number}`} readOnly />
              <button className="btn btn-primary" onClick={() => handleCopyField(`${contact.type} (${contact.label}): ${contact.country_code} ${contact.number}`, `contact-${index}`)}>
                {copiedField === `contact-${index}` ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold">Social Profiles</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ social_profiles: userData.social_profiles })}>Copy</button>
          </div>
          {userData.social_profiles.map((profile: any, index: any) => (
            <div key={index} className="flex space-x-2 mb-2">
              <input className="input input-bordered w-full" value={`${profile.label}: ${profile.link}`} readOnly />
              <button className="btn btn-primary" onClick={() => handleCopyField(`${profile.label}: ${profile.link}`, `social_profile-${index}`)}>
                {copiedField === `social_profile-${index}` ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-bold">Avatar</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ avatar: userData.avatar })}>Copy</button>
          </div>
          <img src={userData.avatar.thumbnail} alt="avatar thumbnail" className="w-24 h-24 rounded-full mb-2" />
        </div>

        <div>
          <h2 className="text-lg font-bold">Meta Data</h2>
          <div className="flex space-x-2 mb-2">
            <button className="btn btn-primary" onClick={() => handleCopyGroup({ meta_data: userData.meta_data })}>Copy</button>
          </div>
          {Object.entries(userData.meta_data).map(([key, value]) => (
            <div key={key} className="flex space-x-2 mb-2">
              <input className="input input-bordered w-full" value={`${key}: ${value}`} readOnly />
              <button className="btn btn-primary" onClick={() => handleCopyField(`${key}: ${value}`, `meta_data-${key}`)}>
                {copiedField === `meta_data-${key}` ? 'Copied' : 'Copy'}
              </button>
            </div>
          ))}
        </div>

        <div className="space-x-2">
          <button className="btn btn-primary" onClick={handleCopyAll}>Copy All</button>
          <button className="btn btn-secondary" onClick={handleRegenerate}>Regenerate</button>
          <button className="btn btn-warning" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
};

export default RandomUserGenerator;
