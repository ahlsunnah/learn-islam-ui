export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  api_timestamptz: any;
  api__int4: any;
  api_jsonb: any;
  api_citext: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











/** query root */
export type TApi = {
  /** fetch data from the table: "books" */
  books: Array<TApi_Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: TApi_Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk: Maybe<TApi_Books>;
  /** fetch data from the table: "chapter_translations" */
  chapter_translations: Array<TApi_Chapter_Translations>;
  /** fetch aggregated fields from the table: "chapter_translations" */
  chapter_translations_aggregate: TApi_Chapter_Translations_Aggregate;
  /** fetch data from the table: "chapter_translations" using primary key columns */
  chapter_translations_by_pk: Maybe<TApi_Chapter_Translations>;
  /** fetch data from the table: "chapters" */
  chapters: Array<TApi_Chapters>;
  /** fetch aggregated fields from the table: "chapters" */
  chapters_aggregate: TApi_Chapters_Aggregate;
  /** fetch data from the table: "chapters" using primary key columns */
  chapters_by_pk: Maybe<TApi_Chapters>;
  /** fetch data from the table: "course_quiz_difficulties" */
  course_quiz_difficulties: Array<TApi_Course_Quiz_Difficulties>;
  /** fetch aggregated fields from the table: "course_quiz_difficulties" */
  course_quiz_difficulties_aggregate: TApi_Course_Quiz_Difficulties_Aggregate;
  /** fetch data from the table: "course_translations" */
  course_translations: Array<TApi_Course_Translations>;
  /** fetch aggregated fields from the table: "course_translations" */
  course_translations_aggregate: TApi_Course_Translations_Aggregate;
  /** fetch data from the table: "course_translations" using primary key columns */
  course_translations_by_pk: Maybe<TApi_Course_Translations>;
  /** fetch data from the table: "courses" */
  courses: Array<TApi_Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: TApi_Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk: Maybe<TApi_Courses>;
  /** fetch data from the table: "locales" */
  locales: Array<TApi_Locales>;
  /** fetch aggregated fields from the table: "locales" */
  locales_aggregate: TApi_Locales_Aggregate;
  /** fetch data from the table: "locales" using primary key columns */
  locales_by_pk: Maybe<TApi_Locales>;
  /** fetch data from the table: "quiz_translations" */
  quiz_translations: Array<TApi_Quiz_Translations>;
  /** fetch aggregated fields from the table: "quiz_translations" */
  quiz_translations_aggregate: TApi_Quiz_Translations_Aggregate;
  /** fetch data from the table: "quiz_translations" using primary key columns */
  quiz_translations_by_pk: Maybe<TApi_Quiz_Translations>;
  /** fetch data from the table: "quiz_types" */
  quiz_types: Array<TApi_Quiz_Types>;
  /** fetch aggregated fields from the table: "quiz_types" */
  quiz_types_aggregate: TApi_Quiz_Types_Aggregate;
  /** fetch data from the table: "quiz_types" using primary key columns */
  quiz_types_by_pk: Maybe<TApi_Quiz_Types>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<TApi_Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: TApi_Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk: Maybe<TApi_Quizzes>;
  /** fetch data from the table: "topic_translations" */
  topic_translations: Array<TApi_Topic_Translations>;
  /** fetch aggregated fields from the table: "topic_translations" */
  topic_translations_aggregate: TApi_Topic_Translations_Aggregate;
  /** fetch data from the table: "topic_translations" using primary key columns */
  topic_translations_by_pk: Maybe<TApi_Topic_Translations>;
  /** fetch data from the table: "topics" */
  topics: Array<TApi_Topics>;
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: TApi_Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk: Maybe<TApi_Topics>;
  /** fetch data from the table: "track_translations" */
  track_translations: Array<TApi_Track_Translations>;
  /** fetch aggregated fields from the table: "track_translations" */
  track_translations_aggregate: TApi_Track_Translations_Aggregate;
  /** fetch data from the table: "track_translations" using primary key columns */
  track_translations_by_pk: Maybe<TApi_Track_Translations>;
  /** fetch data from the table: "tracks" */
  tracks: Array<TApi_Tracks>;
  /** fetch aggregated fields from the table: "tracks" */
  tracks_aggregate: TApi_Tracks_Aggregate;
  /** fetch data from the table: "tracks" using primary key columns */
  tracks_by_pk: Maybe<TApi_Tracks>;
  /** fetch data from the table: "user_genders" */
  user_genders: Array<TApi_User_Genders>;
  /** fetch aggregated fields from the table: "user_genders" */
  user_genders_aggregate: TApi_User_Genders_Aggregate;
  /** fetch data from the table: "user_genders" using primary key columns */
  user_genders_by_pk: Maybe<TApi_User_Genders>;
  /** fetch data from the table: "users" */
  users: Array<TApi_Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: TApi_Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<TApi_Users>;
};


/** query root */
export type TApiBooksArgs = {
  distinct_on: Maybe<Array<TApi_Books_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Books_Order_By>>;
  where: Maybe<TApi_Books_Bool_Exp>;
};


/** query root */
export type TApiBooks_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Books_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Books_Order_By>>;
  where: Maybe<TApi_Books_Bool_Exp>;
};


/** query root */
export type TApiBooks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiChapter_TranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Chapter_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapter_Translations_Order_By>>;
  where: Maybe<TApi_Chapter_Translations_Bool_Exp>;
};


/** query root */
export type TApiChapter_Translations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Chapter_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapter_Translations_Order_By>>;
  where: Maybe<TApi_Chapter_Translations_Bool_Exp>;
};


/** query root */
export type TApiChapter_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiChaptersArgs = {
  distinct_on: Maybe<Array<TApi_Chapters_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapters_Order_By>>;
  where: Maybe<TApi_Chapters_Bool_Exp>;
};


/** query root */
export type TApiChapters_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Chapters_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapters_Order_By>>;
  where: Maybe<TApi_Chapters_Bool_Exp>;
};


/** query root */
export type TApiChapters_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiCourse_Quiz_DifficultiesArgs = {
  distinct_on: Maybe<Array<TApi_Course_Quiz_Difficulties_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Quiz_Difficulties_Order_By>>;
  where: Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>;
};


/** query root */
export type TApiCourse_Quiz_Difficulties_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Course_Quiz_Difficulties_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Quiz_Difficulties_Order_By>>;
  where: Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>;
};


/** query root */
export type TApiCourse_TranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Course_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Translations_Order_By>>;
  where: Maybe<TApi_Course_Translations_Bool_Exp>;
};


/** query root */
export type TApiCourse_Translations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Course_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Translations_Order_By>>;
  where: Maybe<TApi_Course_Translations_Bool_Exp>;
};


/** query root */
export type TApiCourse_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiCoursesArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** query root */
export type TApiCourses_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** query root */
export type TApiCourses_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiLocalesArgs = {
  distinct_on: Maybe<Array<TApi_Locales_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Locales_Order_By>>;
  where: Maybe<TApi_Locales_Bool_Exp>;
};


/** query root */
export type TApiLocales_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Locales_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Locales_Order_By>>;
  where: Maybe<TApi_Locales_Bool_Exp>;
};


/** query root */
export type TApiLocales_By_PkArgs = {
  code: Scalars['String'];
};


/** query root */
export type TApiQuiz_TranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Translations_Order_By>>;
  where: Maybe<TApi_Quiz_Translations_Bool_Exp>;
};


/** query root */
export type TApiQuiz_Translations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Translations_Order_By>>;
  where: Maybe<TApi_Quiz_Translations_Bool_Exp>;
};


/** query root */
export type TApiQuiz_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiQuiz_TypesArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Types_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Types_Order_By>>;
  where: Maybe<TApi_Quiz_Types_Bool_Exp>;
};


/** query root */
export type TApiQuiz_Types_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Types_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Types_Order_By>>;
  where: Maybe<TApi_Quiz_Types_Bool_Exp>;
};


/** query root */
export type TApiQuiz_Types_By_PkArgs = {
  slug: Scalars['String'];
};


/** query root */
export type TApiQuizzesArgs = {
  distinct_on: Maybe<Array<TApi_Quizzes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quizzes_Order_By>>;
  where: Maybe<TApi_Quizzes_Bool_Exp>;
};


/** query root */
export type TApiQuizzes_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Quizzes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quizzes_Order_By>>;
  where: Maybe<TApi_Quizzes_Bool_Exp>;
};


/** query root */
export type TApiQuizzes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiTopic_TranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Topic_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topic_Translations_Order_By>>;
  where: Maybe<TApi_Topic_Translations_Bool_Exp>;
};


/** query root */
export type TApiTopic_Translations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Topic_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topic_Translations_Order_By>>;
  where: Maybe<TApi_Topic_Translations_Bool_Exp>;
};


/** query root */
export type TApiTopic_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiTopicsArgs = {
  distinct_on: Maybe<Array<TApi_Topics_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topics_Order_By>>;
  where: Maybe<TApi_Topics_Bool_Exp>;
};


/** query root */
export type TApiTopics_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Topics_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topics_Order_By>>;
  where: Maybe<TApi_Topics_Bool_Exp>;
};


/** query root */
export type TApiTopics_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiTrack_TranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Track_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Track_Translations_Order_By>>;
  where: Maybe<TApi_Track_Translations_Bool_Exp>;
};


/** query root */
export type TApiTrack_Translations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Track_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Track_Translations_Order_By>>;
  where: Maybe<TApi_Track_Translations_Bool_Exp>;
};


/** query root */
export type TApiTrack_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiTracksArgs = {
  distinct_on: Maybe<Array<TApi_Tracks_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Tracks_Order_By>>;
  where: Maybe<TApi_Tracks_Bool_Exp>;
};


/** query root */
export type TApiTracks_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Tracks_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Tracks_Order_By>>;
  where: Maybe<TApi_Tracks_Bool_Exp>;
};


/** query root */
export type TApiTracks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type TApiUser_GendersArgs = {
  distinct_on: Maybe<Array<TApi_User_Genders_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_User_Genders_Order_By>>;
  where: Maybe<TApi_User_Genders_Bool_Exp>;
};


/** query root */
export type TApiUser_Genders_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_User_Genders_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_User_Genders_Order_By>>;
  where: Maybe<TApi_User_Genders_Bool_Exp>;
};


/** query root */
export type TApiUser_Genders_By_PkArgs = {
  letter: Scalars['String'];
};


/** query root */
export type TApiUsersArgs = {
  distinct_on: Maybe<Array<TApi_Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Users_Order_By>>;
  where: Maybe<TApi_Users_Bool_Exp>;
};


/** query root */
export type TApiUsers_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Users_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Users_Order_By>>;
  where: Maybe<TApi_Users_Bool_Exp>;
};


/** query root */
export type TApiUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type _int4. All fields are combined with logical 'AND'. */
export type TApi__Int4_Comparison_Exp = {
  _eq: Maybe<Scalars['api__int4']>;
  _gt: Maybe<Scalars['api__int4']>;
  _gte: Maybe<Scalars['api__int4']>;
  _in: Maybe<Array<Scalars['api__int4']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['api__int4']>;
  _lte: Maybe<Scalars['api__int4']>;
  _neq: Maybe<Scalars['api__int4']>;
  _nin: Maybe<Array<Scalars['api__int4']>>;
};

/** columns and relationships of "books" */
export type TApi_Books = {
  description: Maybe<Scalars['String']>;
  download_link: Scalars['String'];
  id: Scalars['Int'];
  image_link: Maybe<Scalars['String']>;
};

/** aggregated selection of "books" */
export type TApi_Books_Aggregate = {
  aggregate: Maybe<TApi_Books_Aggregate_Fields>;
  nodes: Array<TApi_Books>;
};

/** aggregate fields of "books" */
export type TApi_Books_Aggregate_Fields = {
  avg: Maybe<TApi_Books_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Books_Max_Fields>;
  min: Maybe<TApi_Books_Min_Fields>;
  stddev: Maybe<TApi_Books_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Books_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Books_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Books_Sum_Fields>;
  var_pop: Maybe<TApi_Books_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Books_Var_Samp_Fields>;
  variance: Maybe<TApi_Books_Variance_Fields>;
};


/** aggregate fields of "books" */
export type TApi_Books_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Books_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "books" */
export type TApi_Books_Aggregate_Order_By = {
  avg: Maybe<TApi_Books_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Books_Max_Order_By>;
  min: Maybe<TApi_Books_Min_Order_By>;
  stddev: Maybe<TApi_Books_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Books_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Books_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Books_Sum_Order_By>;
  var_pop: Maybe<TApi_Books_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Books_Var_Samp_Order_By>;
  variance: Maybe<TApi_Books_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "books" */
export type TApi_Books_Arr_Rel_Insert_Input = {
  data: Array<TApi_Books_Insert_Input>;
  on_conflict: Maybe<TApi_Books_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Books_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "books" */
export type TApi_Books_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type TApi_Books_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Books_Bool_Exp>>>;
  _not: Maybe<TApi_Books_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Books_Bool_Exp>>>;
  description: Maybe<TApi_String_Comparison_Exp>;
  download_link: Maybe<TApi_String_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  image_link: Maybe<TApi_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "books" */
export type TApi_Books_Constraint = 
  /** unique or primary key constraint */
  'books_pkey';

/** input type for incrementing integer column in table "books" */
export type TApi_Books_Inc_Input = {
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "books" */
export type TApi_Books_Insert_Input = {
  description: Maybe<Scalars['String']>;
  download_link: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image_link: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TApi_Books_Max_Fields = {
  description: Maybe<Scalars['String']>;
  download_link: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image_link: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "books" */
export type TApi_Books_Max_Order_By = {
  description: Maybe<TApi_Order_By>;
  download_link: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  image_link: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Books_Min_Fields = {
  description: Maybe<Scalars['String']>;
  download_link: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image_link: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "books" */
export type TApi_Books_Min_Order_By = {
  description: Maybe<TApi_Order_By>;
  download_link: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  image_link: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "books" */
export type TApi_Books_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Books>;
};

/** input type for inserting object relation for remote table "books" */
export type TApi_Books_Obj_Rel_Insert_Input = {
  data: TApi_Books_Insert_Input;
  on_conflict: Maybe<TApi_Books_On_Conflict>;
};

/** on conflict condition type for table "books" */
export type TApi_Books_On_Conflict = {
  constraint: TApi_Books_Constraint;
  update_columns: Array<TApi_Books_Update_Column>;
  where: Maybe<TApi_Books_Bool_Exp>;
};

/** ordering options when selecting data from "books" */
export type TApi_Books_Order_By = {
  description: Maybe<TApi_Order_By>;
  download_link: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  image_link: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "books" */
export type TApi_Books_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "books" */
export type TApi_Books_Select_Column = 
  /** column name */
  'description' |
  /** column name */
  'download_link' |
  /** column name */
  'id' |
  /** column name */
  'image_link';

/** input type for updating data in table "books" */
export type TApi_Books_Set_Input = {
  description: Maybe<Scalars['String']>;
  download_link: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image_link: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TApi_Books_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "books" */
export type TApi_Books_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Books_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "books" */
export type TApi_Books_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Books_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "books" */
export type TApi_Books_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Books_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "books" */
export type TApi_Books_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** update columns of table "books" */
export type TApi_Books_Update_Column = 
  /** column name */
  'description' |
  /** column name */
  'download_link' |
  /** column name */
  'id' |
  /** column name */
  'image_link';

/** aggregate var_pop on columns */
export type TApi_Books_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "books" */
export type TApi_Books_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Books_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "books" */
export type TApi_Books_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Books_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "books" */
export type TApi_Books_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type TApi_Boolean_Comparison_Exp = {
  _eq: Maybe<Scalars['Boolean']>;
  _gt: Maybe<Scalars['Boolean']>;
  _gte: Maybe<Scalars['Boolean']>;
  _in: Maybe<Array<Scalars['Boolean']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Boolean']>;
  _lte: Maybe<Scalars['Boolean']>;
  _neq: Maybe<Scalars['Boolean']>;
  _nin: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "chapter_translations" */
export type TApi_Chapter_Translations = {
  /** An object relationship */
  chapter: TApi_Chapters;
  chapter_id: Scalars['Int'];
  created_at: Scalars['api_timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: TApi_Locales;
  locale_code: TApi_Locales_Enum;
  title: Scalars['String'];
  transcription: Scalars['String'];
  updated_at: Scalars['api_timestamptz'];
  video: Scalars['String'];
  vocabulary: Scalars['String'];
};

/** aggregated selection of "chapter_translations" */
export type TApi_Chapter_Translations_Aggregate = {
  aggregate: Maybe<TApi_Chapter_Translations_Aggregate_Fields>;
  nodes: Array<TApi_Chapter_Translations>;
};

/** aggregate fields of "chapter_translations" */
export type TApi_Chapter_Translations_Aggregate_Fields = {
  avg: Maybe<TApi_Chapter_Translations_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Chapter_Translations_Max_Fields>;
  min: Maybe<TApi_Chapter_Translations_Min_Fields>;
  stddev: Maybe<TApi_Chapter_Translations_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Chapter_Translations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Chapter_Translations_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Chapter_Translations_Sum_Fields>;
  var_pop: Maybe<TApi_Chapter_Translations_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Chapter_Translations_Var_Samp_Fields>;
  variance: Maybe<TApi_Chapter_Translations_Variance_Fields>;
};


/** aggregate fields of "chapter_translations" */
export type TApi_Chapter_Translations_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Chapter_Translations_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chapter_translations" */
export type TApi_Chapter_Translations_Aggregate_Order_By = {
  avg: Maybe<TApi_Chapter_Translations_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Chapter_Translations_Max_Order_By>;
  min: Maybe<TApi_Chapter_Translations_Min_Order_By>;
  stddev: Maybe<TApi_Chapter_Translations_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Chapter_Translations_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Chapter_Translations_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Chapter_Translations_Sum_Order_By>;
  var_pop: Maybe<TApi_Chapter_Translations_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Chapter_Translations_Var_Samp_Order_By>;
  variance: Maybe<TApi_Chapter_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chapter_translations" */
export type TApi_Chapter_Translations_Arr_Rel_Insert_Input = {
  data: Array<TApi_Chapter_Translations_Insert_Input>;
  on_conflict: Maybe<TApi_Chapter_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Chapter_Translations_Avg_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Avg_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "chapter_translations". All fields are combined with a logical 'AND'. */
export type TApi_Chapter_Translations_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Chapter_Translations_Bool_Exp>>>;
  _not: Maybe<TApi_Chapter_Translations_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Chapter_Translations_Bool_Exp>>>;
  chapter: Maybe<TApi_Chapters_Bool_Exp>;
  chapter_id: Maybe<TApi_Int_Comparison_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  locale: Maybe<TApi_Locales_Bool_Exp>;
  locale_code: Maybe<TApi_Locales_Enum_Comparison_Exp>;
  title: Maybe<TApi_String_Comparison_Exp>;
  transcription: Maybe<TApi_String_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  video: Maybe<TApi_String_Comparison_Exp>;
  vocabulary: Maybe<TApi_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chapter_translations" */
export type TApi_Chapter_Translations_Constraint = 
  /** unique or primary key constraint */
  'chapter_translations_chapter_id_locale_code_key' |
  /** unique or primary key constraint */
  'chapter_translations_pkey';

/** input type for incrementing integer column in table "chapter_translations" */
export type TApi_Chapter_Translations_Inc_Input = {
  chapter_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chapter_translations" */
export type TApi_Chapter_Translations_Insert_Input = {
  chapter: Maybe<TApi_Chapters_Obj_Rel_Insert_Input>;
  chapter_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<TApi_Locales_Obj_Rel_Insert_Input>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  transcription: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
  video: Maybe<Scalars['String']>;
  vocabulary: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TApi_Chapter_Translations_Max_Fields = {
  chapter_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  transcription: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
  video: Maybe<Scalars['String']>;
  vocabulary: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Max_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  transcription: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
  video: Maybe<TApi_Order_By>;
  vocabulary: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Chapter_Translations_Min_Fields = {
  chapter_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  transcription: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
  video: Maybe<Scalars['String']>;
  vocabulary: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Min_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  transcription: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
  video: Maybe<TApi_Order_By>;
  vocabulary: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "chapter_translations" */
export type TApi_Chapter_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Chapter_Translations>;
};

/** input type for inserting object relation for remote table "chapter_translations" */
export type TApi_Chapter_Translations_Obj_Rel_Insert_Input = {
  data: TApi_Chapter_Translations_Insert_Input;
  on_conflict: Maybe<TApi_Chapter_Translations_On_Conflict>;
};

/** on conflict condition type for table "chapter_translations" */
export type TApi_Chapter_Translations_On_Conflict = {
  constraint: TApi_Chapter_Translations_Constraint;
  update_columns: Array<TApi_Chapter_Translations_Update_Column>;
  where: Maybe<TApi_Chapter_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "chapter_translations" */
export type TApi_Chapter_Translations_Order_By = {
  chapter: Maybe<TApi_Chapters_Order_By>;
  chapter_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  locale: Maybe<TApi_Locales_Order_By>;
  locale_code: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  transcription: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
  video: Maybe<TApi_Order_By>;
  vocabulary: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "chapter_translations" */
export type TApi_Chapter_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Select_Column = 
  /** column name */
  'chapter_id' |
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'transcription' |
  /** column name */
  'updated_at' |
  /** column name */
  'video' |
  /** column name */
  'vocabulary';

/** input type for updating data in table "chapter_translations" */
export type TApi_Chapter_Translations_Set_Input = {
  chapter_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  transcription: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
  video: Maybe<Scalars['String']>;
  vocabulary: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type TApi_Chapter_Translations_Stddev_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Stddev_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Chapter_Translations_Stddev_Pop_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Stddev_Pop_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Chapter_Translations_Stddev_Samp_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Stddev_Samp_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Chapter_Translations_Sum_Fields = {
  chapter_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Sum_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** update columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Update_Column = 
  /** column name */
  'chapter_id' |
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'transcription' |
  /** column name */
  'updated_at' |
  /** column name */
  'video' |
  /** column name */
  'vocabulary';

/** aggregate var_pop on columns */
export type TApi_Chapter_Translations_Var_Pop_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Var_Pop_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Chapter_Translations_Var_Samp_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Var_Samp_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Chapter_Translations_Variance_Fields = {
  chapter_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chapter_translations" */
export type TApi_Chapter_Translations_Variance_Order_By = {
  chapter_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "chapters" */
export type TApi_Chapters = {
  audio: Maybe<Scalars['String']>;
  /** An object relationship */
  course: TApi_Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['api_timestamptz'];
  duration: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  /** An array relationship */
  translations: Array<TApi_Chapter_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: TApi_Chapter_Translations_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "chapters" */
export type TApi_ChaptersTranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Chapter_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapter_Translations_Order_By>>;
  where: Maybe<TApi_Chapter_Translations_Bool_Exp>;
};


/** columns and relationships of "chapters" */
export type TApi_ChaptersTranslations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Chapter_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapter_Translations_Order_By>>;
  where: Maybe<TApi_Chapter_Translations_Bool_Exp>;
};

/** aggregated selection of "chapters" */
export type TApi_Chapters_Aggregate = {
  aggregate: Maybe<TApi_Chapters_Aggregate_Fields>;
  nodes: Array<TApi_Chapters>;
};

/** aggregate fields of "chapters" */
export type TApi_Chapters_Aggregate_Fields = {
  avg: Maybe<TApi_Chapters_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Chapters_Max_Fields>;
  min: Maybe<TApi_Chapters_Min_Fields>;
  stddev: Maybe<TApi_Chapters_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Chapters_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Chapters_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Chapters_Sum_Fields>;
  var_pop: Maybe<TApi_Chapters_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Chapters_Var_Samp_Fields>;
  variance: Maybe<TApi_Chapters_Variance_Fields>;
};


/** aggregate fields of "chapters" */
export type TApi_Chapters_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Chapters_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chapters" */
export type TApi_Chapters_Aggregate_Order_By = {
  avg: Maybe<TApi_Chapters_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Chapters_Max_Order_By>;
  min: Maybe<TApi_Chapters_Min_Order_By>;
  stddev: Maybe<TApi_Chapters_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Chapters_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Chapters_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Chapters_Sum_Order_By>;
  var_pop: Maybe<TApi_Chapters_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Chapters_Var_Samp_Order_By>;
  variance: Maybe<TApi_Chapters_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chapters" */
export type TApi_Chapters_Arr_Rel_Insert_Input = {
  data: Array<TApi_Chapters_Insert_Input>;
  on_conflict: Maybe<TApi_Chapters_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Chapters_Avg_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chapters" */
export type TApi_Chapters_Avg_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "chapters". All fields are combined with a logical 'AND'. */
export type TApi_Chapters_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Chapters_Bool_Exp>>>;
  _not: Maybe<TApi_Chapters_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Chapters_Bool_Exp>>>;
  audio: Maybe<TApi_String_Comparison_Exp>;
  course: Maybe<TApi_Courses_Bool_Exp>;
  course_id: Maybe<TApi_Int_Comparison_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  duration: Maybe<TApi_Int_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  order: Maybe<TApi_Int_Comparison_Exp>;
  slug: Maybe<TApi_String_Comparison_Exp>;
  translations: Maybe<TApi_Chapter_Translations_Bool_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "chapters" */
export type TApi_Chapters_Constraint = 
  /** unique or primary key constraint */
  'chapters_pkey';

/** input type for incrementing integer column in table "chapters" */
export type TApi_Chapters_Inc_Input = {
  course_id: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chapters" */
export type TApi_Chapters_Insert_Input = {
  audio: Maybe<Scalars['String']>;
  course: Maybe<TApi_Courses_Obj_Rel_Insert_Input>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  translations: Maybe<TApi_Chapter_Translations_Arr_Rel_Insert_Input>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Chapters_Max_Fields = {
  audio: Maybe<Scalars['String']>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "chapters" */
export type TApi_Chapters_Max_Order_By = {
  audio: Maybe<TApi_Order_By>;
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Chapters_Min_Fields = {
  audio: Maybe<Scalars['String']>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "chapters" */
export type TApi_Chapters_Min_Order_By = {
  audio: Maybe<TApi_Order_By>;
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "chapters" */
export type TApi_Chapters_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Chapters>;
};

/** input type for inserting object relation for remote table "chapters" */
export type TApi_Chapters_Obj_Rel_Insert_Input = {
  data: TApi_Chapters_Insert_Input;
  on_conflict: Maybe<TApi_Chapters_On_Conflict>;
};

/** on conflict condition type for table "chapters" */
export type TApi_Chapters_On_Conflict = {
  constraint: TApi_Chapters_Constraint;
  update_columns: Array<TApi_Chapters_Update_Column>;
  where: Maybe<TApi_Chapters_Bool_Exp>;
};

/** ordering options when selecting data from "chapters" */
export type TApi_Chapters_Order_By = {
  audio: Maybe<TApi_Order_By>;
  course: Maybe<TApi_Courses_Order_By>;
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  translations_aggregate: Maybe<TApi_Chapter_Translations_Aggregate_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "chapters" */
export type TApi_Chapters_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chapters" */
export type TApi_Chapters_Select_Column = 
  /** column name */
  'audio' |
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'duration' |
  /** column name */
  'id' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'updated_at';

/** input type for updating data in table "chapters" */
export type TApi_Chapters_Set_Input = {
  audio: Maybe<Scalars['String']>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Chapters_Stddev_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chapters" */
export type TApi_Chapters_Stddev_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Chapters_Stddev_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chapters" */
export type TApi_Chapters_Stddev_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Chapters_Stddev_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chapters" */
export type TApi_Chapters_Stddev_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Chapters_Sum_Fields = {
  course_id: Maybe<Scalars['Int']>;
  duration: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chapters" */
export type TApi_Chapters_Sum_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** update columns of table "chapters" */
export type TApi_Chapters_Update_Column = 
  /** column name */
  'audio' |
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'duration' |
  /** column name */
  'id' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Chapters_Var_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chapters" */
export type TApi_Chapters_Var_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Chapters_Var_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chapters" */
export type TApi_Chapters_Var_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Chapters_Variance_Fields = {
  course_id: Maybe<Scalars['Float']>;
  duration: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chapters" */
export type TApi_Chapters_Variance_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  duration: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};


/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type TApi_Citext_Comparison_Exp = {
  _eq: Maybe<Scalars['api_citext']>;
  _gt: Maybe<Scalars['api_citext']>;
  _gte: Maybe<Scalars['api_citext']>;
  _ilike: Maybe<Scalars['String']>;
  _in: Maybe<Array<Scalars['api_citext']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _like: Maybe<Scalars['String']>;
  _lt: Maybe<Scalars['api_citext']>;
  _lte: Maybe<Scalars['api_citext']>;
  _neq: Maybe<Scalars['api_citext']>;
  _nilike: Maybe<Scalars['String']>;
  _nin: Maybe<Array<Scalars['api_citext']>>;
  _nlike: Maybe<Scalars['String']>;
  _nsimilar: Maybe<Scalars['String']>;
  _similar: Maybe<Scalars['String']>;
};

/** columns and relationships of "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties = {
  course_id: Maybe<Scalars['Int']>;
  quiz_difficulties: Maybe<Scalars['api__int4']>;
};

/** aggregated selection of "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Aggregate = {
  aggregate: Maybe<TApi_Course_Quiz_Difficulties_Aggregate_Fields>;
  nodes: Array<TApi_Course_Quiz_Difficulties>;
};

/** aggregate fields of "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Aggregate_Fields = {
  avg: Maybe<TApi_Course_Quiz_Difficulties_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Course_Quiz_Difficulties_Max_Fields>;
  min: Maybe<TApi_Course_Quiz_Difficulties_Min_Fields>;
  stddev: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Course_Quiz_Difficulties_Sum_Fields>;
  var_pop: Maybe<TApi_Course_Quiz_Difficulties_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Course_Quiz_Difficulties_Var_Samp_Fields>;
  variance: Maybe<TApi_Course_Quiz_Difficulties_Variance_Fields>;
};


/** aggregate fields of "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Course_Quiz_Difficulties_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Aggregate_Order_By = {
  avg: Maybe<TApi_Course_Quiz_Difficulties_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Course_Quiz_Difficulties_Max_Order_By>;
  min: Maybe<TApi_Course_Quiz_Difficulties_Min_Order_By>;
  stddev: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Course_Quiz_Difficulties_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Course_Quiz_Difficulties_Sum_Order_By>;
  var_pop: Maybe<TApi_Course_Quiz_Difficulties_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Course_Quiz_Difficulties_Var_Samp_Order_By>;
  variance: Maybe<TApi_Course_Quiz_Difficulties_Variance_Order_By>;
};

/** aggregate avg on columns */
export type TApi_Course_Quiz_Difficulties_Avg_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Avg_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "course_quiz_difficulties". All fields are combined with a logical 'AND'. */
export type TApi_Course_Quiz_Difficulties_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>>>;
  _not: Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>>>;
  course_id: Maybe<TApi_Int_Comparison_Exp>;
  quiz_difficulties: Maybe<TApi__Int4_Comparison_Exp>;
};

/** aggregate max on columns */
export type TApi_Course_Quiz_Difficulties_Max_Fields = {
  course_id: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Max_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Course_Quiz_Difficulties_Min_Fields = {
  course_id: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Min_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** ordering options when selecting data from "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  quiz_difficulties: Maybe<TApi_Order_By>;
};

/** select columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Select_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'quiz_difficulties';

/** aggregate stddev on columns */
export type TApi_Course_Quiz_Difficulties_Stddev_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Stddev_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Course_Quiz_Difficulties_Stddev_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Stddev_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Course_Quiz_Difficulties_Stddev_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Stddev_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Course_Quiz_Difficulties_Sum_Fields = {
  course_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Sum_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate var_pop on columns */
export type TApi_Course_Quiz_Difficulties_Var_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Var_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Course_Quiz_Difficulties_Var_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Var_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Course_Quiz_Difficulties_Variance_Fields = {
  course_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_quiz_difficulties" */
export type TApi_Course_Quiz_Difficulties_Variance_Order_By = {
  course_id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "course_translations" */
export type TApi_Course_Translations = {
  /** An object relationship */
  course: TApi_Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['api_timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  locale: TApi_Locales;
  locale_code: TApi_Locales_Enum;
  title: Scalars['String'];
  updated_at: Scalars['api_timestamptz'];
};

/** aggregated selection of "course_translations" */
export type TApi_Course_Translations_Aggregate = {
  aggregate: Maybe<TApi_Course_Translations_Aggregate_Fields>;
  nodes: Array<TApi_Course_Translations>;
};

/** aggregate fields of "course_translations" */
export type TApi_Course_Translations_Aggregate_Fields = {
  avg: Maybe<TApi_Course_Translations_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Course_Translations_Max_Fields>;
  min: Maybe<TApi_Course_Translations_Min_Fields>;
  stddev: Maybe<TApi_Course_Translations_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Course_Translations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Course_Translations_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Course_Translations_Sum_Fields>;
  var_pop: Maybe<TApi_Course_Translations_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Course_Translations_Var_Samp_Fields>;
  variance: Maybe<TApi_Course_Translations_Variance_Fields>;
};


/** aggregate fields of "course_translations" */
export type TApi_Course_Translations_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Course_Translations_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_translations" */
export type TApi_Course_Translations_Aggregate_Order_By = {
  avg: Maybe<TApi_Course_Translations_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Course_Translations_Max_Order_By>;
  min: Maybe<TApi_Course_Translations_Min_Order_By>;
  stddev: Maybe<TApi_Course_Translations_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Course_Translations_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Course_Translations_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Course_Translations_Sum_Order_By>;
  var_pop: Maybe<TApi_Course_Translations_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Course_Translations_Var_Samp_Order_By>;
  variance: Maybe<TApi_Course_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course_translations" */
export type TApi_Course_Translations_Arr_Rel_Insert_Input = {
  data: Array<TApi_Course_Translations_Insert_Input>;
  on_conflict: Maybe<TApi_Course_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Course_Translations_Avg_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_translations" */
export type TApi_Course_Translations_Avg_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "course_translations". All fields are combined with a logical 'AND'. */
export type TApi_Course_Translations_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Course_Translations_Bool_Exp>>>;
  _not: Maybe<TApi_Course_Translations_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Course_Translations_Bool_Exp>>>;
  course: Maybe<TApi_Courses_Bool_Exp>;
  course_id: Maybe<TApi_Int_Comparison_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  description: Maybe<TApi_String_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  locale: Maybe<TApi_Locales_Bool_Exp>;
  locale_code: Maybe<TApi_Locales_Enum_Comparison_Exp>;
  title: Maybe<TApi_String_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_translations" */
export type TApi_Course_Translations_Constraint = 
  /** unique or primary key constraint */
  'course_translations_locale_code_course_id_key' |
  /** unique or primary key constraint */
  'course_translations_pkey';

/** input type for incrementing integer column in table "course_translations" */
export type TApi_Course_Translations_Inc_Input = {
  course_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "course_translations" */
export type TApi_Course_Translations_Insert_Input = {
  course: Maybe<TApi_Courses_Obj_Rel_Insert_Input>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<TApi_Locales_Obj_Rel_Insert_Input>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Course_Translations_Max_Fields = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "course_translations" */
export type TApi_Course_Translations_Max_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Course_Translations_Min_Fields = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "course_translations" */
export type TApi_Course_Translations_Min_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "course_translations" */
export type TApi_Course_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Course_Translations>;
};

/** input type for inserting object relation for remote table "course_translations" */
export type TApi_Course_Translations_Obj_Rel_Insert_Input = {
  data: TApi_Course_Translations_Insert_Input;
  on_conflict: Maybe<TApi_Course_Translations_On_Conflict>;
};

/** on conflict condition type for table "course_translations" */
export type TApi_Course_Translations_On_Conflict = {
  constraint: TApi_Course_Translations_Constraint;
  update_columns: Array<TApi_Course_Translations_Update_Column>;
  where: Maybe<TApi_Course_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "course_translations" */
export type TApi_Course_Translations_Order_By = {
  course: Maybe<TApi_Courses_Order_By>;
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  locale: Maybe<TApi_Locales_Order_By>;
  locale_code: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "course_translations" */
export type TApi_Course_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "course_translations" */
export type TApi_Course_Translations_Select_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'description' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'updated_at';

/** input type for updating data in table "course_translations" */
export type TApi_Course_Translations_Set_Input = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Course_Translations_Stddev_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_translations" */
export type TApi_Course_Translations_Stddev_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Course_Translations_Stddev_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_translations" */
export type TApi_Course_Translations_Stddev_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Course_Translations_Stddev_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_translations" */
export type TApi_Course_Translations_Stddev_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Course_Translations_Sum_Fields = {
  course_id: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_translations" */
export type TApi_Course_Translations_Sum_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** update columns of table "course_translations" */
export type TApi_Course_Translations_Update_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'description' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Course_Translations_Var_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_translations" */
export type TApi_Course_Translations_Var_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Course_Translations_Var_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_translations" */
export type TApi_Course_Translations_Var_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Course_Translations_Variance_Fields = {
  course_id: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_translations" */
export type TApi_Course_Translations_Variance_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "courses" */
export type TApi_Courses = {
  /** An array relationship */
  chapters: Array<TApi_Chapters>;
  /** An aggregated array relationship */
  chapters_aggregate: TApi_Chapters_Aggregate;
  created_at: Scalars['api_timestamptz'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  order: Scalars['Int'];
  /** An object relationship */
  quiz_difficulties: Maybe<TApi_Course_Quiz_Difficulties>;
  /** An array relationship */
  quizzes: Array<TApi_Quizzes>;
  /** An aggregated array relationship */
  quizzes_aggregate: TApi_Quizzes_Aggregate;
  slug: Scalars['String'];
  /** An object relationship */
  topic: TApi_Topics;
  topic_id: Scalars['Int'];
  /** An object relationship */
  track: TApi_Tracks;
  track_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<TApi_Course_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: TApi_Course_Translations_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "courses" */
export type TApi_CoursesChaptersArgs = {
  distinct_on: Maybe<Array<TApi_Chapters_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapters_Order_By>>;
  where: Maybe<TApi_Chapters_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type TApi_CoursesChapters_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Chapters_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Chapters_Order_By>>;
  where: Maybe<TApi_Chapters_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type TApi_CoursesQuizzesArgs = {
  distinct_on: Maybe<Array<TApi_Quizzes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quizzes_Order_By>>;
  where: Maybe<TApi_Quizzes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type TApi_CoursesQuizzes_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Quizzes_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quizzes_Order_By>>;
  where: Maybe<TApi_Quizzes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type TApi_CoursesTranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Course_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Translations_Order_By>>;
  where: Maybe<TApi_Course_Translations_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type TApi_CoursesTranslations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Course_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Course_Translations_Order_By>>;
  where: Maybe<TApi_Course_Translations_Bool_Exp>;
};

/** aggregated selection of "courses" */
export type TApi_Courses_Aggregate = {
  aggregate: Maybe<TApi_Courses_Aggregate_Fields>;
  nodes: Array<TApi_Courses>;
};

/** aggregate fields of "courses" */
export type TApi_Courses_Aggregate_Fields = {
  avg: Maybe<TApi_Courses_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Courses_Max_Fields>;
  min: Maybe<TApi_Courses_Min_Fields>;
  stddev: Maybe<TApi_Courses_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Courses_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Courses_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Courses_Sum_Fields>;
  var_pop: Maybe<TApi_Courses_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Courses_Var_Samp_Fields>;
  variance: Maybe<TApi_Courses_Variance_Fields>;
};


/** aggregate fields of "courses" */
export type TApi_Courses_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Courses_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type TApi_Courses_Aggregate_Order_By = {
  avg: Maybe<TApi_Courses_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Courses_Max_Order_By>;
  min: Maybe<TApi_Courses_Min_Order_By>;
  stddev: Maybe<TApi_Courses_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Courses_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Courses_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Courses_Sum_Order_By>;
  var_pop: Maybe<TApi_Courses_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Courses_Var_Samp_Order_By>;
  variance: Maybe<TApi_Courses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courses" */
export type TApi_Courses_Arr_Rel_Insert_Input = {
  data: Array<TApi_Courses_Insert_Input>;
  on_conflict: Maybe<TApi_Courses_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Courses_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses" */
export type TApi_Courses_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type TApi_Courses_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Courses_Bool_Exp>>>;
  _not: Maybe<TApi_Courses_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Courses_Bool_Exp>>>;
  chapters: Maybe<TApi_Chapters_Bool_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  level: Maybe<TApi_Int_Comparison_Exp>;
  order: Maybe<TApi_Int_Comparison_Exp>;
  quiz_difficulties: Maybe<TApi_Course_Quiz_Difficulties_Bool_Exp>;
  quizzes: Maybe<TApi_Quizzes_Bool_Exp>;
  slug: Maybe<TApi_String_Comparison_Exp>;
  topic: Maybe<TApi_Topics_Bool_Exp>;
  topic_id: Maybe<TApi_Int_Comparison_Exp>;
  track: Maybe<TApi_Tracks_Bool_Exp>;
  track_id: Maybe<TApi_Int_Comparison_Exp>;
  translations: Maybe<TApi_Course_Translations_Bool_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses" */
export type TApi_Courses_Constraint = 
  /** unique or primary key constraint */
  'courses_pkey';

/** input type for incrementing integer column in table "courses" */
export type TApi_Courses_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  topic_id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "courses" */
export type TApi_Courses_Insert_Input = {
  chapters: Maybe<TApi_Chapters_Arr_Rel_Insert_Input>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  quizzes: Maybe<TApi_Quizzes_Arr_Rel_Insert_Input>;
  slug: Maybe<Scalars['String']>;
  topic: Maybe<TApi_Topics_Obj_Rel_Insert_Input>;
  topic_id: Maybe<Scalars['Int']>;
  track: Maybe<TApi_Tracks_Obj_Rel_Insert_Input>;
  track_id: Maybe<Scalars['Int']>;
  translations: Maybe<TApi_Course_Translations_Arr_Rel_Insert_Input>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Courses_Max_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "courses" */
export type TApi_Courses_Max_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Courses_Min_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "courses" */
export type TApi_Courses_Min_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "courses" */
export type TApi_Courses_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Courses>;
};

/** input type for inserting object relation for remote table "courses" */
export type TApi_Courses_Obj_Rel_Insert_Input = {
  data: TApi_Courses_Insert_Input;
  on_conflict: Maybe<TApi_Courses_On_Conflict>;
};

/** on conflict condition type for table "courses" */
export type TApi_Courses_On_Conflict = {
  constraint: TApi_Courses_Constraint;
  update_columns: Array<TApi_Courses_Update_Column>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};

/** ordering options when selecting data from "courses" */
export type TApi_Courses_Order_By = {
  chapters_aggregate: Maybe<TApi_Chapters_Aggregate_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  quiz_difficulties: Maybe<TApi_Course_Quiz_Difficulties_Order_By>;
  quizzes_aggregate: Maybe<TApi_Quizzes_Aggregate_Order_By>;
  slug: Maybe<TApi_Order_By>;
  topic: Maybe<TApi_Topics_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track: Maybe<TApi_Tracks_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  translations_aggregate: Maybe<TApi_Course_Translations_Aggregate_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "courses" */
export type TApi_Courses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "courses" */
export type TApi_Courses_Select_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'level' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'topic_id' |
  /** column name */
  'track_id' |
  /** column name */
  'updated_at';

/** input type for updating data in table "courses" */
export type TApi_Courses_Set_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Courses_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses" */
export type TApi_Courses_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Courses_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses" */
export type TApi_Courses_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Courses_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses" */
export type TApi_Courses_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Courses_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  topic_id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "courses" */
export type TApi_Courses_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** update columns of table "courses" */
export type TApi_Courses_Update_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'level' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'topic_id' |
  /** column name */
  'track_id' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Courses_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses" */
export type TApi_Courses_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Courses_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses" */
export type TApi_Courses_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Courses_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses" */
export type TApi_Courses_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type TApi_Int_Comparison_Exp = {
  _eq: Maybe<Scalars['Int']>;
  _gt: Maybe<Scalars['Int']>;
  _gte: Maybe<Scalars['Int']>;
  _in: Maybe<Array<Scalars['Int']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['Int']>;
  _lte: Maybe<Scalars['Int']>;
  _neq: Maybe<Scalars['Int']>;
  _nin: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type TApi_Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in: Maybe<Scalars['api_jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains: Maybe<Scalars['api_jsonb']>;
  _eq: Maybe<Scalars['api_jsonb']>;
  _gt: Maybe<Scalars['api_jsonb']>;
  _gte: Maybe<Scalars['api_jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any: Maybe<Array<Scalars['String']>>;
  _in: Maybe<Array<Scalars['api_jsonb']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['api_jsonb']>;
  _lte: Maybe<Scalars['api_jsonb']>;
  _neq: Maybe<Scalars['api_jsonb']>;
  _nin: Maybe<Array<Scalars['api_jsonb']>>;
};

/** columns and relationships of "locales" */
export type TApi_Locales = {
  code: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "locales" */
export type TApi_Locales_Aggregate = {
  aggregate: Maybe<TApi_Locales_Aggregate_Fields>;
  nodes: Array<TApi_Locales>;
};

/** aggregate fields of "locales" */
export type TApi_Locales_Aggregate_Fields = {
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Locales_Max_Fields>;
  min: Maybe<TApi_Locales_Min_Fields>;
};


/** aggregate fields of "locales" */
export type TApi_Locales_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Locales_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locales" */
export type TApi_Locales_Aggregate_Order_By = {
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Locales_Max_Order_By>;
  min: Maybe<TApi_Locales_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locales" */
export type TApi_Locales_Arr_Rel_Insert_Input = {
  data: Array<TApi_Locales_Insert_Input>;
  on_conflict: Maybe<TApi_Locales_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locales". All fields are combined with a logical 'AND'. */
export type TApi_Locales_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Locales_Bool_Exp>>>;
  _not: Maybe<TApi_Locales_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Locales_Bool_Exp>>>;
  code: Maybe<TApi_String_Comparison_Exp>;
  name: Maybe<TApi_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "locales" */
export type TApi_Locales_Constraint = 
  /** unique or primary key constraint */
  'locales_pkey';

export type TApi_Locales_Enum = 
  /** العربية */
  'ar' |
  /** Français */
  'fr';

/** expression to compare columns of type locales_enum. All fields are combined with logical 'AND'. */
export type TApi_Locales_Enum_Comparison_Exp = {
  _eq: Maybe<TApi_Locales_Enum>;
  _in: Maybe<Array<TApi_Locales_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<TApi_Locales_Enum>;
  _nin: Maybe<Array<TApi_Locales_Enum>>;
};

/** input type for inserting data into table "locales" */
export type TApi_Locales_Insert_Input = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TApi_Locales_Max_Fields = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "locales" */
export type TApi_Locales_Max_Order_By = {
  code: Maybe<TApi_Order_By>;
  name: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Locales_Min_Fields = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "locales" */
export type TApi_Locales_Min_Order_By = {
  code: Maybe<TApi_Order_By>;
  name: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "locales" */
export type TApi_Locales_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Locales>;
};

/** input type for inserting object relation for remote table "locales" */
export type TApi_Locales_Obj_Rel_Insert_Input = {
  data: TApi_Locales_Insert_Input;
  on_conflict: Maybe<TApi_Locales_On_Conflict>;
};

/** on conflict condition type for table "locales" */
export type TApi_Locales_On_Conflict = {
  constraint: TApi_Locales_Constraint;
  update_columns: Array<TApi_Locales_Update_Column>;
  where: Maybe<TApi_Locales_Bool_Exp>;
};

/** ordering options when selecting data from "locales" */
export type TApi_Locales_Order_By = {
  code: Maybe<TApi_Order_By>;
  name: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "locales" */
export type TApi_Locales_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "locales" */
export type TApi_Locales_Select_Column = 
  /** column name */
  'code' |
  /** column name */
  'name';

/** input type for updating data in table "locales" */
export type TApi_Locales_Set_Input = {
  code: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
};

/** update columns of table "locales" */
export type TApi_Locales_Update_Column = 
  /** column name */
  'code' |
  /** column name */
  'name';

/** column ordering options */
export type TApi_Order_By = 
  /** in the ascending order, nulls last */
  'asc' |
  /** in the ascending order, nulls first */
  'asc_nulls_first' |
  /** in the ascending order, nulls last */
  'asc_nulls_last' |
  /** in the descending order, nulls first */
  'desc' |
  /** in the descending order, nulls first */
  'desc_nulls_first' |
  /** in the descending order, nulls last */
  'desc_nulls_last';

/** columns and relationships of "quiz_translations" */
export type TApi_Quiz_Translations = {
  created_at: Scalars['api_timestamptz'];
  data: Scalars['api_jsonb'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: TApi_Locales;
  locale_code: TApi_Locales_Enum;
  /** An object relationship */
  quiz: TApi_Quizzes;
  quiz_id: Scalars['Int'];
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "quiz_translations" */
export type TApi_Quiz_TranslationsDataArgs = {
  path: Maybe<Scalars['String']>;
};

/** aggregated selection of "quiz_translations" */
export type TApi_Quiz_Translations_Aggregate = {
  aggregate: Maybe<TApi_Quiz_Translations_Aggregate_Fields>;
  nodes: Array<TApi_Quiz_Translations>;
};

/** aggregate fields of "quiz_translations" */
export type TApi_Quiz_Translations_Aggregate_Fields = {
  avg: Maybe<TApi_Quiz_Translations_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Quiz_Translations_Max_Fields>;
  min: Maybe<TApi_Quiz_Translations_Min_Fields>;
  stddev: Maybe<TApi_Quiz_Translations_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Quiz_Translations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Quiz_Translations_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Quiz_Translations_Sum_Fields>;
  var_pop: Maybe<TApi_Quiz_Translations_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Quiz_Translations_Var_Samp_Fields>;
  variance: Maybe<TApi_Quiz_Translations_Variance_Fields>;
};


/** aggregate fields of "quiz_translations" */
export type TApi_Quiz_Translations_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Quiz_Translations_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz_translations" */
export type TApi_Quiz_Translations_Aggregate_Order_By = {
  avg: Maybe<TApi_Quiz_Translations_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Quiz_Translations_Max_Order_By>;
  min: Maybe<TApi_Quiz_Translations_Min_Order_By>;
  stddev: Maybe<TApi_Quiz_Translations_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Quiz_Translations_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Quiz_Translations_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Quiz_Translations_Sum_Order_By>;
  var_pop: Maybe<TApi_Quiz_Translations_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Quiz_Translations_Var_Samp_Order_By>;
  variance: Maybe<TApi_Quiz_Translations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type TApi_Quiz_Translations_Append_Input = {
  data: Maybe<Scalars['api_jsonb']>;
};

/** input type for inserting array relation for remote table "quiz_translations" */
export type TApi_Quiz_Translations_Arr_Rel_Insert_Input = {
  data: Array<TApi_Quiz_Translations_Insert_Input>;
  on_conflict: Maybe<TApi_Quiz_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Quiz_Translations_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "quiz_translations". All fields are combined with a logical 'AND'. */
export type TApi_Quiz_Translations_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Quiz_Translations_Bool_Exp>>>;
  _not: Maybe<TApi_Quiz_Translations_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Quiz_Translations_Bool_Exp>>>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  data: Maybe<TApi_Jsonb_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  locale: Maybe<TApi_Locales_Bool_Exp>;
  locale_code: Maybe<TApi_Locales_Enum_Comparison_Exp>;
  quiz: Maybe<TApi_Quizzes_Bool_Exp>;
  quiz_id: Maybe<TApi_Int_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_translations" */
export type TApi_Quiz_Translations_Constraint = 
  /** unique or primary key constraint */
  'quiz_translations_pkey' |
  /** unique or primary key constraint */
  'quiz_translations_quiz_id_locale_code_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type TApi_Quiz_Translations_Delete_At_Path_Input = {
  data: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type TApi_Quiz_Translations_Delete_Elem_Input = {
  data: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type TApi_Quiz_Translations_Delete_Key_Input = {
  data: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "quiz_translations" */
export type TApi_Quiz_Translations_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  quiz_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz_translations" */
export type TApi_Quiz_Translations_Insert_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  data: Maybe<Scalars['api_jsonb']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<TApi_Locales_Obj_Rel_Insert_Input>;
  locale_code: Maybe<TApi_Locales_Enum>;
  quiz: Maybe<TApi_Quizzes_Obj_Rel_Insert_Input>;
  quiz_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Quiz_Translations_Max_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  quiz_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Max_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Quiz_Translations_Min_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  quiz_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Min_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "quiz_translations" */
export type TApi_Quiz_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Quiz_Translations>;
};

/** input type for inserting object relation for remote table "quiz_translations" */
export type TApi_Quiz_Translations_Obj_Rel_Insert_Input = {
  data: TApi_Quiz_Translations_Insert_Input;
  on_conflict: Maybe<TApi_Quiz_Translations_On_Conflict>;
};

/** on conflict condition type for table "quiz_translations" */
export type TApi_Quiz_Translations_On_Conflict = {
  constraint: TApi_Quiz_Translations_Constraint;
  update_columns: Array<TApi_Quiz_Translations_Update_Column>;
  where: Maybe<TApi_Quiz_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "quiz_translations" */
export type TApi_Quiz_Translations_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  data: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  locale: Maybe<TApi_Locales_Order_By>;
  locale_code: Maybe<TApi_Order_By>;
  quiz: Maybe<TApi_Quizzes_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "quiz_translations" */
export type TApi_Quiz_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type TApi_Quiz_Translations_Prepend_Input = {
  data: Maybe<Scalars['api_jsonb']>;
};

/** select columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Select_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'data' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'quiz_id' |
  /** column name */
  'updated_at';

/** input type for updating data in table "quiz_translations" */
export type TApi_Quiz_Translations_Set_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  data: Maybe<Scalars['api_jsonb']>;
  id: Maybe<Scalars['Int']>;
  locale_code: Maybe<TApi_Locales_Enum>;
  quiz_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Quiz_Translations_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Quiz_Translations_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Quiz_Translations_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Quiz_Translations_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  quiz_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** update columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Update_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'data' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'quiz_id' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Quiz_Translations_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Quiz_Translations_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Quiz_Translations_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  quiz_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quiz_translations" */
export type TApi_Quiz_Translations_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  quiz_id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "quiz_types" */
export type TApi_Quiz_Types = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

/** aggregated selection of "quiz_types" */
export type TApi_Quiz_Types_Aggregate = {
  aggregate: Maybe<TApi_Quiz_Types_Aggregate_Fields>;
  nodes: Array<TApi_Quiz_Types>;
};

/** aggregate fields of "quiz_types" */
export type TApi_Quiz_Types_Aggregate_Fields = {
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Quiz_Types_Max_Fields>;
  min: Maybe<TApi_Quiz_Types_Min_Fields>;
};


/** aggregate fields of "quiz_types" */
export type TApi_Quiz_Types_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Quiz_Types_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz_types" */
export type TApi_Quiz_Types_Aggregate_Order_By = {
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Quiz_Types_Max_Order_By>;
  min: Maybe<TApi_Quiz_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quiz_types" */
export type TApi_Quiz_Types_Arr_Rel_Insert_Input = {
  data: Array<TApi_Quiz_Types_Insert_Input>;
  on_conflict: Maybe<TApi_Quiz_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quiz_types". All fields are combined with a logical 'AND'. */
export type TApi_Quiz_Types_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Quiz_Types_Bool_Exp>>>;
  _not: Maybe<TApi_Quiz_Types_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Quiz_Types_Bool_Exp>>>;
  name: Maybe<TApi_String_Comparison_Exp>;
  slug: Maybe<TApi_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_types" */
export type TApi_Quiz_Types_Constraint = 
  /** unique or primary key constraint */
  'quiz_types_pkey';

export type TApi_Quiz_Types_Enum = 
  /** Choose the correct answer */
  'choose' |
  /** Choose the correct category */
  'choose_a_category' |
  /** Fill in the blank */
  'fill_in_the_blank' |
  /** Link the matching sentences */
  'link_the_sentences' |
  /** Answer by true or false */
  'true_or_false';

/** expression to compare columns of type quiz_types_enum. All fields are combined with logical 'AND'. */
export type TApi_Quiz_Types_Enum_Comparison_Exp = {
  _eq: Maybe<TApi_Quiz_Types_Enum>;
  _in: Maybe<Array<TApi_Quiz_Types_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<TApi_Quiz_Types_Enum>;
  _nin: Maybe<Array<TApi_Quiz_Types_Enum>>;
};

/** input type for inserting data into table "quiz_types" */
export type TApi_Quiz_Types_Insert_Input = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TApi_Quiz_Types_Max_Fields = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quiz_types" */
export type TApi_Quiz_Types_Max_Order_By = {
  name: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Quiz_Types_Min_Fields = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quiz_types" */
export type TApi_Quiz_Types_Min_Order_By = {
  name: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "quiz_types" */
export type TApi_Quiz_Types_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Quiz_Types>;
};

/** input type for inserting object relation for remote table "quiz_types" */
export type TApi_Quiz_Types_Obj_Rel_Insert_Input = {
  data: TApi_Quiz_Types_Insert_Input;
  on_conflict: Maybe<TApi_Quiz_Types_On_Conflict>;
};

/** on conflict condition type for table "quiz_types" */
export type TApi_Quiz_Types_On_Conflict = {
  constraint: TApi_Quiz_Types_Constraint;
  update_columns: Array<TApi_Quiz_Types_Update_Column>;
  where: Maybe<TApi_Quiz_Types_Bool_Exp>;
};

/** ordering options when selecting data from "quiz_types" */
export type TApi_Quiz_Types_Order_By = {
  name: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "quiz_types" */
export type TApi_Quiz_Types_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "quiz_types" */
export type TApi_Quiz_Types_Select_Column = 
  /** column name */
  'name' |
  /** column name */
  'slug';

/** input type for updating data in table "quiz_types" */
export type TApi_Quiz_Types_Set_Input = {
  name: Maybe<Scalars['String']>;
  slug: Maybe<Scalars['String']>;
};

/** update columns of table "quiz_types" */
export type TApi_Quiz_Types_Update_Column = 
  /** column name */
  'name' |
  /** column name */
  'slug';

/** columns and relationships of "quizzes" */
export type TApi_Quizzes = {
  /** An object relationship */
  course: TApi_Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['api_timestamptz'];
  difficulty: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  translations: Array<TApi_Quiz_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: TApi_Quiz_Translations_Aggregate;
  /** An object relationship */
  type: TApi_Quiz_Types;
  type_slug: TApi_Quiz_Types_Enum;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "quizzes" */
export type TApi_QuizzesTranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Translations_Order_By>>;
  where: Maybe<TApi_Quiz_Translations_Bool_Exp>;
};


/** columns and relationships of "quizzes" */
export type TApi_QuizzesTranslations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Quiz_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Quiz_Translations_Order_By>>;
  where: Maybe<TApi_Quiz_Translations_Bool_Exp>;
};

/** aggregated selection of "quizzes" */
export type TApi_Quizzes_Aggregate = {
  aggregate: Maybe<TApi_Quizzes_Aggregate_Fields>;
  nodes: Array<TApi_Quizzes>;
};

/** aggregate fields of "quizzes" */
export type TApi_Quizzes_Aggregate_Fields = {
  avg: Maybe<TApi_Quizzes_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Quizzes_Max_Fields>;
  min: Maybe<TApi_Quizzes_Min_Fields>;
  stddev: Maybe<TApi_Quizzes_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Quizzes_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Quizzes_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Quizzes_Sum_Fields>;
  var_pop: Maybe<TApi_Quizzes_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Quizzes_Var_Samp_Fields>;
  variance: Maybe<TApi_Quizzes_Variance_Fields>;
};


/** aggregate fields of "quizzes" */
export type TApi_Quizzes_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Quizzes_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quizzes" */
export type TApi_Quizzes_Aggregate_Order_By = {
  avg: Maybe<TApi_Quizzes_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Quizzes_Max_Order_By>;
  min: Maybe<TApi_Quizzes_Min_Order_By>;
  stddev: Maybe<TApi_Quizzes_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Quizzes_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Quizzes_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Quizzes_Sum_Order_By>;
  var_pop: Maybe<TApi_Quizzes_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Quizzes_Var_Samp_Order_By>;
  variance: Maybe<TApi_Quizzes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quizzes" */
export type TApi_Quizzes_Arr_Rel_Insert_Input = {
  data: Array<TApi_Quizzes_Insert_Input>;
  on_conflict: Maybe<TApi_Quizzes_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Quizzes_Avg_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quizzes" */
export type TApi_Quizzes_Avg_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "quizzes". All fields are combined with a logical 'AND'. */
export type TApi_Quizzes_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Quizzes_Bool_Exp>>>;
  _not: Maybe<TApi_Quizzes_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Quizzes_Bool_Exp>>>;
  course: Maybe<TApi_Courses_Bool_Exp>;
  course_id: Maybe<TApi_Int_Comparison_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  difficulty: Maybe<TApi_Int_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  translations: Maybe<TApi_Quiz_Translations_Bool_Exp>;
  type: Maybe<TApi_Quiz_Types_Bool_Exp>;
  type_slug: Maybe<TApi_Quiz_Types_Enum_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quizzes" */
export type TApi_Quizzes_Constraint = 
  /** unique or primary key constraint */
  'quizzes_pkey';

/** input type for incrementing integer column in table "quizzes" */
export type TApi_Quizzes_Inc_Input = {
  course_id: Maybe<Scalars['Int']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quizzes" */
export type TApi_Quizzes_Insert_Input = {
  course: Maybe<TApi_Courses_Obj_Rel_Insert_Input>;
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  translations: Maybe<TApi_Quiz_Translations_Arr_Rel_Insert_Input>;
  type: Maybe<TApi_Quiz_Types_Obj_Rel_Insert_Input>;
  type_slug: Maybe<TApi_Quiz_Types_Enum>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Quizzes_Max_Fields = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "quizzes" */
export type TApi_Quizzes_Max_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Quizzes_Min_Fields = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "quizzes" */
export type TApi_Quizzes_Min_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "quizzes" */
export type TApi_Quizzes_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Quizzes>;
};

/** input type for inserting object relation for remote table "quizzes" */
export type TApi_Quizzes_Obj_Rel_Insert_Input = {
  data: TApi_Quizzes_Insert_Input;
  on_conflict: Maybe<TApi_Quizzes_On_Conflict>;
};

/** on conflict condition type for table "quizzes" */
export type TApi_Quizzes_On_Conflict = {
  constraint: TApi_Quizzes_Constraint;
  update_columns: Array<TApi_Quizzes_Update_Column>;
  where: Maybe<TApi_Quizzes_Bool_Exp>;
};

/** ordering options when selecting data from "quizzes" */
export type TApi_Quizzes_Order_By = {
  course: Maybe<TApi_Courses_Order_By>;
  course_id: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  translations_aggregate: Maybe<TApi_Quiz_Translations_Aggregate_Order_By>;
  type: Maybe<TApi_Quiz_Types_Order_By>;
  type_slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "quizzes" */
export type TApi_Quizzes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quizzes" */
export type TApi_Quizzes_Select_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'difficulty' |
  /** column name */
  'id' |
  /** column name */
  'type_slug' |
  /** column name */
  'updated_at';

/** input type for updating data in table "quizzes" */
export type TApi_Quizzes_Set_Input = {
  course_id: Maybe<Scalars['Int']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  type_slug: Maybe<TApi_Quiz_Types_Enum>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Quizzes_Stddev_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quizzes" */
export type TApi_Quizzes_Stddev_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Quizzes_Stddev_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quizzes" */
export type TApi_Quizzes_Stddev_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Quizzes_Stddev_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quizzes" */
export type TApi_Quizzes_Stddev_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Quizzes_Sum_Fields = {
  course_id: Maybe<Scalars['Int']>;
  difficulty: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quizzes" */
export type TApi_Quizzes_Sum_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** update columns of table "quizzes" */
export type TApi_Quizzes_Update_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'created_at' |
  /** column name */
  'difficulty' |
  /** column name */
  'id' |
  /** column name */
  'type_slug' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Quizzes_Var_Pop_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quizzes" */
export type TApi_Quizzes_Var_Pop_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Quizzes_Var_Samp_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quizzes" */
export type TApi_Quizzes_Var_Samp_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Quizzes_Variance_Fields = {
  course_id: Maybe<Scalars['Float']>;
  difficulty: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quizzes" */
export type TApi_Quizzes_Variance_Order_By = {
  course_id: Maybe<TApi_Order_By>;
  difficulty: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type TApi_String_Comparison_Exp = {
  _eq: Maybe<Scalars['String']>;
  _gt: Maybe<Scalars['String']>;
  _gte: Maybe<Scalars['String']>;
  _ilike: Maybe<Scalars['String']>;
  _in: Maybe<Array<Scalars['String']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _like: Maybe<Scalars['String']>;
  _lt: Maybe<Scalars['String']>;
  _lte: Maybe<Scalars['String']>;
  _neq: Maybe<Scalars['String']>;
  _nilike: Maybe<Scalars['String']>;
  _nin: Maybe<Array<Scalars['String']>>;
  _nlike: Maybe<Scalars['String']>;
  _nsimilar: Maybe<Scalars['String']>;
  _similar: Maybe<Scalars['String']>;
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type TApi_Timestamptz_Comparison_Exp = {
  _eq: Maybe<Scalars['api_timestamptz']>;
  _gt: Maybe<Scalars['api_timestamptz']>;
  _gte: Maybe<Scalars['api_timestamptz']>;
  _in: Maybe<Array<Scalars['api_timestamptz']>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _lt: Maybe<Scalars['api_timestamptz']>;
  _lte: Maybe<Scalars['api_timestamptz']>;
  _neq: Maybe<Scalars['api_timestamptz']>;
  _nin: Maybe<Array<Scalars['api_timestamptz']>>;
};

/** columns and relationships of "topic_translations" */
export type TApi_Topic_Translations = {
  created_at: Scalars['api_timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: TApi_Locales;
  locale_code: TApi_Locales_Enum;
  title: Scalars['String'];
  /** An object relationship */
  topic: TApi_Topics;
  topic_id: Scalars['Int'];
  updated_at: Scalars['api_timestamptz'];
};

/** aggregated selection of "topic_translations" */
export type TApi_Topic_Translations_Aggregate = {
  aggregate: Maybe<TApi_Topic_Translations_Aggregate_Fields>;
  nodes: Array<TApi_Topic_Translations>;
};

/** aggregate fields of "topic_translations" */
export type TApi_Topic_Translations_Aggregate_Fields = {
  avg: Maybe<TApi_Topic_Translations_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Topic_Translations_Max_Fields>;
  min: Maybe<TApi_Topic_Translations_Min_Fields>;
  stddev: Maybe<TApi_Topic_Translations_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Topic_Translations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Topic_Translations_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Topic_Translations_Sum_Fields>;
  var_pop: Maybe<TApi_Topic_Translations_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Topic_Translations_Var_Samp_Fields>;
  variance: Maybe<TApi_Topic_Translations_Variance_Fields>;
};


/** aggregate fields of "topic_translations" */
export type TApi_Topic_Translations_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Topic_Translations_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topic_translations" */
export type TApi_Topic_Translations_Aggregate_Order_By = {
  avg: Maybe<TApi_Topic_Translations_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Topic_Translations_Max_Order_By>;
  min: Maybe<TApi_Topic_Translations_Min_Order_By>;
  stddev: Maybe<TApi_Topic_Translations_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Topic_Translations_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Topic_Translations_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Topic_Translations_Sum_Order_By>;
  var_pop: Maybe<TApi_Topic_Translations_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Topic_Translations_Var_Samp_Order_By>;
  variance: Maybe<TApi_Topic_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "topic_translations" */
export type TApi_Topic_Translations_Arr_Rel_Insert_Input = {
  data: Array<TApi_Topic_Translations_Insert_Input>;
  on_conflict: Maybe<TApi_Topic_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Topic_Translations_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "topic_translations". All fields are combined with a logical 'AND'. */
export type TApi_Topic_Translations_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Topic_Translations_Bool_Exp>>>;
  _not: Maybe<TApi_Topic_Translations_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Topic_Translations_Bool_Exp>>>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  locale: Maybe<TApi_Locales_Bool_Exp>;
  locale_code: Maybe<TApi_Locales_Enum_Comparison_Exp>;
  title: Maybe<TApi_String_Comparison_Exp>;
  topic: Maybe<TApi_Topics_Bool_Exp>;
  topic_id: Maybe<TApi_Int_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topic_translations" */
export type TApi_Topic_Translations_Constraint = 
  /** unique or primary key constraint */
  'topic_translations_locale_code_topic_id_key' |
  /** unique or primary key constraint */
  'topic_translations_pkey';

/** input type for incrementing integer column in table "topic_translations" */
export type TApi_Topic_Translations_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  topic_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "topic_translations" */
export type TApi_Topic_Translations_Insert_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<TApi_Locales_Obj_Rel_Insert_Input>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  topic: Maybe<TApi_Topics_Obj_Rel_Insert_Input>;
  topic_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Topic_Translations_Max_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Max_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Topic_Translations_Min_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Min_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "topic_translations" */
export type TApi_Topic_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Topic_Translations>;
};

/** input type for inserting object relation for remote table "topic_translations" */
export type TApi_Topic_Translations_Obj_Rel_Insert_Input = {
  data: TApi_Topic_Translations_Insert_Input;
  on_conflict: Maybe<TApi_Topic_Translations_On_Conflict>;
};

/** on conflict condition type for table "topic_translations" */
export type TApi_Topic_Translations_On_Conflict = {
  constraint: TApi_Topic_Translations_Constraint;
  update_columns: Array<TApi_Topic_Translations_Update_Column>;
  where: Maybe<TApi_Topic_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "topic_translations" */
export type TApi_Topic_Translations_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  locale: Maybe<TApi_Locales_Order_By>;
  locale_code: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  topic: Maybe<TApi_Topics_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "topic_translations" */
export type TApi_Topic_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "topic_translations" */
export type TApi_Topic_Translations_Select_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'topic_id' |
  /** column name */
  'updated_at';

/** input type for updating data in table "topic_translations" */
export type TApi_Topic_Translations_Set_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  topic_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Topic_Translations_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Topic_Translations_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Topic_Translations_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Topic_Translations_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  topic_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** update columns of table "topic_translations" */
export type TApi_Topic_Translations_Update_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'topic_id' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Topic_Translations_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Topic_Translations_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Topic_Translations_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  topic_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "topic_translations" */
export type TApi_Topic_Translations_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  topic_id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "topics" */
export type TApi_Topics = {
  color: Maybe<Scalars['String']>;
  /** An array relationship */
  courses: Array<TApi_Courses>;
  /** An aggregated array relationship */
  courses_aggregate: TApi_Courses_Aggregate;
  created_at: Scalars['api_timestamptz'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  /** An array relationship */
  translations: Array<TApi_Topic_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: TApi_Topic_Translations_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "topics" */
export type TApi_TopicsCoursesArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TApi_TopicsCourses_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TApi_TopicsTranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Topic_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topic_Translations_Order_By>>;
  where: Maybe<TApi_Topic_Translations_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TApi_TopicsTranslations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Topic_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Topic_Translations_Order_By>>;
  where: Maybe<TApi_Topic_Translations_Bool_Exp>;
};

/** aggregated selection of "topics" */
export type TApi_Topics_Aggregate = {
  aggregate: Maybe<TApi_Topics_Aggregate_Fields>;
  nodes: Array<TApi_Topics>;
};

/** aggregate fields of "topics" */
export type TApi_Topics_Aggregate_Fields = {
  avg: Maybe<TApi_Topics_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Topics_Max_Fields>;
  min: Maybe<TApi_Topics_Min_Fields>;
  stddev: Maybe<TApi_Topics_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Topics_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Topics_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Topics_Sum_Fields>;
  var_pop: Maybe<TApi_Topics_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Topics_Var_Samp_Fields>;
  variance: Maybe<TApi_Topics_Variance_Fields>;
};


/** aggregate fields of "topics" */
export type TApi_Topics_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Topics_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topics" */
export type TApi_Topics_Aggregate_Order_By = {
  avg: Maybe<TApi_Topics_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Topics_Max_Order_By>;
  min: Maybe<TApi_Topics_Min_Order_By>;
  stddev: Maybe<TApi_Topics_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Topics_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Topics_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Topics_Sum_Order_By>;
  var_pop: Maybe<TApi_Topics_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Topics_Var_Samp_Order_By>;
  variance: Maybe<TApi_Topics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "topics" */
export type TApi_Topics_Arr_Rel_Insert_Input = {
  data: Array<TApi_Topics_Insert_Input>;
  on_conflict: Maybe<TApi_Topics_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Topics_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "topics" */
export type TApi_Topics_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type TApi_Topics_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Topics_Bool_Exp>>>;
  _not: Maybe<TApi_Topics_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Topics_Bool_Exp>>>;
  color: Maybe<TApi_String_Comparison_Exp>;
  courses: Maybe<TApi_Courses_Bool_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  level: Maybe<TApi_Int_Comparison_Exp>;
  order: Maybe<TApi_Int_Comparison_Exp>;
  slug: Maybe<TApi_String_Comparison_Exp>;
  translations: Maybe<TApi_Topic_Translations_Bool_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topics" */
export type TApi_Topics_Constraint = 
  /** unique or primary key constraint */
  'topics_pkey';

/** input type for incrementing integer column in table "topics" */
export type TApi_Topics_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "topics" */
export type TApi_Topics_Insert_Input = {
  color: Maybe<Scalars['String']>;
  courses: Maybe<TApi_Courses_Arr_Rel_Insert_Input>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  translations: Maybe<TApi_Topic_Translations_Arr_Rel_Insert_Input>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Topics_Max_Fields = {
  color: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "topics" */
export type TApi_Topics_Max_Order_By = {
  color: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Topics_Min_Fields = {
  color: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "topics" */
export type TApi_Topics_Min_Order_By = {
  color: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "topics" */
export type TApi_Topics_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Topics>;
};

/** input type for inserting object relation for remote table "topics" */
export type TApi_Topics_Obj_Rel_Insert_Input = {
  data: TApi_Topics_Insert_Input;
  on_conflict: Maybe<TApi_Topics_On_Conflict>;
};

/** on conflict condition type for table "topics" */
export type TApi_Topics_On_Conflict = {
  constraint: TApi_Topics_Constraint;
  update_columns: Array<TApi_Topics_Update_Column>;
  where: Maybe<TApi_Topics_Bool_Exp>;
};

/** ordering options when selecting data from "topics" */
export type TApi_Topics_Order_By = {
  color: Maybe<TApi_Order_By>;
  courses_aggregate: Maybe<TApi_Courses_Aggregate_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  translations_aggregate: Maybe<TApi_Topic_Translations_Aggregate_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "topics" */
export type TApi_Topics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "topics" */
export type TApi_Topics_Select_Column = 
  /** column name */
  'color' |
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'level' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'updated_at';

/** input type for updating data in table "topics" */
export type TApi_Topics_Set_Input = {
  color: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Topics_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "topics" */
export type TApi_Topics_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Topics_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "topics" */
export type TApi_Topics_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Topics_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "topics" */
export type TApi_Topics_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Topics_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  level: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "topics" */
export type TApi_Topics_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** update columns of table "topics" */
export type TApi_Topics_Update_Column = 
  /** column name */
  'color' |
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'level' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Topics_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "topics" */
export type TApi_Topics_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Topics_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "topics" */
export type TApi_Topics_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Topics_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  level: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "topics" */
export type TApi_Topics_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  level: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** columns and relationships of "track_translations" */
export type TApi_Track_Translations = {
  created_at: Scalars['api_timestamptz'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  locale: TApi_Locales;
  locale_code: TApi_Locales_Enum;
  title: Scalars['String'];
  /** An object relationship */
  track: TApi_Tracks;
  track_id: Scalars['Int'];
  updated_at: Scalars['api_timestamptz'];
};

/** aggregated selection of "track_translations" */
export type TApi_Track_Translations_Aggregate = {
  aggregate: Maybe<TApi_Track_Translations_Aggregate_Fields>;
  nodes: Array<TApi_Track_Translations>;
};

/** aggregate fields of "track_translations" */
export type TApi_Track_Translations_Aggregate_Fields = {
  avg: Maybe<TApi_Track_Translations_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Track_Translations_Max_Fields>;
  min: Maybe<TApi_Track_Translations_Min_Fields>;
  stddev: Maybe<TApi_Track_Translations_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Track_Translations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Track_Translations_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Track_Translations_Sum_Fields>;
  var_pop: Maybe<TApi_Track_Translations_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Track_Translations_Var_Samp_Fields>;
  variance: Maybe<TApi_Track_Translations_Variance_Fields>;
};


/** aggregate fields of "track_translations" */
export type TApi_Track_Translations_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Track_Translations_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "track_translations" */
export type TApi_Track_Translations_Aggregate_Order_By = {
  avg: Maybe<TApi_Track_Translations_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Track_Translations_Max_Order_By>;
  min: Maybe<TApi_Track_Translations_Min_Order_By>;
  stddev: Maybe<TApi_Track_Translations_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Track_Translations_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Track_Translations_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Track_Translations_Sum_Order_By>;
  var_pop: Maybe<TApi_Track_Translations_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Track_Translations_Var_Samp_Order_By>;
  variance: Maybe<TApi_Track_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "track_translations" */
export type TApi_Track_Translations_Arr_Rel_Insert_Input = {
  data: Array<TApi_Track_Translations_Insert_Input>;
  on_conflict: Maybe<TApi_Track_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Track_Translations_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "track_translations" */
export type TApi_Track_Translations_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "track_translations". All fields are combined with a logical 'AND'. */
export type TApi_Track_Translations_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Track_Translations_Bool_Exp>>>;
  _not: Maybe<TApi_Track_Translations_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Track_Translations_Bool_Exp>>>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  description: Maybe<TApi_String_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  locale: Maybe<TApi_Locales_Bool_Exp>;
  locale_code: Maybe<TApi_Locales_Enum_Comparison_Exp>;
  title: Maybe<TApi_String_Comparison_Exp>;
  track: Maybe<TApi_Tracks_Bool_Exp>;
  track_id: Maybe<TApi_Int_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "track_translations" */
export type TApi_Track_Translations_Constraint = 
  /** unique or primary key constraint */
  'track_translations_pkey' |
  /** unique or primary key constraint */
  'track_translations_track_id_locale_code_key';

/** input type for incrementing integer column in table "track_translations" */
export type TApi_Track_Translations_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "track_translations" */
export type TApi_Track_Translations_Insert_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<TApi_Locales_Obj_Rel_Insert_Input>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  track: Maybe<TApi_Tracks_Obj_Rel_Insert_Input>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Track_Translations_Max_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "track_translations" */
export type TApi_Track_Translations_Max_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Track_Translations_Min_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  title: Maybe<Scalars['String']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "track_translations" */
export type TApi_Track_Translations_Min_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "track_translations" */
export type TApi_Track_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Track_Translations>;
};

/** input type for inserting object relation for remote table "track_translations" */
export type TApi_Track_Translations_Obj_Rel_Insert_Input = {
  data: TApi_Track_Translations_Insert_Input;
  on_conflict: Maybe<TApi_Track_Translations_On_Conflict>;
};

/** on conflict condition type for table "track_translations" */
export type TApi_Track_Translations_On_Conflict = {
  constraint: TApi_Track_Translations_Constraint;
  update_columns: Array<TApi_Track_Translations_Update_Column>;
  where: Maybe<TApi_Track_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "track_translations" */
export type TApi_Track_Translations_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  description: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  locale: Maybe<TApi_Locales_Order_By>;
  locale_code: Maybe<TApi_Order_By>;
  title: Maybe<TApi_Order_By>;
  track: Maybe<TApi_Tracks_Order_By>;
  track_id: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "track_translations" */
export type TApi_Track_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "track_translations" */
export type TApi_Track_Translations_Select_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'description' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'track_id' |
  /** column name */
  'updated_at';

/** input type for updating data in table "track_translations" */
export type TApi_Track_Translations_Set_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  locale_code: Maybe<TApi_Locales_Enum>;
  title: Maybe<Scalars['String']>;
  track_id: Maybe<Scalars['Int']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Track_Translations_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "track_translations" */
export type TApi_Track_Translations_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Track_Translations_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "track_translations" */
export type TApi_Track_Translations_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Track_Translations_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "track_translations" */
export type TApi_Track_Translations_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Track_Translations_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  track_id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "track_translations" */
export type TApi_Track_Translations_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** update columns of table "track_translations" */
export type TApi_Track_Translations_Update_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'description' |
  /** column name */
  'id' |
  /** column name */
  'locale_code' |
  /** column name */
  'title' |
  /** column name */
  'track_id' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Track_Translations_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "track_translations" */
export type TApi_Track_Translations_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Track_Translations_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "track_translations" */
export type TApi_Track_Translations_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Track_Translations_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  track_id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "track_translations" */
export type TApi_Track_Translations_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  track_id: Maybe<TApi_Order_By>;
};

/** columns and relationships of "tracks" */
export type TApi_Tracks = {
  /** An array relationship */
  courses: Array<TApi_Courses>;
  /** An aggregated array relationship */
  courses_aggregate: TApi_Courses_Aggregate;
  created_at: Scalars['api_timestamptz'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  soon: Scalars['Boolean'];
  /** An array relationship */
  translations: Array<TApi_Track_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: TApi_Track_Translations_Aggregate;
  updated_at: Scalars['api_timestamptz'];
};


/** columns and relationships of "tracks" */
export type TApi_TracksCoursesArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TApi_TracksCourses_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Courses_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Courses_Order_By>>;
  where: Maybe<TApi_Courses_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TApi_TracksTranslationsArgs = {
  distinct_on: Maybe<Array<TApi_Track_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Track_Translations_Order_By>>;
  where: Maybe<TApi_Track_Translations_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TApi_TracksTranslations_AggregateArgs = {
  distinct_on: Maybe<Array<TApi_Track_Translations_Select_Column>>;
  limit: Maybe<Scalars['Int']>;
  offset: Maybe<Scalars['Int']>;
  order_by: Maybe<Array<TApi_Track_Translations_Order_By>>;
  where: Maybe<TApi_Track_Translations_Bool_Exp>;
};

/** aggregated selection of "tracks" */
export type TApi_Tracks_Aggregate = {
  aggregate: Maybe<TApi_Tracks_Aggregate_Fields>;
  nodes: Array<TApi_Tracks>;
};

/** aggregate fields of "tracks" */
export type TApi_Tracks_Aggregate_Fields = {
  avg: Maybe<TApi_Tracks_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Tracks_Max_Fields>;
  min: Maybe<TApi_Tracks_Min_Fields>;
  stddev: Maybe<TApi_Tracks_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Tracks_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Tracks_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Tracks_Sum_Fields>;
  var_pop: Maybe<TApi_Tracks_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Tracks_Var_Samp_Fields>;
  variance: Maybe<TApi_Tracks_Variance_Fields>;
};


/** aggregate fields of "tracks" */
export type TApi_Tracks_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Tracks_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tracks" */
export type TApi_Tracks_Aggregate_Order_By = {
  avg: Maybe<TApi_Tracks_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Tracks_Max_Order_By>;
  min: Maybe<TApi_Tracks_Min_Order_By>;
  stddev: Maybe<TApi_Tracks_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Tracks_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Tracks_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Tracks_Sum_Order_By>;
  var_pop: Maybe<TApi_Tracks_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Tracks_Var_Samp_Order_By>;
  variance: Maybe<TApi_Tracks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tracks" */
export type TApi_Tracks_Arr_Rel_Insert_Input = {
  data: Array<TApi_Tracks_Insert_Input>;
  on_conflict: Maybe<TApi_Tracks_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Tracks_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tracks" */
export type TApi_Tracks_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "tracks". All fields are combined with a logical 'AND'. */
export type TApi_Tracks_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Tracks_Bool_Exp>>>;
  _not: Maybe<TApi_Tracks_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Tracks_Bool_Exp>>>;
  courses: Maybe<TApi_Courses_Bool_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  order: Maybe<TApi_Int_Comparison_Exp>;
  slug: Maybe<TApi_String_Comparison_Exp>;
  soon: Maybe<TApi_Boolean_Comparison_Exp>;
  translations: Maybe<TApi_Track_Translations_Bool_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tracks" */
export type TApi_Tracks_Constraint = 
  /** unique or primary key constraint */
  'tracks_pkey';

/** input type for incrementing integer column in table "tracks" */
export type TApi_Tracks_Inc_Input = {
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tracks" */
export type TApi_Tracks_Insert_Input = {
  courses: Maybe<TApi_Courses_Arr_Rel_Insert_Input>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  soon: Maybe<Scalars['Boolean']>;
  translations: Maybe<TApi_Track_Translations_Arr_Rel_Insert_Input>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate max on columns */
export type TApi_Tracks_Max_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "tracks" */
export type TApi_Tracks_Max_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Tracks_Min_Fields = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "tracks" */
export type TApi_Tracks_Min_Order_By = {
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "tracks" */
export type TApi_Tracks_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Tracks>;
};

/** input type for inserting object relation for remote table "tracks" */
export type TApi_Tracks_Obj_Rel_Insert_Input = {
  data: TApi_Tracks_Insert_Input;
  on_conflict: Maybe<TApi_Tracks_On_Conflict>;
};

/** on conflict condition type for table "tracks" */
export type TApi_Tracks_On_Conflict = {
  constraint: TApi_Tracks_Constraint;
  update_columns: Array<TApi_Tracks_Update_Column>;
  where: Maybe<TApi_Tracks_Bool_Exp>;
};

/** ordering options when selecting data from "tracks" */
export type TApi_Tracks_Order_By = {
  courses_aggregate: Maybe<TApi_Courses_Aggregate_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
  slug: Maybe<TApi_Order_By>;
  soon: Maybe<TApi_Order_By>;
  translations_aggregate: Maybe<TApi_Track_Translations_Aggregate_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "tracks" */
export type TApi_Tracks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tracks" */
export type TApi_Tracks_Select_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'soon' |
  /** column name */
  'updated_at';

/** input type for updating data in table "tracks" */
export type TApi_Tracks_Set_Input = {
  created_at: Maybe<Scalars['api_timestamptz']>;
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
  slug: Maybe<Scalars['String']>;
  soon: Maybe<Scalars['Boolean']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Tracks_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tracks" */
export type TApi_Tracks_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Tracks_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tracks" */
export type TApi_Tracks_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Tracks_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tracks" */
export type TApi_Tracks_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Tracks_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
  order: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tracks" */
export type TApi_Tracks_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** update columns of table "tracks" */
export type TApi_Tracks_Update_Column = 
  /** column name */
  'created_at' |
  /** column name */
  'id' |
  /** column name */
  'order' |
  /** column name */
  'slug' |
  /** column name */
  'soon' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Tracks_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tracks" */
export type TApi_Tracks_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Tracks_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tracks" */
export type TApi_Tracks_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Tracks_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
  order: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tracks" */
export type TApi_Tracks_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
  order: Maybe<TApi_Order_By>;
};

/** columns and relationships of "user_genders" */
export type TApi_User_Genders = {
  description: Scalars['String'];
  letter: Scalars['String'];
};

/** aggregated selection of "user_genders" */
export type TApi_User_Genders_Aggregate = {
  aggregate: Maybe<TApi_User_Genders_Aggregate_Fields>;
  nodes: Array<TApi_User_Genders>;
};

/** aggregate fields of "user_genders" */
export type TApi_User_Genders_Aggregate_Fields = {
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_User_Genders_Max_Fields>;
  min: Maybe<TApi_User_Genders_Min_Fields>;
};


/** aggregate fields of "user_genders" */
export type TApi_User_Genders_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_User_Genders_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_genders" */
export type TApi_User_Genders_Aggregate_Order_By = {
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_User_Genders_Max_Order_By>;
  min: Maybe<TApi_User_Genders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_genders" */
export type TApi_User_Genders_Arr_Rel_Insert_Input = {
  data: Array<TApi_User_Genders_Insert_Input>;
  on_conflict: Maybe<TApi_User_Genders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_genders". All fields are combined with a logical 'AND'. */
export type TApi_User_Genders_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_User_Genders_Bool_Exp>>>;
  _not: Maybe<TApi_User_Genders_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_User_Genders_Bool_Exp>>>;
  description: Maybe<TApi_String_Comparison_Exp>;
  letter: Maybe<TApi_String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_genders" */
export type TApi_User_Genders_Constraint = 
  /** unique or primary key constraint */
  'user_genders_pkey';

export type TApi_User_Genders_Enum = 
  /** Female */
  'F' |
  /** Male */
  'M';

/** expression to compare columns of type user_genders_enum. All fields are combined with logical 'AND'. */
export type TApi_User_Genders_Enum_Comparison_Exp = {
  _eq: Maybe<TApi_User_Genders_Enum>;
  _in: Maybe<Array<TApi_User_Genders_Enum>>;
  _is_null: Maybe<Scalars['Boolean']>;
  _neq: Maybe<TApi_User_Genders_Enum>;
  _nin: Maybe<Array<TApi_User_Genders_Enum>>;
};

/** input type for inserting data into table "user_genders" */
export type TApi_User_Genders_Insert_Input = {
  description: Maybe<Scalars['String']>;
  letter: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type TApi_User_Genders_Max_Fields = {
  description: Maybe<Scalars['String']>;
  letter: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_genders" */
export type TApi_User_Genders_Max_Order_By = {
  description: Maybe<TApi_Order_By>;
  letter: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_User_Genders_Min_Fields = {
  description: Maybe<Scalars['String']>;
  letter: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_genders" */
export type TApi_User_Genders_Min_Order_By = {
  description: Maybe<TApi_Order_By>;
  letter: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "user_genders" */
export type TApi_User_Genders_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_User_Genders>;
};

/** input type for inserting object relation for remote table "user_genders" */
export type TApi_User_Genders_Obj_Rel_Insert_Input = {
  data: TApi_User_Genders_Insert_Input;
  on_conflict: Maybe<TApi_User_Genders_On_Conflict>;
};

/** on conflict condition type for table "user_genders" */
export type TApi_User_Genders_On_Conflict = {
  constraint: TApi_User_Genders_Constraint;
  update_columns: Array<TApi_User_Genders_Update_Column>;
  where: Maybe<TApi_User_Genders_Bool_Exp>;
};

/** ordering options when selecting data from "user_genders" */
export type TApi_User_Genders_Order_By = {
  description: Maybe<TApi_Order_By>;
  letter: Maybe<TApi_Order_By>;
};

/** primary key columns input for table: "user_genders" */
export type TApi_User_Genders_Pk_Columns_Input = {
  letter: Scalars['String'];
};

/** select columns of table "user_genders" */
export type TApi_User_Genders_Select_Column = 
  /** column name */
  'description' |
  /** column name */
  'letter';

/** input type for updating data in table "user_genders" */
export type TApi_User_Genders_Set_Input = {
  description: Maybe<Scalars['String']>;
  letter: Maybe<Scalars['String']>;
};

/** update columns of table "user_genders" */
export type TApi_User_Genders_Update_Column = 
  /** column name */
  'description' |
  /** column name */
  'letter';

/** columns and relationships of "users" */
export type TApi_Users = {
  country: Maybe<Scalars['String']>;
  created_at: Scalars['api_timestamptz'];
  email: Scalars['api_citext'];
  fbase_id: Scalars['String'];
  first_name: Maybe<Scalars['String']>;
  gender: Maybe<TApi_User_Genders_Enum>;
  id: Scalars['Int'];
  last_name: Maybe<Scalars['String']>;
  updated_at: Scalars['api_timestamptz'];
  /** An object relationship */
  user_gender: Maybe<TApi_User_Genders>;
};

/** aggregated selection of "users" */
export type TApi_Users_Aggregate = {
  aggregate: Maybe<TApi_Users_Aggregate_Fields>;
  nodes: Array<TApi_Users>;
};

/** aggregate fields of "users" */
export type TApi_Users_Aggregate_Fields = {
  avg: Maybe<TApi_Users_Avg_Fields>;
  count: Maybe<Scalars['Int']>;
  max: Maybe<TApi_Users_Max_Fields>;
  min: Maybe<TApi_Users_Min_Fields>;
  stddev: Maybe<TApi_Users_Stddev_Fields>;
  stddev_pop: Maybe<TApi_Users_Stddev_Pop_Fields>;
  stddev_samp: Maybe<TApi_Users_Stddev_Samp_Fields>;
  sum: Maybe<TApi_Users_Sum_Fields>;
  var_pop: Maybe<TApi_Users_Var_Pop_Fields>;
  var_samp: Maybe<TApi_Users_Var_Samp_Fields>;
  variance: Maybe<TApi_Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type TApi_Users_Aggregate_FieldsCountArgs = {
  columns: Maybe<Array<TApi_Users_Select_Column>>;
  distinct: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type TApi_Users_Aggregate_Order_By = {
  avg: Maybe<TApi_Users_Avg_Order_By>;
  count: Maybe<TApi_Order_By>;
  max: Maybe<TApi_Users_Max_Order_By>;
  min: Maybe<TApi_Users_Min_Order_By>;
  stddev: Maybe<TApi_Users_Stddev_Order_By>;
  stddev_pop: Maybe<TApi_Users_Stddev_Pop_Order_By>;
  stddev_samp: Maybe<TApi_Users_Stddev_Samp_Order_By>;
  sum: Maybe<TApi_Users_Sum_Order_By>;
  var_pop: Maybe<TApi_Users_Var_Pop_Order_By>;
  var_samp: Maybe<TApi_Users_Var_Samp_Order_By>;
  variance: Maybe<TApi_Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type TApi_Users_Arr_Rel_Insert_Input = {
  data: Array<TApi_Users_Insert_Input>;
  on_conflict: Maybe<TApi_Users_On_Conflict>;
};

/** aggregate avg on columns */
export type TApi_Users_Avg_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type TApi_Users_Avg_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type TApi_Users_Bool_Exp = {
  _and: Maybe<Array<Maybe<TApi_Users_Bool_Exp>>>;
  _not: Maybe<TApi_Users_Bool_Exp>;
  _or: Maybe<Array<Maybe<TApi_Users_Bool_Exp>>>;
  country: Maybe<TApi_String_Comparison_Exp>;
  created_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  email: Maybe<TApi_Citext_Comparison_Exp>;
  fbase_id: Maybe<TApi_String_Comparison_Exp>;
  first_name: Maybe<TApi_String_Comparison_Exp>;
  gender: Maybe<TApi_User_Genders_Enum_Comparison_Exp>;
  id: Maybe<TApi_Int_Comparison_Exp>;
  last_name: Maybe<TApi_String_Comparison_Exp>;
  updated_at: Maybe<TApi_Timestamptz_Comparison_Exp>;
  user_gender: Maybe<TApi_User_Genders_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type TApi_Users_Constraint = 
  /** unique or primary key constraint */
  'users_email_key' |
  /** unique or primary key constraint */
  'users_fbase_id_key' |
  /** unique or primary key constraint */
  'users_pkey';

/** input type for incrementing integer column in table "users" */
export type TApi_Users_Inc_Input = {
  id: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type TApi_Users_Insert_Input = {
  country: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  email: Maybe<Scalars['api_citext']>;
  fbase_id: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  gender: Maybe<TApi_User_Genders_Enum>;
  id: Maybe<Scalars['Int']>;
  last_name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
  user_gender: Maybe<TApi_User_Genders_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type TApi_Users_Max_Fields = {
  country: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  email: Maybe<Scalars['api_citext']>;
  fbase_id: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  last_name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by max() on columns of table "users" */
export type TApi_Users_Max_Order_By = {
  country: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  email: Maybe<TApi_Order_By>;
  fbase_id: Maybe<TApi_Order_By>;
  first_name: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  last_name: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** aggregate min on columns */
export type TApi_Users_Min_Fields = {
  country: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  email: Maybe<Scalars['api_citext']>;
  fbase_id: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  last_name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** order by min() on columns of table "users" */
export type TApi_Users_Min_Order_By = {
  country: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  email: Maybe<TApi_Order_By>;
  fbase_id: Maybe<TApi_Order_By>;
  first_name: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  last_name: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
};

/** response of any mutation on the table "users" */
export type TApi_Users_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<TApi_Users>;
};

/** input type for inserting object relation for remote table "users" */
export type TApi_Users_Obj_Rel_Insert_Input = {
  data: TApi_Users_Insert_Input;
  on_conflict: Maybe<TApi_Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type TApi_Users_On_Conflict = {
  constraint: TApi_Users_Constraint;
  update_columns: Array<TApi_Users_Update_Column>;
  where: Maybe<TApi_Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type TApi_Users_Order_By = {
  country: Maybe<TApi_Order_By>;
  created_at: Maybe<TApi_Order_By>;
  email: Maybe<TApi_Order_By>;
  fbase_id: Maybe<TApi_Order_By>;
  first_name: Maybe<TApi_Order_By>;
  gender: Maybe<TApi_Order_By>;
  id: Maybe<TApi_Order_By>;
  last_name: Maybe<TApi_Order_By>;
  updated_at: Maybe<TApi_Order_By>;
  user_gender: Maybe<TApi_User_Genders_Order_By>;
};

/** primary key columns input for table: "users" */
export type TApi_Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export type TApi_Users_Select_Column = 
  /** column name */
  'country' |
  /** column name */
  'created_at' |
  /** column name */
  'email' |
  /** column name */
  'fbase_id' |
  /** column name */
  'first_name' |
  /** column name */
  'gender' |
  /** column name */
  'id' |
  /** column name */
  'last_name' |
  /** column name */
  'updated_at';

/** input type for updating data in table "users" */
export type TApi_Users_Set_Input = {
  country: Maybe<Scalars['String']>;
  created_at: Maybe<Scalars['api_timestamptz']>;
  email: Maybe<Scalars['api_citext']>;
  fbase_id: Maybe<Scalars['String']>;
  first_name: Maybe<Scalars['String']>;
  gender: Maybe<TApi_User_Genders_Enum>;
  id: Maybe<Scalars['Int']>;
  last_name: Maybe<Scalars['String']>;
  updated_at: Maybe<Scalars['api_timestamptz']>;
};

/** aggregate stddev on columns */
export type TApi_Users_Stddev_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type TApi_Users_Stddev_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_pop on columns */
export type TApi_Users_Stddev_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type TApi_Users_Stddev_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate stddev_samp on columns */
export type TApi_Users_Stddev_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type TApi_Users_Stddev_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate sum on columns */
export type TApi_Users_Sum_Fields = {
  id: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type TApi_Users_Sum_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** update columns of table "users" */
export type TApi_Users_Update_Column = 
  /** column name */
  'country' |
  /** column name */
  'created_at' |
  /** column name */
  'email' |
  /** column name */
  'fbase_id' |
  /** column name */
  'first_name' |
  /** column name */
  'gender' |
  /** column name */
  'id' |
  /** column name */
  'last_name' |
  /** column name */
  'updated_at';

/** aggregate var_pop on columns */
export type TApi_Users_Var_Pop_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type TApi_Users_Var_Pop_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate var_samp on columns */
export type TApi_Users_Var_Samp_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type TApi_Users_Var_Samp_Order_By = {
  id: Maybe<TApi_Order_By>;
};

/** aggregate variance on columns */
export type TApi_Users_Variance_Fields = {
  id: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type TApi_Users_Variance_Order_By = {
  id: Maybe<TApi_Order_By>;
};

export type TBooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type TDateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type TDirectory = TNode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
};


export type TDirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TDirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type TDirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TDirectoryEdge>;
  nodes: Array<TDirectory>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TDirectoryGroupConnection>;
};


export type TDirectoryConnectionDistinctArgs = {
  field: TDirectoryFieldsEnum;
};


export type TDirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TDirectoryFieldsEnum;
};

export type TDirectoryEdge = {
  next: Maybe<TDirectory>;
  node: TDirectory;
  previous: Maybe<TDirectory>;
};

export type TDirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type TDirectoryFilterInput = {
  sourceInstanceName: Maybe<TStringQueryOperatorInput>;
  absolutePath: Maybe<TStringQueryOperatorInput>;
  relativePath: Maybe<TStringQueryOperatorInput>;
  extension: Maybe<TStringQueryOperatorInput>;
  size: Maybe<TIntQueryOperatorInput>;
  prettySize: Maybe<TStringQueryOperatorInput>;
  modifiedTime: Maybe<TDateQueryOperatorInput>;
  accessTime: Maybe<TDateQueryOperatorInput>;
  changeTime: Maybe<TDateQueryOperatorInput>;
  birthTime: Maybe<TDateQueryOperatorInput>;
  root: Maybe<TStringQueryOperatorInput>;
  dir: Maybe<TStringQueryOperatorInput>;
  base: Maybe<TStringQueryOperatorInput>;
  ext: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  relativeDirectory: Maybe<TStringQueryOperatorInput>;
  dev: Maybe<TIntQueryOperatorInput>;
  mode: Maybe<TIntQueryOperatorInput>;
  nlink: Maybe<TIntQueryOperatorInput>;
  uid: Maybe<TIntQueryOperatorInput>;
  gid: Maybe<TIntQueryOperatorInput>;
  rdev: Maybe<TIntQueryOperatorInput>;
  ino: Maybe<TFloatQueryOperatorInput>;
  atimeMs: Maybe<TFloatQueryOperatorInput>;
  mtimeMs: Maybe<TFloatQueryOperatorInput>;
  ctimeMs: Maybe<TFloatQueryOperatorInput>;
  atime: Maybe<TDateQueryOperatorInput>;
  mtime: Maybe<TDateQueryOperatorInput>;
  ctime: Maybe<TDateQueryOperatorInput>;
  birthtime: Maybe<TDateQueryOperatorInput>;
  birthtimeMs: Maybe<TFloatQueryOperatorInput>;
  blksize: Maybe<TIntQueryOperatorInput>;
  blocks: Maybe<TIntQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
};

export type TDirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TDirectoryEdge>;
  nodes: Array<TDirectory>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TDirectorySortInput = {
  fields: Maybe<Array<Maybe<TDirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TFile = TNode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  childTranslationsJson: Maybe<TTranslationsJson>;
};


export type TFileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type TFileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type TFileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TFileEdge>;
  nodes: Array<TFile>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TFileGroupConnection>;
};


export type TFileConnectionDistinctArgs = {
  field: TFileFieldsEnum;
};


export type TFileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TFileFieldsEnum;
};

export type TFileEdge = {
  next: Maybe<TFile>;
  node: TFile;
  previous: Maybe<TFile>;
};

export type TFileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childTranslationsJson___id' |
  'childTranslationsJson___parent___id' |
  'childTranslationsJson___parent___parent___id' |
  'childTranslationsJson___parent___parent___children' |
  'childTranslationsJson___parent___children' |
  'childTranslationsJson___parent___children___id' |
  'childTranslationsJson___parent___children___children' |
  'childTranslationsJson___parent___internal___content' |
  'childTranslationsJson___parent___internal___contentDigest' |
  'childTranslationsJson___parent___internal___description' |
  'childTranslationsJson___parent___internal___fieldOwners' |
  'childTranslationsJson___parent___internal___ignoreType' |
  'childTranslationsJson___parent___internal___mediaType' |
  'childTranslationsJson___parent___internal___owner' |
  'childTranslationsJson___parent___internal___type' |
  'childTranslationsJson___children' |
  'childTranslationsJson___children___id' |
  'childTranslationsJson___children___parent___id' |
  'childTranslationsJson___children___parent___children' |
  'childTranslationsJson___children___children' |
  'childTranslationsJson___children___children___id' |
  'childTranslationsJson___children___children___children' |
  'childTranslationsJson___children___internal___content' |
  'childTranslationsJson___children___internal___contentDigest' |
  'childTranslationsJson___children___internal___description' |
  'childTranslationsJson___children___internal___fieldOwners' |
  'childTranslationsJson___children___internal___ignoreType' |
  'childTranslationsJson___children___internal___mediaType' |
  'childTranslationsJson___children___internal___owner' |
  'childTranslationsJson___children___internal___type' |
  'childTranslationsJson___internal___content' |
  'childTranslationsJson___internal___contentDigest' |
  'childTranslationsJson___internal___description' |
  'childTranslationsJson___internal___fieldOwners' |
  'childTranslationsJson___internal___ignoreType' |
  'childTranslationsJson___internal___mediaType' |
  'childTranslationsJson___internal___owner' |
  'childTranslationsJson___internal___type' |
  'childTranslationsJson___homeTitle' |
  'childTranslationsJson___homeDescription' |
  'childTranslationsJson___homeEmailTitle' |
  'childTranslationsJson___homeEmailPlaceHolder' |
  'childTranslationsJson___homeStartTrack' |
  'childTranslationsJson___siteName' |
  'childTranslationsJson___siteSlogan' |
  'childTranslationsJson___footerSocialTitle' |
  'childTranslationsJson___homeFooterCTA' |
  'childTranslationsJson___start' |
  'childTranslationsJson___soon' |
  'childTranslationsJson___aboutUs' |
  'childTranslationsJson___tracks' |
  'childTranslationsJson___courses' |
  'childTranslationsJson___connect' |
  'childTranslationsJson___feature1Title' |
  'childTranslationsJson___feature2Title' |
  'childTranslationsJson___feature3Title' |
  'childTranslationsJson___feature1Text' |
  'childTranslationsJson___feature2Text' |
  'childTranslationsJson___feature3Text' |
  'childTranslationsJson___enroll' |
  'childTranslationsJson___featuresTitle' |
  'childTranslationsJson___featuredCoursesTitle' |
  'childTranslationsJson___urlTelegram' |
  'childTranslationsJson___urlTwitter' |
  'childTranslationsJson___urlFacebook' |
  'childTranslationsJson___urlYoutube' |
  'childTranslationsJson___startCourse' |
  'childTranslationsJson___level1' |
  'childTranslationsJson___level2' |
  'childTranslationsJson___level3' |
  'childTranslationsJson___level' |
  'childTranslationsJson___track' |
  'childTranslationsJson___localePath' |
  'childTranslationsJson___localeName' |
  'childTranslationsJson___toOtherLanguageCTA' |
  'childTranslationsJson___tracksPageTitle' |
  'childTranslationsJson___tracksPageDescription' |
  'childTranslationsJson___focus' |
  'childTranslationsJson___nextCourse' |
  'childTranslationsJson___takeQuiz' |
  'childTranslationsJson___quiz' |
  'childTranslationsJson___quizTrue' |
  'childTranslationsJson___quizFalse' |
  'childTranslationsJson___fillintheblankTitle' |
  'childTranslationsJson___readIn' |
  'childTranslationsJson___difficulty1' |
  'childTranslationsJson___difficulty2' |
  'childTranslationsJson___quizCTA' |
  'childTranslationsJson___newsletterSuccess' |
  'childTranslationsJson___newsletterSubscribed' |
  'childTranslationsJson___newsletterEmailNotValid' |
  'childTranslationsJson___fillInTheBlankTitle' |
  'childTranslationsJson___chooseACategoryTitle' |
  'childTranslationsJson___assessmentPerfect' |
  'childTranslationsJson___assessmentVeryGood' |
  'childTranslationsJson___assessmentGood' |
  'childTranslationsJson___yourScore' |
  'childTranslationsJson___yourLastScore' |
  'childTranslationsJson___grade' |
  'childTranslationsJson___average' |
  'childTranslationsJson___assessmentFail' |
  'childTranslationsJson___nextTrack' |
  'childTranslationsJson___backToCourse' |
  'childTranslationsJson___restartQuizs' |
  'childTranslationsJson___seeYourScore' |
  'childTranslationsJson___goToTop' |
  'childTranslationsJson___tabTranslation' |
  'childTranslationsJson___tabTranscription' |
  'childTranslationsJson___tabVocabulary' |
  'childTranslationsJson___tabAudio' |
  'childTranslationsJson___tabCompleted' |
  'childTranslationsJson___continue' |
  'childTranslationsJson___copyright' |
  'childTranslationsJson___quizTitle' |
  'childTranslationsJson___progress' |
  'childTranslationsJson___next' |
  'childTranslationsJson___iCompletedTheChapter' |
  'childTranslationsJson___chapter' |
  'childTranslationsJson___course' |
  'childTranslationsJson___goToTracks' |
  'childTranslationsJson___congratulations' |
  'childTranslationsJson___congratulationsCTA' |
  'childTranslationsJson___takeExam' |
  'childTranslationsJson___aboutUsPageTitle' |
  'childTranslationsJson___aboutUsPageContent' |
  'childTranslationsJson___listenAudio' |
  'childTranslationsJson___downloadAudio' |
  'childTranslationsJson___here' |
  'childTranslationsJson___clickHere' |
  'childTranslationsJson___trackLevel' |
  'childTranslationsJson___chapterAudio' |
  'childTranslationsJson___siteContentPresentation' |
  'childTranslationsJson___homeContentTitle' |
  'childTranslationsJson___chooseAnswer' |
  'childTranslationsJson___locale' |
  'childTranslationsJson___nextHelp';

export type TFileFilterInput = {
  sourceInstanceName: Maybe<TStringQueryOperatorInput>;
  absolutePath: Maybe<TStringQueryOperatorInput>;
  relativePath: Maybe<TStringQueryOperatorInput>;
  extension: Maybe<TStringQueryOperatorInput>;
  size: Maybe<TIntQueryOperatorInput>;
  prettySize: Maybe<TStringQueryOperatorInput>;
  modifiedTime: Maybe<TDateQueryOperatorInput>;
  accessTime: Maybe<TDateQueryOperatorInput>;
  changeTime: Maybe<TDateQueryOperatorInput>;
  birthTime: Maybe<TDateQueryOperatorInput>;
  root: Maybe<TStringQueryOperatorInput>;
  dir: Maybe<TStringQueryOperatorInput>;
  base: Maybe<TStringQueryOperatorInput>;
  ext: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  relativeDirectory: Maybe<TStringQueryOperatorInput>;
  dev: Maybe<TIntQueryOperatorInput>;
  mode: Maybe<TIntQueryOperatorInput>;
  nlink: Maybe<TIntQueryOperatorInput>;
  uid: Maybe<TIntQueryOperatorInput>;
  gid: Maybe<TIntQueryOperatorInput>;
  rdev: Maybe<TIntQueryOperatorInput>;
  ino: Maybe<TFloatQueryOperatorInput>;
  atimeMs: Maybe<TFloatQueryOperatorInput>;
  mtimeMs: Maybe<TFloatQueryOperatorInput>;
  ctimeMs: Maybe<TFloatQueryOperatorInput>;
  atime: Maybe<TDateQueryOperatorInput>;
  mtime: Maybe<TDateQueryOperatorInput>;
  ctime: Maybe<TDateQueryOperatorInput>;
  birthtime: Maybe<TDateQueryOperatorInput>;
  birthtimeMs: Maybe<TFloatQueryOperatorInput>;
  blksize: Maybe<TIntQueryOperatorInput>;
  blocks: Maybe<TIntQueryOperatorInput>;
  publicURL: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  childTranslationsJson: Maybe<TTranslationsJsonFilterInput>;
};

export type TFileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TFileEdge>;
  nodes: Array<TFile>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TFileSortInput = {
  fields: Maybe<Array<Maybe<TFileFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TFloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type TGraphQlSource = TNode & {
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  typeName: Maybe<Scalars['String']>;
  fieldName: Maybe<Scalars['String']>;
};

export type TGraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TGraphQlSourceEdge>;
  nodes: Array<TGraphQlSource>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TGraphQlSourceGroupConnection>;
};


export type TGraphQlSourceConnectionDistinctArgs = {
  field: TGraphQlSourceFieldsEnum;
};


export type TGraphQlSourceConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TGraphQlSourceFieldsEnum;
};

export type TGraphQlSourceEdge = {
  next: Maybe<TGraphQlSource>;
  node: TGraphQlSource;
  previous: Maybe<TGraphQlSource>;
};

export type TGraphQlSourceFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'typeName' |
  'fieldName';

export type TGraphQlSourceFilterInput = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  typeName: Maybe<TStringQueryOperatorInput>;
  fieldName: Maybe<TStringQueryOperatorInput>;
};

export type TGraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TGraphQlSourceEdge>;
  nodes: Array<TGraphQlSource>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TGraphQlSourceSortInput = {
  fields: Maybe<Array<Maybe<TGraphQlSourceFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TInternal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type TInternalFilterInput = {
  content: Maybe<TStringQueryOperatorInput>;
  contentDigest: Maybe<TStringQueryOperatorInput>;
  description: Maybe<TStringQueryOperatorInput>;
  fieldOwners: Maybe<TStringQueryOperatorInput>;
  ignoreType: Maybe<TBooleanQueryOperatorInput>;
  mediaType: Maybe<TStringQueryOperatorInput>;
  owner: Maybe<TStringQueryOperatorInput>;
  type: Maybe<TStringQueryOperatorInput>;
};

export type TIntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type TNode = {
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
};

export type TNodeFilterInput = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
};

export type TNodeFilterListInput = {
  elemMatch: Maybe<TNodeFilterInput>;
};

export type TPageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
};

export type TQuery = {
  file: Maybe<TFile>;
  allFile: TFileConnection;
  directory: Maybe<TDirectory>;
  allDirectory: TDirectoryConnection;
  sitePage: Maybe<TSitePage>;
  allSitePage: TSitePageConnection;
  site: Maybe<TSite>;
  allSite: TSiteConnection;
  graphQlSource: Maybe<TGraphQlSource>;
  allGraphQlSource: TGraphQlSourceConnection;
  translationsJson: Maybe<TTranslationsJson>;
  allTranslationsJson: TTranslationsJsonConnection;
  siteBuildMetadata: Maybe<TSiteBuildMetadata>;
  allSiteBuildMetadata: TSiteBuildMetadataConnection;
  sitePlugin: Maybe<TSitePlugin>;
  allSitePlugin: TSitePluginConnection;
  api: TApi;
};


export type TQueryFileArgs = {
  sourceInstanceName: Maybe<TStringQueryOperatorInput>;
  absolutePath: Maybe<TStringQueryOperatorInput>;
  relativePath: Maybe<TStringQueryOperatorInput>;
  extension: Maybe<TStringQueryOperatorInput>;
  size: Maybe<TIntQueryOperatorInput>;
  prettySize: Maybe<TStringQueryOperatorInput>;
  modifiedTime: Maybe<TDateQueryOperatorInput>;
  accessTime: Maybe<TDateQueryOperatorInput>;
  changeTime: Maybe<TDateQueryOperatorInput>;
  birthTime: Maybe<TDateQueryOperatorInput>;
  root: Maybe<TStringQueryOperatorInput>;
  dir: Maybe<TStringQueryOperatorInput>;
  base: Maybe<TStringQueryOperatorInput>;
  ext: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  relativeDirectory: Maybe<TStringQueryOperatorInput>;
  dev: Maybe<TIntQueryOperatorInput>;
  mode: Maybe<TIntQueryOperatorInput>;
  nlink: Maybe<TIntQueryOperatorInput>;
  uid: Maybe<TIntQueryOperatorInput>;
  gid: Maybe<TIntQueryOperatorInput>;
  rdev: Maybe<TIntQueryOperatorInput>;
  ino: Maybe<TFloatQueryOperatorInput>;
  atimeMs: Maybe<TFloatQueryOperatorInput>;
  mtimeMs: Maybe<TFloatQueryOperatorInput>;
  ctimeMs: Maybe<TFloatQueryOperatorInput>;
  atime: Maybe<TDateQueryOperatorInput>;
  mtime: Maybe<TDateQueryOperatorInput>;
  ctime: Maybe<TDateQueryOperatorInput>;
  birthtime: Maybe<TDateQueryOperatorInput>;
  birthtimeMs: Maybe<TFloatQueryOperatorInput>;
  blksize: Maybe<TIntQueryOperatorInput>;
  blocks: Maybe<TIntQueryOperatorInput>;
  publicURL: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  childTranslationsJson: Maybe<TTranslationsJsonFilterInput>;
};


export type TQueryAllFileArgs = {
  filter: Maybe<TFileFilterInput>;
  sort: Maybe<TFileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQueryDirectoryArgs = {
  sourceInstanceName: Maybe<TStringQueryOperatorInput>;
  absolutePath: Maybe<TStringQueryOperatorInput>;
  relativePath: Maybe<TStringQueryOperatorInput>;
  extension: Maybe<TStringQueryOperatorInput>;
  size: Maybe<TIntQueryOperatorInput>;
  prettySize: Maybe<TStringQueryOperatorInput>;
  modifiedTime: Maybe<TDateQueryOperatorInput>;
  accessTime: Maybe<TDateQueryOperatorInput>;
  changeTime: Maybe<TDateQueryOperatorInput>;
  birthTime: Maybe<TDateQueryOperatorInput>;
  root: Maybe<TStringQueryOperatorInput>;
  dir: Maybe<TStringQueryOperatorInput>;
  base: Maybe<TStringQueryOperatorInput>;
  ext: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  relativeDirectory: Maybe<TStringQueryOperatorInput>;
  dev: Maybe<TIntQueryOperatorInput>;
  mode: Maybe<TIntQueryOperatorInput>;
  nlink: Maybe<TIntQueryOperatorInput>;
  uid: Maybe<TIntQueryOperatorInput>;
  gid: Maybe<TIntQueryOperatorInput>;
  rdev: Maybe<TIntQueryOperatorInput>;
  ino: Maybe<TFloatQueryOperatorInput>;
  atimeMs: Maybe<TFloatQueryOperatorInput>;
  mtimeMs: Maybe<TFloatQueryOperatorInput>;
  ctimeMs: Maybe<TFloatQueryOperatorInput>;
  atime: Maybe<TDateQueryOperatorInput>;
  mtime: Maybe<TDateQueryOperatorInput>;
  ctime: Maybe<TDateQueryOperatorInput>;
  birthtime: Maybe<TDateQueryOperatorInput>;
  birthtimeMs: Maybe<TFloatQueryOperatorInput>;
  blksize: Maybe<TIntQueryOperatorInput>;
  blocks: Maybe<TIntQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
};


export type TQueryAllDirectoryArgs = {
  filter: Maybe<TDirectoryFilterInput>;
  sort: Maybe<TDirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQuerySitePageArgs = {
  path: Maybe<TStringQueryOperatorInput>;
  component: Maybe<TStringQueryOperatorInput>;
  internalComponentName: Maybe<TStringQueryOperatorInput>;
  componentChunkName: Maybe<TStringQueryOperatorInput>;
  matchPath: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>;
  context: Maybe<TSitePageContextFilterInput>;
  pluginCreator: Maybe<TSitePluginFilterInput>;
  pluginCreatorId: Maybe<TStringQueryOperatorInput>;
  componentPath: Maybe<TStringQueryOperatorInput>;
};


export type TQueryAllSitePageArgs = {
  filter: Maybe<TSitePageFilterInput>;
  sort: Maybe<TSitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQuerySiteArgs = {
  buildTime: Maybe<TDateQueryOperatorInput>;
  siteMetadata: Maybe<TSiteSiteMetadataFilterInput>;
  port: Maybe<TIntQueryOperatorInput>;
  host: Maybe<TStringQueryOperatorInput>;
  polyfill: Maybe<TBooleanQueryOperatorInput>;
  pathPrefix: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
};


export type TQueryAllSiteArgs = {
  filter: Maybe<TSiteFilterInput>;
  sort: Maybe<TSiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQueryGraphQlSourceArgs = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  typeName: Maybe<TStringQueryOperatorInput>;
  fieldName: Maybe<TStringQueryOperatorInput>;
};


export type TQueryAllGraphQlSourceArgs = {
  filter: Maybe<TGraphQlSourceFilterInput>;
  sort: Maybe<TGraphQlSourceSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQueryTranslationsJsonArgs = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  homeTitle: Maybe<TStringQueryOperatorInput>;
  homeDescription: Maybe<TStringQueryOperatorInput>;
  homeEmailTitle: Maybe<TStringQueryOperatorInput>;
  homeEmailPlaceHolder: Maybe<TStringQueryOperatorInput>;
  homeStartTrack: Maybe<TStringQueryOperatorInput>;
  siteName: Maybe<TStringQueryOperatorInput>;
  siteSlogan: Maybe<TStringQueryOperatorInput>;
  footerSocialTitle: Maybe<TStringQueryOperatorInput>;
  homeFooterCTA: Maybe<TStringQueryOperatorInput>;
  start: Maybe<TStringQueryOperatorInput>;
  soon: Maybe<TStringQueryOperatorInput>;
  aboutUs: Maybe<TStringQueryOperatorInput>;
  tracks: Maybe<TStringQueryOperatorInput>;
  courses: Maybe<TStringQueryOperatorInput>;
  connect: Maybe<TStringQueryOperatorInput>;
  feature1Title: Maybe<TStringQueryOperatorInput>;
  feature2Title: Maybe<TStringQueryOperatorInput>;
  feature3Title: Maybe<TStringQueryOperatorInput>;
  feature1Text: Maybe<TStringQueryOperatorInput>;
  feature2Text: Maybe<TStringQueryOperatorInput>;
  feature3Text: Maybe<TStringQueryOperatorInput>;
  enroll: Maybe<TStringQueryOperatorInput>;
  featuresTitle: Maybe<TStringQueryOperatorInput>;
  featuredCoursesTitle: Maybe<TStringQueryOperatorInput>;
  urlTelegram: Maybe<TStringQueryOperatorInput>;
  urlTwitter: Maybe<TStringQueryOperatorInput>;
  urlFacebook: Maybe<TStringQueryOperatorInput>;
  urlYoutube: Maybe<TStringQueryOperatorInput>;
  startCourse: Maybe<TStringQueryOperatorInput>;
  level1: Maybe<TStringQueryOperatorInput>;
  level2: Maybe<TStringQueryOperatorInput>;
  level3: Maybe<TStringQueryOperatorInput>;
  level: Maybe<TStringQueryOperatorInput>;
  track: Maybe<TStringQueryOperatorInput>;
  localePath: Maybe<TStringQueryOperatorInput>;
  localeName: Maybe<TStringQueryOperatorInput>;
  toOtherLanguageCTA: Maybe<TStringQueryOperatorInput>;
  tracksPageTitle: Maybe<TStringQueryOperatorInput>;
  tracksPageDescription: Maybe<TStringQueryOperatorInput>;
  focus: Maybe<TStringQueryOperatorInput>;
  nextCourse: Maybe<TStringQueryOperatorInput>;
  takeQuiz: Maybe<TStringQueryOperatorInput>;
  quiz: Maybe<TStringQueryOperatorInput>;
  quizTrue: Maybe<TStringQueryOperatorInput>;
  quizFalse: Maybe<TStringQueryOperatorInput>;
  fillintheblankTitle: Maybe<TStringQueryOperatorInput>;
  readIn: Maybe<TStringQueryOperatorInput>;
  difficulty1: Maybe<TStringQueryOperatorInput>;
  difficulty2: Maybe<TStringQueryOperatorInput>;
  quizCTA: Maybe<TStringQueryOperatorInput>;
  newsletterSuccess: Maybe<TStringQueryOperatorInput>;
  newsletterSubscribed: Maybe<TStringQueryOperatorInput>;
  newsletterEmailNotValid: Maybe<TStringQueryOperatorInput>;
  fillInTheBlankTitle: Maybe<TStringQueryOperatorInput>;
  chooseACategoryTitle: Maybe<TStringQueryOperatorInput>;
  assessmentPerfect: Maybe<TStringQueryOperatorInput>;
  assessmentVeryGood: Maybe<TStringQueryOperatorInput>;
  assessmentGood: Maybe<TStringQueryOperatorInput>;
  yourScore: Maybe<TStringQueryOperatorInput>;
  yourLastScore: Maybe<TStringQueryOperatorInput>;
  grade: Maybe<TStringQueryOperatorInput>;
  average: Maybe<TStringQueryOperatorInput>;
  assessmentFail: Maybe<TStringQueryOperatorInput>;
  nextTrack: Maybe<TStringQueryOperatorInput>;
  backToCourse: Maybe<TStringQueryOperatorInput>;
  restartQuizs: Maybe<TStringQueryOperatorInput>;
  seeYourScore: Maybe<TStringQueryOperatorInput>;
  goToTop: Maybe<TStringQueryOperatorInput>;
  tabTranslation: Maybe<TStringQueryOperatorInput>;
  tabTranscription: Maybe<TStringQueryOperatorInput>;
  tabVocabulary: Maybe<TStringQueryOperatorInput>;
  tabAudio: Maybe<TStringQueryOperatorInput>;
  tabCompleted: Maybe<TStringQueryOperatorInput>;
  continue: Maybe<TStringQueryOperatorInput>;
  copyright: Maybe<TStringQueryOperatorInput>;
  quizTitle: Maybe<TStringQueryOperatorInput>;
  progress: Maybe<TStringQueryOperatorInput>;
  next: Maybe<TStringQueryOperatorInput>;
  iCompletedTheChapter: Maybe<TStringQueryOperatorInput>;
  chapter: Maybe<TStringQueryOperatorInput>;
  course: Maybe<TStringQueryOperatorInput>;
  goToTracks: Maybe<TStringQueryOperatorInput>;
  congratulations: Maybe<TStringQueryOperatorInput>;
  congratulationsCTA: Maybe<TStringQueryOperatorInput>;
  takeExam: Maybe<TStringQueryOperatorInput>;
  aboutUsPageTitle: Maybe<TStringQueryOperatorInput>;
  aboutUsPageContent: Maybe<TStringQueryOperatorInput>;
  listenAudio: Maybe<TStringQueryOperatorInput>;
  downloadAudio: Maybe<TStringQueryOperatorInput>;
  here: Maybe<TStringQueryOperatorInput>;
  clickHere: Maybe<TStringQueryOperatorInput>;
  trackLevel: Maybe<TStringQueryOperatorInput>;
  chapterAudio: Maybe<TStringQueryOperatorInput>;
  siteContentPresentation: Maybe<TStringQueryOperatorInput>;
  homeContentTitle: Maybe<TStringQueryOperatorInput>;
  chooseAnswer: Maybe<TStringQueryOperatorInput>;
  locale: Maybe<TStringQueryOperatorInput>;
  nextHelp: Maybe<TStringQueryOperatorInput>;
};


export type TQueryAllTranslationsJsonArgs = {
  filter: Maybe<TTranslationsJsonFilterInput>;
  sort: Maybe<TTranslationsJsonSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQuerySiteBuildMetadataArgs = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  buildTime: Maybe<TDateQueryOperatorInput>;
};


export type TQueryAllSiteBuildMetadataArgs = {
  filter: Maybe<TSiteBuildMetadataFilterInput>;
  sort: Maybe<TSiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type TQuerySitePluginArgs = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  resolve: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
  pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<TStringQueryOperatorInput>;
  browserAPIs: Maybe<TStringQueryOperatorInput>;
  ssrAPIs: Maybe<TStringQueryOperatorInput>;
  pluginFilepath: Maybe<TStringQueryOperatorInput>;
  packageJson: Maybe<TSitePluginPackageJsonFilterInput>;
};


export type TQueryAllSitePluginArgs = {
  filter: Maybe<TSitePluginFilterInput>;
  sort: Maybe<TSitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type TSite = TNode & {
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<TSiteSiteMetadata>;
  port: Maybe<Scalars['Int']>;
  host: Maybe<Scalars['String']>;
  polyfill: Maybe<Scalars['Boolean']>;
  pathPrefix: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
};


export type TSiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type TSiteBuildMetadata = TNode & {
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  buildTime: Maybe<Scalars['Date']>;
};


export type TSiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type TSiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSiteBuildMetadataEdge>;
  nodes: Array<TSiteBuildMetadata>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TSiteBuildMetadataGroupConnection>;
};


export type TSiteBuildMetadataConnectionDistinctArgs = {
  field: TSiteBuildMetadataFieldsEnum;
};


export type TSiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TSiteBuildMetadataFieldsEnum;
};

export type TSiteBuildMetadataEdge = {
  next: Maybe<TSiteBuildMetadata>;
  node: TSiteBuildMetadata;
  previous: Maybe<TSiteBuildMetadata>;
};

export type TSiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type TSiteBuildMetadataFilterInput = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  buildTime: Maybe<TDateQueryOperatorInput>;
};

export type TSiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSiteBuildMetadataEdge>;
  nodes: Array<TSiteBuildMetadata>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TSiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<TSiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TSiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSiteEdge>;
  nodes: Array<TSite>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TSiteGroupConnection>;
};


export type TSiteConnectionDistinctArgs = {
  field: TSiteFieldsEnum;
};


export type TSiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TSiteFieldsEnum;
};

export type TSiteEdge = {
  next: Maybe<TSite>;
  node: TSite;
  previous: Maybe<TSite>;
};

export type TSiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'siteMetadata___siteUrl' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type TSiteFilterInput = {
  buildTime: Maybe<TDateQueryOperatorInput>;
  siteMetadata: Maybe<TSiteSiteMetadataFilterInput>;
  port: Maybe<TIntQueryOperatorInput>;
  host: Maybe<TStringQueryOperatorInput>;
  polyfill: Maybe<TBooleanQueryOperatorInput>;
  pathPrefix: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
};

export type TSiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSiteEdge>;
  nodes: Array<TSite>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TSitePage = TNode & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<TSitePageContext>;
  pluginCreator: Maybe<TSitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
};

export type TSitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSitePageEdge>;
  nodes: Array<TSitePage>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TSitePageGroupConnection>;
};


export type TSitePageConnectionDistinctArgs = {
  field: TSitePageFieldsEnum;
};


export type TSitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TSitePageFieldsEnum;
};

export type TSitePageContext = {
  localeEnum: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  locale: Maybe<Scalars['String']>;
  localePaths: Maybe<TSitePageContextLocalePaths>;
  slug: Maybe<Scalars['String']>;
  next: Maybe<TSitePageContextNext>;
  difficulty: Maybe<Scalars['Int']>;
  langKey: Maybe<Scalars['String']>;
};

export type TSitePageContextFilterInput = {
  localeEnum: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TIntQueryOperatorInput>;
  locale: Maybe<TStringQueryOperatorInput>;
  localePaths: Maybe<TSitePageContextLocalePathsFilterInput>;
  slug: Maybe<TStringQueryOperatorInput>;
  next: Maybe<TSitePageContextNextFilterInput>;
  difficulty: Maybe<TIntQueryOperatorInput>;
  langKey: Maybe<TStringQueryOperatorInput>;
};

export type TSitePageContextLocalePaths = {
  ar: Maybe<Scalars['String']>;
  fr: Maybe<Scalars['String']>;
};

export type TSitePageContextLocalePathsFilterInput = {
  ar: Maybe<TStringQueryOperatorInput>;
  fr: Maybe<TStringQueryOperatorInput>;
};

export type TSitePageContextNext = {
  type: Maybe<Scalars['String']>;
  title: Maybe<Scalars['String']>;
  path: Maybe<Scalars['String']>;
};

export type TSitePageContextNextFilterInput = {
  type: Maybe<TStringQueryOperatorInput>;
  title: Maybe<TStringQueryOperatorInput>;
  path: Maybe<TStringQueryOperatorInput>;
};

export type TSitePageEdge = {
  next: Maybe<TSitePage>;
  node: TSitePage;
  previous: Maybe<TSitePage>;
};

export type TSitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___localeEnum' |
  'context___id' |
  'context___locale' |
  'context___localePaths___ar' |
  'context___localePaths___fr' |
  'context___slug' |
  'context___next___type' |
  'context___next___title' |
  'context___next___path' |
  'context___difficulty' |
  'context___langKey' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___codegenConfig___avoidOptionals' |
  'pluginCreator___pluginOptions___codegenConfig___maybeValue' |
  'pluginCreator___pluginOptions___codegenConfig___typesPrefix' |
  'pluginCreator___pluginOptions___additionalSchemas' |
  'pluginCreator___pluginOptions___additionalSchemas___key' |
  'pluginCreator___pluginOptions___additionalSchemas___fileName' |
  'pluginCreator___pluginOptions___disableAutoprefixing' |
  'pluginCreator___pluginOptions___stylesProvider___injectFirst' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___langKeyDefault' |
  'pluginCreator___pluginOptions___useLangKeyLayout' |
  'pluginCreator___pluginOptions___typeName' |
  'pluginCreator___pluginOptions___fieldName' |
  'pluginCreator___pluginOptions___url' |
  'pluginCreator___pluginOptions___headers___x_hasura_admin_secret' |
  'pluginCreator___pluginOptions___showSpinner' |
  'pluginCreator___pluginOptions___siteUrl' |
  'pluginCreator___pluginOptions___includePaths' |
  'pluginCreator___pluginOptions___logo' |
  'pluginCreator___pluginOptions___injectHTML' |
  'pluginCreator___pluginOptions___icons___android' |
  'pluginCreator___pluginOptions___icons___appleIcon' |
  'pluginCreator___pluginOptions___icons___appleStartup' |
  'pluginCreator___pluginOptions___icons___coast' |
  'pluginCreator___pluginOptions___icons___favicons' |
  'pluginCreator___pluginOptions___icons___firefox' |
  'pluginCreator___pluginOptions___icons___twitter' |
  'pluginCreator___pluginOptions___icons___yandex' |
  'pluginCreator___pluginOptions___icons___windows' |
  'pluginCreator___pluginOptions___endpoint' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___disable' |
  'pluginCreator___pluginOptions___src' |
  'pluginCreator___pluginOptions___integrity' |
  'pluginCreator___pluginOptions___crossorigin' |
  'pluginCreator___pluginOptions___onLoad' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type TSitePageFilterInput = {
  path: Maybe<TStringQueryOperatorInput>;
  component: Maybe<TStringQueryOperatorInput>;
  internalComponentName: Maybe<TStringQueryOperatorInput>;
  componentChunkName: Maybe<TStringQueryOperatorInput>;
  matchPath: Maybe<TStringQueryOperatorInput>;
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>;
  context: Maybe<TSitePageContextFilterInput>;
  pluginCreator: Maybe<TSitePluginFilterInput>;
  pluginCreatorId: Maybe<TStringQueryOperatorInput>;
  componentPath: Maybe<TStringQueryOperatorInput>;
};

export type TSitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSitePageEdge>;
  nodes: Array<TSitePage>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TSitePageSortInput = {
  fields: Maybe<Array<Maybe<TSitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TSitePlugin = TNode & {
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<TSitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<TSitePluginPackageJson>;
};

export type TSitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSitePluginEdge>;
  nodes: Array<TSitePlugin>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TSitePluginGroupConnection>;
};


export type TSitePluginConnectionDistinctArgs = {
  field: TSitePluginFieldsEnum;
};


export type TSitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TSitePluginFieldsEnum;
};

export type TSitePluginEdge = {
  next: Maybe<TSitePlugin>;
  node: TSitePlugin;
  previous: Maybe<TSitePlugin>;
};

export type TSitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___fileName' |
  'pluginOptions___codegenConfig___avoidOptionals' |
  'pluginOptions___codegenConfig___maybeValue' |
  'pluginOptions___codegenConfig___typesPrefix' |
  'pluginOptions___additionalSchemas' |
  'pluginOptions___additionalSchemas___key' |
  'pluginOptions___additionalSchemas___fileName' |
  'pluginOptions___additionalSchemas___pluckConfig___globalGqlIdentifierName' |
  'pluginOptions___additionalSchemas___pluckConfig___modules' |
  'pluginOptions___disableAutoprefixing' |
  'pluginOptions___stylesProvider___injectFirst' |
  'pluginOptions___path' |
  'pluginOptions___langKeyDefault' |
  'pluginOptions___useLangKeyLayout' |
  'pluginOptions___typeName' |
  'pluginOptions___fieldName' |
  'pluginOptions___url' |
  'pluginOptions___headers___x_hasura_admin_secret' |
  'pluginOptions___showSpinner' |
  'pluginOptions___siteUrl' |
  'pluginOptions___includePaths' |
  'pluginOptions___logo' |
  'pluginOptions___injectHTML' |
  'pluginOptions___icons___android' |
  'pluginOptions___icons___appleIcon' |
  'pluginOptions___icons___appleStartup' |
  'pluginOptions___icons___coast' |
  'pluginOptions___icons___favicons' |
  'pluginOptions___icons___firefox' |
  'pluginOptions___icons___twitter' |
  'pluginOptions___icons___yandex' |
  'pluginOptions___icons___windows' |
  'pluginOptions___endpoint' |
  'pluginOptions___name' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___disable' |
  'pluginOptions___src' |
  'pluginOptions___integrity' |
  'pluginOptions___crossorigin' |
  'pluginOptions___onLoad' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type TSitePluginFilterInput = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  resolve: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
  pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<TStringQueryOperatorInput>;
  browserAPIs: Maybe<TStringQueryOperatorInput>;
  ssrAPIs: Maybe<TStringQueryOperatorInput>;
  pluginFilepath: Maybe<TStringQueryOperatorInput>;
  packageJson: Maybe<TSitePluginPackageJsonFilterInput>;
};

export type TSitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TSitePluginEdge>;
  nodes: Array<TSitePlugin>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TSitePluginPackageJson = {
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<TSitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<TSitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<TSitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TSitePluginPackageJsonDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type TSitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<TSitePluginPackageJsonDependenciesFilterInput>;
};

export type TSitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type TSitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<TSitePluginPackageJsonDevDependenciesFilterInput>;
};

export type TSitePluginPackageJsonFilterInput = {
  name: Maybe<TStringQueryOperatorInput>;
  description: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
  main: Maybe<TStringQueryOperatorInput>;
  license: Maybe<TStringQueryOperatorInput>;
  dependencies: Maybe<TSitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<TSitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<TSitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type TSitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<TStringQueryOperatorInput>;
  version: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<TSitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type TSitePluginPluginOptions = {
  fileName: Maybe<Scalars['String']>;
  codegenConfig: Maybe<TSitePluginPluginOptionsCodegenConfig>;
  additionalSchemas: Maybe<Array<Maybe<TSitePluginPluginOptionsAdditionalSchemas>>>;
  disableAutoprefixing: Maybe<Scalars['Boolean']>;
  stylesProvider: Maybe<TSitePluginPluginOptionsStylesProvider>;
  path: Maybe<Scalars['String']>;
  langKeyDefault: Maybe<Scalars['String']>;
  useLangKeyLayout: Maybe<Scalars['Boolean']>;
  typeName: Maybe<Scalars['String']>;
  fieldName: Maybe<Scalars['String']>;
  url: Maybe<Scalars['String']>;
  headers: Maybe<TSitePluginPluginOptionsHeaders>;
  showSpinner: Maybe<Scalars['Boolean']>;
  siteUrl: Maybe<Scalars['String']>;
  includePaths: Maybe<Array<Maybe<Scalars['String']>>>;
  logo: Maybe<Scalars['String']>;
  injectHTML: Maybe<Scalars['Boolean']>;
  icons: Maybe<TSitePluginPluginOptionsIcons>;
  endpoint: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  short_name: Maybe<Scalars['String']>;
  start_url: Maybe<Scalars['String']>;
  background_color: Maybe<Scalars['String']>;
  theme_color: Maybe<Scalars['String']>;
  display: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  disable: Maybe<Scalars['Boolean']>;
  src: Maybe<Scalars['String']>;
  integrity: Maybe<Scalars['String']>;
  crossorigin: Maybe<Scalars['String']>;
  onLoad: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
};

export type TSitePluginPluginOptionsAdditionalSchemas = {
  key: Maybe<Scalars['String']>;
  fileName: Maybe<Scalars['String']>;
  schema: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchema>;
  pluckConfig: Maybe<TSitePluginPluginOptionsAdditionalSchemasPluckConfig>;
};

export type TSitePluginPluginOptionsAdditionalSchemasFilterInput = {
  key: Maybe<TStringQueryOperatorInput>;
  fileName: Maybe<TStringQueryOperatorInput>;
  schema: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchemaFilterInput>;
  pluckConfig: Maybe<TSitePluginPluginOptionsAdditionalSchemasPluckConfigFilterInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasFilterListInput = {
  elemMatch: Maybe<TSitePluginPluginOptionsAdditionalSchemasFilterInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasPluckConfig = {
  globalGqlIdentifierName: Maybe<Scalars['String']>;
  modules: Maybe<Array<Maybe<TSitePluginPluginOptionsAdditionalSchemasPluckConfigModules>>>;
};

export type TSitePluginPluginOptionsAdditionalSchemasPluckConfigFilterInput = {
  globalGqlIdentifierName: Maybe<TStringQueryOperatorInput>;
  modules: Maybe<TSitePluginPluginOptionsAdditionalSchemasPluckConfigModulesFilterListInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasPluckConfigModules = {
  name: Maybe<Scalars['String']>;
  identifier: Maybe<Scalars['String']>;
};

export type TSitePluginPluginOptionsAdditionalSchemasPluckConfigModulesFilterInput = {
  name: Maybe<TStringQueryOperatorInput>;
  identifier: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasPluckConfigModulesFilterListInput = {
  elemMatch: Maybe<TSitePluginPluginOptionsAdditionalSchemasPluckConfigModulesFilterInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchema = {
  https___learn_islam_api_ahlsunnah_dev_v1_graphql: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_Graphql>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchemaFilterInput = {
  https___learn_islam_api_ahlsunnah_dev_v1_graphql: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlFilterInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_Graphql = {
  headers: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlHeaders>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlFilterInput = {
  headers: Maybe<TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlHeadersFilterInput>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlHeaders = {
  x_hasura_admin_secret: Maybe<Scalars['String']>;
};

export type TSitePluginPluginOptionsAdditionalSchemasSchemaHttps___Learn_Islam_Api_Ahlsunnah_Dev_V1_GraphqlHeadersFilterInput = {
  x_hasura_admin_secret: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPluginOptionsCodegenConfig = {
  avoidOptionals: Maybe<Scalars['Boolean']>;
  maybeValue: Maybe<Scalars['String']>;
  typesPrefix: Maybe<Scalars['String']>;
};

export type TSitePluginPluginOptionsCodegenConfigFilterInput = {
  avoidOptionals: Maybe<TBooleanQueryOperatorInput>;
  maybeValue: Maybe<TStringQueryOperatorInput>;
  typesPrefix: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPluginOptionsFilterInput = {
  fileName: Maybe<TStringQueryOperatorInput>;
  codegenConfig: Maybe<TSitePluginPluginOptionsCodegenConfigFilterInput>;
  additionalSchemas: Maybe<TSitePluginPluginOptionsAdditionalSchemasFilterListInput>;
  disableAutoprefixing: Maybe<TBooleanQueryOperatorInput>;
  stylesProvider: Maybe<TSitePluginPluginOptionsStylesProviderFilterInput>;
  path: Maybe<TStringQueryOperatorInput>;
  langKeyDefault: Maybe<TStringQueryOperatorInput>;
  useLangKeyLayout: Maybe<TBooleanQueryOperatorInput>;
  typeName: Maybe<TStringQueryOperatorInput>;
  fieldName: Maybe<TStringQueryOperatorInput>;
  url: Maybe<TStringQueryOperatorInput>;
  headers: Maybe<TSitePluginPluginOptionsHeadersFilterInput>;
  showSpinner: Maybe<TBooleanQueryOperatorInput>;
  siteUrl: Maybe<TStringQueryOperatorInput>;
  includePaths: Maybe<TStringQueryOperatorInput>;
  logo: Maybe<TStringQueryOperatorInput>;
  injectHTML: Maybe<TBooleanQueryOperatorInput>;
  icons: Maybe<TSitePluginPluginOptionsIconsFilterInput>;
  endpoint: Maybe<TStringQueryOperatorInput>;
  name: Maybe<TStringQueryOperatorInput>;
  short_name: Maybe<TStringQueryOperatorInput>;
  start_url: Maybe<TStringQueryOperatorInput>;
  background_color: Maybe<TStringQueryOperatorInput>;
  theme_color: Maybe<TStringQueryOperatorInput>;
  display: Maybe<TStringQueryOperatorInput>;
  icon: Maybe<TStringQueryOperatorInput>;
  disable: Maybe<TBooleanQueryOperatorInput>;
  src: Maybe<TStringQueryOperatorInput>;
  integrity: Maybe<TStringQueryOperatorInput>;
  crossorigin: Maybe<TStringQueryOperatorInput>;
  onLoad: Maybe<TStringQueryOperatorInput>;
  pathCheck: Maybe<TBooleanQueryOperatorInput>;
};

export type TSitePluginPluginOptionsHeaders = {
  x_hasura_admin_secret: Maybe<Scalars['String']>;
};

export type TSitePluginPluginOptionsHeadersFilterInput = {
  x_hasura_admin_secret: Maybe<TStringQueryOperatorInput>;
};

export type TSitePluginPluginOptionsIcons = {
  android: Maybe<Scalars['Boolean']>;
  appleIcon: Maybe<Scalars['Boolean']>;
  appleStartup: Maybe<Scalars['Boolean']>;
  coast: Maybe<Scalars['Boolean']>;
  favicons: Maybe<Scalars['Boolean']>;
  firefox: Maybe<Scalars['Boolean']>;
  twitter: Maybe<Scalars['Boolean']>;
  yandex: Maybe<Scalars['Boolean']>;
  windows: Maybe<Scalars['Boolean']>;
};

export type TSitePluginPluginOptionsIconsFilterInput = {
  android: Maybe<TBooleanQueryOperatorInput>;
  appleIcon: Maybe<TBooleanQueryOperatorInput>;
  appleStartup: Maybe<TBooleanQueryOperatorInput>;
  coast: Maybe<TBooleanQueryOperatorInput>;
  favicons: Maybe<TBooleanQueryOperatorInput>;
  firefox: Maybe<TBooleanQueryOperatorInput>;
  twitter: Maybe<TBooleanQueryOperatorInput>;
  yandex: Maybe<TBooleanQueryOperatorInput>;
  windows: Maybe<TBooleanQueryOperatorInput>;
};

export type TSitePluginPluginOptionsStylesProvider = {
  injectFirst: Maybe<Scalars['Boolean']>;
};

export type TSitePluginPluginOptionsStylesProviderFilterInput = {
  injectFirst: Maybe<TBooleanQueryOperatorInput>;
};

export type TSitePluginSortInput = {
  fields: Maybe<Array<Maybe<TSitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TSiteSiteMetadata = {
  title: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
};

export type TSiteSiteMetadataFilterInput = {
  title: Maybe<TStringQueryOperatorInput>;
  siteUrl: Maybe<TStringQueryOperatorInput>;
};

export type TSiteSortInput = {
  fields: Maybe<Array<Maybe<TSiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TSortOrderEnum = 
  'ASC' |
  'DESC';

export type TStringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
};

export type TTranslationsJson = TNode & {
  id: Scalars['ID'];
  parent: Maybe<TNode>;
  children: Array<TNode>;
  internal: TInternal;
  homeTitle: Maybe<Scalars['String']>;
  homeDescription: Maybe<Scalars['String']>;
  homeEmailTitle: Maybe<Scalars['String']>;
  homeEmailPlaceHolder: Maybe<Scalars['String']>;
  homeStartTrack: Maybe<Scalars['String']>;
  siteName: Maybe<Scalars['String']>;
  siteSlogan: Maybe<Scalars['String']>;
  footerSocialTitle: Maybe<Scalars['String']>;
  homeFooterCTA: Maybe<Scalars['String']>;
  start: Maybe<Scalars['String']>;
  soon: Maybe<Scalars['String']>;
  aboutUs: Maybe<Scalars['String']>;
  tracks: Maybe<Scalars['String']>;
  courses: Maybe<Scalars['String']>;
  connect: Maybe<Scalars['String']>;
  feature1Title: Maybe<Scalars['String']>;
  feature2Title: Maybe<Scalars['String']>;
  feature3Title: Maybe<Scalars['String']>;
  feature1Text: Maybe<Scalars['String']>;
  feature2Text: Maybe<Scalars['String']>;
  feature3Text: Maybe<Scalars['String']>;
  enroll: Maybe<Scalars['String']>;
  featuresTitle: Maybe<Scalars['String']>;
  featuredCoursesTitle: Maybe<Scalars['String']>;
  urlTelegram: Maybe<Scalars['String']>;
  urlTwitter: Maybe<Scalars['String']>;
  urlFacebook: Maybe<Scalars['String']>;
  urlYoutube: Maybe<Scalars['String']>;
  startCourse: Maybe<Scalars['String']>;
  level1: Maybe<Scalars['String']>;
  level2: Maybe<Scalars['String']>;
  level3: Maybe<Scalars['String']>;
  level: Maybe<Scalars['String']>;
  track: Maybe<Scalars['String']>;
  localePath: Maybe<Scalars['String']>;
  localeName: Maybe<Scalars['String']>;
  toOtherLanguageCTA: Maybe<Scalars['String']>;
  tracksPageTitle: Maybe<Scalars['String']>;
  tracksPageDescription: Maybe<Scalars['String']>;
  focus: Maybe<Scalars['String']>;
  nextCourse: Maybe<Scalars['String']>;
  takeQuiz: Maybe<Scalars['String']>;
  quiz: Maybe<Scalars['String']>;
  quizTrue: Maybe<Scalars['String']>;
  quizFalse: Maybe<Scalars['String']>;
  fillintheblankTitle: Maybe<Scalars['String']>;
  readIn: Maybe<Scalars['String']>;
  difficulty1: Maybe<Scalars['String']>;
  difficulty2: Maybe<Scalars['String']>;
  quizCTA: Maybe<Scalars['String']>;
  newsletterSuccess: Maybe<Scalars['String']>;
  newsletterSubscribed: Maybe<Scalars['String']>;
  newsletterEmailNotValid: Maybe<Scalars['String']>;
  fillInTheBlankTitle: Maybe<Scalars['String']>;
  chooseACategoryTitle: Maybe<Scalars['String']>;
  assessmentPerfect: Maybe<Scalars['String']>;
  assessmentVeryGood: Maybe<Scalars['String']>;
  assessmentGood: Maybe<Scalars['String']>;
  yourScore: Maybe<Scalars['String']>;
  yourLastScore: Maybe<Scalars['String']>;
  grade: Maybe<Scalars['String']>;
  average: Maybe<Scalars['String']>;
  assessmentFail: Maybe<Scalars['String']>;
  nextTrack: Maybe<Scalars['String']>;
  backToCourse: Maybe<Scalars['String']>;
  restartQuizs: Maybe<Scalars['String']>;
  seeYourScore: Maybe<Scalars['String']>;
  goToTop: Maybe<Scalars['String']>;
  tabTranslation: Maybe<Scalars['String']>;
  tabTranscription: Maybe<Scalars['String']>;
  tabVocabulary: Maybe<Scalars['String']>;
  tabAudio: Maybe<Scalars['String']>;
  tabCompleted: Maybe<Scalars['String']>;
  continue: Maybe<Scalars['String']>;
  copyright: Maybe<Scalars['String']>;
  quizTitle: Maybe<Scalars['String']>;
  progress: Maybe<Scalars['String']>;
  next: Maybe<Scalars['String']>;
  iCompletedTheChapter: Maybe<Scalars['String']>;
  chapter: Maybe<Scalars['String']>;
  course: Maybe<Scalars['String']>;
  goToTracks: Maybe<Scalars['String']>;
  congratulations: Maybe<Scalars['String']>;
  congratulationsCTA: Maybe<Scalars['String']>;
  takeExam: Maybe<Scalars['String']>;
  aboutUsPageTitle: Maybe<Scalars['String']>;
  aboutUsPageContent: Maybe<Scalars['String']>;
  listenAudio: Maybe<Scalars['String']>;
  downloadAudio: Maybe<Scalars['String']>;
  here: Maybe<Scalars['String']>;
  clickHere: Maybe<Scalars['String']>;
  trackLevel: Maybe<Scalars['String']>;
  chapterAudio: Maybe<Scalars['String']>;
  siteContentPresentation: Maybe<Scalars['String']>;
  homeContentTitle: Maybe<Scalars['String']>;
  chooseAnswer: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
  nextHelp: Maybe<Scalars['String']>;
};

export type TTranslationsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TTranslationsJsonEdge>;
  nodes: Array<TTranslationsJson>;
  pageInfo: TPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<TTranslationsJsonGroupConnection>;
};


export type TTranslationsJsonConnectionDistinctArgs = {
  field: TTranslationsJsonFieldsEnum;
};


export type TTranslationsJsonConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: TTranslationsJsonFieldsEnum;
};

export type TTranslationsJsonEdge = {
  next: Maybe<TTranslationsJson>;
  node: TTranslationsJson;
  previous: Maybe<TTranslationsJson>;
};

export type TTranslationsJsonFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'homeTitle' |
  'homeDescription' |
  'homeEmailTitle' |
  'homeEmailPlaceHolder' |
  'homeStartTrack' |
  'siteName' |
  'siteSlogan' |
  'footerSocialTitle' |
  'homeFooterCTA' |
  'start' |
  'soon' |
  'aboutUs' |
  'tracks' |
  'courses' |
  'connect' |
  'feature1Title' |
  'feature2Title' |
  'feature3Title' |
  'feature1Text' |
  'feature2Text' |
  'feature3Text' |
  'enroll' |
  'featuresTitle' |
  'featuredCoursesTitle' |
  'urlTelegram' |
  'urlTwitter' |
  'urlFacebook' |
  'urlYoutube' |
  'startCourse' |
  'level1' |
  'level2' |
  'level3' |
  'level' |
  'track' |
  'localePath' |
  'localeName' |
  'toOtherLanguageCTA' |
  'tracksPageTitle' |
  'tracksPageDescription' |
  'focus' |
  'nextCourse' |
  'takeQuiz' |
  'quiz' |
  'quizTrue' |
  'quizFalse' |
  'fillintheblankTitle' |
  'readIn' |
  'difficulty1' |
  'difficulty2' |
  'quizCTA' |
  'newsletterSuccess' |
  'newsletterSubscribed' |
  'newsletterEmailNotValid' |
  'fillInTheBlankTitle' |
  'chooseACategoryTitle' |
  'assessmentPerfect' |
  'assessmentVeryGood' |
  'assessmentGood' |
  'yourScore' |
  'yourLastScore' |
  'grade' |
  'average' |
  'assessmentFail' |
  'nextTrack' |
  'backToCourse' |
  'restartQuizs' |
  'seeYourScore' |
  'goToTop' |
  'tabTranslation' |
  'tabTranscription' |
  'tabVocabulary' |
  'tabAudio' |
  'tabCompleted' |
  'continue' |
  'copyright' |
  'quizTitle' |
  'progress' |
  'next' |
  'iCompletedTheChapter' |
  'chapter' |
  'course' |
  'goToTracks' |
  'congratulations' |
  'congratulationsCTA' |
  'takeExam' |
  'aboutUsPageTitle' |
  'aboutUsPageContent' |
  'listenAudio' |
  'downloadAudio' |
  'here' |
  'clickHere' |
  'trackLevel' |
  'chapterAudio' |
  'siteContentPresentation' |
  'homeContentTitle' |
  'chooseAnswer' |
  'locale' |
  'nextHelp';

export type TTranslationsJsonFilterInput = {
  id: Maybe<TStringQueryOperatorInput>;
  parent: Maybe<TNodeFilterInput>;
  children: Maybe<TNodeFilterListInput>;
  internal: Maybe<TInternalFilterInput>;
  homeTitle: Maybe<TStringQueryOperatorInput>;
  homeDescription: Maybe<TStringQueryOperatorInput>;
  homeEmailTitle: Maybe<TStringQueryOperatorInput>;
  homeEmailPlaceHolder: Maybe<TStringQueryOperatorInput>;
  homeStartTrack: Maybe<TStringQueryOperatorInput>;
  siteName: Maybe<TStringQueryOperatorInput>;
  siteSlogan: Maybe<TStringQueryOperatorInput>;
  footerSocialTitle: Maybe<TStringQueryOperatorInput>;
  homeFooterCTA: Maybe<TStringQueryOperatorInput>;
  start: Maybe<TStringQueryOperatorInput>;
  soon: Maybe<TStringQueryOperatorInput>;
  aboutUs: Maybe<TStringQueryOperatorInput>;
  tracks: Maybe<TStringQueryOperatorInput>;
  courses: Maybe<TStringQueryOperatorInput>;
  connect: Maybe<TStringQueryOperatorInput>;
  feature1Title: Maybe<TStringQueryOperatorInput>;
  feature2Title: Maybe<TStringQueryOperatorInput>;
  feature3Title: Maybe<TStringQueryOperatorInput>;
  feature1Text: Maybe<TStringQueryOperatorInput>;
  feature2Text: Maybe<TStringQueryOperatorInput>;
  feature3Text: Maybe<TStringQueryOperatorInput>;
  enroll: Maybe<TStringQueryOperatorInput>;
  featuresTitle: Maybe<TStringQueryOperatorInput>;
  featuredCoursesTitle: Maybe<TStringQueryOperatorInput>;
  urlTelegram: Maybe<TStringQueryOperatorInput>;
  urlTwitter: Maybe<TStringQueryOperatorInput>;
  urlFacebook: Maybe<TStringQueryOperatorInput>;
  urlYoutube: Maybe<TStringQueryOperatorInput>;
  startCourse: Maybe<TStringQueryOperatorInput>;
  level1: Maybe<TStringQueryOperatorInput>;
  level2: Maybe<TStringQueryOperatorInput>;
  level3: Maybe<TStringQueryOperatorInput>;
  level: Maybe<TStringQueryOperatorInput>;
  track: Maybe<TStringQueryOperatorInput>;
  localePath: Maybe<TStringQueryOperatorInput>;
  localeName: Maybe<TStringQueryOperatorInput>;
  toOtherLanguageCTA: Maybe<TStringQueryOperatorInput>;
  tracksPageTitle: Maybe<TStringQueryOperatorInput>;
  tracksPageDescription: Maybe<TStringQueryOperatorInput>;
  focus: Maybe<TStringQueryOperatorInput>;
  nextCourse: Maybe<TStringQueryOperatorInput>;
  takeQuiz: Maybe<TStringQueryOperatorInput>;
  quiz: Maybe<TStringQueryOperatorInput>;
  quizTrue: Maybe<TStringQueryOperatorInput>;
  quizFalse: Maybe<TStringQueryOperatorInput>;
  fillintheblankTitle: Maybe<TStringQueryOperatorInput>;
  readIn: Maybe<TStringQueryOperatorInput>;
  difficulty1: Maybe<TStringQueryOperatorInput>;
  difficulty2: Maybe<TStringQueryOperatorInput>;
  quizCTA: Maybe<TStringQueryOperatorInput>;
  newsletterSuccess: Maybe<TStringQueryOperatorInput>;
  newsletterSubscribed: Maybe<TStringQueryOperatorInput>;
  newsletterEmailNotValid: Maybe<TStringQueryOperatorInput>;
  fillInTheBlankTitle: Maybe<TStringQueryOperatorInput>;
  chooseACategoryTitle: Maybe<TStringQueryOperatorInput>;
  assessmentPerfect: Maybe<TStringQueryOperatorInput>;
  assessmentVeryGood: Maybe<TStringQueryOperatorInput>;
  assessmentGood: Maybe<TStringQueryOperatorInput>;
  yourScore: Maybe<TStringQueryOperatorInput>;
  yourLastScore: Maybe<TStringQueryOperatorInput>;
  grade: Maybe<TStringQueryOperatorInput>;
  average: Maybe<TStringQueryOperatorInput>;
  assessmentFail: Maybe<TStringQueryOperatorInput>;
  nextTrack: Maybe<TStringQueryOperatorInput>;
  backToCourse: Maybe<TStringQueryOperatorInput>;
  restartQuizs: Maybe<TStringQueryOperatorInput>;
  seeYourScore: Maybe<TStringQueryOperatorInput>;
  goToTop: Maybe<TStringQueryOperatorInput>;
  tabTranslation: Maybe<TStringQueryOperatorInput>;
  tabTranscription: Maybe<TStringQueryOperatorInput>;
  tabVocabulary: Maybe<TStringQueryOperatorInput>;
  tabAudio: Maybe<TStringQueryOperatorInput>;
  tabCompleted: Maybe<TStringQueryOperatorInput>;
  continue: Maybe<TStringQueryOperatorInput>;
  copyright: Maybe<TStringQueryOperatorInput>;
  quizTitle: Maybe<TStringQueryOperatorInput>;
  progress: Maybe<TStringQueryOperatorInput>;
  next: Maybe<TStringQueryOperatorInput>;
  iCompletedTheChapter: Maybe<TStringQueryOperatorInput>;
  chapter: Maybe<TStringQueryOperatorInput>;
  course: Maybe<TStringQueryOperatorInput>;
  goToTracks: Maybe<TStringQueryOperatorInput>;
  congratulations: Maybe<TStringQueryOperatorInput>;
  congratulationsCTA: Maybe<TStringQueryOperatorInput>;
  takeExam: Maybe<TStringQueryOperatorInput>;
  aboutUsPageTitle: Maybe<TStringQueryOperatorInput>;
  aboutUsPageContent: Maybe<TStringQueryOperatorInput>;
  listenAudio: Maybe<TStringQueryOperatorInput>;
  downloadAudio: Maybe<TStringQueryOperatorInput>;
  here: Maybe<TStringQueryOperatorInput>;
  clickHere: Maybe<TStringQueryOperatorInput>;
  trackLevel: Maybe<TStringQueryOperatorInput>;
  chapterAudio: Maybe<TStringQueryOperatorInput>;
  siteContentPresentation: Maybe<TStringQueryOperatorInput>;
  homeContentTitle: Maybe<TStringQueryOperatorInput>;
  chooseAnswer: Maybe<TStringQueryOperatorInput>;
  locale: Maybe<TStringQueryOperatorInput>;
  nextHelp: Maybe<TStringQueryOperatorInput>;
};

export type TTranslationsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<TTranslationsJsonEdge>;
  nodes: Array<TTranslationsJson>;
  pageInfo: TPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type TTranslationsJsonSortInput = {
  fields: Maybe<Array<Maybe<TTranslationsJsonFieldsEnum>>>;
  order: Maybe<Array<Maybe<TSortOrderEnum>>>;
};

export type TMadrassahPageQueryQueryVariables = {};


export type TMadrassahPageQueryQuery = { api: { tracks: Array<(
      Pick<TApi_Tracks, 'id' | 'slug'>
      & { translations: Array<Pick<TApi_Track_Translations, 'id' | 'locale_code' | 'title'>>, courses: Array<(
        Pick<TApi_Courses, 'id' | 'slug'>
        & { quiz_difficulties: Maybe<Pick<TApi_Course_Quiz_Difficulties, 'quiz_difficulties'>>, translations: Array<Pick<TApi_Course_Translations, 'id' | 'locale_code' | 'title'>>, chapters: Array<(
          Pick<TApi_Chapters, 'id' | 'slug'>
          & { translations: Array<Pick<TApi_Chapter_Translations, 'id' | 'locale_code' | 'title'>> }
        )> }
      )> }
    )> } };

export type TBookQueryQueryVariables = {};


export type TBookQueryQuery = { api: { books: Array<Pick<TApi_Books, 'description' | 'id' | 'image_link'>> } };

export type TAboutUsTrackFragment = Pick<TApi_Tracks, 'id' | 'slug'>;

export type TAboutUsQueryQueryVariables = {};


export type TAboutUsQueryQuery = { api: { tracks: Array<TAboutUsTrackFragment> } };

export type TChapterPageTrackFragment = (
  Pick<TApi_Tracks, 'id' | 'slug'>
  & { translations: Array<Pick<TApi_Track_Translations, 'title'>>, courses: Array<(
    Pick<TApi_Courses, 'id' | 'slug'>
    & { quiz_difficulties: Maybe<Pick<TApi_Course_Quiz_Difficulties, 'quiz_difficulties'>>, chapters: Array<(
      Pick<TApi_Chapters, 'id' | 'slug'>
      & { translations: Array<Pick<TApi_Chapter_Translations, 'title'>> }
    )>, translations: Array<Pick<TApi_Course_Translations, 'locale_code' | 'title'>> }
  )> }
);

export type TChapterPageTranslationsFragment = Pick<TTranslationsJson, 'chapter' | 'clickHere' | 'chapterAudio' | 'congratulations' | 'congratulationsCTA' | 'course' | 'difficulty1' | 'difficulty2' | 'downloadAudio' | 'focus' | 'goToTracks' | 'iCompletedTheChapter' | 'listenAudio' | 'locale' | 'localeName' | 'localePath' | 'next' | 'nextCourse' | 'nextHelp' | 'readIn' | 'quiz' | 'tabAudio' | 'tabCompleted' | 'tabTranscription' | 'tabTranslation' | 'tabVocabulary' | 'takeQuiz' | 'track'>;

export type TChapterQueryQueryVariables = {
  locale: Scalars['String'];
  localeEnum: Maybe<TApi_Locales_Enum>;
  id: Scalars['Int'];
};


export type TChapterQueryQuery = { api: { chapter: Maybe<(
      Pick<TApi_Chapters, 'id' | 'slug' | 'audio'>
      & { translations: Array<Pick<TApi_Chapter_Translations, 'id' | 'title' | 'transcription' | 'vocabulary' | 'locale_code' | 'video'>>, course: (
        Pick<TApi_Courses, 'id' | 'slug'>
        & { track: TChapterPageTrackFragment, chapters: Array<(
          Pick<TApi_Chapters, 'id' | 'slug'>
          & { translations: Array<Pick<TApi_Chapter_Translations, 'title'>> }
        )> }
      ) }
    )> }, translations: Maybe<TChapterPageTranslationsFragment>, otherLocaleTranslations: Maybe<Pick<TTranslationsJson, 'localeName' | 'localePath' | 'readIn'>> };

export type THomeTrackFragment = (
  Pick<TApi_Tracks, 'id' | 'order' | 'slug' | 'soon'>
  & { translations: Array<Pick<TApi_Track_Translations, 'title' | 'description' | 'locale_code'>> }
);

export type THomeQueryQueryVariables = {};


export type THomeQueryQuery = { api: { tracks: Array<THomeTrackFragment> } };

export type TQuizzesPageQuizFragment = (
  Pick<TApi_Quizzes, 'id' | 'type_slug'>
  & { translations: Array<Pick<TApi_Quiz_Translations, 'id' | 'data'>> }
);

export type TQuizzesPageTranslationsFragment = Pick<TTranslationsJson, 'assessmentPerfect' | 'assessmentVeryGood' | 'assessmentGood' | 'assessmentFail' | 'average' | 'backToCourse' | 'chooseACategoryTitle' | 'chooseAnswer' | 'congratulations' | 'congratulationsCTA' | 'continue' | 'difficulty1' | 'difficulty2' | 'fillInTheBlankTitle' | 'goToTop' | 'goToTracks' | 'grade' | 'level' | 'locale' | 'localePath' | 'nextCourse' | 'nextTrack' | 'progress' | 'quiz' | 'quizTitle' | 'quizTrue' | 'quizFalse' | 'restartQuizs' | 'seeYourScore' | 'start' | 'takeExam' | 'yourLastScore' | 'yourScore'>;

export type TQuizQueryQueryVariables = {
  locale: Scalars['String'];
  localeEnum: Maybe<TApi_Locales_Enum>;
  id: Scalars['Int'];
  difficulty: Scalars['Int'];
};


export type TQuizQueryQuery = { api: { course: Maybe<(
      Pick<TApi_Courses, 'id' | 'slug'>
      & { translations: Array<Pick<TApi_Course_Translations, 'id' | 'title'>>, quizzes: Array<TQuizzesPageQuizFragment>, track: (
        Pick<TApi_Tracks, 'id' | 'slug'>
        & { translations: Array<Pick<TApi_Track_Translations, 'title'>>, courses: Array<(
          Pick<TApi_Courses, 'id' | 'slug'>
          & { quiz_difficulties: Maybe<Pick<TApi_Course_Quiz_Difficulties, 'quiz_difficulties'>>, translations: Array<Pick<TApi_Course_Translations, 'locale_code' | 'title'>>, chapters: Array<(
            Pick<TApi_Chapters, 'id' | 'slug'>
            & { translations: Array<Pick<TApi_Chapter_Translations, 'title'>> }
          )> }
        )> }
      ) }
    )> }, translations: Maybe<TQuizzesPageTranslationsFragment>, otherLocaleTranslations: Maybe<Pick<TTranslationsJson, 'localeName' | 'localePath'>> };

export type TTrackPageCourseFragment = (
  Pick<TApi_Courses, 'id' | 'level' | 'slug'>
  & { translations: Array<Pick<TApi_Course_Translations, 'title' | 'description'>>, chapters: Array<(
    Pick<TApi_Chapters, 'duration' | 'id' | 'slug'>
    & { translations: Array<Pick<TApi_Chapter_Translations, 'locale_code'>> }
  )>, quiz_difficulties: Maybe<Pick<TApi_Course_Quiz_Difficulties, 'quiz_difficulties'>>, topic: (
    Pick<TApi_Topics, 'id' | 'color'>
    & { translations: Array<Pick<TApi_Topic_Translations, 'title'>> }
  ) }
);

export type TTrackPageTrackFragment = (
  Pick<TApi_Tracks, 'id' | 'slug'>
  & { translations: Array<Pick<TApi_Track_Translations, 'title'>>, courses: Array<TTrackPageCourseFragment> }
);

export type TTrackPageQueryVariables = {
  localeEnum: TApi_Locales_Enum;
  id: Scalars['Int'];
};


export type TTrackPageQuery = { api: { track: Maybe<TTrackPageTrackFragment> } };

export type TGTracksPageTrackFragment = (
  Pick<TApi_Tracks, 'id' | 'slug' | 'soon'>
  & { translations: Array<Pick<TApi_Track_Translations, 'title' | 'description'>> }
);

export type TTracksQueryQueryVariables = {
  localeEnum: Maybe<TApi_Locales_Enum>;
};


export type TTracksQueryQuery = { api: { tracks: Array<TGTracksPageTrackFragment> } };
