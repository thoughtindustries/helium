import React, { useState } from 'react';
import {
  useReinstateUserCourseMutation,
  useReinstateUserLearningPathMutation,
  useArchiveUserCourseMutation,
  useArchiveUserLearningPathMutation,
  GlobalTypes
} from '@thoughtindustries/content';
import { WarningMessageToolTip } from '../Assets/Tooltips';

export const ArchiveButton = ({ item }: any) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const text =
    'Would you like to continue archiving this course? Doing so will remove this from your dashboard as an In Progress item.';
  let neededMutation: any;
  const [archiveUserLearningPathMutation] = useArchiveUserLearningPathMutation({
    variables: { id: item.id }
  });
  const [archiveUserCourseMutation] = useArchiveUserCourseMutation({
    variables: { id: item.id }
  });
  console.log('item.id', item.id);

  if (item.kind === 'learningPath') {
    neededMutation = archiveUserLearningPathMutation;
    console.log('learning paths');
  } else {
    neededMutation = archiveUserCourseMutation;
    console.log('course');
  }

  return (
    <div className="column float-left px-4">
      <button
        onClick={() => setShowPopup(true)}
        className="bg-white-mid border-solid border rounded-sm cursor-pointer inline-block font-normal text-xs m-0 py-[0.15rem] px-4 relative text-center no-underline ease-in-out border-gray-light font-sans transition duration-200 leading-5"
      >
        <span>Archive</span>
      </button>
      {showPopup && (
        <WarningMessageToolTip
          mutationCallback={neededMutation}
          setShowPopup={setShowPopup}
          text={text}
        />
      )}
    </div>
  );
};

type ReinstateButtonProps = {
  item: GlobalTypes.ArchivedContent;
  onReinstateSuccessAsync: VoidFunction;
};
export const ReinstateButton = ({ item, onReinstateSuccessAsync }: ReinstateButtonProps) => {
  // Reference to TI: ./assets/javascripts/lms/components/ti-dashboard-access-expandable-item.js
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const text =
    'Would you like to continue reinstating this course? Doing so will move this back to being In Progress.';
  const customPosition = 'right-2 top-[120%]';
  const [reinstateUserCourseMutation] = useReinstateUserCourseMutation({
    variables: { id: item.resource as string }
  });
  const [reinstateUserLearningPathMutaion] = useReinstateUserLearningPathMutation({
    variables: { id: item.resource as string }
  });

  const handleMutation = async () => {
    let neededMutation: any;
    if (item.resourceType === 'learningPath') {
      neededMutation = reinstateUserLearningPathMutaion;
      console.log('learning paths');
    } else {
      neededMutation = reinstateUserCourseMutation;
      console.log('course');
    }
    return neededMutation().then(onReinstateSuccessAsync);
  };

  return (
    <>
      <button
        onClick={() => setShowPopup(true)}
        className="bg-active-blue relative text-accent-contrast bg-accent rounded-sm cursor-pointer inline-block font-normal text-xs mb-4 py-[0.15rem] px-4 text-center no-underline ease-in-out border-active-blue font-sans transition duration-200 leading-5"
      >
        Reinstate
      </button>
      {showPopup && (
        <WarningMessageToolTip
          mutationCallback={handleMutation}
          setShowPopup={setShowPopup}
          text={text}
          customPosition={customPosition}
        />
      )}
    </>
  );
};
