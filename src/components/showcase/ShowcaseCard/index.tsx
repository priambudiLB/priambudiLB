/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { memo } from "react";

import styles from "./styles.module.css";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale-subtle.css";

import { Tags, TagList, TagType, User, Tag } from "../../../data/users";
import { sortBy } from "../../../utils/jsUtils";

function TagIcon({ label, description, icon }: Tag) {
  return (
    <Tippy content={label}>
      <span className={styles.tagIcon} title={`${label}: ${description}`}>
        {icon}
      </span>
    </Tippy>
  );
}

function ShowcaseCardTagIcons({ tags }: { tags: TagType[] }) {
  const tagObjects = tags
    .map((tag) => ({ tag, ...Tags[tag] }))
    .filter((tagObject) => !!tagObject.icon);

  // Keep same order of icons for all tags
  const tagObjectsSorted = sortBy(tagObjects, (tagObject) =>
    TagList.indexOf(tagObject.tag)
  );

  return (
    <>
      {tagObjectsSorted.map((tagObject, index) => (
        <TagIcon key={index} {...tagObject} />
      ))}
    </>
  );
}

const ShowcaseCard = memo(function ({ user }: { user: User }) {
  return (
    <div key={user.title} className="col col--4 margin-bottom--lg">
      <div className={clsx("card", styles.showcaseCard)}>
        <div className={clsx("card__image", styles.showcaseCardImage)}>
          <Image img={user.preview} alt={user.title} quality={60} />
        </div>
        <div className="card__body">
          <div className="avatar">
            <div className="avatar__intro margin-left--none">
              <div className={styles.titleIconsRow}>
                <div className={styles.titleIconsRowTitle}>
                  <div className="avatar__name">{user.title}</div>
                </div>
                <div className={styles.titleIconsRowIcons}>
                  <ShowcaseCardTagIcons tags={user.tags} />
                </div>
              </div>
              <small className="avatar__subtitle">{user.description}</small>
            </div>
          </div>
        </div>
        {(user.website || user.source) && (
          <div className="card__footer">
            <div className="button-group button-group--block">
              {user.website && (
                <a
                  className="button button--small button--secondary button--block"
                  href={user.website}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Website
                </a>
              )}
              {user.source && (
                <a
                  className="button button--small button--secondary button--block"
                  href={user.source}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default ShowcaseCard;
