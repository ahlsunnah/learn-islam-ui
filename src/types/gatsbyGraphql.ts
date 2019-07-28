export type Maybe<T> = T
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any
  /** The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  api_DateTime: any
  /** Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  api_JSONString: any
  /** The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  api_GenericScalar: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type TApi = {
  __typename?: 'api'
  /** The ID of the object */
  readonly track: Maybe<TApi_TrackNode>
  readonly allTracks: Maybe<TApi_TrackNodeConnection>
  /** The ID of the object */
  readonly trackTranslation: Maybe<TApi_TrackTranslationNode>
  readonly allTracksTranslations: Maybe<TApi_TrackTranslationNodeConnection>
  /** The ID of the object */
  readonly topic: Maybe<TApi_TopicNode>
  readonly allTopics: Maybe<TApi_TopicNodeConnection>
  /** The ID of the object */
  readonly topicTranslation: Maybe<TApi_TopicTranslationNode>
  readonly allTopicsTranslations: Maybe<TApi_TopicTranslationNodeConnection>
  /** The ID of the object */
  readonly quiz: Maybe<TApi_QuizNode>
  readonly allQuizzes: Maybe<TApi_QuizNodeConnection>
  /** The ID of the object */
  readonly quizTranslations: Maybe<TApi_QuizTranslationNode>
  readonly allQuizzesTranslations: Maybe<TApi_QuizTranslationNodeConnection>
  /** The ID of the object */
  readonly course: Maybe<TApi_CourseNode>
  readonly allCourses: Maybe<TApi_CourseNodeConnection>
  /** The ID of the object */
  readonly courseTranslations: Maybe<TApi_CourseTranslationNode>
  readonly allCoursesTranslations: Maybe<TApi_CourseTranslationNodeConnection>
  /** The ID of the object */
  readonly chapter: Maybe<TApi_ChapterNode>
  readonly allChapters: Maybe<TApi_ChapterNodeConnection>
  /** The ID of the object */
  readonly chapterTranslations: Maybe<TApi_ChapterTranslationNode>
  readonly allChaptersTranslations: Maybe<TApi_ChapterTranslationNodeConnection>
}

export type TApiTrackArgs = {
  id: Scalars['ID']
}

export type TApiAllTracksArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApiTrackTranslationArgs = {
  id: Scalars['ID']
}

export type TApiAllTracksTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApiTopicArgs = {
  id: Scalars['ID']
}

export type TApiAllTopicsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApiTopicTranslationArgs = {
  id: Scalars['ID']
}

export type TApiAllTopicsTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApiQuizArgs = {
  id: Scalars['ID']
}

export type TApiAllQuizzesArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  difficulty: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type TApiQuizTranslationsArgs = {
  id: Scalars['ID']
}

export type TApiAllQuizzesTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApiCourseArgs = {
  id: Scalars['ID']
}

export type TApiAllCoursesArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApiCourseTranslationsArgs = {
  id: Scalars['ID']
}

export type TApiAllCoursesTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApiChapterArgs = {
  id: Scalars['ID']
}

export type TApiAllChaptersArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApiChapterTranslationsArgs = {
  id: Scalars['ID']
}

export type TApiAllChaptersTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_ChapterNode = TApi_Node & {
  __typename?: 'api_ChapterNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly course: Maybe<TApi_CourseNode>
  readonly audio: Scalars['String']
  readonly duration: Scalars['Int']
  readonly order: Scalars['Int']
  readonly slug: Scalars['String']
  readonly translations: Maybe<TApi_ChapterTranslationNodeConnection>
}

export type TApi_ChapterNodeTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_ChapterNodeConnection = {
  __typename?: 'api_ChapterNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_ChapterNodeEdge>>
}

/** A Relay edge containing a `ChapterNode` and its cursor. */
export type TApi_ChapterNodeEdge = {
  __typename?: 'api_ChapterNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_ChapterNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_ChapterTranslationNode = TApi_Node & {
  __typename?: 'api_ChapterTranslationNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly chapter: TApi_ChapterNode
  readonly locale: Maybe<Scalars['String']>
  readonly title: Scalars['String']
  readonly transcription: Scalars['String']
  readonly video: Scalars['String']
  readonly vocabulary: Scalars['String']
}

export type TApi_ChapterTranslationNodeConnection = {
  __typename?: 'api_ChapterTranslationNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_ChapterTranslationNodeEdge>>
}

/** A Relay edge containing a `ChapterTranslationNode` and its cursor. */
export type TApi_ChapterTranslationNodeEdge = {
  __typename?: 'api_ChapterTranslationNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_ChapterTranslationNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_CourseNode = TApi_Node & {
  __typename?: 'api_CourseNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly topic: Maybe<TApi_TopicNode>
  readonly track: Maybe<TApi_TrackNode>
  readonly level: Scalars['Int']
  readonly order: Scalars['Int']
  readonly slug: Scalars['String']
  readonly translations: Maybe<TApi_CourseTranslationNodeConnection>
  readonly chapterSet: Maybe<TApi_ChapterNodeConnection>
  readonly quizSet: Maybe<TApi_QuizNodeConnection>
  readonly quizDifficulties: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

export type TApi_CourseNodeTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_CourseNodeChapterSetArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApi_CourseNodeQuizSetArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  difficulty: Maybe<Scalars['Int']>
  type: Maybe<Scalars['String']>
}

export type TApi_CourseNodeConnection = {
  __typename?: 'api_CourseNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_CourseNodeEdge>>
}

/** A Relay edge containing a `CourseNode` and its cursor. */
export type TApi_CourseNodeEdge = {
  __typename?: 'api_CourseNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_CourseNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_CourseTranslationNode = TApi_Node & {
  __typename?: 'api_CourseTranslationNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly course: TApi_CourseNode
  readonly description: Scalars['String']
  readonly locale: Maybe<Scalars['String']>
  readonly title: Scalars['String']
}

export type TApi_CourseTranslationNodeConnection = {
  __typename?: 'api_CourseTranslationNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_CourseTranslationNodeEdge>>
}

/** A Relay edge containing a `CourseTranslationNode` and its cursor. */
export type TApi_CourseTranslationNodeEdge = {
  __typename?: 'api_CourseTranslationNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_CourseTranslationNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_CreateUser = {
  __typename?: 'api_CreateUser'
  readonly user: Maybe<TApi_UserType>
}

/** An object with an ID */
export type TApi_Node = {
  /** The ID of the object. */
  readonly id: Scalars['ID']
}

/** Obtain JSON Web Token mutation */
export type TApi_ObtainJsonWebToken = {
  __typename?: 'api_ObtainJSONWebToken'
  readonly token: Maybe<Scalars['String']>
}

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type TApi_PageInfo = {
  __typename?: 'api_PageInfo'
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor: Maybe<Scalars['String']>
}

export type TApi_QuizNode = TApi_Node & {
  __typename?: 'api_QuizNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly course: Maybe<TApi_CourseNode>
  readonly difficulty: Scalars['Int']
  readonly type: Maybe<Scalars['String']>
  readonly pubDate: Scalars['api_DateTime']
  readonly translations: Maybe<TApi_QuizTranslationNodeConnection>
}

export type TApi_QuizNodeTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_QuizNodeConnection = {
  __typename?: 'api_QuizNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_QuizNodeEdge>>
}

/** A Relay edge containing a `QuizNode` and its cursor. */
export type TApi_QuizNodeEdge = {
  __typename?: 'api_QuizNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_QuizNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_QuizTranslationNode = TApi_Node & {
  __typename?: 'api_QuizTranslationNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly quiz: TApi_QuizNode
  readonly data: Scalars['api_JSONString']
  readonly locale: Maybe<Scalars['String']>
}

export type TApi_QuizTranslationNodeConnection = {
  __typename?: 'api_QuizTranslationNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_QuizTranslationNodeEdge>>
}

/** A Relay edge containing a `QuizTranslationNode` and its cursor. */
export type TApi_QuizTranslationNodeEdge = {
  __typename?: 'api_QuizTranslationNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_QuizTranslationNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_Refresh = {
  __typename?: 'api_Refresh'
  readonly token: Maybe<Scalars['String']>
  readonly payload: Maybe<Scalars['api_GenericScalar']>
}

export type TApi_TopicNode = TApi_Node & {
  __typename?: 'api_TopicNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly color: Scalars['String']
  readonly level: Scalars['Int']
  readonly order: Scalars['Int']
  readonly slug: Scalars['String']
  readonly translations: Maybe<TApi_TopicTranslationNodeConnection>
  readonly courseSet: Maybe<TApi_CourseNodeConnection>
}

export type TApi_TopicNodeTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_TopicNodeCourseSetArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApi_TopicNodeConnection = {
  __typename?: 'api_TopicNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_TopicNodeEdge>>
}

/** A Relay edge containing a `TopicNode` and its cursor. */
export type TApi_TopicNodeEdge = {
  __typename?: 'api_TopicNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_TopicNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_TopicTranslationNode = TApi_Node & {
  __typename?: 'api_TopicTranslationNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly topic: TApi_TopicNode
  readonly locale: Maybe<Scalars['String']>
  readonly title: Scalars['String']
}

export type TApi_TopicTranslationNodeConnection = {
  __typename?: 'api_TopicTranslationNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_TopicTranslationNodeEdge>>
}

/** A Relay edge containing a `TopicTranslationNode` and its cursor. */
export type TApi_TopicTranslationNodeEdge = {
  __typename?: 'api_TopicTranslationNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_TopicTranslationNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_TrackNode = TApi_Node & {
  __typename?: 'api_TrackNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly order: Scalars['Int']
  readonly slug: Scalars['String']
  readonly soon: Scalars['Boolean']
  readonly translations: Maybe<TApi_TrackTranslationNodeConnection>
  readonly courseSet: Maybe<TApi_CourseNodeConnection>
}

export type TApi_TrackNodeTranslationsArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  locale: Maybe<Scalars['String']>
}

export type TApi_TrackNodeCourseSetArgs = {
  before: Maybe<Scalars['String']>
  after: Maybe<Scalars['String']>
  first: Maybe<Scalars['Int']>
  last: Maybe<Scalars['Int']>
  slug: Maybe<Scalars['String']>
}

export type TApi_TrackNodeConnection = {
  __typename?: 'api_TrackNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_TrackNodeEdge>>
}

/** A Relay edge containing a `TrackNode` and its cursor. */
export type TApi_TrackNodeEdge = {
  __typename?: 'api_TrackNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_TrackNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_TrackTranslationNode = TApi_Node & {
  __typename?: 'api_TrackTranslationNode'
  /** The ID of the object. */
  readonly id: Scalars['ID']
  readonly track: TApi_TrackNode
  readonly description: Scalars['String']
  readonly locale: Maybe<Scalars['String']>
  readonly title: Scalars['String']
}

export type TApi_TrackTranslationNodeConnection = {
  __typename?: 'api_TrackTranslationNodeConnection'
  /** Pagination data for this connection. */
  readonly pageInfo: TApi_PageInfo
  /** Contains the nodes in this connection. */
  readonly edges: ReadonlyArray<Maybe<TApi_TrackTranslationNodeEdge>>
}

/** A Relay edge containing a `TrackTranslationNode` and its cursor. */
export type TApi_TrackTranslationNodeEdge = {
  __typename?: 'api_TrackTranslationNodeEdge'
  /** The item at the end of the edge */
  readonly node: Maybe<TApi_TrackTranslationNode>
  /** A cursor for use in pagination */
  readonly cursor: Scalars['String']
}

export type TApi_UserType = {
  __typename?: 'api_UserType'
  readonly id: Scalars['ID']
  readonly lastLogin: Maybe<Scalars['api_DateTime']>
  /** Designates that this user has all permissions without explicitly assigning them. */
  readonly isSuperuser: Scalars['Boolean']
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  readonly username: Scalars['String']
  readonly firstName: Scalars['String']
  readonly lastName: Scalars['String']
  readonly email: Scalars['String']
  /** Designates whether the user can log into this admin site. */
  readonly isStaff: Scalars['Boolean']
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  readonly isActive: Scalars['Boolean']
  readonly dateJoined: Scalars['api_DateTime']
  readonly name: Scalars['String']
}

export type TApi_Verify = {
  __typename?: 'api_Verify'
  readonly payload: Maybe<Scalars['api_GenericScalar']>
}

export type TBooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>
  readonly ne: Maybe<Scalars['Boolean']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>
}

export type TDateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>
  readonly ne: Maybe<Scalars['Date']>
  readonly gt: Maybe<Scalars['Date']>
  readonly gte: Maybe<Scalars['Date']>
  readonly lt: Maybe<Scalars['Date']>
  readonly lte: Maybe<Scalars['Date']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>
}

export type TDirectory = TNode & {
  __typename?: 'Directory'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  readonly birthtime: Maybe<Scalars['Date']>
}

export type TDirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryBirthtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TDirectoryConnection = {
  __typename?: 'DirectoryConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TDirectoryEdge>
  readonly nodes: ReadonlyArray<TDirectory>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TDirectoryGroupConnection>
}

export type TDirectoryConnectionDistinctArgs = {
  field: TDirectoryFieldsEnum
}

export type TDirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TDirectoryFieldsEnum
}

export type TDirectoryEdge = {
  __typename?: 'DirectoryEdge'
  readonly next: Maybe<TDirectory>
  readonly node: TDirectory
  readonly previous: Maybe<TDirectory>
}

export enum TDirectoryFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  BirthtimeMs = 'birthtimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
}

export type TDirectoryFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly sourceInstanceName: Maybe<TStringQueryOperatorInput>
  readonly absolutePath: Maybe<TStringQueryOperatorInput>
  readonly relativePath: Maybe<TStringQueryOperatorInput>
  readonly extension: Maybe<TStringQueryOperatorInput>
  readonly size: Maybe<TIntQueryOperatorInput>
  readonly prettySize: Maybe<TStringQueryOperatorInput>
  readonly modifiedTime: Maybe<TDateQueryOperatorInput>
  readonly accessTime: Maybe<TDateQueryOperatorInput>
  readonly changeTime: Maybe<TDateQueryOperatorInput>
  readonly birthTime: Maybe<TDateQueryOperatorInput>
  readonly root: Maybe<TStringQueryOperatorInput>
  readonly dir: Maybe<TStringQueryOperatorInput>
  readonly base: Maybe<TStringQueryOperatorInput>
  readonly ext: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly relativeDirectory: Maybe<TStringQueryOperatorInput>
  readonly dev: Maybe<TIntQueryOperatorInput>
  readonly mode: Maybe<TIntQueryOperatorInput>
  readonly nlink: Maybe<TIntQueryOperatorInput>
  readonly uid: Maybe<TIntQueryOperatorInput>
  readonly gid: Maybe<TIntQueryOperatorInput>
  readonly rdev: Maybe<TIntQueryOperatorInput>
  readonly blksize: Maybe<TIntQueryOperatorInput>
  readonly ino: Maybe<TIntQueryOperatorInput>
  readonly blocks: Maybe<TIntQueryOperatorInput>
  readonly atimeMs: Maybe<TFloatQueryOperatorInput>
  readonly mtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly ctimeMs: Maybe<TFloatQueryOperatorInput>
  readonly birthtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly atime: Maybe<TDateQueryOperatorInput>
  readonly mtime: Maybe<TDateQueryOperatorInput>
  readonly ctime: Maybe<TDateQueryOperatorInput>
  readonly birthtime: Maybe<TDateQueryOperatorInput>
}

export type TDirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TDirectoryEdge>
  readonly nodes: ReadonlyArray<TDirectory>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TDirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TDirectoryFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TFile = TNode & {
  __typename?: 'File'
  readonly birthtime: Maybe<Scalars['Date']>
  readonly birthtimeMs: Maybe<Scalars['Float']>
  readonly sourceInstanceName: Maybe<Scalars['String']>
  readonly absolutePath: Maybe<Scalars['String']>
  readonly relativePath: Maybe<Scalars['String']>
  readonly extension: Maybe<Scalars['String']>
  readonly size: Maybe<Scalars['Int']>
  readonly prettySize: Maybe<Scalars['String']>
  readonly modifiedTime: Maybe<Scalars['Date']>
  readonly accessTime: Maybe<Scalars['Date']>
  readonly changeTime: Maybe<Scalars['Date']>
  readonly birthTime: Maybe<Scalars['Date']>
  readonly root: Maybe<Scalars['String']>
  readonly dir: Maybe<Scalars['String']>
  readonly base: Maybe<Scalars['String']>
  readonly ext: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly relativeDirectory: Maybe<Scalars['String']>
  readonly dev: Maybe<Scalars['Int']>
  readonly mode: Maybe<Scalars['Int']>
  readonly nlink: Maybe<Scalars['Int']>
  readonly uid: Maybe<Scalars['Int']>
  readonly gid: Maybe<Scalars['Int']>
  readonly rdev: Maybe<Scalars['Int']>
  readonly blksize: Maybe<Scalars['Int']>
  readonly ino: Maybe<Scalars['Int']>
  readonly blocks: Maybe<Scalars['Int']>
  readonly atimeMs: Maybe<Scalars['Float']>
  readonly mtimeMs: Maybe<Scalars['Float']>
  readonly ctimeMs: Maybe<Scalars['Float']>
  readonly atime: Maybe<Scalars['Date']>
  readonly mtime: Maybe<Scalars['Date']>
  readonly ctime: Maybe<Scalars['Date']>
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly childTranslationsJson: Maybe<TTranslationsJson>
}

export type TFileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileAtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileMtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileCtimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TFileConnection = {
  __typename?: 'FileConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TFileEdge>
  readonly nodes: ReadonlyArray<TFile>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TFileGroupConnection>
}

export type TFileConnectionDistinctArgs = {
  field: TFileFieldsEnum
}

export type TFileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TFileFieldsEnum
}

export type TFileEdge = {
  __typename?: 'FileEdge'
  readonly next: Maybe<TFile>
  readonly node: TFile
  readonly previous: Maybe<TFile>
}

export enum TFileFieldsEnum {
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Blksize = 'blksize',
  Ino = 'ino',
  Blocks = 'blocks',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  PublicUrl = 'publicURL',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ChildTranslationsJsonId = 'childTranslationsJson___id',
  ChildTranslationsJsonParentId = 'childTranslationsJson___parent___id',
  ChildTranslationsJsonParentParentId = 'childTranslationsJson___parent___parent___id',
  ChildTranslationsJsonParentParentChildren = 'childTranslationsJson___parent___parent___children',
  ChildTranslationsJsonParentChildren = 'childTranslationsJson___parent___children',
  ChildTranslationsJsonParentChildrenId = 'childTranslationsJson___parent___children___id',
  ChildTranslationsJsonParentChildrenChildren = 'childTranslationsJson___parent___children___children',
  ChildTranslationsJsonParentInternalContent = 'childTranslationsJson___parent___internal___content',
  ChildTranslationsJsonParentInternalContentDigest = 'childTranslationsJson___parent___internal___contentDigest',
  ChildTranslationsJsonParentInternalDescription = 'childTranslationsJson___parent___internal___description',
  ChildTranslationsJsonParentInternalFieldOwners = 'childTranslationsJson___parent___internal___fieldOwners',
  ChildTranslationsJsonParentInternalIgnoreType = 'childTranslationsJson___parent___internal___ignoreType',
  ChildTranslationsJsonParentInternalMediaType = 'childTranslationsJson___parent___internal___mediaType',
  ChildTranslationsJsonParentInternalOwner = 'childTranslationsJson___parent___internal___owner',
  ChildTranslationsJsonParentInternalType = 'childTranslationsJson___parent___internal___type',
  ChildTranslationsJsonChildren = 'childTranslationsJson___children',
  ChildTranslationsJsonChildrenId = 'childTranslationsJson___children___id',
  ChildTranslationsJsonChildrenParentId = 'childTranslationsJson___children___parent___id',
  ChildTranslationsJsonChildrenParentChildren = 'childTranslationsJson___children___parent___children',
  ChildTranslationsJsonChildrenChildren = 'childTranslationsJson___children___children',
  ChildTranslationsJsonChildrenChildrenId = 'childTranslationsJson___children___children___id',
  ChildTranslationsJsonChildrenChildrenChildren = 'childTranslationsJson___children___children___children',
  ChildTranslationsJsonChildrenInternalContent = 'childTranslationsJson___children___internal___content',
  ChildTranslationsJsonChildrenInternalContentDigest = 'childTranslationsJson___children___internal___contentDigest',
  ChildTranslationsJsonChildrenInternalDescription = 'childTranslationsJson___children___internal___description',
  ChildTranslationsJsonChildrenInternalFieldOwners = 'childTranslationsJson___children___internal___fieldOwners',
  ChildTranslationsJsonChildrenInternalIgnoreType = 'childTranslationsJson___children___internal___ignoreType',
  ChildTranslationsJsonChildrenInternalMediaType = 'childTranslationsJson___children___internal___mediaType',
  ChildTranslationsJsonChildrenInternalOwner = 'childTranslationsJson___children___internal___owner',
  ChildTranslationsJsonChildrenInternalType = 'childTranslationsJson___children___internal___type',
  ChildTranslationsJsonInternalContent = 'childTranslationsJson___internal___content',
  ChildTranslationsJsonInternalContentDigest = 'childTranslationsJson___internal___contentDigest',
  ChildTranslationsJsonInternalDescription = 'childTranslationsJson___internal___description',
  ChildTranslationsJsonInternalFieldOwners = 'childTranslationsJson___internal___fieldOwners',
  ChildTranslationsJsonInternalIgnoreType = 'childTranslationsJson___internal___ignoreType',
  ChildTranslationsJsonInternalMediaType = 'childTranslationsJson___internal___mediaType',
  ChildTranslationsJsonInternalOwner = 'childTranslationsJson___internal___owner',
  ChildTranslationsJsonInternalType = 'childTranslationsJson___internal___type',
  ChildTranslationsJsonHomeTitle = 'childTranslationsJson___homeTitle',
  ChildTranslationsJsonHomeDescription = 'childTranslationsJson___homeDescription',
  ChildTranslationsJsonHomeEmailTitle = 'childTranslationsJson___homeEmailTitle',
  ChildTranslationsJsonHomeEmailPlaceHolder = 'childTranslationsJson___homeEmailPlaceHolder',
  ChildTranslationsJsonHomeStartTrack = 'childTranslationsJson___homeStartTrack',
  ChildTranslationsJsonSiteName = 'childTranslationsJson___siteName',
  ChildTranslationsJsonSiteSlogan = 'childTranslationsJson___siteSlogan',
  ChildTranslationsJsonFooterSocialTitle = 'childTranslationsJson___footerSocialTitle',
  ChildTranslationsJsonHomeFooterCta = 'childTranslationsJson___homeFooterCTA',
  ChildTranslationsJsonStart = 'childTranslationsJson___start',
  ChildTranslationsJsonSoon = 'childTranslationsJson___soon',
  ChildTranslationsJsonAboutUs = 'childTranslationsJson___aboutUs',
  ChildTranslationsJsonTracks = 'childTranslationsJson___tracks',
  ChildTranslationsJsonCourses = 'childTranslationsJson___courses',
  ChildTranslationsJsonConnect = 'childTranslationsJson___connect',
  ChildTranslationsJsonFeature1Title = 'childTranslationsJson___feature1Title',
  ChildTranslationsJsonFeature2Title = 'childTranslationsJson___feature2Title',
  ChildTranslationsJsonFeature3Title = 'childTranslationsJson___feature3Title',
  ChildTranslationsJsonFeature1Text = 'childTranslationsJson___feature1Text',
  ChildTranslationsJsonFeature2Text = 'childTranslationsJson___feature2Text',
  ChildTranslationsJsonFeature3Text = 'childTranslationsJson___feature3Text',
  ChildTranslationsJsonEnroll = 'childTranslationsJson___enroll',
  ChildTranslationsJsonFeaturesTitle = 'childTranslationsJson___featuresTitle',
  ChildTranslationsJsonFeaturedCoursesTitle = 'childTranslationsJson___featuredCoursesTitle',
  ChildTranslationsJsonUrlTelegram = 'childTranslationsJson___urlTelegram',
  ChildTranslationsJsonUrlTwitter = 'childTranslationsJson___urlTwitter',
  ChildTranslationsJsonUrlFacebook = 'childTranslationsJson___urlFacebook',
  ChildTranslationsJsonUrlYoutube = 'childTranslationsJson___urlYoutube',
  ChildTranslationsJsonStartCourse = 'childTranslationsJson___startCourse',
  ChildTranslationsJsonLevel1 = 'childTranslationsJson___level1',
  ChildTranslationsJsonLevel2 = 'childTranslationsJson___level2',
  ChildTranslationsJsonLevel3 = 'childTranslationsJson___level3',
  ChildTranslationsJsonLevel = 'childTranslationsJson___level',
  ChildTranslationsJsonTrack = 'childTranslationsJson___track',
  ChildTranslationsJsonLocalePath = 'childTranslationsJson___localePath',
  ChildTranslationsJsonLocaleName = 'childTranslationsJson___localeName',
  ChildTranslationsJsonToOtherLanguageCta = 'childTranslationsJson___toOtherLanguageCTA',
  ChildTranslationsJsonTracksPageTitle = 'childTranslationsJson___tracksPageTitle',
  ChildTranslationsJsonTracksPageDescription = 'childTranslationsJson___tracksPageDescription',
  ChildTranslationsJsonFocus = 'childTranslationsJson___focus',
  ChildTranslationsJsonNextCourse = 'childTranslationsJson___nextCourse',
  ChildTranslationsJsonTakeQuiz = 'childTranslationsJson___takeQuiz',
  ChildTranslationsJsonQuiz = 'childTranslationsJson___quiz',
  ChildTranslationsJsonQuizTrue = 'childTranslationsJson___quizTrue',
  ChildTranslationsJsonQuizFalse = 'childTranslationsJson___quizFalse',
  ChildTranslationsJsonFillintheblankTitle = 'childTranslationsJson___fillintheblankTitle',
  ChildTranslationsJsonReadIn = 'childTranslationsJson___readIn',
  ChildTranslationsJsonDifficulty1 = 'childTranslationsJson___difficulty1',
  ChildTranslationsJsonDifficulty2 = 'childTranslationsJson___difficulty2',
  ChildTranslationsJsonQuizCta = 'childTranslationsJson___quizCTA',
  ChildTranslationsJsonNewsletterSuccess = 'childTranslationsJson___newsletterSuccess',
  ChildTranslationsJsonNewsletterSubscribed = 'childTranslationsJson___newsletterSubscribed',
  ChildTranslationsJsonNewsletterEmailNotValid = 'childTranslationsJson___newsletterEmailNotValid',
  ChildTranslationsJsonFillInTheBlankTitle = 'childTranslationsJson___fillInTheBlankTitle',
  ChildTranslationsJsonChooseACategoryTitle = 'childTranslationsJson___chooseACategoryTitle',
  ChildTranslationsJsonAssessmentPerfect = 'childTranslationsJson___assessmentPerfect',
  ChildTranslationsJsonAssessmentVeryGood = 'childTranslationsJson___assessmentVeryGood',
  ChildTranslationsJsonAssessmentGood = 'childTranslationsJson___assessmentGood',
  ChildTranslationsJsonYourScore = 'childTranslationsJson___yourScore',
  ChildTranslationsJsonYourLastScore = 'childTranslationsJson___yourLastScore',
  ChildTranslationsJsonGrade = 'childTranslationsJson___grade',
  ChildTranslationsJsonAverage = 'childTranslationsJson___average',
  ChildTranslationsJsonAssessmentFail = 'childTranslationsJson___assessmentFail',
  ChildTranslationsJsonNextTrack = 'childTranslationsJson___nextTrack',
  ChildTranslationsJsonBackToCourse = 'childTranslationsJson___backToCourse',
  ChildTranslationsJsonRestartQuizs = 'childTranslationsJson___restartQuizs',
  ChildTranslationsJsonSeeYourScore = 'childTranslationsJson___seeYourScore',
  ChildTranslationsJsonGoToTop = 'childTranslationsJson___goToTop',
  ChildTranslationsJsonTabTranslation = 'childTranslationsJson___tabTranslation',
  ChildTranslationsJsonTabTranscription = 'childTranslationsJson___tabTranscription',
  ChildTranslationsJsonTabVocabulary = 'childTranslationsJson___tabVocabulary',
  ChildTranslationsJsonTabAudio = 'childTranslationsJson___tabAudio',
  ChildTranslationsJsonTabCompleted = 'childTranslationsJson___tabCompleted',
  ChildTranslationsJsonContinue = 'childTranslationsJson___continue',
  ChildTranslationsJsonCopyright = 'childTranslationsJson___copyright',
  ChildTranslationsJsonQuizTitle = 'childTranslationsJson___quizTitle',
  ChildTranslationsJsonProgress = 'childTranslationsJson___progress',
  ChildTranslationsJsonNext = 'childTranslationsJson___next',
  ChildTranslationsJsonICompletedTheChapter = 'childTranslationsJson___iCompletedTheChapter',
  ChildTranslationsJsonChapter = 'childTranslationsJson___chapter',
  ChildTranslationsJsonCourse = 'childTranslationsJson___course',
  ChildTranslationsJsonGoToTracks = 'childTranslationsJson___goToTracks',
  ChildTranslationsJsonCongratulations = 'childTranslationsJson___congratulations',
  ChildTranslationsJsonCongratulationsCta = 'childTranslationsJson___congratulationsCTA',
  ChildTranslationsJsonTakeExam = 'childTranslationsJson___takeExam',
  ChildTranslationsJsonAboutUsPageTitle = 'childTranslationsJson___aboutUsPageTitle',
  ChildTranslationsJsonAboutUsPageContent = 'childTranslationsJson___aboutUsPageContent',
  ChildTranslationsJsonListenAudio = 'childTranslationsJson___listenAudio',
  ChildTranslationsJsonDownloadAudio = 'childTranslationsJson___downloadAudio',
  ChildTranslationsJsonHere = 'childTranslationsJson___here',
  ChildTranslationsJsonClickHere = 'childTranslationsJson___clickHere',
  ChildTranslationsJsonTrackLevel = 'childTranslationsJson___trackLevel',
  ChildTranslationsJsonNextHelp = 'childTranslationsJson___nextHelp',
  ChildTranslationsJsonChapterAudio = 'childTranslationsJson___chapterAudio',
  ChildTranslationsJsonSiteContentPresentation = 'childTranslationsJson___siteContentPresentation',
  ChildTranslationsJsonHomeContentTitle = 'childTranslationsJson___homeContentTitle',
  ChildTranslationsJsonChooseAnswer = 'childTranslationsJson___chooseAnswer',
  ChildTranslationsJsonLocale = 'childTranslationsJson___locale',
}

export type TFileFilterInput = {
  readonly birthtime: Maybe<TDateQueryOperatorInput>
  readonly birthtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly sourceInstanceName: Maybe<TStringQueryOperatorInput>
  readonly absolutePath: Maybe<TStringQueryOperatorInput>
  readonly relativePath: Maybe<TStringQueryOperatorInput>
  readonly extension: Maybe<TStringQueryOperatorInput>
  readonly size: Maybe<TIntQueryOperatorInput>
  readonly prettySize: Maybe<TStringQueryOperatorInput>
  readonly modifiedTime: Maybe<TDateQueryOperatorInput>
  readonly accessTime: Maybe<TDateQueryOperatorInput>
  readonly changeTime: Maybe<TDateQueryOperatorInput>
  readonly birthTime: Maybe<TDateQueryOperatorInput>
  readonly root: Maybe<TStringQueryOperatorInput>
  readonly dir: Maybe<TStringQueryOperatorInput>
  readonly base: Maybe<TStringQueryOperatorInput>
  readonly ext: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly relativeDirectory: Maybe<TStringQueryOperatorInput>
  readonly dev: Maybe<TIntQueryOperatorInput>
  readonly mode: Maybe<TIntQueryOperatorInput>
  readonly nlink: Maybe<TIntQueryOperatorInput>
  readonly uid: Maybe<TIntQueryOperatorInput>
  readonly gid: Maybe<TIntQueryOperatorInput>
  readonly rdev: Maybe<TIntQueryOperatorInput>
  readonly blksize: Maybe<TIntQueryOperatorInput>
  readonly ino: Maybe<TIntQueryOperatorInput>
  readonly blocks: Maybe<TIntQueryOperatorInput>
  readonly atimeMs: Maybe<TFloatQueryOperatorInput>
  readonly mtimeMs: Maybe<TFloatQueryOperatorInput>
  readonly ctimeMs: Maybe<TFloatQueryOperatorInput>
  readonly atime: Maybe<TDateQueryOperatorInput>
  readonly mtime: Maybe<TDateQueryOperatorInput>
  readonly ctime: Maybe<TDateQueryOperatorInput>
  readonly publicURL: Maybe<TStringQueryOperatorInput>
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly childTranslationsJson: Maybe<TTranslationsJsonFilterInput>
}

export type TFileGroupConnection = {
  __typename?: 'FileGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TFileEdge>
  readonly nodes: ReadonlyArray<TFile>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TFileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TFileFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TFloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>
  readonly ne: Maybe<Scalars['Float']>
  readonly gt: Maybe<Scalars['Float']>
  readonly gte: Maybe<Scalars['Float']>
  readonly lt: Maybe<Scalars['Float']>
  readonly lte: Maybe<Scalars['Float']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>
}

export type TGraphQlSource = TNode & {
  __typename?: 'GraphQLSource'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly typeName: Maybe<Scalars['String']>
  readonly fieldName: Maybe<Scalars['String']>
}

export type TGraphQlSourceConnection = {
  __typename?: 'GraphQLSourceConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TGraphQlSourceEdge>
  readonly nodes: ReadonlyArray<TGraphQlSource>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TGraphQlSourceGroupConnection>
}

export type TGraphQlSourceConnectionDistinctArgs = {
  field: TGraphQlSourceFieldsEnum
}

export type TGraphQlSourceConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TGraphQlSourceFieldsEnum
}

export type TGraphQlSourceEdge = {
  __typename?: 'GraphQLSourceEdge'
  readonly next: Maybe<TGraphQlSource>
  readonly node: TGraphQlSource
  readonly previous: Maybe<TGraphQlSource>
}

export enum TGraphQlSourceFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  TypeName = 'typeName',
  FieldName = 'fieldName',
}

export type TGraphQlSourceFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly typeName: Maybe<TStringQueryOperatorInput>
  readonly fieldName: Maybe<TStringQueryOperatorInput>
}

export type TGraphQlSourceGroupConnection = {
  __typename?: 'GraphQLSourceGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TGraphQlSourceEdge>
  readonly nodes: ReadonlyArray<TGraphQlSource>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TGraphQlSourceSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TGraphQlSourceFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TInternal = {
  __typename?: 'Internal'
  readonly content: Maybe<Scalars['String']>
  readonly contentDigest: Scalars['String']
  readonly description: Maybe<Scalars['String']>
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ignoreType: Maybe<Scalars['Boolean']>
  readonly mediaType: Maybe<Scalars['String']>
  readonly owner: Scalars['String']
  readonly type: Scalars['String']
}

export type TInternalFilterInput = {
  readonly content: Maybe<TStringQueryOperatorInput>
  readonly contentDigest: Maybe<TStringQueryOperatorInput>
  readonly description: Maybe<TStringQueryOperatorInput>
  readonly fieldOwners: Maybe<TStringQueryOperatorInput>
  readonly ignoreType: Maybe<TBooleanQueryOperatorInput>
  readonly mediaType: Maybe<TStringQueryOperatorInput>
  readonly owner: Maybe<TStringQueryOperatorInput>
  readonly type: Maybe<TStringQueryOperatorInput>
}

export type TIntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>
  readonly ne: Maybe<Scalars['Int']>
  readonly gt: Maybe<Scalars['Int']>
  readonly gte: Maybe<Scalars['Int']>
  readonly lt: Maybe<Scalars['Int']>
  readonly lte: Maybe<Scalars['Int']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>
}

/** Node Interface */
export type TNode = {
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
}

export type TNodeFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
}

export type TNodeFilterListInput = {
  readonly elemMatch: Maybe<TNodeFilterInput>
}

export type TPageInfo = {
  __typename?: 'PageInfo'
  readonly currentPage: Scalars['Int']
  readonly hasPreviousPage: Scalars['Boolean']
  readonly hasNextPage: Scalars['Boolean']
  readonly itemCount: Scalars['Int']
  readonly pageCount: Scalars['Int']
  readonly perPage: Maybe<Scalars['Int']>
}

export type TQuery = {
  __typename?: 'Query'
  readonly file: Maybe<TFile>
  readonly allFile: Maybe<TFileConnection>
  readonly sitePage: Maybe<TSitePage>
  readonly allSitePage: Maybe<TSitePageConnection>
  readonly sitePlugin: Maybe<TSitePlugin>
  readonly allSitePlugin: Maybe<TSitePluginConnection>
  readonly site: Maybe<TSite>
  readonly allSite: Maybe<TSiteConnection>
  readonly directory: Maybe<TDirectory>
  readonly allDirectory: Maybe<TDirectoryConnection>
  readonly translationsJson: Maybe<TTranslationsJson>
  readonly allTranslationsJson: Maybe<TTranslationsJsonConnection>
  readonly graphQlSource: Maybe<TGraphQlSource>
  readonly allGraphQlSource: Maybe<TGraphQlSourceConnection>
  readonly api: Maybe<TApi>
}

export type TQueryFileArgs = {
  birthtime: Maybe<TDateQueryOperatorInput>
  birthtimeMs: Maybe<TFloatQueryOperatorInput>
  sourceInstanceName: Maybe<TStringQueryOperatorInput>
  absolutePath: Maybe<TStringQueryOperatorInput>
  relativePath: Maybe<TStringQueryOperatorInput>
  extension: Maybe<TStringQueryOperatorInput>
  size: Maybe<TIntQueryOperatorInput>
  prettySize: Maybe<TStringQueryOperatorInput>
  modifiedTime: Maybe<TDateQueryOperatorInput>
  accessTime: Maybe<TDateQueryOperatorInput>
  changeTime: Maybe<TDateQueryOperatorInput>
  birthTime: Maybe<TDateQueryOperatorInput>
  root: Maybe<TStringQueryOperatorInput>
  dir: Maybe<TStringQueryOperatorInput>
  base: Maybe<TStringQueryOperatorInput>
  ext: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  relativeDirectory: Maybe<TStringQueryOperatorInput>
  dev: Maybe<TIntQueryOperatorInput>
  mode: Maybe<TIntQueryOperatorInput>
  nlink: Maybe<TIntQueryOperatorInput>
  uid: Maybe<TIntQueryOperatorInput>
  gid: Maybe<TIntQueryOperatorInput>
  rdev: Maybe<TIntQueryOperatorInput>
  blksize: Maybe<TIntQueryOperatorInput>
  ino: Maybe<TIntQueryOperatorInput>
  blocks: Maybe<TIntQueryOperatorInput>
  atimeMs: Maybe<TFloatQueryOperatorInput>
  mtimeMs: Maybe<TFloatQueryOperatorInput>
  ctimeMs: Maybe<TFloatQueryOperatorInput>
  atime: Maybe<TDateQueryOperatorInput>
  mtime: Maybe<TDateQueryOperatorInput>
  ctime: Maybe<TDateQueryOperatorInput>
  publicURL: Maybe<TStringQueryOperatorInput>
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  childTranslationsJson: Maybe<TTranslationsJsonFilterInput>
}

export type TQueryAllFileArgs = {
  filter: Maybe<TFileFilterInput>
  sort: Maybe<TFileSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySitePageArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  path: Maybe<TStringQueryOperatorInput>
  internalComponentName: Maybe<TStringQueryOperatorInput>
  component: Maybe<TStringQueryOperatorInput>
  componentChunkName: Maybe<TStringQueryOperatorInput>
  isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>
  context: Maybe<TSitePageContextFilterInput>
  pluginCreator: Maybe<TSitePluginFilterInput>
  pluginCreatorId: Maybe<TStringQueryOperatorInput>
  componentPath: Maybe<TStringQueryOperatorInput>
}

export type TQueryAllSitePageArgs = {
  filter: Maybe<TSitePageFilterInput>
  sort: Maybe<TSitePageSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySitePluginArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  resolve: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  version: Maybe<TStringQueryOperatorInput>
  pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>
  nodeAPIs: Maybe<TStringQueryOperatorInput>
  browserAPIs: Maybe<TStringQueryOperatorInput>
  ssrAPIs: Maybe<TStringQueryOperatorInput>
  pluginFilepath: Maybe<TStringQueryOperatorInput>
  packageJson: Maybe<TSitePluginPackageJsonFilterInput>
}

export type TQueryAllSitePluginArgs = {
  filter: Maybe<TSitePluginFilterInput>
  sort: Maybe<TSitePluginSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQuerySiteArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  siteMetadata: Maybe<TSiteSiteMetadataFilterInput>
  port: Maybe<TIntQueryOperatorInput>
  host: Maybe<TStringQueryOperatorInput>
  polyfill: Maybe<TBooleanQueryOperatorInput>
  pathPrefix: Maybe<TStringQueryOperatorInput>
  buildTime: Maybe<TDateQueryOperatorInput>
}

export type TQueryAllSiteArgs = {
  filter: Maybe<TSiteFilterInput>
  sort: Maybe<TSiteSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQueryDirectoryArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  sourceInstanceName: Maybe<TStringQueryOperatorInput>
  absolutePath: Maybe<TStringQueryOperatorInput>
  relativePath: Maybe<TStringQueryOperatorInput>
  extension: Maybe<TStringQueryOperatorInput>
  size: Maybe<TIntQueryOperatorInput>
  prettySize: Maybe<TStringQueryOperatorInput>
  modifiedTime: Maybe<TDateQueryOperatorInput>
  accessTime: Maybe<TDateQueryOperatorInput>
  changeTime: Maybe<TDateQueryOperatorInput>
  birthTime: Maybe<TDateQueryOperatorInput>
  root: Maybe<TStringQueryOperatorInput>
  dir: Maybe<TStringQueryOperatorInput>
  base: Maybe<TStringQueryOperatorInput>
  ext: Maybe<TStringQueryOperatorInput>
  name: Maybe<TStringQueryOperatorInput>
  relativeDirectory: Maybe<TStringQueryOperatorInput>
  dev: Maybe<TIntQueryOperatorInput>
  mode: Maybe<TIntQueryOperatorInput>
  nlink: Maybe<TIntQueryOperatorInput>
  uid: Maybe<TIntQueryOperatorInput>
  gid: Maybe<TIntQueryOperatorInput>
  rdev: Maybe<TIntQueryOperatorInput>
  blksize: Maybe<TIntQueryOperatorInput>
  ino: Maybe<TIntQueryOperatorInput>
  blocks: Maybe<TIntQueryOperatorInput>
  atimeMs: Maybe<TFloatQueryOperatorInput>
  mtimeMs: Maybe<TFloatQueryOperatorInput>
  ctimeMs: Maybe<TFloatQueryOperatorInput>
  birthtimeMs: Maybe<TFloatQueryOperatorInput>
  atime: Maybe<TDateQueryOperatorInput>
  mtime: Maybe<TDateQueryOperatorInput>
  ctime: Maybe<TDateQueryOperatorInput>
  birthtime: Maybe<TDateQueryOperatorInput>
}

export type TQueryAllDirectoryArgs = {
  filter: Maybe<TDirectoryFilterInput>
  sort: Maybe<TDirectorySortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQueryTranslationsJsonArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  homeTitle: Maybe<TStringQueryOperatorInput>
  homeDescription: Maybe<TStringQueryOperatorInput>
  homeEmailTitle: Maybe<TStringQueryOperatorInput>
  homeEmailPlaceHolder: Maybe<TStringQueryOperatorInput>
  homeStartTrack: Maybe<TStringQueryOperatorInput>
  siteName: Maybe<TStringQueryOperatorInput>
  siteSlogan: Maybe<TStringQueryOperatorInput>
  footerSocialTitle: Maybe<TStringQueryOperatorInput>
  homeFooterCTA: Maybe<TStringQueryOperatorInput>
  start: Maybe<TStringQueryOperatorInput>
  soon: Maybe<TStringQueryOperatorInput>
  aboutUs: Maybe<TStringQueryOperatorInput>
  tracks: Maybe<TStringQueryOperatorInput>
  courses: Maybe<TStringQueryOperatorInput>
  connect: Maybe<TStringQueryOperatorInput>
  feature1Title: Maybe<TStringQueryOperatorInput>
  feature2Title: Maybe<TStringQueryOperatorInput>
  feature3Title: Maybe<TStringQueryOperatorInput>
  feature1Text: Maybe<TStringQueryOperatorInput>
  feature2Text: Maybe<TStringQueryOperatorInput>
  feature3Text: Maybe<TStringQueryOperatorInput>
  enroll: Maybe<TStringQueryOperatorInput>
  featuresTitle: Maybe<TStringQueryOperatorInput>
  featuredCoursesTitle: Maybe<TStringQueryOperatorInput>
  urlTelegram: Maybe<TStringQueryOperatorInput>
  urlTwitter: Maybe<TStringQueryOperatorInput>
  urlFacebook: Maybe<TStringQueryOperatorInput>
  urlYoutube: Maybe<TStringQueryOperatorInput>
  startCourse: Maybe<TStringQueryOperatorInput>
  level1: Maybe<TStringQueryOperatorInput>
  level2: Maybe<TStringQueryOperatorInput>
  level3: Maybe<TStringQueryOperatorInput>
  level: Maybe<TStringQueryOperatorInput>
  track: Maybe<TStringQueryOperatorInput>
  localePath: Maybe<TStringQueryOperatorInput>
  localeName: Maybe<TStringQueryOperatorInput>
  toOtherLanguageCTA: Maybe<TStringQueryOperatorInput>
  tracksPageTitle: Maybe<TStringQueryOperatorInput>
  tracksPageDescription: Maybe<TStringQueryOperatorInput>
  focus: Maybe<TStringQueryOperatorInput>
  nextCourse: Maybe<TStringQueryOperatorInput>
  takeQuiz: Maybe<TStringQueryOperatorInput>
  quiz: Maybe<TStringQueryOperatorInput>
  quizTrue: Maybe<TStringQueryOperatorInput>
  quizFalse: Maybe<TStringQueryOperatorInput>
  fillintheblankTitle: Maybe<TStringQueryOperatorInput>
  readIn: Maybe<TStringQueryOperatorInput>
  difficulty1: Maybe<TStringQueryOperatorInput>
  difficulty2: Maybe<TStringQueryOperatorInput>
  quizCTA: Maybe<TStringQueryOperatorInput>
  newsletterSuccess: Maybe<TStringQueryOperatorInput>
  newsletterSubscribed: Maybe<TStringQueryOperatorInput>
  newsletterEmailNotValid: Maybe<TStringQueryOperatorInput>
  fillInTheBlankTitle: Maybe<TStringQueryOperatorInput>
  chooseACategoryTitle: Maybe<TStringQueryOperatorInput>
  assessmentPerfect: Maybe<TStringQueryOperatorInput>
  assessmentVeryGood: Maybe<TStringQueryOperatorInput>
  assessmentGood: Maybe<TStringQueryOperatorInput>
  yourScore: Maybe<TStringQueryOperatorInput>
  yourLastScore: Maybe<TStringQueryOperatorInput>
  grade: Maybe<TStringQueryOperatorInput>
  average: Maybe<TStringQueryOperatorInput>
  assessmentFail: Maybe<TStringQueryOperatorInput>
  nextTrack: Maybe<TStringQueryOperatorInput>
  backToCourse: Maybe<TStringQueryOperatorInput>
  restartQuizs: Maybe<TStringQueryOperatorInput>
  seeYourScore: Maybe<TStringQueryOperatorInput>
  goToTop: Maybe<TStringQueryOperatorInput>
  tabTranslation: Maybe<TStringQueryOperatorInput>
  tabTranscription: Maybe<TStringQueryOperatorInput>
  tabVocabulary: Maybe<TStringQueryOperatorInput>
  tabAudio: Maybe<TStringQueryOperatorInput>
  tabCompleted: Maybe<TStringQueryOperatorInput>
  continue: Maybe<TStringQueryOperatorInput>
  copyright: Maybe<TStringQueryOperatorInput>
  quizTitle: Maybe<TStringQueryOperatorInput>
  progress: Maybe<TStringQueryOperatorInput>
  next: Maybe<TStringQueryOperatorInput>
  iCompletedTheChapter: Maybe<TStringQueryOperatorInput>
  chapter: Maybe<TStringQueryOperatorInput>
  course: Maybe<TStringQueryOperatorInput>
  goToTracks: Maybe<TStringQueryOperatorInput>
  congratulations: Maybe<TStringQueryOperatorInput>
  congratulationsCTA: Maybe<TStringQueryOperatorInput>
  takeExam: Maybe<TStringQueryOperatorInput>
  aboutUsPageTitle: Maybe<TStringQueryOperatorInput>
  aboutUsPageContent: Maybe<TStringQueryOperatorInput>
  listenAudio: Maybe<TStringQueryOperatorInput>
  downloadAudio: Maybe<TStringQueryOperatorInput>
  here: Maybe<TStringQueryOperatorInput>
  clickHere: Maybe<TStringQueryOperatorInput>
  trackLevel: Maybe<TStringQueryOperatorInput>
  nextHelp: Maybe<TStringQueryOperatorInput>
  chapterAudio: Maybe<TStringQueryOperatorInput>
  siteContentPresentation: Maybe<TStringQueryOperatorInput>
  homeContentTitle: Maybe<TStringQueryOperatorInput>
  chooseAnswer: Maybe<TStringQueryOperatorInput>
  locale: Maybe<TStringQueryOperatorInput>
}

export type TQueryAllTranslationsJsonArgs = {
  filter: Maybe<TTranslationsJsonFilterInput>
  sort: Maybe<TTranslationsJsonSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TQueryGraphQlSourceArgs = {
  id: Maybe<TStringQueryOperatorInput>
  parent: Maybe<TNodeFilterInput>
  children: Maybe<TNodeFilterListInput>
  internal: Maybe<TInternalFilterInput>
  typeName: Maybe<TStringQueryOperatorInput>
  fieldName: Maybe<TStringQueryOperatorInput>
}

export type TQueryAllGraphQlSourceArgs = {
  filter: Maybe<TGraphQlSourceFilterInput>
  sort: Maybe<TGraphQlSourceSortInput>
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
}

export type TSite = TNode & {
  __typename?: 'Site'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly siteMetadata: Maybe<TSiteSiteMetadata>
  readonly port: Maybe<Scalars['Int']>
  readonly host: Maybe<Scalars['String']>
  readonly polyfill: Maybe<Scalars['Boolean']>
  readonly pathPrefix: Maybe<Scalars['String']>
  readonly buildTime: Maybe<Scalars['Date']>
}

export type TSiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>
  fromNow: Maybe<Scalars['Boolean']>
  difference: Maybe<Scalars['String']>
  locale: Maybe<Scalars['String']>
}

export type TSiteConnection = {
  __typename?: 'SiteConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSiteEdge>
  readonly nodes: ReadonlyArray<TSite>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSiteGroupConnection>
}

export type TSiteConnectionDistinctArgs = {
  field: TSiteFieldsEnum
}

export type TSiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSiteFieldsEnum
}

export type TSiteEdge = {
  __typename?: 'SiteEdge'
  readonly next: Maybe<TSite>
  readonly node: TSite
  readonly previous: Maybe<TSite>
}

export enum TSiteFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  Port = 'port',
  Host = 'host',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  BuildTime = 'buildTime',
}

export type TSiteFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly siteMetadata: Maybe<TSiteSiteMetadataFilterInput>
  readonly port: Maybe<TIntQueryOperatorInput>
  readonly host: Maybe<TStringQueryOperatorInput>
  readonly polyfill: Maybe<TBooleanQueryOperatorInput>
  readonly pathPrefix: Maybe<TStringQueryOperatorInput>
  readonly buildTime: Maybe<TDateQueryOperatorInput>
}

export type TSiteGroupConnection = {
  __typename?: 'SiteGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSiteEdge>
  readonly nodes: ReadonlyArray<TSite>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePage = TNode & {
  __typename?: 'SitePage'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly path: Maybe<Scalars['String']>
  readonly internalComponentName: Maybe<Scalars['String']>
  readonly component: Maybe<Scalars['String']>
  readonly componentChunkName: Maybe<Scalars['String']>
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>
  readonly context: Maybe<TSitePageContext>
  readonly pluginCreator: Maybe<TSitePlugin>
  readonly pluginCreatorId: Maybe<Scalars['String']>
  readonly componentPath: Maybe<Scalars['String']>
}

export type TSitePageConnection = {
  __typename?: 'SitePageConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePageEdge>
  readonly nodes: ReadonlyArray<TSitePage>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSitePageGroupConnection>
}

export type TSitePageConnectionDistinctArgs = {
  field: TSitePageFieldsEnum
}

export type TSitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSitePageFieldsEnum
}

export type TSitePageContext = {
  __typename?: 'SitePageContext'
  readonly locale: Maybe<Scalars['String']>
  readonly localePaths: Maybe<TSitePageContextLocalePaths>
  readonly trackId: Maybe<Scalars['String']>
  readonly difficulty: Maybe<Scalars['Int']>
  readonly next: Maybe<TSitePageContextNext>
  readonly slug: Maybe<Scalars['String']>
  readonly id: Maybe<Scalars['String']>
}

export type TSitePageContextFilterInput = {
  readonly locale: Maybe<TStringQueryOperatorInput>
  readonly localePaths: Maybe<TSitePageContextLocalePathsFilterInput>
  readonly trackId: Maybe<TStringQueryOperatorInput>
  readonly difficulty: Maybe<TIntQueryOperatorInput>
  readonly next: Maybe<TSitePageContextNextFilterInput>
  readonly slug: Maybe<TStringQueryOperatorInput>
  readonly id: Maybe<TStringQueryOperatorInput>
}

export type TSitePageContextLocalePaths = {
  __typename?: 'SitePageContextLocalePaths'
  readonly fr: Maybe<Scalars['String']>
}

export type TSitePageContextLocalePathsFilterInput = {
  readonly fr: Maybe<TStringQueryOperatorInput>
}

export type TSitePageContextNext = {
  __typename?: 'SitePageContextNext'
  readonly type: Maybe<Scalars['String']>
  readonly path: Maybe<Scalars['String']>
}

export type TSitePageContextNextFilterInput = {
  readonly type: Maybe<TStringQueryOperatorInput>
  readonly path: Maybe<TStringQueryOperatorInput>
}

export type TSitePageEdge = {
  __typename?: 'SitePageEdge'
  readonly next: Maybe<TSitePage>
  readonly node: TSitePage
  readonly previous: Maybe<TSitePage>
}

export enum TSitePageFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Path = 'path',
  InternalComponentName = 'internalComponentName',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextLocale = 'context___locale',
  ContextLocalePathsFr = 'context___localePaths___fr',
  ContextTrackId = 'context___trackId',
  ContextDifficulty = 'context___difficulty',
  ContextNextType = 'context___next___type',
  ContextNextPath = 'context___next___path',
  ContextSlug = 'context___slug',
  ContextId = 'context___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsTypeName = 'pluginCreator___pluginOptions___typeName',
  PluginCreatorPluginOptionsFieldName = 'pluginCreator___pluginOptions___fieldName',
  PluginCreatorPluginOptionsUrl = 'pluginCreator___pluginOptions___url',
  PluginCreatorPluginOptionsShowSpinner = 'pluginCreator___pluginOptions___showSpinner',
  PluginCreatorPluginOptionsSiteUrl = 'pluginCreator___pluginOptions___siteUrl',
  PluginCreatorPluginOptionsIncludePaths = 'pluginCreator___pluginOptions___includePaths',
  PluginCreatorPluginOptionsLogo = 'pluginCreator___pluginOptions___logo',
  PluginCreatorPluginOptionsInjectHtml = 'pluginCreator___pluginOptions___injectHTML',
  PluginCreatorPluginOptionsIconsAndroid = 'pluginCreator___pluginOptions___icons___android',
  PluginCreatorPluginOptionsIconsAppleIcon = 'pluginCreator___pluginOptions___icons___appleIcon',
  PluginCreatorPluginOptionsIconsAppleStartup = 'pluginCreator___pluginOptions___icons___appleStartup',
  PluginCreatorPluginOptionsIconsCoast = 'pluginCreator___pluginOptions___icons___coast',
  PluginCreatorPluginOptionsIconsFavicons = 'pluginCreator___pluginOptions___icons___favicons',
  PluginCreatorPluginOptionsIconsFirefox = 'pluginCreator___pluginOptions___icons___firefox',
  PluginCreatorPluginOptionsIconsTwitter = 'pluginCreator___pluginOptions___icons___twitter',
  PluginCreatorPluginOptionsIconsYandex = 'pluginCreator___pluginOptions___icons___yandex',
  PluginCreatorPluginOptionsIconsWindows = 'pluginCreator___pluginOptions___icons___windows',
  PluginCreatorPluginOptionsEndpoint = 'pluginCreator___pluginOptions___endpoint',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsDisable = 'pluginCreator___pluginOptions___disable',
  PluginCreatorPluginOptionsSrc = 'pluginCreator___pluginOptions___src',
  PluginCreatorPluginOptionsOnLoad = 'pluginCreator___pluginOptions___onLoad',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath',
}

export type TSitePageFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly path: Maybe<TStringQueryOperatorInput>
  readonly internalComponentName: Maybe<TStringQueryOperatorInput>
  readonly component: Maybe<TStringQueryOperatorInput>
  readonly componentChunkName: Maybe<TStringQueryOperatorInput>
  readonly isCreatedByStatefulCreatePages: Maybe<TBooleanQueryOperatorInput>
  readonly context: Maybe<TSitePageContextFilterInput>
  readonly pluginCreator: Maybe<TSitePluginFilterInput>
  readonly pluginCreatorId: Maybe<TStringQueryOperatorInput>
  readonly componentPath: Maybe<TStringQueryOperatorInput>
}

export type TSitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePageEdge>
  readonly nodes: ReadonlyArray<TSitePage>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSitePageFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TSitePlugin = TNode & {
  __typename?: 'SitePlugin'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly resolve: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly pluginOptions: Maybe<TSitePluginPluginOptions>
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly pluginFilepath: Maybe<Scalars['String']>
  readonly packageJson: Maybe<TSitePluginPackageJson>
}

export type TSitePluginConnection = {
  __typename?: 'SitePluginConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePluginEdge>
  readonly nodes: ReadonlyArray<TSitePlugin>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TSitePluginGroupConnection>
}

export type TSitePluginConnectionDistinctArgs = {
  field: TSitePluginFieldsEnum
}

export type TSitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TSitePluginFieldsEnum
}

export type TSitePluginEdge = {
  __typename?: 'SitePluginEdge'
  readonly next: Maybe<TSitePlugin>
  readonly node: TSitePlugin
  readonly previous: Maybe<TSitePlugin>
}

export enum TSitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsTypeName = 'pluginOptions___typeName',
  PluginOptionsFieldName = 'pluginOptions___fieldName',
  PluginOptionsUrl = 'pluginOptions___url',
  PluginOptionsShowSpinner = 'pluginOptions___showSpinner',
  PluginOptionsSiteUrl = 'pluginOptions___siteUrl',
  PluginOptionsIncludePaths = 'pluginOptions___includePaths',
  PluginOptionsLogo = 'pluginOptions___logo',
  PluginOptionsInjectHtml = 'pluginOptions___injectHTML',
  PluginOptionsIconsAndroid = 'pluginOptions___icons___android',
  PluginOptionsIconsAppleIcon = 'pluginOptions___icons___appleIcon',
  PluginOptionsIconsAppleStartup = 'pluginOptions___icons___appleStartup',
  PluginOptionsIconsCoast = 'pluginOptions___icons___coast',
  PluginOptionsIconsFavicons = 'pluginOptions___icons___favicons',
  PluginOptionsIconsFirefox = 'pluginOptions___icons___firefox',
  PluginOptionsIconsTwitter = 'pluginOptions___icons___twitter',
  PluginOptionsIconsYandex = 'pluginOptions___icons___yandex',
  PluginOptionsIconsWindows = 'pluginOptions___icons___windows',
  PluginOptionsEndpoint = 'pluginOptions___endpoint',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsDisable = 'pluginOptions___disable',
  PluginOptionsSrc = 'pluginOptions___src',
  PluginOptionsOnLoad = 'pluginOptions___onLoad',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonAuthor = 'packageJson___author',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords',
}

export type TSitePluginFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly resolve: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
  readonly pluginOptions: Maybe<TSitePluginPluginOptionsFilterInput>
  readonly nodeAPIs: Maybe<TStringQueryOperatorInput>
  readonly browserAPIs: Maybe<TStringQueryOperatorInput>
  readonly ssrAPIs: Maybe<TStringQueryOperatorInput>
  readonly pluginFilepath: Maybe<TStringQueryOperatorInput>
  readonly packageJson: Maybe<TSitePluginPackageJsonFilterInput>
}

export type TSitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TSitePluginEdge>
  readonly nodes: ReadonlyArray<TSitePlugin>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TSitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson'
  readonly name: Maybe<Scalars['String']>
  readonly description: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
  readonly main: Maybe<Scalars['String']>
  readonly author: Maybe<Scalars['String']>
  readonly license: Maybe<Scalars['String']>
  readonly dependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonDependencies>>
  >
  readonly devDependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonDevDependencies>>
  >
  readonly peerDependencies: Maybe<
    ReadonlyArray<Maybe<TSitePluginPackageJsonPeerDependencies>>
  >
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
}

export type TSitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonDependenciesFilterInput>
}

export type TSitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonDevDependenciesFilterInput>
}

export type TSitePluginPackageJsonFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly description: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
  readonly main: Maybe<TStringQueryOperatorInput>
  readonly author: Maybe<TStringQueryOperatorInput>
  readonly license: Maybe<TStringQueryOperatorInput>
  readonly dependencies: Maybe<
    TSitePluginPackageJsonDependenciesFilterListInput
  >
  readonly devDependencies: Maybe<
    TSitePluginPackageJsonDevDependenciesFilterListInput
  >
  readonly peerDependencies: Maybe<
    TSitePluginPackageJsonPeerDependenciesFilterListInput
  >
  readonly keywords: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies'
  readonly name: Maybe<Scalars['String']>
  readonly version: Maybe<Scalars['String']>
}

export type TSitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly version: Maybe<TStringQueryOperatorInput>
}

export type TSitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<TSitePluginPackageJsonPeerDependenciesFilterInput>
}

export type TSitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions'
  readonly path: Maybe<Scalars['String']>
  readonly typeName: Maybe<Scalars['String']>
  readonly fieldName: Maybe<Scalars['String']>
  readonly url: Maybe<Scalars['String']>
  readonly showSpinner: Maybe<Scalars['Boolean']>
  readonly siteUrl: Maybe<Scalars['String']>
  readonly includePaths: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly logo: Maybe<Scalars['String']>
  readonly injectHTML: Maybe<Scalars['Boolean']>
  readonly icons: Maybe<TSitePluginPluginOptionsIcons>
  readonly endpoint: Maybe<Scalars['String']>
  readonly name: Maybe<Scalars['String']>
  readonly short_name: Maybe<Scalars['String']>
  readonly start_url: Maybe<Scalars['String']>
  readonly background_color: Maybe<Scalars['String']>
  readonly theme_color: Maybe<Scalars['String']>
  readonly display: Maybe<Scalars['String']>
  readonly icon: Maybe<Scalars['String']>
  readonly disable: Maybe<Scalars['Boolean']>
  readonly src: Maybe<Scalars['String']>
  readonly onLoad: Maybe<Scalars['String']>
  readonly pathCheck: Maybe<Scalars['Boolean']>
}

export type TSitePluginPluginOptionsFilterInput = {
  readonly path: Maybe<TStringQueryOperatorInput>
  readonly typeName: Maybe<TStringQueryOperatorInput>
  readonly fieldName: Maybe<TStringQueryOperatorInput>
  readonly url: Maybe<TStringQueryOperatorInput>
  readonly showSpinner: Maybe<TBooleanQueryOperatorInput>
  readonly siteUrl: Maybe<TStringQueryOperatorInput>
  readonly includePaths: Maybe<TStringQueryOperatorInput>
  readonly logo: Maybe<TStringQueryOperatorInput>
  readonly injectHTML: Maybe<TBooleanQueryOperatorInput>
  readonly icons: Maybe<TSitePluginPluginOptionsIconsFilterInput>
  readonly endpoint: Maybe<TStringQueryOperatorInput>
  readonly name: Maybe<TStringQueryOperatorInput>
  readonly short_name: Maybe<TStringQueryOperatorInput>
  readonly start_url: Maybe<TStringQueryOperatorInput>
  readonly background_color: Maybe<TStringQueryOperatorInput>
  readonly theme_color: Maybe<TStringQueryOperatorInput>
  readonly display: Maybe<TStringQueryOperatorInput>
  readonly icon: Maybe<TStringQueryOperatorInput>
  readonly disable: Maybe<TBooleanQueryOperatorInput>
  readonly src: Maybe<TStringQueryOperatorInput>
  readonly onLoad: Maybe<TStringQueryOperatorInput>
  readonly pathCheck: Maybe<TBooleanQueryOperatorInput>
}

export type TSitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons'
  readonly android: Maybe<Scalars['Boolean']>
  readonly appleIcon: Maybe<Scalars['Boolean']>
  readonly appleStartup: Maybe<Scalars['Boolean']>
  readonly coast: Maybe<Scalars['Boolean']>
  readonly favicons: Maybe<Scalars['Boolean']>
  readonly firefox: Maybe<Scalars['Boolean']>
  readonly twitter: Maybe<Scalars['Boolean']>
  readonly yandex: Maybe<Scalars['Boolean']>
  readonly windows: Maybe<Scalars['Boolean']>
}

export type TSitePluginPluginOptionsIconsFilterInput = {
  readonly android: Maybe<TBooleanQueryOperatorInput>
  readonly appleIcon: Maybe<TBooleanQueryOperatorInput>
  readonly appleStartup: Maybe<TBooleanQueryOperatorInput>
  readonly coast: Maybe<TBooleanQueryOperatorInput>
  readonly favicons: Maybe<TBooleanQueryOperatorInput>
  readonly firefox: Maybe<TBooleanQueryOperatorInput>
  readonly twitter: Maybe<TBooleanQueryOperatorInput>
  readonly yandex: Maybe<TBooleanQueryOperatorInput>
  readonly windows: Maybe<TBooleanQueryOperatorInput>
}

export type TSitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSitePluginFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export type TSiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata'
  readonly title: Maybe<Scalars['String']>
  readonly siteUrl: Maybe<Scalars['String']>
}

export type TSiteSiteMetadataFilterInput = {
  readonly title: Maybe<TStringQueryOperatorInput>
  readonly siteUrl: Maybe<TStringQueryOperatorInput>
}

export type TSiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TSiteFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}

export enum TSortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type TStringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>
  readonly ne: Maybe<Scalars['String']>
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>
  readonly regex: Maybe<Scalars['String']>
  readonly glob: Maybe<Scalars['String']>
}

export type TTranslationsJson = TNode & {
  __typename?: 'TranslationsJson'
  readonly id: Scalars['ID']
  readonly parent: Maybe<TNode>
  readonly children: ReadonlyArray<TNode>
  readonly internal: TInternal
  readonly homeTitle: Maybe<Scalars['String']>
  readonly homeDescription: Maybe<Scalars['String']>
  readonly homeEmailTitle: Maybe<Scalars['String']>
  readonly homeEmailPlaceHolder: Maybe<Scalars['String']>
  readonly homeStartTrack: Maybe<Scalars['String']>
  readonly siteName: Maybe<Scalars['String']>
  readonly siteSlogan: Maybe<Scalars['String']>
  readonly footerSocialTitle: Maybe<Scalars['String']>
  readonly homeFooterCTA: Maybe<Scalars['String']>
  readonly start: Maybe<Scalars['String']>
  readonly soon: Maybe<Scalars['String']>
  readonly aboutUs: Maybe<Scalars['String']>
  readonly tracks: Maybe<Scalars['String']>
  readonly courses: Maybe<Scalars['String']>
  readonly connect: Maybe<Scalars['String']>
  readonly feature1Title: Maybe<Scalars['String']>
  readonly feature2Title: Maybe<Scalars['String']>
  readonly feature3Title: Maybe<Scalars['String']>
  readonly feature1Text: Maybe<Scalars['String']>
  readonly feature2Text: Maybe<Scalars['String']>
  readonly feature3Text: Maybe<Scalars['String']>
  readonly enroll: Maybe<Scalars['String']>
  readonly featuresTitle: Maybe<Scalars['String']>
  readonly featuredCoursesTitle: Maybe<Scalars['String']>
  readonly urlTelegram: Maybe<Scalars['String']>
  readonly urlTwitter: Maybe<Scalars['String']>
  readonly urlFacebook: Maybe<Scalars['String']>
  readonly urlYoutube: Maybe<Scalars['String']>
  readonly startCourse: Maybe<Scalars['String']>
  readonly level1: Maybe<Scalars['String']>
  readonly level2: Maybe<Scalars['String']>
  readonly level3: Maybe<Scalars['String']>
  readonly level: Maybe<Scalars['String']>
  readonly track: Maybe<Scalars['String']>
  readonly localePath: Maybe<Scalars['String']>
  readonly localeName: Maybe<Scalars['String']>
  readonly toOtherLanguageCTA: Maybe<Scalars['String']>
  readonly tracksPageTitle: Maybe<Scalars['String']>
  readonly tracksPageDescription: Maybe<Scalars['String']>
  readonly focus: Maybe<Scalars['String']>
  readonly nextCourse: Maybe<Scalars['String']>
  readonly takeQuiz: Maybe<Scalars['String']>
  readonly quiz: Maybe<Scalars['String']>
  readonly quizTrue: Maybe<Scalars['String']>
  readonly quizFalse: Maybe<Scalars['String']>
  readonly fillintheblankTitle: Maybe<Scalars['String']>
  readonly readIn: Maybe<Scalars['String']>
  readonly difficulty1: Maybe<Scalars['String']>
  readonly difficulty2: Maybe<Scalars['String']>
  readonly quizCTA: Maybe<Scalars['String']>
  readonly newsletterSuccess: Maybe<Scalars['String']>
  readonly newsletterSubscribed: Maybe<Scalars['String']>
  readonly newsletterEmailNotValid: Maybe<Scalars['String']>
  readonly fillInTheBlankTitle: Maybe<Scalars['String']>
  readonly chooseACategoryTitle: Maybe<Scalars['String']>
  readonly assessmentPerfect: Maybe<Scalars['String']>
  readonly assessmentVeryGood: Maybe<Scalars['String']>
  readonly assessmentGood: Maybe<Scalars['String']>
  readonly yourScore: Maybe<Scalars['String']>
  readonly yourLastScore: Maybe<Scalars['String']>
  readonly grade: Maybe<Scalars['String']>
  readonly average: Maybe<Scalars['String']>
  readonly assessmentFail: Maybe<Scalars['String']>
  readonly nextTrack: Maybe<Scalars['String']>
  readonly backToCourse: Maybe<Scalars['String']>
  readonly restartQuizs: Maybe<Scalars['String']>
  readonly seeYourScore: Maybe<Scalars['String']>
  readonly goToTop: Maybe<Scalars['String']>
  readonly tabTranslation: Maybe<Scalars['String']>
  readonly tabTranscription: Maybe<Scalars['String']>
  readonly tabVocabulary: Maybe<Scalars['String']>
  readonly tabAudio: Maybe<Scalars['String']>
  readonly tabCompleted: Maybe<Scalars['String']>
  readonly continue: Maybe<Scalars['String']>
  readonly copyright: Maybe<Scalars['String']>
  readonly quizTitle: Maybe<Scalars['String']>
  readonly progress: Maybe<Scalars['String']>
  readonly next: Maybe<Scalars['String']>
  readonly iCompletedTheChapter: Maybe<Scalars['String']>
  readonly chapter: Maybe<Scalars['String']>
  readonly course: Maybe<Scalars['String']>
  readonly goToTracks: Maybe<Scalars['String']>
  readonly congratulations: Maybe<Scalars['String']>
  readonly congratulationsCTA: Maybe<Scalars['String']>
  readonly takeExam: Maybe<Scalars['String']>
  readonly aboutUsPageTitle: Maybe<Scalars['String']>
  readonly aboutUsPageContent: Maybe<Scalars['String']>
  readonly listenAudio: Maybe<Scalars['String']>
  readonly downloadAudio: Maybe<Scalars['String']>
  readonly here: Maybe<Scalars['String']>
  readonly clickHere: Maybe<Scalars['String']>
  readonly trackLevel: Maybe<Scalars['String']>
  readonly nextHelp: Maybe<Scalars['String']>
  readonly chapterAudio: Maybe<Scalars['String']>
  readonly siteContentPresentation: Maybe<Scalars['String']>
  readonly homeContentTitle: Maybe<Scalars['String']>
  readonly chooseAnswer: Maybe<Scalars['String']>
  readonly locale: Maybe<Scalars['String']>
}

export type TTranslationsJsonConnection = {
  __typename?: 'TranslationsJsonConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TTranslationsJsonEdge>
  readonly nodes: ReadonlyArray<TTranslationsJson>
  readonly pageInfo: TPageInfo
  readonly distinct: ReadonlyArray<Scalars['String']>
  readonly group: ReadonlyArray<TTranslationsJsonGroupConnection>
}

export type TTranslationsJsonConnectionDistinctArgs = {
  field: TTranslationsJsonFieldsEnum
}

export type TTranslationsJsonConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>
  limit: Maybe<Scalars['Int']>
  field: TTranslationsJsonFieldsEnum
}

export type TTranslationsJsonEdge = {
  __typename?: 'TranslationsJsonEdge'
  readonly next: Maybe<TTranslationsJson>
  readonly node: TTranslationsJson
  readonly previous: Maybe<TTranslationsJson>
}

export enum TTranslationsJsonFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  HomeTitle = 'homeTitle',
  HomeDescription = 'homeDescription',
  HomeEmailTitle = 'homeEmailTitle',
  HomeEmailPlaceHolder = 'homeEmailPlaceHolder',
  HomeStartTrack = 'homeStartTrack',
  SiteName = 'siteName',
  SiteSlogan = 'siteSlogan',
  FooterSocialTitle = 'footerSocialTitle',
  HomeFooterCta = 'homeFooterCTA',
  Start = 'start',
  Soon = 'soon',
  AboutUs = 'aboutUs',
  Tracks = 'tracks',
  Courses = 'courses',
  Connect = 'connect',
  Feature1Title = 'feature1Title',
  Feature2Title = 'feature2Title',
  Feature3Title = 'feature3Title',
  Feature1Text = 'feature1Text',
  Feature2Text = 'feature2Text',
  Feature3Text = 'feature3Text',
  Enroll = 'enroll',
  FeaturesTitle = 'featuresTitle',
  FeaturedCoursesTitle = 'featuredCoursesTitle',
  UrlTelegram = 'urlTelegram',
  UrlTwitter = 'urlTwitter',
  UrlFacebook = 'urlFacebook',
  UrlYoutube = 'urlYoutube',
  StartCourse = 'startCourse',
  Level1 = 'level1',
  Level2 = 'level2',
  Level3 = 'level3',
  Level = 'level',
  Track = 'track',
  LocalePath = 'localePath',
  LocaleName = 'localeName',
  ToOtherLanguageCta = 'toOtherLanguageCTA',
  TracksPageTitle = 'tracksPageTitle',
  TracksPageDescription = 'tracksPageDescription',
  Focus = 'focus',
  NextCourse = 'nextCourse',
  TakeQuiz = 'takeQuiz',
  Quiz = 'quiz',
  QuizTrue = 'quizTrue',
  QuizFalse = 'quizFalse',
  FillintheblankTitle = 'fillintheblankTitle',
  ReadIn = 'readIn',
  Difficulty1 = 'difficulty1',
  Difficulty2 = 'difficulty2',
  QuizCta = 'quizCTA',
  NewsletterSuccess = 'newsletterSuccess',
  NewsletterSubscribed = 'newsletterSubscribed',
  NewsletterEmailNotValid = 'newsletterEmailNotValid',
  FillInTheBlankTitle = 'fillInTheBlankTitle',
  ChooseACategoryTitle = 'chooseACategoryTitle',
  AssessmentPerfect = 'assessmentPerfect',
  AssessmentVeryGood = 'assessmentVeryGood',
  AssessmentGood = 'assessmentGood',
  YourScore = 'yourScore',
  YourLastScore = 'yourLastScore',
  Grade = 'grade',
  Average = 'average',
  AssessmentFail = 'assessmentFail',
  NextTrack = 'nextTrack',
  BackToCourse = 'backToCourse',
  RestartQuizs = 'restartQuizs',
  SeeYourScore = 'seeYourScore',
  GoToTop = 'goToTop',
  TabTranslation = 'tabTranslation',
  TabTranscription = 'tabTranscription',
  TabVocabulary = 'tabVocabulary',
  TabAudio = 'tabAudio',
  TabCompleted = 'tabCompleted',
  Continue = 'continue',
  Copyright = 'copyright',
  QuizTitle = 'quizTitle',
  Progress = 'progress',
  Next = 'next',
  ICompletedTheChapter = 'iCompletedTheChapter',
  Chapter = 'chapter',
  Course = 'course',
  GoToTracks = 'goToTracks',
  Congratulations = 'congratulations',
  CongratulationsCta = 'congratulationsCTA',
  TakeExam = 'takeExam',
  AboutUsPageTitle = 'aboutUsPageTitle',
  AboutUsPageContent = 'aboutUsPageContent',
  ListenAudio = 'listenAudio',
  DownloadAudio = 'downloadAudio',
  Here = 'here',
  ClickHere = 'clickHere',
  TrackLevel = 'trackLevel',
  NextHelp = 'nextHelp',
  ChapterAudio = 'chapterAudio',
  SiteContentPresentation = 'siteContentPresentation',
  HomeContentTitle = 'homeContentTitle',
  ChooseAnswer = 'chooseAnswer',
  Locale = 'locale',
}

export type TTranslationsJsonFilterInput = {
  readonly id: Maybe<TStringQueryOperatorInput>
  readonly parent: Maybe<TNodeFilterInput>
  readonly children: Maybe<TNodeFilterListInput>
  readonly internal: Maybe<TInternalFilterInput>
  readonly homeTitle: Maybe<TStringQueryOperatorInput>
  readonly homeDescription: Maybe<TStringQueryOperatorInput>
  readonly homeEmailTitle: Maybe<TStringQueryOperatorInput>
  readonly homeEmailPlaceHolder: Maybe<TStringQueryOperatorInput>
  readonly homeStartTrack: Maybe<TStringQueryOperatorInput>
  readonly siteName: Maybe<TStringQueryOperatorInput>
  readonly siteSlogan: Maybe<TStringQueryOperatorInput>
  readonly footerSocialTitle: Maybe<TStringQueryOperatorInput>
  readonly homeFooterCTA: Maybe<TStringQueryOperatorInput>
  readonly start: Maybe<TStringQueryOperatorInput>
  readonly soon: Maybe<TStringQueryOperatorInput>
  readonly aboutUs: Maybe<TStringQueryOperatorInput>
  readonly tracks: Maybe<TStringQueryOperatorInput>
  readonly courses: Maybe<TStringQueryOperatorInput>
  readonly connect: Maybe<TStringQueryOperatorInput>
  readonly feature1Title: Maybe<TStringQueryOperatorInput>
  readonly feature2Title: Maybe<TStringQueryOperatorInput>
  readonly feature3Title: Maybe<TStringQueryOperatorInput>
  readonly feature1Text: Maybe<TStringQueryOperatorInput>
  readonly feature2Text: Maybe<TStringQueryOperatorInput>
  readonly feature3Text: Maybe<TStringQueryOperatorInput>
  readonly enroll: Maybe<TStringQueryOperatorInput>
  readonly featuresTitle: Maybe<TStringQueryOperatorInput>
  readonly featuredCoursesTitle: Maybe<TStringQueryOperatorInput>
  readonly urlTelegram: Maybe<TStringQueryOperatorInput>
  readonly urlTwitter: Maybe<TStringQueryOperatorInput>
  readonly urlFacebook: Maybe<TStringQueryOperatorInput>
  readonly urlYoutube: Maybe<TStringQueryOperatorInput>
  readonly startCourse: Maybe<TStringQueryOperatorInput>
  readonly level1: Maybe<TStringQueryOperatorInput>
  readonly level2: Maybe<TStringQueryOperatorInput>
  readonly level3: Maybe<TStringQueryOperatorInput>
  readonly level: Maybe<TStringQueryOperatorInput>
  readonly track: Maybe<TStringQueryOperatorInput>
  readonly localePath: Maybe<TStringQueryOperatorInput>
  readonly localeName: Maybe<TStringQueryOperatorInput>
  readonly toOtherLanguageCTA: Maybe<TStringQueryOperatorInput>
  readonly tracksPageTitle: Maybe<TStringQueryOperatorInput>
  readonly tracksPageDescription: Maybe<TStringQueryOperatorInput>
  readonly focus: Maybe<TStringQueryOperatorInput>
  readonly nextCourse: Maybe<TStringQueryOperatorInput>
  readonly takeQuiz: Maybe<TStringQueryOperatorInput>
  readonly quiz: Maybe<TStringQueryOperatorInput>
  readonly quizTrue: Maybe<TStringQueryOperatorInput>
  readonly quizFalse: Maybe<TStringQueryOperatorInput>
  readonly fillintheblankTitle: Maybe<TStringQueryOperatorInput>
  readonly readIn: Maybe<TStringQueryOperatorInput>
  readonly difficulty1: Maybe<TStringQueryOperatorInput>
  readonly difficulty2: Maybe<TStringQueryOperatorInput>
  readonly quizCTA: Maybe<TStringQueryOperatorInput>
  readonly newsletterSuccess: Maybe<TStringQueryOperatorInput>
  readonly newsletterSubscribed: Maybe<TStringQueryOperatorInput>
  readonly newsletterEmailNotValid: Maybe<TStringQueryOperatorInput>
  readonly fillInTheBlankTitle: Maybe<TStringQueryOperatorInput>
  readonly chooseACategoryTitle: Maybe<TStringQueryOperatorInput>
  readonly assessmentPerfect: Maybe<TStringQueryOperatorInput>
  readonly assessmentVeryGood: Maybe<TStringQueryOperatorInput>
  readonly assessmentGood: Maybe<TStringQueryOperatorInput>
  readonly yourScore: Maybe<TStringQueryOperatorInput>
  readonly yourLastScore: Maybe<TStringQueryOperatorInput>
  readonly grade: Maybe<TStringQueryOperatorInput>
  readonly average: Maybe<TStringQueryOperatorInput>
  readonly assessmentFail: Maybe<TStringQueryOperatorInput>
  readonly nextTrack: Maybe<TStringQueryOperatorInput>
  readonly backToCourse: Maybe<TStringQueryOperatorInput>
  readonly restartQuizs: Maybe<TStringQueryOperatorInput>
  readonly seeYourScore: Maybe<TStringQueryOperatorInput>
  readonly goToTop: Maybe<TStringQueryOperatorInput>
  readonly tabTranslation: Maybe<TStringQueryOperatorInput>
  readonly tabTranscription: Maybe<TStringQueryOperatorInput>
  readonly tabVocabulary: Maybe<TStringQueryOperatorInput>
  readonly tabAudio: Maybe<TStringQueryOperatorInput>
  readonly tabCompleted: Maybe<TStringQueryOperatorInput>
  readonly continue: Maybe<TStringQueryOperatorInput>
  readonly copyright: Maybe<TStringQueryOperatorInput>
  readonly quizTitle: Maybe<TStringQueryOperatorInput>
  readonly progress: Maybe<TStringQueryOperatorInput>
  readonly next: Maybe<TStringQueryOperatorInput>
  readonly iCompletedTheChapter: Maybe<TStringQueryOperatorInput>
  readonly chapter: Maybe<TStringQueryOperatorInput>
  readonly course: Maybe<TStringQueryOperatorInput>
  readonly goToTracks: Maybe<TStringQueryOperatorInput>
  readonly congratulations: Maybe<TStringQueryOperatorInput>
  readonly congratulationsCTA: Maybe<TStringQueryOperatorInput>
  readonly takeExam: Maybe<TStringQueryOperatorInput>
  readonly aboutUsPageTitle: Maybe<TStringQueryOperatorInput>
  readonly aboutUsPageContent: Maybe<TStringQueryOperatorInput>
  readonly listenAudio: Maybe<TStringQueryOperatorInput>
  readonly downloadAudio: Maybe<TStringQueryOperatorInput>
  readonly here: Maybe<TStringQueryOperatorInput>
  readonly clickHere: Maybe<TStringQueryOperatorInput>
  readonly trackLevel: Maybe<TStringQueryOperatorInput>
  readonly nextHelp: Maybe<TStringQueryOperatorInput>
  readonly chapterAudio: Maybe<TStringQueryOperatorInput>
  readonly siteContentPresentation: Maybe<TStringQueryOperatorInput>
  readonly homeContentTitle: Maybe<TStringQueryOperatorInput>
  readonly chooseAnswer: Maybe<TStringQueryOperatorInput>
  readonly locale: Maybe<TStringQueryOperatorInput>
}

export type TTranslationsJsonGroupConnection = {
  __typename?: 'TranslationsJsonGroupConnection'
  readonly totalCount: Scalars['Int']
  readonly edges: ReadonlyArray<TTranslationsJsonEdge>
  readonly nodes: ReadonlyArray<TTranslationsJson>
  readonly pageInfo: TPageInfo
  readonly field: Scalars['String']
  readonly fieldValue: Maybe<Scalars['String']>
}

export type TTranslationsJsonSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<TTranslationsJsonFieldsEnum>>>
  readonly order: Maybe<ReadonlyArray<Maybe<TSortOrderEnum>>>
}
export type TAboutUsQueryQueryVariables = {
  locale: Scalars['String']
}

export type TAboutUsQueryQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly tracks: Maybe<
        {readonly __typename?: 'api_TrackNodeConnection'} & {
          readonly edges: ReadonlyArray<
            Maybe<
              {readonly __typename?: 'api_TrackNodeEdge'} & {
                readonly node: Maybe<
                  {readonly __typename?: 'api_TrackNode'} & Pick<
                    TApi_TrackNode,
                    'id' | 'slug'
                  >
                >
              }
            >
          >
        }
      >
    }
  >
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'aboutUs'
      | 'aboutUsPageTitle'
      | 'aboutUsPageContent'
      | 'connect'
      | 'courses'
      | 'copyright'
      | 'footerSocialTitle'
      | 'homeFooterCTA'
      | 'homeStartTrack'
      | 'locale'
      | 'localeName'
      | 'localePath'
      | 'siteName'
      | 'siteSlogan'
      | 'tracks'
      | 'urlFacebook'
      | 'urlTelegram'
      | 'urlTwitter'
      | 'urlYoutube'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath'
    >
  >
}

export type TChapterQueryQueryVariables = {
  locale: Scalars['String']
  id: Scalars['ID']
}

export type TChapterQueryQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly chapter: Maybe<
        {readonly __typename?: 'api_ChapterNode'} & Pick<
          TApi_ChapterNode,
          'id' | 'slug' | 'audio'
        > & {
            readonly translations: Maybe<
              {readonly __typename?: 'api_ChapterTranslationNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_ChapterTranslationNodeEdge'} & {
                      readonly node: Maybe<
                        {
                          readonly __typename?: 'api_ChapterTranslationNode'
                        } & Pick<
                          TApi_ChapterTranslationNode,
                          | 'id'
                          | 'title'
                          | 'transcription'
                          | 'vocabulary'
                          | 'locale'
                          | 'video'
                        >
                      >
                    }
                  >
                >
              }
            >
            readonly course: Maybe<
              {readonly __typename?: 'api_CourseNode'} & Pick<
                TApi_CourseNode,
                'id' | 'slug'
              > & {
                  readonly track: Maybe<
                    {readonly __typename?: 'api_TrackNode'} & Pick<
                      TApi_TrackNode,
                      'id' | 'slug'
                    > & {
                        readonly translations: Maybe<
                          {
                            readonly __typename?: 'api_TrackTranslationNodeConnection'
                          } & {
                            readonly edges: ReadonlyArray<
                              Maybe<
                                {
                                  readonly __typename?: 'api_TrackTranslationNodeEdge'
                                } & {
                                  readonly node: Maybe<
                                    {
                                      readonly __typename?: 'api_TrackTranslationNode'
                                    } & Pick<TApi_TrackTranslationNode, 'title'>
                                  >
                                }
                              >
                            >
                          }
                        >
                        readonly courses: Maybe<
                          {readonly __typename?: 'api_CourseNodeConnection'} & {
                            readonly edges: ReadonlyArray<
                              Maybe<
                                {readonly __typename?: 'api_CourseNodeEdge'} & {
                                  readonly node: Maybe<
                                    {
                                      readonly __typename?: 'api_CourseNode'
                                    } & Pick<
                                      TApi_CourseNode,
                                      'id' | 'slug' | 'quizDifficulties'
                                    > & {
                                        readonly translations: Maybe<
                                          {
                                            readonly __typename?: 'api_CourseTranslationNodeConnection'
                                          } & {
                                            readonly edges: ReadonlyArray<
                                              Maybe<
                                                {
                                                  readonly __typename?: 'api_CourseTranslationNodeEdge'
                                                } & {
                                                  readonly node: Maybe<
                                                    {
                                                      readonly __typename?: 'api_CourseTranslationNode'
                                                    } & Pick<
                                                      TApi_CourseTranslationNode,
                                                      'locale' | 'title'
                                                    >
                                                  >
                                                }
                                              >
                                            >
                                          }
                                        >
                                        readonly chapters: Maybe<
                                          {
                                            readonly __typename?: 'api_ChapterNodeConnection'
                                          } & {
                                            readonly edges: ReadonlyArray<
                                              Maybe<
                                                {
                                                  readonly __typename?: 'api_ChapterNodeEdge'
                                                } & {
                                                  readonly node: Maybe<
                                                    {
                                                      readonly __typename?: 'api_ChapterNode'
                                                    } & Pick<
                                                      TApi_ChapterNode,
                                                      'id' | 'slug'
                                                    > & {
                                                        readonly translations: Maybe<
                                                          {
                                                            readonly __typename?: 'api_ChapterTranslationNodeConnection'
                                                          } & {
                                                            readonly edges: ReadonlyArray<
                                                              Maybe<
                                                                {
                                                                  readonly __typename?: 'api_ChapterTranslationNodeEdge'
                                                                } & {
                                                                  readonly node: Maybe<
                                                                    {
                                                                      readonly __typename?: 'api_ChapterTranslationNode'
                                                                    } & Pick<
                                                                      TApi_ChapterTranslationNode,
                                                                      'title'
                                                                    >
                                                                  >
                                                                }
                                                              >
                                                            >
                                                          }
                                                        >
                                                      }
                                                  >
                                                }
                                              >
                                            >
                                          }
                                        >
                                      }
                                  >
                                }
                              >
                            >
                          }
                        >
                      }
                  >
                }
            >
          }
      >
    }
  >
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'chapter'
      | 'clickHere'
      | 'chapterAudio'
      | 'congratulations'
      | 'congratulationsCTA'
      | 'course'
      | 'difficulty1'
      | 'difficulty2'
      | 'downloadAudio'
      | 'focus'
      | 'goToTracks'
      | 'iCompletedTheChapter'
      | 'listenAudio'
      | 'locale'
      | 'localeName'
      | 'localePath'
      | 'next'
      | 'nextCourse'
      | 'nextHelp'
      | 'readIn'
      | 'quiz'
      | 'tabAudio'
      | 'tabCompleted'
      | 'tabTranscription'
      | 'tabTranslation'
      | 'tabVocabulary'
      | 'takeQuiz'
      | 'track'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath' | 'readIn'
    >
  >
}

export type TDawaHomeQueryVariables = {
  trackId: Scalars['ID']
  locale: Scalars['String']
}

export type TDawaHomeQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly track: Maybe<
        {readonly __typename?: 'api_TrackNode'} & Pick<
          TApi_TrackNode,
          'id' | 'order' | 'slug' | 'soon'
        > & {
            readonly translations: Maybe<
              {readonly __typename?: 'api_TrackTranslationNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_TrackTranslationNodeEdge'} & {
                      readonly node: Maybe<
                        {
                          readonly __typename?: 'api_TrackTranslationNode'
                        } & Pick<
                          TApi_TrackTranslationNode,
                          'title' | 'description'
                        >
                      >
                    }
                  >
                >
              }
            >
            readonly courseSet: Maybe<
              {readonly __typename?: 'api_CourseNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_CourseNodeEdge'} & {
                      readonly node: Maybe<
                        {readonly __typename?: 'api_CourseNode'} & Pick<
                          TApi_CourseNode,
                          'id' | 'slug' | 'quizDifficulties'
                        > & {
                            readonly translations: Maybe<
                              {
                                readonly __typename?: 'api_CourseTranslationNodeConnection'
                              } & {
                                readonly edges: ReadonlyArray<
                                  Maybe<
                                    {
                                      readonly __typename?: 'api_CourseTranslationNodeEdge'
                                    } & {
                                      readonly node: Maybe<
                                        {
                                          readonly __typename?: 'api_CourseTranslationNode'
                                        } & Pick<
                                          TApi_CourseTranslationNode,
                                          'id' | 'title' | 'description'
                                        >
                                      >
                                    }
                                  >
                                >
                              }
                            >
                          }
                      >
                    }
                  >
                >
              }
            >
          }
      >
    }
  >
}

export type TDawaQuizQueryQueryVariables = {
  locale: Scalars['String']
  id: Scalars['ID']
}

export type TDawaQuizQueryQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly course: Maybe<
        {readonly __typename?: 'api_CourseNode'} & Pick<
          TApi_CourseNode,
          'id' | 'slug'
        > & {
            readonly translations: Maybe<
              {readonly __typename?: 'api_CourseTranslationNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_CourseTranslationNodeEdge'} & {
                      readonly node: Maybe<
                        {
                          readonly __typename?: 'api_CourseTranslationNode'
                        } & Pick<TApi_CourseTranslationNode, 'id' | 'title'>
                      >
                    }
                  >
                >
              }
            >
            readonly quizs: Maybe<
              {readonly __typename?: 'api_QuizNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_QuizNodeEdge'} & {
                      readonly node: Maybe<
                        {readonly __typename?: 'api_QuizNode'} & Pick<
                          TApi_QuizNode,
                          'id' | 'difficulty' | 'type'
                        > & {
                            readonly translations: Maybe<
                              {
                                readonly __typename?: 'api_QuizTranslationNodeConnection'
                              } & {
                                readonly edges: ReadonlyArray<
                                  Maybe<
                                    {
                                      readonly __typename?: 'api_QuizTranslationNodeEdge'
                                    } & {
                                      readonly node: Maybe<
                                        {
                                          readonly __typename?: 'api_QuizTranslationNode'
                                        } & Pick<
                                          TApi_QuizTranslationNode,
                                          'id' | 'data'
                                        >
                                      >
                                    }
                                  >
                                >
                              }
                            >
                          }
                      >
                    }
                  >
                >
              }
            >
            readonly track: Maybe<
              {readonly __typename?: 'api_TrackNode'} & Pick<
                TApi_TrackNode,
                'id' | 'slug'
              > & {
                  readonly translations: Maybe<
                    {
                      readonly __typename?: 'api_TrackTranslationNodeConnection'
                    } & {
                      readonly edges: ReadonlyArray<
                        Maybe<
                          {
                            readonly __typename?: 'api_TrackTranslationNodeEdge'
                          } & {
                            readonly node: Maybe<
                              {
                                readonly __typename?: 'api_TrackTranslationNode'
                              } & Pick<TApi_TrackTranslationNode, 'title'>
                            >
                          }
                        >
                      >
                    }
                  >
                  readonly courses: Maybe<
                    {readonly __typename?: 'api_CourseNodeConnection'} & {
                      readonly edges: ReadonlyArray<
                        Maybe<
                          {readonly __typename?: 'api_CourseNodeEdge'} & {
                            readonly node: Maybe<
                              {readonly __typename?: 'api_CourseNode'} & Pick<
                                TApi_CourseNode,
                                'id' | 'slug' | 'quizDifficulties'
                              > & {
                                  readonly translations: Maybe<
                                    {
                                      readonly __typename?: 'api_CourseTranslationNodeConnection'
                                    } & {
                                      readonly edges: ReadonlyArray<
                                        Maybe<
                                          {
                                            readonly __typename?: 'api_CourseTranslationNodeEdge'
                                          } & {
                                            readonly node: Maybe<
                                              {
                                                readonly __typename?: 'api_CourseTranslationNode'
                                              } & Pick<
                                                TApi_CourseTranslationNode,
                                                'locale' | 'title'
                                              >
                                            >
                                          }
                                        >
                                      >
                                    }
                                  >
                                }
                            >
                          }
                        >
                      >
                    }
                  >
                }
            >
          }
      >
    }
  >
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'assessmentPerfect'
      | 'assessmentVeryGood'
      | 'assessmentGood'
      | 'assessmentFail'
      | 'average'
      | 'backToCourse'
      | 'chooseACategoryTitle'
      | 'chooseAnswer'
      | 'congratulations'
      | 'congratulationsCTA'
      | 'continue'
      | 'difficulty1'
      | 'difficulty2'
      | 'fillInTheBlankTitle'
      | 'goToTop'
      | 'goToTracks'
      | 'grade'
      | 'level'
      | 'locale'
      | 'localePath'
      | 'nextCourse'
      | 'nextTrack'
      | 'progress'
      | 'quiz'
      | 'quizTitle'
      | 'quizTrue'
      | 'quizFalse'
      | 'restartQuizs'
      | 'seeYourScore'
      | 'start'
      | 'takeExam'
      | 'yourLastScore'
      | 'yourScore'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath'
    >
  >
}

export type THomeQueryQueryVariables = {
  locale: Scalars['String']
}

export type THomeQueryQuery = {readonly __typename?: 'Query'} & {
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'aboutUs'
      | 'connect'
      | 'copyright'
      | 'courses'
      | 'enroll'
      | 'feature1Text'
      | 'feature2Text'
      | 'feature3Text'
      | 'feature1Title'
      | 'feature2Title'
      | 'feature3Title'
      | 'featuredCoursesTitle'
      | 'featuresTitle'
      | 'footerSocialTitle'
      | 'homeTitle'
      | 'homeDescription'
      | 'homeEmailTitle'
      | 'homeEmailPlaceHolder'
      | 'homeFooterCTA'
      | 'homeStartTrack'
      | 'locale'
      | 'localeName'
      | 'localePath'
      | 'newsletterEmailNotValid'
      | 'newsletterSubscribed'
      | 'newsletterSuccess'
      | 'siteContentPresentation'
      | 'homeContentTitle'
      | 'siteName'
      | 'siteSlogan'
      | 'soon'
      | 'start'
      | 'tracks'
      | 'urlFacebook'
      | 'urlTelegram'
      | 'urlTwitter'
      | 'urlYoutube'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'locale' | 'localeName' | 'localePath'
    >
  >
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly tracks: Maybe<
        {readonly __typename?: 'api_TrackNodeConnection'} & {
          readonly edges: ReadonlyArray<
            Maybe<
              {readonly __typename?: 'api_TrackNodeEdge'} & {
                readonly node: Maybe<
                  {readonly __typename?: 'api_TrackNode'} & Pick<
                    TApi_TrackNode,
                    'id' | 'order' | 'slug' | 'soon'
                  > & {
                      readonly translations: Maybe<
                        {
                          readonly __typename?: 'api_TrackTranslationNodeConnection'
                        } & {
                          readonly edges: ReadonlyArray<
                            Maybe<
                              {
                                readonly __typename?: 'api_TrackTranslationNodeEdge'
                              } & {
                                readonly node: Maybe<
                                  {
                                    readonly __typename?: 'api_TrackTranslationNode'
                                  } & Pick<
                                    TApi_TrackTranslationNode,
                                    'title' | 'description'
                                  >
                                >
                              }
                            >
                          >
                        }
                      >
                    }
                >
              }
            >
          >
        }
      >
    }
  >
}

export type TQuizQueryQueryVariables = {
  locale: Scalars['String']
  id: Scalars['ID']
}

export type TQuizQueryQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly course: Maybe<
        {readonly __typename?: 'api_CourseNode'} & Pick<
          TApi_CourseNode,
          'id' | 'slug'
        > & {
            readonly translations: Maybe<
              {readonly __typename?: 'api_CourseTranslationNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_CourseTranslationNodeEdge'} & {
                      readonly node: Maybe<
                        {
                          readonly __typename?: 'api_CourseTranslationNode'
                        } & Pick<TApi_CourseTranslationNode, 'id' | 'title'>
                      >
                    }
                  >
                >
              }
            >
            readonly quizs: Maybe<
              {readonly __typename?: 'api_QuizNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_QuizNodeEdge'} & {
                      readonly node: Maybe<
                        {readonly __typename?: 'api_QuizNode'} & Pick<
                          TApi_QuizNode,
                          'id' | 'difficulty' | 'type'
                        > & {
                            readonly translations: Maybe<
                              {
                                readonly __typename?: 'api_QuizTranslationNodeConnection'
                              } & {
                                readonly edges: ReadonlyArray<
                                  Maybe<
                                    {
                                      readonly __typename?: 'api_QuizTranslationNodeEdge'
                                    } & {
                                      readonly node: Maybe<
                                        {
                                          readonly __typename?: 'api_QuizTranslationNode'
                                        } & Pick<
                                          TApi_QuizTranslationNode,
                                          'id' | 'data'
                                        >
                                      >
                                    }
                                  >
                                >
                              }
                            >
                          }
                      >
                    }
                  >
                >
              }
            >
            readonly track: Maybe<
              {readonly __typename?: 'api_TrackNode'} & Pick<
                TApi_TrackNode,
                'id' | 'slug'
              > & {
                  readonly translations: Maybe<
                    {
                      readonly __typename?: 'api_TrackTranslationNodeConnection'
                    } & {
                      readonly edges: ReadonlyArray<
                        Maybe<
                          {
                            readonly __typename?: 'api_TrackTranslationNodeEdge'
                          } & {
                            readonly node: Maybe<
                              {
                                readonly __typename?: 'api_TrackTranslationNode'
                              } & Pick<TApi_TrackTranslationNode, 'title'>
                            >
                          }
                        >
                      >
                    }
                  >
                  readonly courses: Maybe<
                    {readonly __typename?: 'api_CourseNodeConnection'} & {
                      readonly edges: ReadonlyArray<
                        Maybe<
                          {readonly __typename?: 'api_CourseNodeEdge'} & {
                            readonly node: Maybe<
                              {readonly __typename?: 'api_CourseNode'} & Pick<
                                TApi_CourseNode,
                                'id' | 'slug' | 'quizDifficulties'
                              > & {
                                  readonly translations: Maybe<
                                    {
                                      readonly __typename?: 'api_CourseTranslationNodeConnection'
                                    } & {
                                      readonly edges: ReadonlyArray<
                                        Maybe<
                                          {
                                            readonly __typename?: 'api_CourseTranslationNodeEdge'
                                          } & {
                                            readonly node: Maybe<
                                              {
                                                readonly __typename?: 'api_CourseTranslationNode'
                                              } & Pick<
                                                TApi_CourseTranslationNode,
                                                'locale' | 'title'
                                              >
                                            >
                                          }
                                        >
                                      >
                                    }
                                  >
                                  readonly chapters: Maybe<
                                    {
                                      readonly __typename?: 'api_ChapterNodeConnection'
                                    } & {
                                      readonly edges: ReadonlyArray<
                                        Maybe<
                                          {
                                            readonly __typename?: 'api_ChapterNodeEdge'
                                          } & {
                                            readonly node: Maybe<
                                              {
                                                readonly __typename?: 'api_ChapterNode'
                                              } & Pick<
                                                TApi_ChapterNode,
                                                'id' | 'slug'
                                              > & {
                                                  readonly translations: Maybe<
                                                    {
                                                      readonly __typename?: 'api_ChapterTranslationNodeConnection'
                                                    } & {
                                                      readonly edges: ReadonlyArray<
                                                        Maybe<
                                                          {
                                                            readonly __typename?: 'api_ChapterTranslationNodeEdge'
                                                          } & {
                                                            readonly node: Maybe<
                                                              {
                                                                readonly __typename?: 'api_ChapterTranslationNode'
                                                              } & Pick<
                                                                TApi_ChapterTranslationNode,
                                                                'title'
                                                              >
                                                            >
                                                          }
                                                        >
                                                      >
                                                    }
                                                  >
                                                }
                                            >
                                          }
                                        >
                                      >
                                    }
                                  >
                                }
                            >
                          }
                        >
                      >
                    }
                  >
                }
            >
          }
      >
    }
  >
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'assessmentPerfect'
      | 'assessmentVeryGood'
      | 'assessmentGood'
      | 'assessmentFail'
      | 'average'
      | 'backToCourse'
      | 'chooseACategoryTitle'
      | 'chooseAnswer'
      | 'congratulations'
      | 'congratulationsCTA'
      | 'continue'
      | 'difficulty1'
      | 'difficulty2'
      | 'fillInTheBlankTitle'
      | 'goToTop'
      | 'goToTracks'
      | 'grade'
      | 'level'
      | 'locale'
      | 'localePath'
      | 'nextCourse'
      | 'nextTrack'
      | 'progress'
      | 'quiz'
      | 'quizTitle'
      | 'quizTrue'
      | 'quizFalse'
      | 'restartQuizs'
      | 'seeYourScore'
      | 'start'
      | 'takeExam'
      | 'yourLastScore'
      | 'yourScore'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath'
    >
  >
}

export type TTrackQueryQueryVariables = {
  locale: Scalars['String']
  id: Scalars['ID']
}

export type TTrackQueryQuery = {readonly __typename?: 'Query'} & {
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly track: Maybe<
        {readonly __typename?: 'api_TrackNode'} & Pick<
          TApi_TrackNode,
          'id' | 'slug'
        > & {
            readonly translations: Maybe<
              {readonly __typename?: 'api_TrackTranslationNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_TrackTranslationNodeEdge'} & {
                      readonly node: Maybe<
                        {
                          readonly __typename?: 'api_TrackTranslationNode'
                        } & Pick<TApi_TrackTranslationNode, 'title'>
                      >
                    }
                  >
                >
              }
            >
            readonly courses: Maybe<
              {readonly __typename?: 'api_CourseNodeConnection'} & {
                readonly edges: ReadonlyArray<
                  Maybe<
                    {readonly __typename?: 'api_CourseNodeEdge'} & {
                      readonly node: Maybe<
                        {readonly __typename?: 'api_CourseNode'} & Pick<
                          TApi_CourseNode,
                          'id' | 'level' | 'slug' | 'quizDifficulties'
                        > & {
                            readonly translations: Maybe<
                              {
                                readonly __typename?: 'api_CourseTranslationNodeConnection'
                              } & {
                                readonly edges: ReadonlyArray<
                                  Maybe<
                                    {
                                      readonly __typename?: 'api_CourseTranslationNodeEdge'
                                    } & {
                                      readonly node: Maybe<
                                        {
                                          readonly __typename?: 'api_CourseTranslationNode'
                                        } & Pick<
                                          TApi_CourseTranslationNode,
                                          'title' | 'description'
                                        >
                                      >
                                    }
                                  >
                                >
                              }
                            >
                            readonly chapters: Maybe<
                              {
                                readonly __typename?: 'api_ChapterNodeConnection'
                              } & {
                                readonly edges: ReadonlyArray<
                                  Maybe<
                                    {
                                      readonly __typename?: 'api_ChapterNodeEdge'
                                    } & {
                                      readonly node: Maybe<
                                        {
                                          readonly __typename?: 'api_ChapterNode'
                                        } & Pick<
                                          TApi_ChapterNode,
                                          'duration' | 'id' | 'slug'
                                        > & {
                                            readonly translations: Maybe<
                                              {
                                                readonly __typename?: 'api_ChapterTranslationNodeConnection'
                                              } & {
                                                readonly edges: ReadonlyArray<
                                                  Maybe<
                                                    {
                                                      readonly __typename?: 'api_ChapterTranslationNodeEdge'
                                                    } & {
                                                      readonly node: Maybe<
                                                        {
                                                          readonly __typename?: 'api_ChapterTranslationNode'
                                                        } & Pick<
                                                          TApi_ChapterTranslationNode,
                                                          'locale'
                                                        >
                                                      >
                                                    }
                                                  >
                                                >
                                              }
                                            >
                                          }
                                      >
                                    }
                                  >
                                >
                              }
                            >
                            readonly topic: Maybe<
                              {readonly __typename?: 'api_TopicNode'} & Pick<
                                TApi_TopicNode,
                                'id' | 'color'
                              > & {
                                  readonly translations: Maybe<
                                    {
                                      readonly __typename?: 'api_TopicTranslationNodeConnection'
                                    } & {
                                      readonly edges: ReadonlyArray<
                                        Maybe<
                                          {
                                            readonly __typename?: 'api_TopicTranslationNodeEdge'
                                          } & {
                                            readonly node: Maybe<
                                              {
                                                readonly __typename?: 'api_TopicTranslationNode'
                                              } & Pick<
                                                TApi_TopicTranslationNode,
                                                'title'
                                              >
                                            >
                                          }
                                        >
                                      >
                                    }
                                  >
                                }
                            >
                          }
                      >
                    }
                  >
                >
              }
            >
          }
      >
    }
  >
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'connect'
      | 'course'
      | 'level1'
      | 'level2'
      | 'level3'
      | 'locale'
      | 'localePath'
      | 'start'
      | 'startCourse'
      | 'toOtherLanguageCTA'
      | 'track'
      | 'trackLevel'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath'
    >
  >
}

export type TTracksQueryQueryVariables = {
  locale: Scalars['String']
}

export type TTracksQueryQuery = {readonly __typename?: 'Query'} & {
  readonly translations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      | 'aboutUs'
      | 'connect'
      | 'copyright'
      | 'courses'
      | 'footerSocialTitle'
      | 'homeFooterCTA'
      | 'homeStartTrack'
      | 'locale'
      | 'localeName'
      | 'localePath'
      | 'siteName'
      | 'siteSlogan'
      | 'soon'
      | 'tracks'
      | 'tracksPageTitle'
      | 'tracksPageDescription'
      | 'urlFacebook'
      | 'urlTelegram'
      | 'urlTwitter'
      | 'urlYoutube'
    >
  >
  readonly otherLocaleTranslations: Maybe<
    {readonly __typename?: 'TranslationsJson'} & Pick<
      TTranslationsJson,
      'localeName' | 'localePath'
    >
  >
  readonly api: Maybe<
    {readonly __typename?: 'api'} & {
      readonly tracks: Maybe<
        {readonly __typename?: 'api_TrackNodeConnection'} & {
          readonly edges: ReadonlyArray<
            Maybe<
              {readonly __typename?: 'api_TrackNodeEdge'} & {
                readonly node: Maybe<
                  {readonly __typename?: 'api_TrackNode'} & Pick<
                    TApi_TrackNode,
                    'id' | 'slug' | 'soon'
                  > & {
                      readonly translations: Maybe<
                        {
                          readonly __typename?: 'api_TrackTranslationNodeConnection'
                        } & {
                          readonly edges: ReadonlyArray<
                            Maybe<
                              {
                                readonly __typename?: 'api_TrackTranslationNodeEdge'
                              } & {
                                readonly node: Maybe<
                                  {
                                    readonly __typename?: 'api_TrackTranslationNode'
                                  } & Pick<
                                    TApi_TrackTranslationNode,
                                    'title' | 'description'
                                  >
                                >
                              }
                            >
                          >
                        }
                      >
                    }
                >
              }
            >
          >
        }
      >
    }
  >
}
