export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  _int4: any;
  jsonb: any;
  citext: any;
};


/** expression to compare columns of type _int4. All fields are combined with logical 'AND'. */
export type _Int4_Comparison_Exp = {
  _eq?: Maybe<Scalars['_int4']>;
  _gt?: Maybe<Scalars['_int4']>;
  _gte?: Maybe<Scalars['_int4']>;
  _in?: Maybe<Array<Scalars['_int4']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_int4']>;
  _lte?: Maybe<Scalars['_int4']>;
  _neq?: Maybe<Scalars['_int4']>;
  _nin?: Maybe<Array<Scalars['_int4']>>;
};

/** columns and relationships of "books" */
export type Books = {
  description?: Maybe<Scalars['String']>;
  download_link: Scalars['String'];
  id: Scalars['Int'];
  image_link?: Maybe<Scalars['String']>;
};

/** aggregated selection of "books" */
export type Books_Aggregate = {
  aggregate?: Maybe<Books_Aggregate_Fields>;
  nodes: Array<Books>;
};

/** aggregate fields of "books" */
export type Books_Aggregate_Fields = {
  avg?: Maybe<Books_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Books_Max_Fields>;
  min?: Maybe<Books_Min_Fields>;
  stddev?: Maybe<Books_Stddev_Fields>;
  stddev_pop?: Maybe<Books_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Books_Stddev_Samp_Fields>;
  sum?: Maybe<Books_Sum_Fields>;
  var_pop?: Maybe<Books_Var_Pop_Fields>;
  var_samp?: Maybe<Books_Var_Samp_Fields>;
  variance?: Maybe<Books_Variance_Fields>;
};


/** aggregate fields of "books" */
export type Books_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Books_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "books" */
export type Books_Aggregate_Order_By = {
  avg?: Maybe<Books_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Books_Max_Order_By>;
  min?: Maybe<Books_Min_Order_By>;
  stddev?: Maybe<Books_Stddev_Order_By>;
  stddev_pop?: Maybe<Books_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Books_Stddev_Samp_Order_By>;
  sum?: Maybe<Books_Sum_Order_By>;
  var_pop?: Maybe<Books_Var_Pop_Order_By>;
  var_samp?: Maybe<Books_Var_Samp_Order_By>;
  variance?: Maybe<Books_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "books" */
export type Books_Arr_Rel_Insert_Input = {
  data: Array<Books_Insert_Input>;
  on_conflict?: Maybe<Books_On_Conflict>;
};

/** aggregate avg on columns */
export type Books_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "books" */
export type Books_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "books". All fields are combined with a logical 'AND'. */
export type Books_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Books_Bool_Exp>>>;
  _not?: Maybe<Books_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Books_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  download_link?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  image_link?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "books" */
export type Books_Constraint = 
  /** unique or primary key constraint */
  'books_pkey';

/** input type for incrementing integer column in table "books" */
export type Books_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "books" */
export type Books_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  download_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_link?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Books_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  download_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_link?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "books" */
export type Books_Max_Order_By = {
  description?: Maybe<Order_By>;
  download_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_link?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Books_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  download_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_link?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "books" */
export type Books_Min_Order_By = {
  description?: Maybe<Order_By>;
  download_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_link?: Maybe<Order_By>;
};

/** response of any mutation on the table "books" */
export type Books_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Books>;
};

/** input type for inserting object relation for remote table "books" */
export type Books_Obj_Rel_Insert_Input = {
  data: Books_Insert_Input;
  on_conflict?: Maybe<Books_On_Conflict>;
};

/** on conflict condition type for table "books" */
export type Books_On_Conflict = {
  constraint: Books_Constraint;
  update_columns: Array<Books_Update_Column>;
  where?: Maybe<Books_Bool_Exp>;
};

/** ordering options when selecting data from "books" */
export type Books_Order_By = {
  description?: Maybe<Order_By>;
  download_link?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image_link?: Maybe<Order_By>;
};

/** primary key columns input for table: "books" */
export type Books_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "books" */
export type Books_Select_Column = 
  /** column name */
  'description' |
  /** column name */
  'download_link' |
  /** column name */
  'id' |
  /** column name */
  'image_link';

/** input type for updating data in table "books" */
export type Books_Set_Input = {
  description?: Maybe<Scalars['String']>;
  download_link?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image_link?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Books_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "books" */
export type Books_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Books_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "books" */
export type Books_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Books_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "books" */
export type Books_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Books_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "books" */
export type Books_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "books" */
export type Books_Update_Column = 
  /** column name */
  'description' |
  /** column name */
  'download_link' |
  /** column name */
  'id' |
  /** column name */
  'image_link';

/** aggregate var_pop on columns */
export type Books_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "books" */
export type Books_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Books_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "books" */
export type Books_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Books_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "books" */
export type Books_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** columns and relationships of "chapter_translations" */
export type Chapter_Translations = {
  /** An object relationship */
  chapter: Chapters;
  chapter_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locales;
  locale_code: Locales_Enum;
  title: Scalars['String'];
  transcription: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  video: Scalars['String'];
  vocabulary: Scalars['String'];
};

/** aggregated selection of "chapter_translations" */
export type Chapter_Translations_Aggregate = {
  aggregate?: Maybe<Chapter_Translations_Aggregate_Fields>;
  nodes: Array<Chapter_Translations>;
};

/** aggregate fields of "chapter_translations" */
export type Chapter_Translations_Aggregate_Fields = {
  avg?: Maybe<Chapter_Translations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chapter_Translations_Max_Fields>;
  min?: Maybe<Chapter_Translations_Min_Fields>;
  stddev?: Maybe<Chapter_Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Chapter_Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chapter_Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Chapter_Translations_Sum_Fields>;
  var_pop?: Maybe<Chapter_Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Chapter_Translations_Var_Samp_Fields>;
  variance?: Maybe<Chapter_Translations_Variance_Fields>;
};


/** aggregate fields of "chapter_translations" */
export type Chapter_Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chapter_Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chapter_translations" */
export type Chapter_Translations_Aggregate_Order_By = {
  avg?: Maybe<Chapter_Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chapter_Translations_Max_Order_By>;
  min?: Maybe<Chapter_Translations_Min_Order_By>;
  stddev?: Maybe<Chapter_Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Chapter_Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chapter_Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Chapter_Translations_Sum_Order_By>;
  var_pop?: Maybe<Chapter_Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Chapter_Translations_Var_Samp_Order_By>;
  variance?: Maybe<Chapter_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chapter_translations" */
export type Chapter_Translations_Arr_Rel_Insert_Input = {
  data: Array<Chapter_Translations_Insert_Input>;
  on_conflict?: Maybe<Chapter_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Chapter_Translations_Avg_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chapter_translations" */
export type Chapter_Translations_Avg_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chapter_translations". All fields are combined with a logical 'AND'. */
export type Chapter_Translations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chapter_Translations_Bool_Exp>>>;
  _not?: Maybe<Chapter_Translations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chapter_Translations_Bool_Exp>>>;
  chapter?: Maybe<Chapters_Bool_Exp>;
  chapter_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<Locales_Bool_Exp>;
  locale_code?: Maybe<Locales_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  transcription?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  video?: Maybe<String_Comparison_Exp>;
  vocabulary?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "chapter_translations" */
export type Chapter_Translations_Constraint = 
  /** unique or primary key constraint */
  'chapter_translations_chapter_id_locale_code_key' |
  /** unique or primary key constraint */
  'chapter_translations_pkey';

/** input type for incrementing integer column in table "chapter_translations" */
export type Chapter_Translations_Inc_Input = {
  chapter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chapter_translations" */
export type Chapter_Translations_Insert_Input = {
  chapter?: Maybe<Chapters_Obj_Rel_Insert_Input>;
  chapter_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Locales_Obj_Rel_Insert_Input>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  transcription?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video?: Maybe<Scalars['String']>;
  vocabulary?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Chapter_Translations_Max_Fields = {
  chapter_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  transcription?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video?: Maybe<Scalars['String']>;
  vocabulary?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "chapter_translations" */
export type Chapter_Translations_Max_Order_By = {
  chapter_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  transcription?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video?: Maybe<Order_By>;
  vocabulary?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chapter_Translations_Min_Fields = {
  chapter_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  transcription?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video?: Maybe<Scalars['String']>;
  vocabulary?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "chapter_translations" */
export type Chapter_Translations_Min_Order_By = {
  chapter_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  transcription?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video?: Maybe<Order_By>;
  vocabulary?: Maybe<Order_By>;
};

/** response of any mutation on the table "chapter_translations" */
export type Chapter_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chapter_Translations>;
};

/** input type for inserting object relation for remote table "chapter_translations" */
export type Chapter_Translations_Obj_Rel_Insert_Input = {
  data: Chapter_Translations_Insert_Input;
  on_conflict?: Maybe<Chapter_Translations_On_Conflict>;
};

/** on conflict condition type for table "chapter_translations" */
export type Chapter_Translations_On_Conflict = {
  constraint: Chapter_Translations_Constraint;
  update_columns: Array<Chapter_Translations_Update_Column>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "chapter_translations" */
export type Chapter_Translations_Order_By = {
  chapter?: Maybe<Chapters_Order_By>;
  chapter_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locales_Order_By>;
  locale_code?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  transcription?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video?: Maybe<Order_By>;
  vocabulary?: Maybe<Order_By>;
};

/** primary key columns input for table: "chapter_translations" */
export type Chapter_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chapter_translations" */
export type Chapter_Translations_Select_Column = 
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
export type Chapter_Translations_Set_Input = {
  chapter_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  transcription?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video?: Maybe<Scalars['String']>;
  vocabulary?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Chapter_Translations_Stddev_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chapter_translations" */
export type Chapter_Translations_Stddev_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chapter_Translations_Stddev_Pop_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chapter_translations" */
export type Chapter_Translations_Stddev_Pop_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chapter_Translations_Stddev_Samp_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chapter_translations" */
export type Chapter_Translations_Stddev_Samp_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chapter_Translations_Sum_Fields = {
  chapter_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chapter_translations" */
export type Chapter_Translations_Sum_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "chapter_translations" */
export type Chapter_Translations_Update_Column = 
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
export type Chapter_Translations_Var_Pop_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chapter_translations" */
export type Chapter_Translations_Var_Pop_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chapter_Translations_Var_Samp_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chapter_translations" */
export type Chapter_Translations_Var_Samp_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chapter_Translations_Variance_Fields = {
  chapter_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chapter_translations" */
export type Chapter_Translations_Variance_Order_By = {
  chapter_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "chapters" */
export type Chapters = {
  audio?: Maybe<Scalars['String']>;
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  /** An array relationship */
  translations: Array<Chapter_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: Chapter_Translations_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "chapters" */
export type ChaptersTranslationsArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};


/** columns and relationships of "chapters" */
export type ChaptersTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};

/** aggregated selection of "chapters" */
export type Chapters_Aggregate = {
  aggregate?: Maybe<Chapters_Aggregate_Fields>;
  nodes: Array<Chapters>;
};

/** aggregate fields of "chapters" */
export type Chapters_Aggregate_Fields = {
  avg?: Maybe<Chapters_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Chapters_Max_Fields>;
  min?: Maybe<Chapters_Min_Fields>;
  stddev?: Maybe<Chapters_Stddev_Fields>;
  stddev_pop?: Maybe<Chapters_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Chapters_Stddev_Samp_Fields>;
  sum?: Maybe<Chapters_Sum_Fields>;
  var_pop?: Maybe<Chapters_Var_Pop_Fields>;
  var_samp?: Maybe<Chapters_Var_Samp_Fields>;
  variance?: Maybe<Chapters_Variance_Fields>;
};


/** aggregate fields of "chapters" */
export type Chapters_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Chapters_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "chapters" */
export type Chapters_Aggregate_Order_By = {
  avg?: Maybe<Chapters_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Chapters_Max_Order_By>;
  min?: Maybe<Chapters_Min_Order_By>;
  stddev?: Maybe<Chapters_Stddev_Order_By>;
  stddev_pop?: Maybe<Chapters_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Chapters_Stddev_Samp_Order_By>;
  sum?: Maybe<Chapters_Sum_Order_By>;
  var_pop?: Maybe<Chapters_Var_Pop_Order_By>;
  var_samp?: Maybe<Chapters_Var_Samp_Order_By>;
  variance?: Maybe<Chapters_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "chapters" */
export type Chapters_Arr_Rel_Insert_Input = {
  data: Array<Chapters_Insert_Input>;
  on_conflict?: Maybe<Chapters_On_Conflict>;
};

/** aggregate avg on columns */
export type Chapters_Avg_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "chapters" */
export type Chapters_Avg_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "chapters". All fields are combined with a logical 'AND'. */
export type Chapters_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Chapters_Bool_Exp>>>;
  _not?: Maybe<Chapters_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Chapters_Bool_Exp>>>;
  audio?: Maybe<String_Comparison_Exp>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  duration?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  translations?: Maybe<Chapter_Translations_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "chapters" */
export type Chapters_Constraint = 
  /** unique or primary key constraint */
  'chapters_pkey';

/** input type for incrementing integer column in table "chapters" */
export type Chapters_Inc_Input = {
  course_id?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "chapters" */
export type Chapters_Insert_Input = {
  audio?: Maybe<Scalars['String']>;
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  translations?: Maybe<Chapter_Translations_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Chapters_Max_Fields = {
  audio?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "chapters" */
export type Chapters_Max_Order_By = {
  audio?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Chapters_Min_Fields = {
  audio?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "chapters" */
export type Chapters_Min_Order_By = {
  audio?: Maybe<Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "chapters" */
export type Chapters_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Chapters>;
};

/** input type for inserting object relation for remote table "chapters" */
export type Chapters_Obj_Rel_Insert_Input = {
  data: Chapters_Insert_Input;
  on_conflict?: Maybe<Chapters_On_Conflict>;
};

/** on conflict condition type for table "chapters" */
export type Chapters_On_Conflict = {
  constraint: Chapters_Constraint;
  update_columns: Array<Chapters_Update_Column>;
  where?: Maybe<Chapters_Bool_Exp>;
};

/** ordering options when selecting data from "chapters" */
export type Chapters_Order_By = {
  audio?: Maybe<Order_By>;
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Chapter_Translations_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "chapters" */
export type Chapters_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "chapters" */
export type Chapters_Select_Column = 
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
export type Chapters_Set_Input = {
  audio?: Maybe<Scalars['String']>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Chapters_Stddev_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "chapters" */
export type Chapters_Stddev_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Chapters_Stddev_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "chapters" */
export type Chapters_Stddev_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Chapters_Stddev_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "chapters" */
export type Chapters_Stddev_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Chapters_Sum_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "chapters" */
export type Chapters_Sum_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "chapters" */
export type Chapters_Update_Column = 
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
export type Chapters_Var_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "chapters" */
export type Chapters_Var_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Chapters_Var_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "chapters" */
export type Chapters_Var_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Chapters_Variance_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "chapters" */
export type Chapters_Variance_Order_By = {
  course_id?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};


/** expression to compare columns of type citext. All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: Maybe<Scalars['citext']>;
  _gt?: Maybe<Scalars['citext']>;
  _gte?: Maybe<Scalars['citext']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['citext']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['citext']>;
  _lte?: Maybe<Scalars['citext']>;
  _neq?: Maybe<Scalars['citext']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['citext']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "course_quiz_difficulties" */
export type Course_Quiz_Difficulties = {
  course_id?: Maybe<Scalars['Int']>;
  quiz_difficulties?: Maybe<Scalars['_int4']>;
};

/** aggregated selection of "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Aggregate = {
  aggregate?: Maybe<Course_Quiz_Difficulties_Aggregate_Fields>;
  nodes: Array<Course_Quiz_Difficulties>;
};

/** aggregate fields of "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Aggregate_Fields = {
  avg?: Maybe<Course_Quiz_Difficulties_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Quiz_Difficulties_Max_Fields>;
  min?: Maybe<Course_Quiz_Difficulties_Min_Fields>;
  stddev?: Maybe<Course_Quiz_Difficulties_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Quiz_Difficulties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Quiz_Difficulties_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Quiz_Difficulties_Sum_Fields>;
  var_pop?: Maybe<Course_Quiz_Difficulties_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Quiz_Difficulties_Var_Samp_Fields>;
  variance?: Maybe<Course_Quiz_Difficulties_Variance_Fields>;
};


/** aggregate fields of "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Quiz_Difficulties_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Aggregate_Order_By = {
  avg?: Maybe<Course_Quiz_Difficulties_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Quiz_Difficulties_Max_Order_By>;
  min?: Maybe<Course_Quiz_Difficulties_Min_Order_By>;
  stddev?: Maybe<Course_Quiz_Difficulties_Stddev_Order_By>;
  stddev_pop?: Maybe<Course_Quiz_Difficulties_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Course_Quiz_Difficulties_Stddev_Samp_Order_By>;
  sum?: Maybe<Course_Quiz_Difficulties_Sum_Order_By>;
  var_pop?: Maybe<Course_Quiz_Difficulties_Var_Pop_Order_By>;
  var_samp?: Maybe<Course_Quiz_Difficulties_Var_Samp_Order_By>;
  variance?: Maybe<Course_Quiz_Difficulties_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Course_Quiz_Difficulties_Avg_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Avg_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_quiz_difficulties". All fields are combined with a logical 'AND'. */
export type Course_Quiz_Difficulties_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Course_Quiz_Difficulties_Bool_Exp>>>;
  _not?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Course_Quiz_Difficulties_Bool_Exp>>>;
  course_id?: Maybe<Int_Comparison_Exp>;
  quiz_difficulties?: Maybe<_Int4_Comparison_Exp>;
};

/** aggregate max on columns */
export type Course_Quiz_Difficulties_Max_Fields = {
  course_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Max_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Quiz_Difficulties_Min_Fields = {
  course_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Min_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** ordering options when selecting data from "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Order_By = {
  course_id?: Maybe<Order_By>;
  quiz_difficulties?: Maybe<Order_By>;
};

/** select columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Select_Column = 
  /** column name */
  'course_id' |
  /** column name */
  'quiz_difficulties';

/** aggregate stddev on columns */
export type Course_Quiz_Difficulties_Stddev_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Stddev_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Quiz_Difficulties_Stddev_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Stddev_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Quiz_Difficulties_Stddev_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Stddev_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Quiz_Difficulties_Sum_Fields = {
  course_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Sum_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Course_Quiz_Difficulties_Var_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Var_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Quiz_Difficulties_Var_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Var_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Quiz_Difficulties_Variance_Fields = {
  course_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_quiz_difficulties" */
export type Course_Quiz_Difficulties_Variance_Order_By = {
  course_id?: Maybe<Order_By>;
};

/** columns and relationships of "course_translations" */
export type Course_Translations = {
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locales;
  locale_code: Locales_Enum;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "course_translations" */
export type Course_Translations_Aggregate = {
  aggregate?: Maybe<Course_Translations_Aggregate_Fields>;
  nodes: Array<Course_Translations>;
};

/** aggregate fields of "course_translations" */
export type Course_Translations_Aggregate_Fields = {
  avg?: Maybe<Course_Translations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Course_Translations_Max_Fields>;
  min?: Maybe<Course_Translations_Min_Fields>;
  stddev?: Maybe<Course_Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Course_Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Course_Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Course_Translations_Sum_Fields>;
  var_pop?: Maybe<Course_Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Course_Translations_Var_Samp_Fields>;
  variance?: Maybe<Course_Translations_Variance_Fields>;
};


/** aggregate fields of "course_translations" */
export type Course_Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Course_Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "course_translations" */
export type Course_Translations_Aggregate_Order_By = {
  avg?: Maybe<Course_Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Course_Translations_Max_Order_By>;
  min?: Maybe<Course_Translations_Min_Order_By>;
  stddev?: Maybe<Course_Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Course_Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Course_Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Course_Translations_Sum_Order_By>;
  var_pop?: Maybe<Course_Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Course_Translations_Var_Samp_Order_By>;
  variance?: Maybe<Course_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "course_translations" */
export type Course_Translations_Arr_Rel_Insert_Input = {
  data: Array<Course_Translations_Insert_Input>;
  on_conflict?: Maybe<Course_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Course_Translations_Avg_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "course_translations" */
export type Course_Translations_Avg_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "course_translations". All fields are combined with a logical 'AND'. */
export type Course_Translations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Course_Translations_Bool_Exp>>>;
  _not?: Maybe<Course_Translations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Course_Translations_Bool_Exp>>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<Locales_Bool_Exp>;
  locale_code?: Maybe<Locales_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "course_translations" */
export type Course_Translations_Constraint = 
  /** unique or primary key constraint */
  'course_translations_locale_code_course_id_key' |
  /** unique or primary key constraint */
  'course_translations_pkey';

/** input type for incrementing integer column in table "course_translations" */
export type Course_Translations_Inc_Input = {
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "course_translations" */
export type Course_Translations_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Locales_Obj_Rel_Insert_Input>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Course_Translations_Max_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "course_translations" */
export type Course_Translations_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Course_Translations_Min_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "course_translations" */
export type Course_Translations_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "course_translations" */
export type Course_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Course_Translations>;
};

/** input type for inserting object relation for remote table "course_translations" */
export type Course_Translations_Obj_Rel_Insert_Input = {
  data: Course_Translations_Insert_Input;
  on_conflict?: Maybe<Course_Translations_On_Conflict>;
};

/** on conflict condition type for table "course_translations" */
export type Course_Translations_On_Conflict = {
  constraint: Course_Translations_Constraint;
  update_columns: Array<Course_Translations_Update_Column>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "course_translations" */
export type Course_Translations_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locales_Order_By>;
  locale_code?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "course_translations" */
export type Course_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "course_translations" */
export type Course_Translations_Select_Column = 
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
export type Course_Translations_Set_Input = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Course_Translations_Stddev_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "course_translations" */
export type Course_Translations_Stddev_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Course_Translations_Stddev_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "course_translations" */
export type Course_Translations_Stddev_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Course_Translations_Stddev_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "course_translations" */
export type Course_Translations_Stddev_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Course_Translations_Sum_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "course_translations" */
export type Course_Translations_Sum_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "course_translations" */
export type Course_Translations_Update_Column = 
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
export type Course_Translations_Var_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "course_translations" */
export type Course_Translations_Var_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Course_Translations_Var_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "course_translations" */
export type Course_Translations_Var_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Course_Translations_Variance_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "course_translations" */
export type Course_Translations_Variance_Order_By = {
  course_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "courses" */
export type Courses = {
  /** An array relationship */
  chapters: Array<Chapters>;
  /** An aggregated array relationship */
  chapters_aggregate: Chapters_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  order: Scalars['Int'];
  /** An object relationship */
  quiz_difficulties?: Maybe<Course_Quiz_Difficulties>;
  /** An array relationship */
  quizzes: Array<Quizzes>;
  /** An aggregated array relationship */
  quizzes_aggregate: Quizzes_Aggregate;
  slug: Scalars['String'];
  /** An object relationship */
  topic: Topics;
  topic_id: Scalars['Int'];
  /** An object relationship */
  track: Tracks;
  track_id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Course_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: Course_Translations_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "courses" */
export type CoursesChaptersArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesChapters_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesQuizzesArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesQuizzes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTranslationsArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};


/** columns and relationships of "courses" */
export type CoursesTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};

/** aggregated selection of "courses" */
export type Courses_Aggregate = {
  aggregate?: Maybe<Courses_Aggregate_Fields>;
  nodes: Array<Courses>;
};

/** aggregate fields of "courses" */
export type Courses_Aggregate_Fields = {
  avg?: Maybe<Courses_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Courses_Max_Fields>;
  min?: Maybe<Courses_Min_Fields>;
  stddev?: Maybe<Courses_Stddev_Fields>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Fields>;
  sum?: Maybe<Courses_Sum_Fields>;
  var_pop?: Maybe<Courses_Var_Pop_Fields>;
  var_samp?: Maybe<Courses_Var_Samp_Fields>;
  variance?: Maybe<Courses_Variance_Fields>;
};


/** aggregate fields of "courses" */
export type Courses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Courses_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "courses" */
export type Courses_Aggregate_Order_By = {
  avg?: Maybe<Courses_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Courses_Max_Order_By>;
  min?: Maybe<Courses_Min_Order_By>;
  stddev?: Maybe<Courses_Stddev_Order_By>;
  stddev_pop?: Maybe<Courses_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Courses_Stddev_Samp_Order_By>;
  sum?: Maybe<Courses_Sum_Order_By>;
  var_pop?: Maybe<Courses_Var_Pop_Order_By>;
  var_samp?: Maybe<Courses_Var_Samp_Order_By>;
  variance?: Maybe<Courses_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "courses" */
export type Courses_Arr_Rel_Insert_Input = {
  data: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** aggregate avg on columns */
export type Courses_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "courses" */
export type Courses_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "courses". All fields are combined with a logical 'AND'. */
export type Courses_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  _not?: Maybe<Courses_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Courses_Bool_Exp>>>;
  chapters?: Maybe<Chapters_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  quiz_difficulties?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
  quizzes?: Maybe<Quizzes_Bool_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Topics_Bool_Exp>;
  topic_id?: Maybe<Int_Comparison_Exp>;
  track?: Maybe<Tracks_Bool_Exp>;
  track_id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Course_Translations_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "courses" */
export type Courses_Constraint = 
  /** unique or primary key constraint */
  'courses_pkey';

/** input type for incrementing integer column in table "courses" */
export type Courses_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "courses" */
export type Courses_Insert_Input = {
  chapters?: Maybe<Chapters_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  quizzes?: Maybe<Quizzes_Arr_Rel_Insert_Input>;
  slug?: Maybe<Scalars['String']>;
  topic?: Maybe<Topics_Obj_Rel_Insert_Input>;
  topic_id?: Maybe<Scalars['Int']>;
  track?: Maybe<Tracks_Obj_Rel_Insert_Input>;
  track_id?: Maybe<Scalars['Int']>;
  translations?: Maybe<Course_Translations_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Courses_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "courses" */
export type Courses_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Courses_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "courses" */
export type Courses_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "courses" */
export type Courses_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Courses>;
};

/** input type for inserting object relation for remote table "courses" */
export type Courses_Obj_Rel_Insert_Input = {
  data: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};

/** on conflict condition type for table "courses" */
export type Courses_On_Conflict = {
  constraint: Courses_Constraint;
  update_columns: Array<Courses_Update_Column>;
  where?: Maybe<Courses_Bool_Exp>;
};

/** ordering options when selecting data from "courses" */
export type Courses_Order_By = {
  chapters_aggregate?: Maybe<Chapters_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  quiz_difficulties?: Maybe<Course_Quiz_Difficulties_Order_By>;
  quizzes_aggregate?: Maybe<Quizzes_Aggregate_Order_By>;
  slug?: Maybe<Order_By>;
  topic?: Maybe<Topics_Order_By>;
  topic_id?: Maybe<Order_By>;
  track?: Maybe<Tracks_Order_By>;
  track_id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Course_Translations_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "courses" */
export type Courses_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "courses" */
export type Courses_Select_Column = 
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
export type Courses_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Courses_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "courses" */
export type Courses_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Courses_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "courses" */
export type Courses_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Courses_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "courses" */
export type Courses_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Courses_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "courses" */
export type Courses_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** update columns of table "courses" */
export type Courses_Update_Column = 
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
export type Courses_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "courses" */
export type Courses_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Courses_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "courses" */
export type Courses_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Courses_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "courses" */
export type Courses_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>;
  _eq?: Maybe<Scalars['jsonb']>;
  _gt?: Maybe<Scalars['jsonb']>;
  _gte?: Maybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>;
  _in?: Maybe<Array<Scalars['jsonb']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['jsonb']>;
  _lte?: Maybe<Scalars['jsonb']>;
  _neq?: Maybe<Scalars['jsonb']>;
  _nin?: Maybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "locales" */
export type Locales = {
  code: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "locales" */
export type Locales_Aggregate = {
  aggregate?: Maybe<Locales_Aggregate_Fields>;
  nodes: Array<Locales>;
};

/** aggregate fields of "locales" */
export type Locales_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Locales_Max_Fields>;
  min?: Maybe<Locales_Min_Fields>;
};


/** aggregate fields of "locales" */
export type Locales_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Locales_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "locales" */
export type Locales_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Locales_Max_Order_By>;
  min?: Maybe<Locales_Min_Order_By>;
};

/** input type for inserting array relation for remote table "locales" */
export type Locales_Arr_Rel_Insert_Input = {
  data: Array<Locales_Insert_Input>;
  on_conflict?: Maybe<Locales_On_Conflict>;
};

/** Boolean expression to filter rows from the table "locales". All fields are combined with a logical 'AND'. */
export type Locales_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Locales_Bool_Exp>>>;
  _not?: Maybe<Locales_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Locales_Bool_Exp>>>;
  code?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "locales" */
export type Locales_Constraint = 
  /** unique or primary key constraint */
  'locales_pkey';

export type Locales_Enum = 
  /** العربية */
  'ar' |
  /** Français */
  'fr';

/** expression to compare columns of type locales_enum. All fields are combined with logical 'AND'. */
export type Locales_Enum_Comparison_Exp = {
  _eq?: Maybe<Locales_Enum>;
  _in?: Maybe<Array<Locales_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Locales_Enum>;
  _nin?: Maybe<Array<Locales_Enum>>;
};

/** input type for inserting data into table "locales" */
export type Locales_Insert_Input = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Locales_Max_Fields = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "locales" */
export type Locales_Max_Order_By = {
  code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Locales_Min_Fields = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "locales" */
export type Locales_Min_Order_By = {
  code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "locales" */
export type Locales_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Locales>;
};

/** input type for inserting object relation for remote table "locales" */
export type Locales_Obj_Rel_Insert_Input = {
  data: Locales_Insert_Input;
  on_conflict?: Maybe<Locales_On_Conflict>;
};

/** on conflict condition type for table "locales" */
export type Locales_On_Conflict = {
  constraint: Locales_Constraint;
  update_columns: Array<Locales_Update_Column>;
  where?: Maybe<Locales_Bool_Exp>;
};

/** ordering options when selecting data from "locales" */
export type Locales_Order_By = {
  code?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "locales" */
export type Locales_Pk_Columns_Input = {
  code: Scalars['String'];
};

/** select columns of table "locales" */
export type Locales_Select_Column = 
  /** column name */
  'code' |
  /** column name */
  'name';

/** input type for updating data in table "locales" */
export type Locales_Set_Input = {
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** update columns of table "locales" */
export type Locales_Update_Column = 
  /** column name */
  'code' |
  /** column name */
  'name';

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "books" */
  delete_books?: Maybe<Books_Mutation_Response>;
  /** delete single row from the table: "books" */
  delete_books_by_pk?: Maybe<Books>;
  /** delete data from the table: "chapter_translations" */
  delete_chapter_translations?: Maybe<Chapter_Translations_Mutation_Response>;
  /** delete single row from the table: "chapter_translations" */
  delete_chapter_translations_by_pk?: Maybe<Chapter_Translations>;
  /** delete data from the table: "chapters" */
  delete_chapters?: Maybe<Chapters_Mutation_Response>;
  /** delete single row from the table: "chapters" */
  delete_chapters_by_pk?: Maybe<Chapters>;
  /** delete data from the table: "course_translations" */
  delete_course_translations?: Maybe<Course_Translations_Mutation_Response>;
  /** delete single row from the table: "course_translations" */
  delete_course_translations_by_pk?: Maybe<Course_Translations>;
  /** delete data from the table: "courses" */
  delete_courses?: Maybe<Courses_Mutation_Response>;
  /** delete single row from the table: "courses" */
  delete_courses_by_pk?: Maybe<Courses>;
  /** delete data from the table: "locales" */
  delete_locales?: Maybe<Locales_Mutation_Response>;
  /** delete single row from the table: "locales" */
  delete_locales_by_pk?: Maybe<Locales>;
  /** delete data from the table: "quiz_translations" */
  delete_quiz_translations?: Maybe<Quiz_Translations_Mutation_Response>;
  /** delete single row from the table: "quiz_translations" */
  delete_quiz_translations_by_pk?: Maybe<Quiz_Translations>;
  /** delete data from the table: "quiz_types" */
  delete_quiz_types?: Maybe<Quiz_Types_Mutation_Response>;
  /** delete single row from the table: "quiz_types" */
  delete_quiz_types_by_pk?: Maybe<Quiz_Types>;
  /** delete data from the table: "quizzes" */
  delete_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** delete single row from the table: "quizzes" */
  delete_quizzes_by_pk?: Maybe<Quizzes>;
  /** delete data from the table: "topic_translations" */
  delete_topic_translations?: Maybe<Topic_Translations_Mutation_Response>;
  /** delete single row from the table: "topic_translations" */
  delete_topic_translations_by_pk?: Maybe<Topic_Translations>;
  /** delete data from the table: "topics" */
  delete_topics?: Maybe<Topics_Mutation_Response>;
  /** delete single row from the table: "topics" */
  delete_topics_by_pk?: Maybe<Topics>;
  /** delete data from the table: "track_translations" */
  delete_track_translations?: Maybe<Track_Translations_Mutation_Response>;
  /** delete single row from the table: "track_translations" */
  delete_track_translations_by_pk?: Maybe<Track_Translations>;
  /** delete data from the table: "tracks" */
  delete_tracks?: Maybe<Tracks_Mutation_Response>;
  /** delete single row from the table: "tracks" */
  delete_tracks_by_pk?: Maybe<Tracks>;
  /** delete data from the table: "user_genders" */
  delete_user_genders?: Maybe<User_Genders_Mutation_Response>;
  /** delete single row from the table: "user_genders" */
  delete_user_genders_by_pk?: Maybe<User_Genders>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "books" */
  insert_books?: Maybe<Books_Mutation_Response>;
  /** insert a single row into the table: "books" */
  insert_books_one?: Maybe<Books>;
  /** insert data into the table: "chapter_translations" */
  insert_chapter_translations?: Maybe<Chapter_Translations_Mutation_Response>;
  /** insert a single row into the table: "chapter_translations" */
  insert_chapter_translations_one?: Maybe<Chapter_Translations>;
  /** insert data into the table: "chapters" */
  insert_chapters?: Maybe<Chapters_Mutation_Response>;
  /** insert a single row into the table: "chapters" */
  insert_chapters_one?: Maybe<Chapters>;
  /** insert data into the table: "course_translations" */
  insert_course_translations?: Maybe<Course_Translations_Mutation_Response>;
  /** insert a single row into the table: "course_translations" */
  insert_course_translations_one?: Maybe<Course_Translations>;
  /** insert data into the table: "courses" */
  insert_courses?: Maybe<Courses_Mutation_Response>;
  /** insert a single row into the table: "courses" */
  insert_courses_one?: Maybe<Courses>;
  /** insert data into the table: "locales" */
  insert_locales?: Maybe<Locales_Mutation_Response>;
  /** insert a single row into the table: "locales" */
  insert_locales_one?: Maybe<Locales>;
  /** insert data into the table: "quiz_translations" */
  insert_quiz_translations?: Maybe<Quiz_Translations_Mutation_Response>;
  /** insert a single row into the table: "quiz_translations" */
  insert_quiz_translations_one?: Maybe<Quiz_Translations>;
  /** insert data into the table: "quiz_types" */
  insert_quiz_types?: Maybe<Quiz_Types_Mutation_Response>;
  /** insert a single row into the table: "quiz_types" */
  insert_quiz_types_one?: Maybe<Quiz_Types>;
  /** insert data into the table: "quizzes" */
  insert_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** insert a single row into the table: "quizzes" */
  insert_quizzes_one?: Maybe<Quizzes>;
  /** insert data into the table: "topic_translations" */
  insert_topic_translations?: Maybe<Topic_Translations_Mutation_Response>;
  /** insert a single row into the table: "topic_translations" */
  insert_topic_translations_one?: Maybe<Topic_Translations>;
  /** insert data into the table: "topics" */
  insert_topics?: Maybe<Topics_Mutation_Response>;
  /** insert a single row into the table: "topics" */
  insert_topics_one?: Maybe<Topics>;
  /** insert data into the table: "track_translations" */
  insert_track_translations?: Maybe<Track_Translations_Mutation_Response>;
  /** insert a single row into the table: "track_translations" */
  insert_track_translations_one?: Maybe<Track_Translations>;
  /** insert data into the table: "tracks" */
  insert_tracks?: Maybe<Tracks_Mutation_Response>;
  /** insert a single row into the table: "tracks" */
  insert_tracks_one?: Maybe<Tracks>;
  /** insert data into the table: "user_genders" */
  insert_user_genders?: Maybe<User_Genders_Mutation_Response>;
  /** insert a single row into the table: "user_genders" */
  insert_user_genders_one?: Maybe<User_Genders>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "books" */
  update_books?: Maybe<Books_Mutation_Response>;
  /** update single row of the table: "books" */
  update_books_by_pk?: Maybe<Books>;
  /** update data of the table: "chapter_translations" */
  update_chapter_translations?: Maybe<Chapter_Translations_Mutation_Response>;
  /** update single row of the table: "chapter_translations" */
  update_chapter_translations_by_pk?: Maybe<Chapter_Translations>;
  /** update data of the table: "chapters" */
  update_chapters?: Maybe<Chapters_Mutation_Response>;
  /** update single row of the table: "chapters" */
  update_chapters_by_pk?: Maybe<Chapters>;
  /** update data of the table: "course_translations" */
  update_course_translations?: Maybe<Course_Translations_Mutation_Response>;
  /** update single row of the table: "course_translations" */
  update_course_translations_by_pk?: Maybe<Course_Translations>;
  /** update data of the table: "courses" */
  update_courses?: Maybe<Courses_Mutation_Response>;
  /** update single row of the table: "courses" */
  update_courses_by_pk?: Maybe<Courses>;
  /** update data of the table: "locales" */
  update_locales?: Maybe<Locales_Mutation_Response>;
  /** update single row of the table: "locales" */
  update_locales_by_pk?: Maybe<Locales>;
  /** update data of the table: "quiz_translations" */
  update_quiz_translations?: Maybe<Quiz_Translations_Mutation_Response>;
  /** update single row of the table: "quiz_translations" */
  update_quiz_translations_by_pk?: Maybe<Quiz_Translations>;
  /** update data of the table: "quiz_types" */
  update_quiz_types?: Maybe<Quiz_Types_Mutation_Response>;
  /** update single row of the table: "quiz_types" */
  update_quiz_types_by_pk?: Maybe<Quiz_Types>;
  /** update data of the table: "quizzes" */
  update_quizzes?: Maybe<Quizzes_Mutation_Response>;
  /** update single row of the table: "quizzes" */
  update_quizzes_by_pk?: Maybe<Quizzes>;
  /** update data of the table: "topic_translations" */
  update_topic_translations?: Maybe<Topic_Translations_Mutation_Response>;
  /** update single row of the table: "topic_translations" */
  update_topic_translations_by_pk?: Maybe<Topic_Translations>;
  /** update data of the table: "topics" */
  update_topics?: Maybe<Topics_Mutation_Response>;
  /** update single row of the table: "topics" */
  update_topics_by_pk?: Maybe<Topics>;
  /** update data of the table: "track_translations" */
  update_track_translations?: Maybe<Track_Translations_Mutation_Response>;
  /** update single row of the table: "track_translations" */
  update_track_translations_by_pk?: Maybe<Track_Translations>;
  /** update data of the table: "tracks" */
  update_tracks?: Maybe<Tracks_Mutation_Response>;
  /** update single row of the table: "tracks" */
  update_tracks_by_pk?: Maybe<Tracks>;
  /** update data of the table: "user_genders" */
  update_user_genders?: Maybe<User_Genders_Mutation_Response>;
  /** update single row of the table: "user_genders" */
  update_user_genders_by_pk?: Maybe<User_Genders>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_BooksArgs = {
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Books_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Chapter_TranslationsArgs = {
  where: Chapter_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chapter_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ChaptersArgs = {
  where: Chapters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Chapters_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Course_TranslationsArgs = {
  where: Course_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Course_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CoursesArgs = {
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Courses_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LocalesArgs = {
  where: Locales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Locales_By_PkArgs = {
  code: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Quiz_TranslationsArgs = {
  where: Quiz_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quiz_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Quiz_TypesArgs = {
  where: Quiz_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quiz_Types_By_PkArgs = {
  slug: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_QuizzesArgs = {
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Quizzes_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Topic_TranslationsArgs = {
  where: Topic_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topic_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TopicsArgs = {
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Topics_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Track_TranslationsArgs = {
  where: Track_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Track_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TracksArgs = {
  where: Tracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tracks_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_GendersArgs = {
  where: User_Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Genders_By_PkArgs = {
  letter: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_BooksArgs = {
  objects: Array<Books_Insert_Input>;
  on_conflict?: Maybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Books_OneArgs = {
  object: Books_Insert_Input;
  on_conflict?: Maybe<Books_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chapter_TranslationsArgs = {
  objects: Array<Chapter_Translations_Insert_Input>;
  on_conflict?: Maybe<Chapter_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chapter_Translations_OneArgs = {
  object: Chapter_Translations_Insert_Input;
  on_conflict?: Maybe<Chapter_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ChaptersArgs = {
  objects: Array<Chapters_Insert_Input>;
  on_conflict?: Maybe<Chapters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Chapters_OneArgs = {
  object: Chapters_Insert_Input;
  on_conflict?: Maybe<Chapters_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_TranslationsArgs = {
  objects: Array<Course_Translations_Insert_Input>;
  on_conflict?: Maybe<Course_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Course_Translations_OneArgs = {
  object: Course_Translations_Insert_Input;
  on_conflict?: Maybe<Course_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CoursesArgs = {
  objects: Array<Courses_Insert_Input>;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Courses_OneArgs = {
  object: Courses_Insert_Input;
  on_conflict?: Maybe<Courses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocalesArgs = {
  objects: Array<Locales_Insert_Input>;
  on_conflict?: Maybe<Locales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Locales_OneArgs = {
  object: Locales_Insert_Input;
  on_conflict?: Maybe<Locales_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_TranslationsArgs = {
  objects: Array<Quiz_Translations_Insert_Input>;
  on_conflict?: Maybe<Quiz_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_Translations_OneArgs = {
  object: Quiz_Translations_Insert_Input;
  on_conflict?: Maybe<Quiz_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_TypesArgs = {
  objects: Array<Quiz_Types_Insert_Input>;
  on_conflict?: Maybe<Quiz_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quiz_Types_OneArgs = {
  object: Quiz_Types_Insert_Input;
  on_conflict?: Maybe<Quiz_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_QuizzesArgs = {
  objects: Array<Quizzes_Insert_Input>;
  on_conflict?: Maybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Quizzes_OneArgs = {
  object: Quizzes_Insert_Input;
  on_conflict?: Maybe<Quizzes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topic_TranslationsArgs = {
  objects: Array<Topic_Translations_Insert_Input>;
  on_conflict?: Maybe<Topic_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topic_Translations_OneArgs = {
  object: Topic_Translations_Insert_Input;
  on_conflict?: Maybe<Topic_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TopicsArgs = {
  objects: Array<Topics_Insert_Input>;
  on_conflict?: Maybe<Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Topics_OneArgs = {
  object: Topics_Insert_Input;
  on_conflict?: Maybe<Topics_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Track_TranslationsArgs = {
  objects: Array<Track_Translations_Insert_Input>;
  on_conflict?: Maybe<Track_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Track_Translations_OneArgs = {
  object: Track_Translations_Insert_Input;
  on_conflict?: Maybe<Track_Translations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TracksArgs = {
  objects: Array<Tracks_Insert_Input>;
  on_conflict?: Maybe<Tracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tracks_OneArgs = {
  object: Tracks_Insert_Input;
  on_conflict?: Maybe<Tracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_GendersArgs = {
  objects: Array<User_Genders_Insert_Input>;
  on_conflict?: Maybe<User_Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Genders_OneArgs = {
  object: User_Genders_Insert_Input;
  on_conflict?: Maybe<User_Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BooksArgs = {
  _inc?: Maybe<Books_Inc_Input>;
  _set?: Maybe<Books_Set_Input>;
  where: Books_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Books_By_PkArgs = {
  _inc?: Maybe<Books_Inc_Input>;
  _set?: Maybe<Books_Set_Input>;
  pk_columns: Books_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Chapter_TranslationsArgs = {
  _inc?: Maybe<Chapter_Translations_Inc_Input>;
  _set?: Maybe<Chapter_Translations_Set_Input>;
  where: Chapter_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chapter_Translations_By_PkArgs = {
  _inc?: Maybe<Chapter_Translations_Inc_Input>;
  _set?: Maybe<Chapter_Translations_Set_Input>;
  pk_columns: Chapter_Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ChaptersArgs = {
  _inc?: Maybe<Chapters_Inc_Input>;
  _set?: Maybe<Chapters_Set_Input>;
  where: Chapters_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Chapters_By_PkArgs = {
  _inc?: Maybe<Chapters_Inc_Input>;
  _set?: Maybe<Chapters_Set_Input>;
  pk_columns: Chapters_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Course_TranslationsArgs = {
  _inc?: Maybe<Course_Translations_Inc_Input>;
  _set?: Maybe<Course_Translations_Set_Input>;
  where: Course_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Course_Translations_By_PkArgs = {
  _inc?: Maybe<Course_Translations_Inc_Input>;
  _set?: Maybe<Course_Translations_Set_Input>;
  pk_columns: Course_Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CoursesArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  where: Courses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Courses_By_PkArgs = {
  _inc?: Maybe<Courses_Inc_Input>;
  _set?: Maybe<Courses_Set_Input>;
  pk_columns: Courses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LocalesArgs = {
  _set?: Maybe<Locales_Set_Input>;
  where: Locales_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Locales_By_PkArgs = {
  _set?: Maybe<Locales_Set_Input>;
  pk_columns: Locales_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_TranslationsArgs = {
  _append?: Maybe<Quiz_Translations_Append_Input>;
  _delete_at_path?: Maybe<Quiz_Translations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Quiz_Translations_Delete_Elem_Input>;
  _delete_key?: Maybe<Quiz_Translations_Delete_Key_Input>;
  _inc?: Maybe<Quiz_Translations_Inc_Input>;
  _prepend?: Maybe<Quiz_Translations_Prepend_Input>;
  _set?: Maybe<Quiz_Translations_Set_Input>;
  where: Quiz_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_Translations_By_PkArgs = {
  _append?: Maybe<Quiz_Translations_Append_Input>;
  _delete_at_path?: Maybe<Quiz_Translations_Delete_At_Path_Input>;
  _delete_elem?: Maybe<Quiz_Translations_Delete_Elem_Input>;
  _delete_key?: Maybe<Quiz_Translations_Delete_Key_Input>;
  _inc?: Maybe<Quiz_Translations_Inc_Input>;
  _prepend?: Maybe<Quiz_Translations_Prepend_Input>;
  _set?: Maybe<Quiz_Translations_Set_Input>;
  pk_columns: Quiz_Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_TypesArgs = {
  _set?: Maybe<Quiz_Types_Set_Input>;
  where: Quiz_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quiz_Types_By_PkArgs = {
  _set?: Maybe<Quiz_Types_Set_Input>;
  pk_columns: Quiz_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_QuizzesArgs = {
  _inc?: Maybe<Quizzes_Inc_Input>;
  _set?: Maybe<Quizzes_Set_Input>;
  where: Quizzes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Quizzes_By_PkArgs = {
  _inc?: Maybe<Quizzes_Inc_Input>;
  _set?: Maybe<Quizzes_Set_Input>;
  pk_columns: Quizzes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Topic_TranslationsArgs = {
  _inc?: Maybe<Topic_Translations_Inc_Input>;
  _set?: Maybe<Topic_Translations_Set_Input>;
  where: Topic_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topic_Translations_By_PkArgs = {
  _inc?: Maybe<Topic_Translations_Inc_Input>;
  _set?: Maybe<Topic_Translations_Set_Input>;
  pk_columns: Topic_Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TopicsArgs = {
  _inc?: Maybe<Topics_Inc_Input>;
  _set?: Maybe<Topics_Set_Input>;
  where: Topics_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Topics_By_PkArgs = {
  _inc?: Maybe<Topics_Inc_Input>;
  _set?: Maybe<Topics_Set_Input>;
  pk_columns: Topics_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Track_TranslationsArgs = {
  _inc?: Maybe<Track_Translations_Inc_Input>;
  _set?: Maybe<Track_Translations_Set_Input>;
  where: Track_Translations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Track_Translations_By_PkArgs = {
  _inc?: Maybe<Track_Translations_Inc_Input>;
  _set?: Maybe<Track_Translations_Set_Input>;
  pk_columns: Track_Translations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TracksArgs = {
  _inc?: Maybe<Tracks_Inc_Input>;
  _set?: Maybe<Tracks_Set_Input>;
  where: Tracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tracks_By_PkArgs = {
  _inc?: Maybe<Tracks_Inc_Input>;
  _set?: Maybe<Tracks_Set_Input>;
  pk_columns: Tracks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_GendersArgs = {
  _set?: Maybe<User_Genders_Set_Input>;
  where: User_Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Genders_By_PkArgs = {
  _set?: Maybe<User_Genders_Set_Input>;
  pk_columns: User_Genders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export type Order_By = 
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

/** query root */
export type Query_Root = {
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table: "chapter_translations" */
  chapter_translations: Array<Chapter_Translations>;
  /** fetch aggregated fields from the table: "chapter_translations" */
  chapter_translations_aggregate: Chapter_Translations_Aggregate;
  /** fetch data from the table: "chapter_translations" using primary key columns */
  chapter_translations_by_pk?: Maybe<Chapter_Translations>;
  /** fetch data from the table: "chapters" */
  chapters: Array<Chapters>;
  /** fetch aggregated fields from the table: "chapters" */
  chapters_aggregate: Chapters_Aggregate;
  /** fetch data from the table: "chapters" using primary key columns */
  chapters_by_pk?: Maybe<Chapters>;
  /** fetch data from the table: "course_quiz_difficulties" */
  course_quiz_difficulties: Array<Course_Quiz_Difficulties>;
  /** fetch aggregated fields from the table: "course_quiz_difficulties" */
  course_quiz_difficulties_aggregate: Course_Quiz_Difficulties_Aggregate;
  /** fetch data from the table: "course_translations" */
  course_translations: Array<Course_Translations>;
  /** fetch aggregated fields from the table: "course_translations" */
  course_translations_aggregate: Course_Translations_Aggregate;
  /** fetch data from the table: "course_translations" using primary key columns */
  course_translations_by_pk?: Maybe<Course_Translations>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "locales" */
  locales: Array<Locales>;
  /** fetch aggregated fields from the table: "locales" */
  locales_aggregate: Locales_Aggregate;
  /** fetch data from the table: "locales" using primary key columns */
  locales_by_pk?: Maybe<Locales>;
  /** fetch data from the table: "quiz_translations" */
  quiz_translations: Array<Quiz_Translations>;
  /** fetch aggregated fields from the table: "quiz_translations" */
  quiz_translations_aggregate: Quiz_Translations_Aggregate;
  /** fetch data from the table: "quiz_translations" using primary key columns */
  quiz_translations_by_pk?: Maybe<Quiz_Translations>;
  /** fetch data from the table: "quiz_types" */
  quiz_types: Array<Quiz_Types>;
  /** fetch aggregated fields from the table: "quiz_types" */
  quiz_types_aggregate: Quiz_Types_Aggregate;
  /** fetch data from the table: "quiz_types" using primary key columns */
  quiz_types_by_pk?: Maybe<Quiz_Types>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
  /** fetch data from the table: "topic_translations" */
  topic_translations: Array<Topic_Translations>;
  /** fetch aggregated fields from the table: "topic_translations" */
  topic_translations_aggregate: Topic_Translations_Aggregate;
  /** fetch data from the table: "topic_translations" using primary key columns */
  topic_translations_by_pk?: Maybe<Topic_Translations>;
  /** fetch data from the table: "topics" */
  topics: Array<Topics>;
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table: "track_translations" */
  track_translations: Array<Track_Translations>;
  /** fetch aggregated fields from the table: "track_translations" */
  track_translations_aggregate: Track_Translations_Aggregate;
  /** fetch data from the table: "track_translations" using primary key columns */
  track_translations_by_pk?: Maybe<Track_Translations>;
  /** fetch data from the table: "tracks" */
  tracks: Array<Tracks>;
  /** fetch aggregated fields from the table: "tracks" */
  tracks_aggregate: Tracks_Aggregate;
  /** fetch data from the table: "tracks" using primary key columns */
  tracks_by_pk?: Maybe<Tracks>;
  /** fetch data from the table: "user_genders" */
  user_genders: Array<User_Genders>;
  /** fetch aggregated fields from the table: "user_genders" */
  user_genders_aggregate: User_Genders_Aggregate;
  /** fetch data from the table: "user_genders" using primary key columns */
  user_genders_by_pk?: Maybe<User_Genders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** query root */
export type Query_RootBooksArgs = {
  distinct_on?: Maybe<Array<Books_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Books_Order_By>>;
  where?: Maybe<Books_Bool_Exp>;
};


/** query root */
export type Query_RootBooks_AggregateArgs = {
  distinct_on?: Maybe<Array<Books_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Books_Order_By>>;
  where?: Maybe<Books_Bool_Exp>;
};


/** query root */
export type Query_RootBooks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootChapter_TranslationsArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootChapter_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootChapter_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootChaptersArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** query root */
export type Query_RootChapters_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** query root */
export type Query_RootChapters_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCourse_Quiz_DifficultiesArgs = {
  distinct_on?: Maybe<Array<Course_Quiz_Difficulties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Quiz_Difficulties_Order_By>>;
  where?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Quiz_Difficulties_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Quiz_Difficulties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Quiz_Difficulties_Order_By>>;
  where?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_TranslationsArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootCourse_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** query root */
export type Query_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** query root */
export type Query_RootCourses_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootLocalesArgs = {
  distinct_on?: Maybe<Array<Locales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locales_Order_By>>;
  where?: Maybe<Locales_Bool_Exp>;
};


/** query root */
export type Query_RootLocales_AggregateArgs = {
  distinct_on?: Maybe<Array<Locales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locales_Order_By>>;
  where?: Maybe<Locales_Bool_Exp>;
};


/** query root */
export type Query_RootLocales_By_PkArgs = {
  code: Scalars['String'];
};


/** query root */
export type Query_RootQuiz_TranslationsArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootQuiz_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootQuiz_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootQuiz_TypesArgs = {
  distinct_on?: Maybe<Array<Quiz_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Types_Order_By>>;
  where?: Maybe<Quiz_Types_Bool_Exp>;
};


/** query root */
export type Query_RootQuiz_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Types_Order_By>>;
  where?: Maybe<Quiz_Types_Bool_Exp>;
};


/** query root */
export type Query_RootQuiz_Types_By_PkArgs = {
  slug: Scalars['String'];
};


/** query root */
export type Query_RootQuizzesArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** query root */
export type Query_RootQuizzes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** query root */
export type Query_RootQuizzes_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTopic_TranslationsArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootTopic_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootTopic_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTopicsArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topics_Order_By>>;
  where?: Maybe<Topics_Bool_Exp>;
};


/** query root */
export type Query_RootTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topics_Order_By>>;
  where?: Maybe<Topics_Bool_Exp>;
};


/** query root */
export type Query_RootTopics_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTrack_TranslationsArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootTrack_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};


/** query root */
export type Query_RootTrack_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootTracksArgs = {
  distinct_on?: Maybe<Array<Tracks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tracks_Order_By>>;
  where?: Maybe<Tracks_Bool_Exp>;
};


/** query root */
export type Query_RootTracks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tracks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tracks_Order_By>>;
  where?: Maybe<Tracks_Bool_Exp>;
};


/** query root */
export type Query_RootTracks_By_PkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type Query_RootUser_GendersArgs = {
  distinct_on?: Maybe<Array<User_Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Genders_Order_By>>;
  where?: Maybe<User_Genders_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Genders_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Genders_Order_By>>;
  where?: Maybe<User_Genders_Bool_Exp>;
};


/** query root */
export type Query_RootUser_Genders_By_PkArgs = {
  letter: Scalars['String'];
};


/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "quiz_translations" */
export type Quiz_Translations = {
  created_at: Scalars['timestamptz'];
  data: Scalars['jsonb'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locales;
  locale_code: Locales_Enum;
  /** An object relationship */
  quiz: Quizzes;
  quiz_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "quiz_translations" */
export type Quiz_TranslationsDataArgs = {
  path?: Maybe<Scalars['String']>;
};

/** aggregated selection of "quiz_translations" */
export type Quiz_Translations_Aggregate = {
  aggregate?: Maybe<Quiz_Translations_Aggregate_Fields>;
  nodes: Array<Quiz_Translations>;
};

/** aggregate fields of "quiz_translations" */
export type Quiz_Translations_Aggregate_Fields = {
  avg?: Maybe<Quiz_Translations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quiz_Translations_Max_Fields>;
  min?: Maybe<Quiz_Translations_Min_Fields>;
  stddev?: Maybe<Quiz_Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Quiz_Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quiz_Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Quiz_Translations_Sum_Fields>;
  var_pop?: Maybe<Quiz_Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Quiz_Translations_Var_Samp_Fields>;
  variance?: Maybe<Quiz_Translations_Variance_Fields>;
};


/** aggregate fields of "quiz_translations" */
export type Quiz_Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quiz_Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz_translations" */
export type Quiz_Translations_Aggregate_Order_By = {
  avg?: Maybe<Quiz_Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Quiz_Translations_Max_Order_By>;
  min?: Maybe<Quiz_Translations_Min_Order_By>;
  stddev?: Maybe<Quiz_Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Quiz_Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Quiz_Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Quiz_Translations_Sum_Order_By>;
  var_pop?: Maybe<Quiz_Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Quiz_Translations_Var_Samp_Order_By>;
  variance?: Maybe<Quiz_Translations_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Quiz_Translations_Append_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "quiz_translations" */
export type Quiz_Translations_Arr_Rel_Insert_Input = {
  data: Array<Quiz_Translations_Insert_Input>;
  on_conflict?: Maybe<Quiz_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Quiz_Translations_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quiz_translations" */
export type Quiz_Translations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quiz_translations". All fields are combined with a logical 'AND'. */
export type Quiz_Translations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Quiz_Translations_Bool_Exp>>>;
  _not?: Maybe<Quiz_Translations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quiz_Translations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  data?: Maybe<Jsonb_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<Locales_Bool_Exp>;
  locale_code?: Maybe<Locales_Enum_Comparison_Exp>;
  quiz?: Maybe<Quizzes_Bool_Exp>;
  quiz_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_translations" */
export type Quiz_Translations_Constraint = 
  /** unique or primary key constraint */
  'quiz_translations_pkey' |
  /** unique or primary key constraint */
  'quiz_translations_quiz_id_locale_code_key';

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Quiz_Translations_Delete_At_Path_Input = {
  data?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type Quiz_Translations_Delete_Elem_Input = {
  data?: Maybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Quiz_Translations_Delete_Key_Input = {
  data?: Maybe<Scalars['String']>;
};

/** input type for incrementing integer column in table "quiz_translations" */
export type Quiz_Translations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  quiz_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quiz_translations" */
export type Quiz_Translations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Locales_Obj_Rel_Insert_Input>;
  locale_code?: Maybe<Locales_Enum>;
  quiz?: Maybe<Quizzes_Obj_Rel_Insert_Input>;
  quiz_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quiz_Translations_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quiz_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quiz_translations" */
export type Quiz_Translations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quiz_Translations_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  quiz_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quiz_translations" */
export type Quiz_Translations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "quiz_translations" */
export type Quiz_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quiz_Translations>;
};

/** input type for inserting object relation for remote table "quiz_translations" */
export type Quiz_Translations_Obj_Rel_Insert_Input = {
  data: Quiz_Translations_Insert_Input;
  on_conflict?: Maybe<Quiz_Translations_On_Conflict>;
};

/** on conflict condition type for table "quiz_translations" */
export type Quiz_Translations_On_Conflict = {
  constraint: Quiz_Translations_Constraint;
  update_columns: Array<Quiz_Translations_Update_Column>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "quiz_translations" */
export type Quiz_Translations_Order_By = {
  created_at?: Maybe<Order_By>;
  data?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locales_Order_By>;
  locale_code?: Maybe<Order_By>;
  quiz?: Maybe<Quizzes_Order_By>;
  quiz_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "quiz_translations" */
export type Quiz_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Quiz_Translations_Prepend_Input = {
  data?: Maybe<Scalars['jsonb']>;
};

/** select columns of table "quiz_translations" */
export type Quiz_Translations_Select_Column = 
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
export type Quiz_Translations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  data?: Maybe<Scalars['jsonb']>;
  id?: Maybe<Scalars['Int']>;
  locale_code?: Maybe<Locales_Enum>;
  quiz_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quiz_Translations_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quiz_translations" */
export type Quiz_Translations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quiz_Translations_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quiz_translations" */
export type Quiz_Translations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quiz_Translations_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quiz_translations" */
export type Quiz_Translations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quiz_Translations_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  quiz_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quiz_translations" */
export type Quiz_Translations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** update columns of table "quiz_translations" */
export type Quiz_Translations_Update_Column = 
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
export type Quiz_Translations_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quiz_translations" */
export type Quiz_Translations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quiz_Translations_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quiz_translations" */
export type Quiz_Translations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quiz_Translations_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  quiz_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quiz_translations" */
export type Quiz_Translations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  quiz_id?: Maybe<Order_By>;
};

/** columns and relationships of "quiz_types" */
export type Quiz_Types = {
  name: Scalars['String'];
  slug: Scalars['String'];
};

/** aggregated selection of "quiz_types" */
export type Quiz_Types_Aggregate = {
  aggregate?: Maybe<Quiz_Types_Aggregate_Fields>;
  nodes: Array<Quiz_Types>;
};

/** aggregate fields of "quiz_types" */
export type Quiz_Types_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quiz_Types_Max_Fields>;
  min?: Maybe<Quiz_Types_Min_Fields>;
};


/** aggregate fields of "quiz_types" */
export type Quiz_Types_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quiz_Types_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quiz_types" */
export type Quiz_Types_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Quiz_Types_Max_Order_By>;
  min?: Maybe<Quiz_Types_Min_Order_By>;
};

/** input type for inserting array relation for remote table "quiz_types" */
export type Quiz_Types_Arr_Rel_Insert_Input = {
  data: Array<Quiz_Types_Insert_Input>;
  on_conflict?: Maybe<Quiz_Types_On_Conflict>;
};

/** Boolean expression to filter rows from the table "quiz_types". All fields are combined with a logical 'AND'. */
export type Quiz_Types_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Quiz_Types_Bool_Exp>>>;
  _not?: Maybe<Quiz_Types_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quiz_Types_Bool_Exp>>>;
  name?: Maybe<String_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "quiz_types" */
export type Quiz_Types_Constraint = 
  /** unique or primary key constraint */
  'quiz_types_pkey';

export type Quiz_Types_Enum = 
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
export type Quiz_Types_Enum_Comparison_Exp = {
  _eq?: Maybe<Quiz_Types_Enum>;
  _in?: Maybe<Array<Quiz_Types_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Quiz_Types_Enum>;
  _nin?: Maybe<Array<Quiz_Types_Enum>>;
};

/** input type for inserting data into table "quiz_types" */
export type Quiz_Types_Insert_Input = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Quiz_Types_Max_Fields = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "quiz_types" */
export type Quiz_Types_Max_Order_By = {
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quiz_Types_Min_Fields = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "quiz_types" */
export type Quiz_Types_Min_Order_By = {
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** response of any mutation on the table "quiz_types" */
export type Quiz_Types_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quiz_Types>;
};

/** input type for inserting object relation for remote table "quiz_types" */
export type Quiz_Types_Obj_Rel_Insert_Input = {
  data: Quiz_Types_Insert_Input;
  on_conflict?: Maybe<Quiz_Types_On_Conflict>;
};

/** on conflict condition type for table "quiz_types" */
export type Quiz_Types_On_Conflict = {
  constraint: Quiz_Types_Constraint;
  update_columns: Array<Quiz_Types_Update_Column>;
  where?: Maybe<Quiz_Types_Bool_Exp>;
};

/** ordering options when selecting data from "quiz_types" */
export type Quiz_Types_Order_By = {
  name?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
};

/** primary key columns input for table: "quiz_types" */
export type Quiz_Types_Pk_Columns_Input = {
  slug: Scalars['String'];
};

/** select columns of table "quiz_types" */
export type Quiz_Types_Select_Column = 
  /** column name */
  'name' |
  /** column name */
  'slug';

/** input type for updating data in table "quiz_types" */
export type Quiz_Types_Set_Input = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** update columns of table "quiz_types" */
export type Quiz_Types_Update_Column = 
  /** column name */
  'name' |
  /** column name */
  'slug';

/** columns and relationships of "quizzes" */
export type Quizzes = {
  /** An object relationship */
  course: Courses;
  course_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  difficulty: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  translations: Array<Quiz_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: Quiz_Translations_Aggregate;
  /** An object relationship */
  type: Quiz_Types;
  type_slug: Quiz_Types_Enum;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "quizzes" */
export type QuizzesTranslationsArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};


/** columns and relationships of "quizzes" */
export type QuizzesTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};

/** aggregated selection of "quizzes" */
export type Quizzes_Aggregate = {
  aggregate?: Maybe<Quizzes_Aggregate_Fields>;
  nodes: Array<Quizzes>;
};

/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_Fields = {
  avg?: Maybe<Quizzes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Quizzes_Max_Fields>;
  min?: Maybe<Quizzes_Min_Fields>;
  stddev?: Maybe<Quizzes_Stddev_Fields>;
  stddev_pop?: Maybe<Quizzes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Quizzes_Stddev_Samp_Fields>;
  sum?: Maybe<Quizzes_Sum_Fields>;
  var_pop?: Maybe<Quizzes_Var_Pop_Fields>;
  var_samp?: Maybe<Quizzes_Var_Samp_Fields>;
  variance?: Maybe<Quizzes_Variance_Fields>;
};


/** aggregate fields of "quizzes" */
export type Quizzes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Quizzes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "quizzes" */
export type Quizzes_Aggregate_Order_By = {
  avg?: Maybe<Quizzes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Quizzes_Max_Order_By>;
  min?: Maybe<Quizzes_Min_Order_By>;
  stddev?: Maybe<Quizzes_Stddev_Order_By>;
  stddev_pop?: Maybe<Quizzes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Quizzes_Stddev_Samp_Order_By>;
  sum?: Maybe<Quizzes_Sum_Order_By>;
  var_pop?: Maybe<Quizzes_Var_Pop_Order_By>;
  var_samp?: Maybe<Quizzes_Var_Samp_Order_By>;
  variance?: Maybe<Quizzes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "quizzes" */
export type Quizzes_Arr_Rel_Insert_Input = {
  data: Array<Quizzes_Insert_Input>;
  on_conflict?: Maybe<Quizzes_On_Conflict>;
};

/** aggregate avg on columns */
export type Quizzes_Avg_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "quizzes" */
export type Quizzes_Avg_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "quizzes". All fields are combined with a logical 'AND'. */
export type Quizzes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Quizzes_Bool_Exp>>>;
  _not?: Maybe<Quizzes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Quizzes_Bool_Exp>>>;
  course?: Maybe<Courses_Bool_Exp>;
  course_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  difficulty?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  translations?: Maybe<Quiz_Translations_Bool_Exp>;
  type?: Maybe<Quiz_Types_Bool_Exp>;
  type_slug?: Maybe<Quiz_Types_Enum_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "quizzes" */
export type Quizzes_Constraint = 
  /** unique or primary key constraint */
  'quizzes_pkey';

/** input type for incrementing integer column in table "quizzes" */
export type Quizzes_Inc_Input = {
  course_id?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "quizzes" */
export type Quizzes_Insert_Input = {
  course?: Maybe<Courses_Obj_Rel_Insert_Input>;
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  translations?: Maybe<Quiz_Translations_Arr_Rel_Insert_Input>;
  type?: Maybe<Quiz_Types_Obj_Rel_Insert_Input>;
  type_slug?: Maybe<Quiz_Types_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Quizzes_Max_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "quizzes" */
export type Quizzes_Max_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Quizzes_Min_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "quizzes" */
export type Quizzes_Min_Order_By = {
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "quizzes" */
export type Quizzes_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Quizzes>;
};

/** input type for inserting object relation for remote table "quizzes" */
export type Quizzes_Obj_Rel_Insert_Input = {
  data: Quizzes_Insert_Input;
  on_conflict?: Maybe<Quizzes_On_Conflict>;
};

/** on conflict condition type for table "quizzes" */
export type Quizzes_On_Conflict = {
  constraint: Quizzes_Constraint;
  update_columns: Array<Quizzes_Update_Column>;
  where?: Maybe<Quizzes_Bool_Exp>;
};

/** ordering options when selecting data from "quizzes" */
export type Quizzes_Order_By = {
  course?: Maybe<Courses_Order_By>;
  course_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Quiz_Translations_Aggregate_Order_By>;
  type?: Maybe<Quiz_Types_Order_By>;
  type_slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "quizzes" */
export type Quizzes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "quizzes" */
export type Quizzes_Select_Column = 
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
export type Quizzes_Set_Input = {
  course_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  type_slug?: Maybe<Quiz_Types_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Quizzes_Stddev_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "quizzes" */
export type Quizzes_Stddev_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Quizzes_Stddev_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "quizzes" */
export type Quizzes_Stddev_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Quizzes_Stddev_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "quizzes" */
export type Quizzes_Stddev_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Quizzes_Sum_Fields = {
  course_id?: Maybe<Scalars['Int']>;
  difficulty?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "quizzes" */
export type Quizzes_Sum_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "quizzes" */
export type Quizzes_Update_Column = 
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
export type Quizzes_Var_Pop_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "quizzes" */
export type Quizzes_Var_Pop_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Quizzes_Var_Samp_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "quizzes" */
export type Quizzes_Var_Samp_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Quizzes_Variance_Fields = {
  course_id?: Maybe<Scalars['Float']>;
  difficulty?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "quizzes" */
export type Quizzes_Variance_Order_By = {
  course_id?: Maybe<Order_By>;
  difficulty?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** subscription root */
export type Subscription_Root = {
  /** fetch data from the table: "books" */
  books: Array<Books>;
  /** fetch aggregated fields from the table: "books" */
  books_aggregate: Books_Aggregate;
  /** fetch data from the table: "books" using primary key columns */
  books_by_pk?: Maybe<Books>;
  /** fetch data from the table: "chapter_translations" */
  chapter_translations: Array<Chapter_Translations>;
  /** fetch aggregated fields from the table: "chapter_translations" */
  chapter_translations_aggregate: Chapter_Translations_Aggregate;
  /** fetch data from the table: "chapter_translations" using primary key columns */
  chapter_translations_by_pk?: Maybe<Chapter_Translations>;
  /** fetch data from the table: "chapters" */
  chapters: Array<Chapters>;
  /** fetch aggregated fields from the table: "chapters" */
  chapters_aggregate: Chapters_Aggregate;
  /** fetch data from the table: "chapters" using primary key columns */
  chapters_by_pk?: Maybe<Chapters>;
  /** fetch data from the table: "course_quiz_difficulties" */
  course_quiz_difficulties: Array<Course_Quiz_Difficulties>;
  /** fetch aggregated fields from the table: "course_quiz_difficulties" */
  course_quiz_difficulties_aggregate: Course_Quiz_Difficulties_Aggregate;
  /** fetch data from the table: "course_translations" */
  course_translations: Array<Course_Translations>;
  /** fetch aggregated fields from the table: "course_translations" */
  course_translations_aggregate: Course_Translations_Aggregate;
  /** fetch data from the table: "course_translations" using primary key columns */
  course_translations_by_pk?: Maybe<Course_Translations>;
  /** fetch data from the table: "courses" */
  courses: Array<Courses>;
  /** fetch aggregated fields from the table: "courses" */
  courses_aggregate: Courses_Aggregate;
  /** fetch data from the table: "courses" using primary key columns */
  courses_by_pk?: Maybe<Courses>;
  /** fetch data from the table: "locales" */
  locales: Array<Locales>;
  /** fetch aggregated fields from the table: "locales" */
  locales_aggregate: Locales_Aggregate;
  /** fetch data from the table: "locales" using primary key columns */
  locales_by_pk?: Maybe<Locales>;
  /** fetch data from the table: "quiz_translations" */
  quiz_translations: Array<Quiz_Translations>;
  /** fetch aggregated fields from the table: "quiz_translations" */
  quiz_translations_aggregate: Quiz_Translations_Aggregate;
  /** fetch data from the table: "quiz_translations" using primary key columns */
  quiz_translations_by_pk?: Maybe<Quiz_Translations>;
  /** fetch data from the table: "quiz_types" */
  quiz_types: Array<Quiz_Types>;
  /** fetch aggregated fields from the table: "quiz_types" */
  quiz_types_aggregate: Quiz_Types_Aggregate;
  /** fetch data from the table: "quiz_types" using primary key columns */
  quiz_types_by_pk?: Maybe<Quiz_Types>;
  /** fetch data from the table: "quizzes" */
  quizzes: Array<Quizzes>;
  /** fetch aggregated fields from the table: "quizzes" */
  quizzes_aggregate: Quizzes_Aggregate;
  /** fetch data from the table: "quizzes" using primary key columns */
  quizzes_by_pk?: Maybe<Quizzes>;
  /** fetch data from the table: "topic_translations" */
  topic_translations: Array<Topic_Translations>;
  /** fetch aggregated fields from the table: "topic_translations" */
  topic_translations_aggregate: Topic_Translations_Aggregate;
  /** fetch data from the table: "topic_translations" using primary key columns */
  topic_translations_by_pk?: Maybe<Topic_Translations>;
  /** fetch data from the table: "topics" */
  topics: Array<Topics>;
  /** fetch aggregated fields from the table: "topics" */
  topics_aggregate: Topics_Aggregate;
  /** fetch data from the table: "topics" using primary key columns */
  topics_by_pk?: Maybe<Topics>;
  /** fetch data from the table: "track_translations" */
  track_translations: Array<Track_Translations>;
  /** fetch aggregated fields from the table: "track_translations" */
  track_translations_aggregate: Track_Translations_Aggregate;
  /** fetch data from the table: "track_translations" using primary key columns */
  track_translations_by_pk?: Maybe<Track_Translations>;
  /** fetch data from the table: "tracks" */
  tracks: Array<Tracks>;
  /** fetch aggregated fields from the table: "tracks" */
  tracks_aggregate: Tracks_Aggregate;
  /** fetch data from the table: "tracks" using primary key columns */
  tracks_by_pk?: Maybe<Tracks>;
  /** fetch data from the table: "user_genders" */
  user_genders: Array<User_Genders>;
  /** fetch aggregated fields from the table: "user_genders" */
  user_genders_aggregate: User_Genders_Aggregate;
  /** fetch data from the table: "user_genders" using primary key columns */
  user_genders_by_pk?: Maybe<User_Genders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


/** subscription root */
export type Subscription_RootBooksArgs = {
  distinct_on?: Maybe<Array<Books_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Books_Order_By>>;
  where?: Maybe<Books_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBooks_AggregateArgs = {
  distinct_on?: Maybe<Array<Books_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Books_Order_By>>;
  where?: Maybe<Books_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootBooks_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootChapter_TranslationsArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChapter_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapter_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapter_Translations_Order_By>>;
  where?: Maybe<Chapter_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChapter_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootChaptersArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChapters_AggregateArgs = {
  distinct_on?: Maybe<Array<Chapters_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Chapters_Order_By>>;
  where?: Maybe<Chapters_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootChapters_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCourse_Quiz_DifficultiesArgs = {
  distinct_on?: Maybe<Array<Course_Quiz_Difficulties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Quiz_Difficulties_Order_By>>;
  where?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Quiz_Difficulties_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Quiz_Difficulties_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Quiz_Difficulties_Order_By>>;
  where?: Maybe<Course_Quiz_Difficulties_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_TranslationsArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Course_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Course_Translations_Order_By>>;
  where?: Maybe<Course_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourse_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCourses_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootLocalesArgs = {
  distinct_on?: Maybe<Array<Locales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locales_Order_By>>;
  where?: Maybe<Locales_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocales_AggregateArgs = {
  distinct_on?: Maybe<Array<Locales_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Locales_Order_By>>;
  where?: Maybe<Locales_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootLocales_By_PkArgs = {
  code: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuiz_TranslationsArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuiz_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Translations_Order_By>>;
  where?: Maybe<Quiz_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuiz_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootQuiz_TypesArgs = {
  distinct_on?: Maybe<Array<Quiz_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Types_Order_By>>;
  where?: Maybe<Quiz_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuiz_Types_AggregateArgs = {
  distinct_on?: Maybe<Array<Quiz_Types_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quiz_Types_Order_By>>;
  where?: Maybe<Quiz_Types_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuiz_Types_By_PkArgs = {
  slug: Scalars['String'];
};


/** subscription root */
export type Subscription_RootQuizzesArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuizzes_AggregateArgs = {
  distinct_on?: Maybe<Array<Quizzes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Quizzes_Order_By>>;
  where?: Maybe<Quizzes_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootQuizzes_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTopic_TranslationsArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopic_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopic_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTopicsArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topics_Order_By>>;
  where?: Maybe<Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopics_AggregateArgs = {
  distinct_on?: Maybe<Array<Topics_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topics_Order_By>>;
  where?: Maybe<Topics_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTopics_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTrack_TranslationsArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrack_Translations_AggregateArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTrack_Translations_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTracksArgs = {
  distinct_on?: Maybe<Array<Tracks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tracks_Order_By>>;
  where?: Maybe<Tracks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTracks_AggregateArgs = {
  distinct_on?: Maybe<Array<Tracks_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tracks_Order_By>>;
  where?: Maybe<Tracks_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTracks_By_PkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootUser_GendersArgs = {
  distinct_on?: Maybe<Array<User_Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Genders_Order_By>>;
  where?: Maybe<User_Genders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Genders_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Genders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Genders_Order_By>>;
  where?: Maybe<User_Genders_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUser_Genders_By_PkArgs = {
  letter: Scalars['String'];
};


/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "topic_translations" */
export type Topic_Translations = {
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locales;
  locale_code: Locales_Enum;
  title: Scalars['String'];
  /** An object relationship */
  topic: Topics;
  topic_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "topic_translations" */
export type Topic_Translations_Aggregate = {
  aggregate?: Maybe<Topic_Translations_Aggregate_Fields>;
  nodes: Array<Topic_Translations>;
};

/** aggregate fields of "topic_translations" */
export type Topic_Translations_Aggregate_Fields = {
  avg?: Maybe<Topic_Translations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Topic_Translations_Max_Fields>;
  min?: Maybe<Topic_Translations_Min_Fields>;
  stddev?: Maybe<Topic_Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Topic_Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topic_Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Topic_Translations_Sum_Fields>;
  var_pop?: Maybe<Topic_Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Topic_Translations_Var_Samp_Fields>;
  variance?: Maybe<Topic_Translations_Variance_Fields>;
};


/** aggregate fields of "topic_translations" */
export type Topic_Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Topic_Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topic_translations" */
export type Topic_Translations_Aggregate_Order_By = {
  avg?: Maybe<Topic_Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Topic_Translations_Max_Order_By>;
  min?: Maybe<Topic_Translations_Min_Order_By>;
  stddev?: Maybe<Topic_Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Topic_Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Topic_Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Topic_Translations_Sum_Order_By>;
  var_pop?: Maybe<Topic_Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Topic_Translations_Var_Samp_Order_By>;
  variance?: Maybe<Topic_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "topic_translations" */
export type Topic_Translations_Arr_Rel_Insert_Input = {
  data: Array<Topic_Translations_Insert_Input>;
  on_conflict?: Maybe<Topic_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Topic_Translations_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "topic_translations" */
export type Topic_Translations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "topic_translations". All fields are combined with a logical 'AND'. */
export type Topic_Translations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Topic_Translations_Bool_Exp>>>;
  _not?: Maybe<Topic_Translations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Topic_Translations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<Locales_Bool_Exp>;
  locale_code?: Maybe<Locales_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  topic?: Maybe<Topics_Bool_Exp>;
  topic_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topic_translations" */
export type Topic_Translations_Constraint = 
  /** unique or primary key constraint */
  'topic_translations_locale_code_topic_id_key' |
  /** unique or primary key constraint */
  'topic_translations_pkey';

/** input type for incrementing integer column in table "topic_translations" */
export type Topic_Translations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "topic_translations" */
export type Topic_Translations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Locales_Obj_Rel_Insert_Input>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  topic?: Maybe<Topics_Obj_Rel_Insert_Input>;
  topic_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Topic_Translations_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "topic_translations" */
export type Topic_Translations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Topic_Translations_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "topic_translations" */
export type Topic_Translations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "topic_translations" */
export type Topic_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Topic_Translations>;
};

/** input type for inserting object relation for remote table "topic_translations" */
export type Topic_Translations_Obj_Rel_Insert_Input = {
  data: Topic_Translations_Insert_Input;
  on_conflict?: Maybe<Topic_Translations_On_Conflict>;
};

/** on conflict condition type for table "topic_translations" */
export type Topic_Translations_On_Conflict = {
  constraint: Topic_Translations_Constraint;
  update_columns: Array<Topic_Translations_Update_Column>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "topic_translations" */
export type Topic_Translations_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locales_Order_By>;
  locale_code?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  topic?: Maybe<Topics_Order_By>;
  topic_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "topic_translations" */
export type Topic_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "topic_translations" */
export type Topic_Translations_Select_Column = 
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
export type Topic_Translations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  topic_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Topic_Translations_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "topic_translations" */
export type Topic_Translations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Topic_Translations_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "topic_translations" */
export type Topic_Translations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Topic_Translations_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "topic_translations" */
export type Topic_Translations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Topic_Translations_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  topic_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "topic_translations" */
export type Topic_Translations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** update columns of table "topic_translations" */
export type Topic_Translations_Update_Column = 
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
export type Topic_Translations_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "topic_translations" */
export type Topic_Translations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Topic_Translations_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "topic_translations" */
export type Topic_Translations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Topic_Translations_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  topic_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "topic_translations" */
export type Topic_Translations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  topic_id?: Maybe<Order_By>;
};

/** columns and relationships of "topics" */
export type Topics = {
  color?: Maybe<Scalars['String']>;
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregated array relationship */
  courses_aggregate: Courses_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  level: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  /** An array relationship */
  translations: Array<Topic_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: Topic_Translations_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "topics" */
export type TopicsCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TopicsCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TopicsTranslationsArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};


/** columns and relationships of "topics" */
export type TopicsTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Topic_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Topic_Translations_Order_By>>;
  where?: Maybe<Topic_Translations_Bool_Exp>;
};

/** aggregated selection of "topics" */
export type Topics_Aggregate = {
  aggregate?: Maybe<Topics_Aggregate_Fields>;
  nodes: Array<Topics>;
};

/** aggregate fields of "topics" */
export type Topics_Aggregate_Fields = {
  avg?: Maybe<Topics_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Topics_Max_Fields>;
  min?: Maybe<Topics_Min_Fields>;
  stddev?: Maybe<Topics_Stddev_Fields>;
  stddev_pop?: Maybe<Topics_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Topics_Stddev_Samp_Fields>;
  sum?: Maybe<Topics_Sum_Fields>;
  var_pop?: Maybe<Topics_Var_Pop_Fields>;
  var_samp?: Maybe<Topics_Var_Samp_Fields>;
  variance?: Maybe<Topics_Variance_Fields>;
};


/** aggregate fields of "topics" */
export type Topics_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Topics_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "topics" */
export type Topics_Aggregate_Order_By = {
  avg?: Maybe<Topics_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Topics_Max_Order_By>;
  min?: Maybe<Topics_Min_Order_By>;
  stddev?: Maybe<Topics_Stddev_Order_By>;
  stddev_pop?: Maybe<Topics_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Topics_Stddev_Samp_Order_By>;
  sum?: Maybe<Topics_Sum_Order_By>;
  var_pop?: Maybe<Topics_Var_Pop_Order_By>;
  var_samp?: Maybe<Topics_Var_Samp_Order_By>;
  variance?: Maybe<Topics_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "topics" */
export type Topics_Arr_Rel_Insert_Input = {
  data: Array<Topics_Insert_Input>;
  on_conflict?: Maybe<Topics_On_Conflict>;
};

/** aggregate avg on columns */
export type Topics_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "topics" */
export type Topics_Avg_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "topics". All fields are combined with a logical 'AND'. */
export type Topics_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Topics_Bool_Exp>>>;
  _not?: Maybe<Topics_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Topics_Bool_Exp>>>;
  color?: Maybe<String_Comparison_Exp>;
  courses?: Maybe<Courses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  level?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  translations?: Maybe<Topic_Translations_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "topics" */
export type Topics_Constraint = 
  /** unique or primary key constraint */
  'topics_pkey';

/** input type for incrementing integer column in table "topics" */
export type Topics_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "topics" */
export type Topics_Insert_Input = {
  color?: Maybe<Scalars['String']>;
  courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  translations?: Maybe<Topic_Translations_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Topics_Max_Fields = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "topics" */
export type Topics_Max_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Topics_Min_Fields = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "topics" */
export type Topics_Min_Order_By = {
  color?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "topics" */
export type Topics_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Topics>;
};

/** input type for inserting object relation for remote table "topics" */
export type Topics_Obj_Rel_Insert_Input = {
  data: Topics_Insert_Input;
  on_conflict?: Maybe<Topics_On_Conflict>;
};

/** on conflict condition type for table "topics" */
export type Topics_On_Conflict = {
  constraint: Topics_Constraint;
  update_columns: Array<Topics_Update_Column>;
  where?: Maybe<Topics_Bool_Exp>;
};

/** ordering options when selecting data from "topics" */
export type Topics_Order_By = {
  color?: Maybe<Order_By>;
  courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Topic_Translations_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "topics" */
export type Topics_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "topics" */
export type Topics_Select_Column = 
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
export type Topics_Set_Input = {
  color?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Topics_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "topics" */
export type Topics_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Topics_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "topics" */
export type Topics_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Topics_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "topics" */
export type Topics_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Topics_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  level?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "topics" */
export type Topics_Sum_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "topics" */
export type Topics_Update_Column = 
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
export type Topics_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "topics" */
export type Topics_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Topics_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "topics" */
export type Topics_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Topics_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  level?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "topics" */
export type Topics_Variance_Order_By = {
  id?: Maybe<Order_By>;
  level?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** columns and relationships of "track_translations" */
export type Track_Translations = {
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  locale: Locales;
  locale_code: Locales_Enum;
  title: Scalars['String'];
  /** An object relationship */
  track: Tracks;
  track_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "track_translations" */
export type Track_Translations_Aggregate = {
  aggregate?: Maybe<Track_Translations_Aggregate_Fields>;
  nodes: Array<Track_Translations>;
};

/** aggregate fields of "track_translations" */
export type Track_Translations_Aggregate_Fields = {
  avg?: Maybe<Track_Translations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Track_Translations_Max_Fields>;
  min?: Maybe<Track_Translations_Min_Fields>;
  stddev?: Maybe<Track_Translations_Stddev_Fields>;
  stddev_pop?: Maybe<Track_Translations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Track_Translations_Stddev_Samp_Fields>;
  sum?: Maybe<Track_Translations_Sum_Fields>;
  var_pop?: Maybe<Track_Translations_Var_Pop_Fields>;
  var_samp?: Maybe<Track_Translations_Var_Samp_Fields>;
  variance?: Maybe<Track_Translations_Variance_Fields>;
};


/** aggregate fields of "track_translations" */
export type Track_Translations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Track_Translations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "track_translations" */
export type Track_Translations_Aggregate_Order_By = {
  avg?: Maybe<Track_Translations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Track_Translations_Max_Order_By>;
  min?: Maybe<Track_Translations_Min_Order_By>;
  stddev?: Maybe<Track_Translations_Stddev_Order_By>;
  stddev_pop?: Maybe<Track_Translations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Track_Translations_Stddev_Samp_Order_By>;
  sum?: Maybe<Track_Translations_Sum_Order_By>;
  var_pop?: Maybe<Track_Translations_Var_Pop_Order_By>;
  var_samp?: Maybe<Track_Translations_Var_Samp_Order_By>;
  variance?: Maybe<Track_Translations_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "track_translations" */
export type Track_Translations_Arr_Rel_Insert_Input = {
  data: Array<Track_Translations_Insert_Input>;
  on_conflict?: Maybe<Track_Translations_On_Conflict>;
};

/** aggregate avg on columns */
export type Track_Translations_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "track_translations" */
export type Track_Translations_Avg_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "track_translations". All fields are combined with a logical 'AND'. */
export type Track_Translations_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Track_Translations_Bool_Exp>>>;
  _not?: Maybe<Track_Translations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Track_Translations_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  locale?: Maybe<Locales_Bool_Exp>;
  locale_code?: Maybe<Locales_Enum_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  track?: Maybe<Tracks_Bool_Exp>;
  track_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "track_translations" */
export type Track_Translations_Constraint = 
  /** unique or primary key constraint */
  'track_translations_pkey' |
  /** unique or primary key constraint */
  'track_translations_track_id_locale_code_key';

/** input type for incrementing integer column in table "track_translations" */
export type Track_Translations_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "track_translations" */
export type Track_Translations_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale?: Maybe<Locales_Obj_Rel_Insert_Input>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  track?: Maybe<Tracks_Obj_Rel_Insert_Input>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Track_Translations_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "track_translations" */
export type Track_Translations_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Track_Translations_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "track_translations" */
export type Track_Translations_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "track_translations" */
export type Track_Translations_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Track_Translations>;
};

/** input type for inserting object relation for remote table "track_translations" */
export type Track_Translations_Obj_Rel_Insert_Input = {
  data: Track_Translations_Insert_Input;
  on_conflict?: Maybe<Track_Translations_On_Conflict>;
};

/** on conflict condition type for table "track_translations" */
export type Track_Translations_On_Conflict = {
  constraint: Track_Translations_Constraint;
  update_columns: Array<Track_Translations_Update_Column>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};

/** ordering options when selecting data from "track_translations" */
export type Track_Translations_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  locale?: Maybe<Locales_Order_By>;
  locale_code?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  track?: Maybe<Tracks_Order_By>;
  track_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "track_translations" */
export type Track_Translations_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "track_translations" */
export type Track_Translations_Select_Column = 
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
export type Track_Translations_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  locale_code?: Maybe<Locales_Enum>;
  title?: Maybe<Scalars['String']>;
  track_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Track_Translations_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "track_translations" */
export type Track_Translations_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Track_Translations_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "track_translations" */
export type Track_Translations_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Track_Translations_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "track_translations" */
export type Track_Translations_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Track_Translations_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  track_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "track_translations" */
export type Track_Translations_Sum_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** update columns of table "track_translations" */
export type Track_Translations_Update_Column = 
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
export type Track_Translations_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "track_translations" */
export type Track_Translations_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Track_Translations_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "track_translations" */
export type Track_Translations_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Track_Translations_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  track_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "track_translations" */
export type Track_Translations_Variance_Order_By = {
  id?: Maybe<Order_By>;
  track_id?: Maybe<Order_By>;
};

/** columns and relationships of "tracks" */
export type Tracks = {
  /** An array relationship */
  courses: Array<Courses>;
  /** An aggregated array relationship */
  courses_aggregate: Courses_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  slug: Scalars['String'];
  soon: Scalars['Boolean'];
  /** An array relationship */
  translations: Array<Track_Translations>;
  /** An aggregated array relationship */
  translations_aggregate: Track_Translations_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "tracks" */
export type TracksCoursesArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TracksCourses_AggregateArgs = {
  distinct_on?: Maybe<Array<Courses_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Courses_Order_By>>;
  where?: Maybe<Courses_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TracksTranslationsArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};


/** columns and relationships of "tracks" */
export type TracksTranslations_AggregateArgs = {
  distinct_on?: Maybe<Array<Track_Translations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Track_Translations_Order_By>>;
  where?: Maybe<Track_Translations_Bool_Exp>;
};

/** aggregated selection of "tracks" */
export type Tracks_Aggregate = {
  aggregate?: Maybe<Tracks_Aggregate_Fields>;
  nodes: Array<Tracks>;
};

/** aggregate fields of "tracks" */
export type Tracks_Aggregate_Fields = {
  avg?: Maybe<Tracks_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tracks_Max_Fields>;
  min?: Maybe<Tracks_Min_Fields>;
  stddev?: Maybe<Tracks_Stddev_Fields>;
  stddev_pop?: Maybe<Tracks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tracks_Stddev_Samp_Fields>;
  sum?: Maybe<Tracks_Sum_Fields>;
  var_pop?: Maybe<Tracks_Var_Pop_Fields>;
  var_samp?: Maybe<Tracks_Var_Samp_Fields>;
  variance?: Maybe<Tracks_Variance_Fields>;
};


/** aggregate fields of "tracks" */
export type Tracks_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tracks_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tracks" */
export type Tracks_Aggregate_Order_By = {
  avg?: Maybe<Tracks_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tracks_Max_Order_By>;
  min?: Maybe<Tracks_Min_Order_By>;
  stddev?: Maybe<Tracks_Stddev_Order_By>;
  stddev_pop?: Maybe<Tracks_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tracks_Stddev_Samp_Order_By>;
  sum?: Maybe<Tracks_Sum_Order_By>;
  var_pop?: Maybe<Tracks_Var_Pop_Order_By>;
  var_samp?: Maybe<Tracks_Var_Samp_Order_By>;
  variance?: Maybe<Tracks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tracks" */
export type Tracks_Arr_Rel_Insert_Input = {
  data: Array<Tracks_Insert_Input>;
  on_conflict?: Maybe<Tracks_On_Conflict>;
};

/** aggregate avg on columns */
export type Tracks_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tracks" */
export type Tracks_Avg_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tracks". All fields are combined with a logical 'AND'. */
export type Tracks_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tracks_Bool_Exp>>>;
  _not?: Maybe<Tracks_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tracks_Bool_Exp>>>;
  courses?: Maybe<Courses_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  order?: Maybe<Int_Comparison_Exp>;
  slug?: Maybe<String_Comparison_Exp>;
  soon?: Maybe<Boolean_Comparison_Exp>;
  translations?: Maybe<Track_Translations_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "tracks" */
export type Tracks_Constraint = 
  /** unique or primary key constraint */
  'tracks_pkey';

/** input type for incrementing integer column in table "tracks" */
export type Tracks_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tracks" */
export type Tracks_Insert_Input = {
  courses?: Maybe<Courses_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  soon?: Maybe<Scalars['Boolean']>;
  translations?: Maybe<Track_Translations_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Tracks_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "tracks" */
export type Tracks_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tracks_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "tracks" */
export type Tracks_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "tracks" */
export type Tracks_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tracks>;
};

/** input type for inserting object relation for remote table "tracks" */
export type Tracks_Obj_Rel_Insert_Input = {
  data: Tracks_Insert_Input;
  on_conflict?: Maybe<Tracks_On_Conflict>;
};

/** on conflict condition type for table "tracks" */
export type Tracks_On_Conflict = {
  constraint: Tracks_Constraint;
  update_columns: Array<Tracks_Update_Column>;
  where?: Maybe<Tracks_Bool_Exp>;
};

/** ordering options when selecting data from "tracks" */
export type Tracks_Order_By = {
  courses_aggregate?: Maybe<Courses_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
  slug?: Maybe<Order_By>;
  soon?: Maybe<Order_By>;
  translations_aggregate?: Maybe<Track_Translations_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "tracks" */
export type Tracks_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "tracks" */
export type Tracks_Select_Column = 
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
export type Tracks_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  soon?: Maybe<Scalars['Boolean']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Tracks_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tracks" */
export type Tracks_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tracks_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tracks" */
export type Tracks_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tracks_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tracks" */
export type Tracks_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tracks_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tracks" */
export type Tracks_Sum_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** update columns of table "tracks" */
export type Tracks_Update_Column = 
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
export type Tracks_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tracks" */
export type Tracks_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tracks_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tracks" */
export type Tracks_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tracks_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tracks" */
export type Tracks_Variance_Order_By = {
  id?: Maybe<Order_By>;
  order?: Maybe<Order_By>;
};

/** columns and relationships of "user_genders" */
export type User_Genders = {
  description: Scalars['String'];
  letter: Scalars['String'];
};

/** aggregated selection of "user_genders" */
export type User_Genders_Aggregate = {
  aggregate?: Maybe<User_Genders_Aggregate_Fields>;
  nodes: Array<User_Genders>;
};

/** aggregate fields of "user_genders" */
export type User_Genders_Aggregate_Fields = {
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Genders_Max_Fields>;
  min?: Maybe<User_Genders_Min_Fields>;
};


/** aggregate fields of "user_genders" */
export type User_Genders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Genders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_genders" */
export type User_Genders_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Genders_Max_Order_By>;
  min?: Maybe<User_Genders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_genders" */
export type User_Genders_Arr_Rel_Insert_Input = {
  data: Array<User_Genders_Insert_Input>;
  on_conflict?: Maybe<User_Genders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_genders". All fields are combined with a logical 'AND'. */
export type User_Genders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Genders_Bool_Exp>>>;
  _not?: Maybe<User_Genders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Genders_Bool_Exp>>>;
  description?: Maybe<String_Comparison_Exp>;
  letter?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_genders" */
export type User_Genders_Constraint = 
  /** unique or primary key constraint */
  'user_genders_pkey';

export type User_Genders_Enum = 
  /** Female */
  'F' |
  /** Male */
  'M';

/** expression to compare columns of type user_genders_enum. All fields are combined with logical 'AND'. */
export type User_Genders_Enum_Comparison_Exp = {
  _eq?: Maybe<User_Genders_Enum>;
  _in?: Maybe<Array<User_Genders_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<User_Genders_Enum>;
  _nin?: Maybe<Array<User_Genders_Enum>>;
};

/** input type for inserting data into table "user_genders" */
export type User_Genders_Insert_Input = {
  description?: Maybe<Scalars['String']>;
  letter?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Genders_Max_Fields = {
  description?: Maybe<Scalars['String']>;
  letter?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_genders" */
export type User_Genders_Max_Order_By = {
  description?: Maybe<Order_By>;
  letter?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Genders_Min_Fields = {
  description?: Maybe<Scalars['String']>;
  letter?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_genders" */
export type User_Genders_Min_Order_By = {
  description?: Maybe<Order_By>;
  letter?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_genders" */
export type User_Genders_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<User_Genders>;
};

/** input type for inserting object relation for remote table "user_genders" */
export type User_Genders_Obj_Rel_Insert_Input = {
  data: User_Genders_Insert_Input;
  on_conflict?: Maybe<User_Genders_On_Conflict>;
};

/** on conflict condition type for table "user_genders" */
export type User_Genders_On_Conflict = {
  constraint: User_Genders_Constraint;
  update_columns: Array<User_Genders_Update_Column>;
  where?: Maybe<User_Genders_Bool_Exp>;
};

/** ordering options when selecting data from "user_genders" */
export type User_Genders_Order_By = {
  description?: Maybe<Order_By>;
  letter?: Maybe<Order_By>;
};

/** primary key columns input for table: "user_genders" */
export type User_Genders_Pk_Columns_Input = {
  letter: Scalars['String'];
};

/** select columns of table "user_genders" */
export type User_Genders_Select_Column = 
  /** column name */
  'description' |
  /** column name */
  'letter';

/** input type for updating data in table "user_genders" */
export type User_Genders_Set_Input = {
  description?: Maybe<Scalars['String']>;
  letter?: Maybe<Scalars['String']>;
};

/** update columns of table "user_genders" */
export type User_Genders_Update_Column = 
  /** column name */
  'description' |
  /** column name */
  'letter';

/** columns and relationships of "users" */
export type Users = {
  country?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  email: Scalars['citext'];
  fbase_id: Scalars['String'];
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<User_Genders_Enum>;
  id: Scalars['Int'];
  last_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_gender?: Maybe<User_Genders>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  country?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<Citext_Comparison_Exp>;
  fbase_id?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<User_Genders_Enum_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_gender?: Maybe<User_Genders_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint = 
  /** unique or primary key constraint */
  'users_email_key' |
  /** unique or primary key constraint */
  'users_fbase_id_key' |
  /** unique or primary key constraint */
  'users_pkey';

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  fbase_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<User_Genders_Enum>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_gender?: Maybe<User_Genders_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  fbase_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fbase_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  fbase_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fbase_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  country?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fbase_id?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_gender?: Maybe<User_Genders_Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export type Users_Select_Column = 
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
export type Users_Set_Input = {
  country?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['citext']>;
  fbase_id?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<User_Genders_Enum>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export type Users_Update_Column = 
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
export type Users_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type ChapterQueryQueryVariables = {
  id: Scalars['Int'];
};


export type ChapterQueryQuery = { chapter?: Maybe<(
    Pick<Chapters, 'id' | 'slug' | 'audio'>
    & { translations: Array<Pick<Chapter_Translations, 'id' | 'title' | 'transcription' | 'vocabulary' | 'locale_code' | 'video'>>, course: (
      Pick<Courses, 'id' | 'slug'>
      & { track: ChapterPageTrackFragment, chapters: Array<(
        Pick<Chapters, 'id' | 'slug'>
        & { translations: Array<Pick<Chapter_Translations, 'title'>> }
      )> }
    ) }
  )> };

export type MeQueryVariables = {
  id: Scalars['String'];
};


export type MeQuery = { users: Array<Pick<Users, 'id' | 'first_name' | 'email' | 'last_name' | 'country'>> };

export type AddNewUserMutationVariables = {
  first_name: Scalars['String'];
  country: Scalars['String'];
  last_name: Scalars['String'];
  gender: User_Genders_Enum;
  email: Scalars['citext'];
};


export type AddNewUserMutation = { insert_users_one?: Maybe<Pick<Users, 'id'>> };

export type TrackInnerPageCourseFragment = (
  Pick<Courses, 'id' | 'level'>
  & { translations: Array<Pick<Course_Translations, 'title' | 'description'>>, chapters: Array<(
    Pick<Chapters, 'duration' | 'id'>
    & { translations: Array<Pick<Chapter_Translations, 'locale_code'>> }
  )>, quiz_difficulties?: Maybe<Pick<Course_Quiz_Difficulties, 'quiz_difficulties'>>, topic: (
    Pick<Topics, 'id' | 'color'>
    & { translations: Array<Pick<Topic_Translations, 'title'>> }
  ) }
);

export type TrackInnerPageTrackFragment = (
  Pick<Tracks, 'id'>
  & { translations: Array<Pick<Track_Translations, 'title'>>, courses: Array<TrackInnerPageCourseFragment> }
);

export type TrackInnerPageQueryVariables = {
  locale: Locales_Enum;
  id: Scalars['Int'];
};


export type TrackInnerPageQuery = { track?: Maybe<TrackInnerPageTrackFragment> };

export type TracksPageTrackFragment = (
  Pick<Tracks, 'id' | 'soon'>
  & { translations: Array<Pick<Track_Translations, 'title' | 'description'>> }
);

export type TracksQueryVariables = {
  locale?: Maybe<Locales_Enum>;
};


export type TracksQuery = { tracks: Array<TracksPageTrackFragment> };

export type ChapterPageTrackFragment = (
  Pick<Tracks, 'id' | 'slug'>
  & { translations: Array<Pick<Track_Translations, 'title'>>, courses: Array<(
    Pick<Courses, 'id' | 'slug'>
    & { quiz_difficulties?: Maybe<Pick<Course_Quiz_Difficulties, 'quiz_difficulties'>>, chapters: Array<(
      Pick<Chapters, 'id' | 'slug'>
      & { translations: Array<Pick<Chapter_Translations, 'title'>> }
    )>, translations: Array<Pick<Course_Translations, 'locale_code' | 'title'>> }
  )> }
);
