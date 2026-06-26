/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VideoItem {
  id: number;
  title: string;
  videoUrl: string;
  posterUrl?: string;
  category: string;
  brandDescription?: string;
  simulation?: string;
  year?: string;
  aspectRatio?: "video" | "square" | "portrait";
}
