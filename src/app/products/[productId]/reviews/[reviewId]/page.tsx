"use client";
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review");
  }
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {reviewId} Details for Product {productId}
      </h1>
    </>
  );
}
