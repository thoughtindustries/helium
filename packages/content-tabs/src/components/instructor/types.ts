export type InstructorType = {
  __typename?: 'Instructor' | undefined;
  asset?: string | undefined;
  bio?: string | undefined;
  fullName?: string | undefined;
};

export type InstructorProps = {
  instructors: InstructorType[] | undefined;
};
