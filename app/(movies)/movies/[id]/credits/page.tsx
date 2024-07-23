"use client";

import { useEffect, useState, useRef } from "react";
import getMovieCredits from "@/components/movies/getMovieCredits";
import styles from "@/styles/credits.module.css";

interface Credit {
  id: number;
  profile_path: string;
  name: string;
  original_name: string;
  character: string;
}

interface Params {
  params: {
    id: string;
  };
}

export default function Credits({ params }: Params) {
  const { id } = params;
  const [credits, setCredits] = useState<Credit[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const fetchCredits = async () => {
      const fetchedCredits = await getMovieCredits(id);
      setCredits(fetchedCredits);
    };

    fetchCredits();
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [credits]);

  return (
    <div className={styles.container}>
      <div className={styles.creditList}>
        {credits.map((credit: Credit, index: number) => (
          <div
            key={credit.id}
            className={`${styles.card} ${styles.hidden}`}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <div className={styles.front}>
              <img
                src={credit.profile_path}
                alt={credit.name}
                className={styles.creditImage}
              />
            </div>
            <div className={styles.back}>
              <p>name: {credit.name}</p>
              <p>original_name: {credit.original_name}</p>
              <p>character: {credit.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
